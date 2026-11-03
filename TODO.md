# TODO — resend-pixel-parity-deep-reconstruction
<!-- agent-gate: on | max_loops: 8 -->
Goal: Achieve 1:1 visual parity, real Domaine Display typography, 12 official SVGs, 3D assets, zero 404 routes, and skill hardening
States: [ ] todo · [~] doing · [x] done (harness re-verifies) · [?] research needed · [!] blocked (reason required)

- [x] T0: Recon and asset harvesting script | file: scripts/harvest_resend_assets.py | verify: `python3 /home/christ/resend-clone-por/scripts/harvest_resend_assets.py --check`
- [x] T1: Download official fonts Domaine Display and Commit Mono and wire font-face | file: src/app/globals.css | verify: `grep -q "DomaineDisplay" /home/christ/resend-clone-por/src/app/globals.css`
- [x] T2: Extract and render official Resend logo and 12 customer logo SVGs | file: src/components/brand-logos.tsx | verify: `grep -q "Warner Bros" /home/christ/resend-clone-por/src/components/brand-logos.tsx`
- [x] T3: Rebuild Hero section with 3D cube visual and Domaine serif title | file: src/app/page.tsx | verify: `grep -q "font-serif" /home/christ/resend-clone-por/src/app/page.tsx`
- [x] T4: Build interactive tabbed SDK code showcase with Commit Mono typography | file: src/components/code-showcase.tsx | verify: `grep -q "CommitMono" /home/christ/resend-clone-por/src/components/code-showcase.tsx`
- [x] T5: Build Developer Experience bento cards with interactive test mode and webhooks | file: src/components/dev-experience-bento.tsx | verify: `grep -q "Modular webhooks" /home/christ/resend-clone-por/src/components/dev-experience-bento.tsx`
- [x] T6: Build atmospheric footer with watermark Resend typography and 5-column directory | file: src/components/footer.tsx | verify: `grep -q "2261 Market Street" /home/christ/resend-clone-por/src/components/footer.tsx`
- [x] T7: Implement dedicated pages for pricing, enterprise, changelog, about, login, signup | file: src/app/pricing/page.tsx | verify: `grep -q "Pricing" /home/christ/resend-clone-por/src/app/pricing/page.tsx`
- [x] T8: Implement dynamic branded catch-all route for all 37 site links | file: src/app/[...slug]/page.tsx | verify: `grep -q "CatchAllPage" /home/christ/resend-clone-por/src/app/[...slug]/page.tsx`
- [x] T9: SEO and Metadata parity with favicons, OpenGraph cover, and llms.txt | file: src/app/layout.tsx | verify: `grep -q "favicon-marketing.ico" /home/christ/resend-clone-por/src/app/layout.tsx`
- [x] T10: Harden craft-fullstack-por skill with asset harvester utility and rules | file: /home/christ/christpor_agent_skills/craft-fullstack-por/SKILL.md | verify: `grep -q "Zero Fake Assets" /home/christ/christpor_agent_skills/craft-fullstack-por/SKILL.md`
- [x] T11: Integration build, multi-page smoke verification, and git checkpoint | file: /home/christ/resend-clone-por | verify: `bun run --cwd /home/christ/resend-clone-por build`
