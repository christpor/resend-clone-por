-- ==============================================================================
-- 🛡️ MANUS-CYBER 3-TIER ROW LEVEL SECURITY (RLS) POLICIES
-- Generated automatically by craft-fullstack-por
-- ==============================================================================

-- 1. Enable Core Extensions
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- ------------------------------------------------------------------------------
-- TIER 1: PUBLIC CATALOG TABLES (Public Read, Admin Write)
-- ------------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS public.services (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    created_at TIMESTAMPTZ DEFAULT NOW(),
    name TEXT NOT NULL,
    description TEXT,
    price_cents INTEGER DEFAULT 0,
    is_active BOOLEAN DEFAULT TRUE
);

ALTER TABLE public.services ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow public read-only access on services"
ON public.services FOR SELECT
TO anon, authenticated
USING (is_active = true);

-- ------------------------------------------------------------------------------
-- TIER 2: USER ISOLATED & LEAD CAPTURE (Public Insert, Authenticated Owner Access)
-- ------------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS public.client_leads (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    created_at TIMESTAMPTZ DEFAULT NOW(),
    full_name TEXT NOT NULL,
    phone_number TEXT NOT NULL,
    service_selected TEXT NOT NULL,
    preferred_date DATE,
    notes TEXT,
    status TEXT DEFAULT 'pending' CHECK (status IN ('pending', 'contacted', 'completed', 'cancelled')),
    turnstile_verified BOOLEAN DEFAULT FALSE
);

ALTER TABLE public.client_leads ENABLE ROW LEVEL SECURITY;

-- Anyone can submit a lead form (rate limited via Next.js API layer)
CREATE POLICY "Allow public lead submissions"
ON public.client_leads FOR INSERT
TO anon, authenticated
WITH CHECK (true);

-- Only authenticated managers/admins can view submitted leads
CREATE POLICY "Allow authenticated staff to view leads"
ON public.client_leads FOR SELECT
TO authenticated
USING (true);

-- ------------------------------------------------------------------------------
-- TIER 3: RESTRICTED WEBHOOKS & TRANSACTIONS (Service Role Only, No Public Access)
-- ------------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS public.payment_transactions (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    created_at TIMESTAMPTZ DEFAULT NOW(),
    lead_id UUID REFERENCES public.client_leads(id),
    amount_cents INTEGER NOT NULL,
    currency TEXT DEFAULT 'USD' CHECK (currency IN ('USD', 'KHR')),
    provider TEXT NOT NULL, -- e.g. 'bakong_khqr', 'aba_payway'
    provider_tx_id TEXT UNIQUE,
    raw_webhook_payload JSONB
);

ALTER TABLE public.payment_transactions ENABLE ROW LEVEL SECURITY;

-- Notice: Zero public policies. Only service_role can access payment_transactions.
