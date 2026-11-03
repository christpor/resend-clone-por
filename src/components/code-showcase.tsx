"use client";

import React, { useState } from "react";
import { Check, Copy, Terminal } from "lucide-react";

const LANGUAGES = [
  { id: "node", name: "Node.js" },
  { id: "serverless", name: "Serverless" },
  { id: "ruby", name: "Ruby" },
  { id: "python", name: "Python" },
  { id: "php", name: "PHP" },
  { id: "cli", name: "CLI" },
  { id: "go", name: "Go" },
  { id: "rust", name: "Rust" },
  { id: "java", name: "Java" },
  { id: "elixir", name: "Elixir" },
  { id: "dotnet", name: ".NET" },
  { id: "rest", name: "REST" },
  { id: "smtp", name: "SMTP" },
];

const FRAMEWORKS = [
  "Node.js", "Next.js", "Remix", "Nuxt", "Express", "Hono", "Redwood", "Bun", "Astro"
];

const CODE_EXAMPLES: Record<string, string> = {
  node: `import { Resend } from 'resend';

const resend = new Resend('re_123456789');

(async function () {
  const { data, error } = await resend.emails.send({
    from: 'Acme <onboarding@resend.dev>',
    to: ['delivered@resend.dev'],
    subject: 'hello world',
    html: '<strong>it works!</strong>',
  });

  if (error) {
    return console.error({ error });
  }

  console.log({ data });
})();`,
  python: `import os
import resend

resend.api_key = os.environ["RESEND_API_KEY"]

params: resend.Emails.SendParams = {
    "from": "Acme <onboarding@resend.dev>",
    "to": ["delivered@resend.dev"],
    "subject": "hello world",
    "html": "<strong>it works!</strong>",
}

email = resend.Emails.send(params)
print(email)`,
  ruby: `require "resend"

Resend.api_key = ENV["RESEND_API_KEY"]

params = {
  "from": "Acme <onboarding@resend.dev>",
  "to": ["delivered@resend.dev"],
  "subject": "hello world",
  "html": "<strong>it works!</strong>"
}

Resend::Emails.send(params)`,
  go: `package main

import (
    "fmt"
    "os"
    "github.com/resend/resend-go/v2"
)

func main() {
    client := resend.NewClient(os.Getenv("RESEND_API_KEY"))

    params := &resend.SendEmailRequest{
        From:    "Acme <onboarding@resend.dev>",
        To:      []string{"delivered@resend.dev"},
        Subject: "hello world",
        Html:    "<strong>it works!</strong>",
    }

    sent, err := client.Emails.Send(params)
    if err != nil {
        fmt.Println(err)
        return
    }
    fmt.Println(sent.Id)
}`,
  cli: `resend emails send \\
  --from "Acme <onboarding@resend.dev>" \\
  --to "delivered@resend.dev" \\
  --subject "hello world" \\
  --html "<strong>it works!</strong>"`,
  rest: `curl -X POST 'https://api.resend.com/emails' \\
  -H 'Authorization: Bearer re_123456789' \\
  -H 'Content-Type: application/json' \\
  -d $'{
  "from": "Acme <onboarding@resend.dev>",
  "to": ["delivered@resend.dev"],
  "subject": "hello world",
  "html": "<strong>it works!</strong>"
}'`
};

export default function CodeShowcaseSection() {
  const [activeLang, setActiveLang] = useState("node");
  const [activeFw, setActiveFw] = useState("Node.js");
  const [copied, setCopied] = useState(false);

  const snippet = CODE_EXAMPLES[activeLang] || CODE_EXAMPLES.node;

  const handleCopy = () => {
    navigator.clipboard.writeText(snippet);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="relative py-28 px-6 bg-black border-b border-zinc-900" id="code">
      <div className="mx-auto max-w-5xl text-center">
        {/* Glowing 3D Envelope Icon */}
        <div className="mx-auto mb-8 w-20 h-20 relative flex items-center justify-center">
          <div className="absolute inset-0 bg-violet-600/30 blur-2xl rounded-full" />
          <div className="relative w-20 h-20 rounded-2xl bg-gradient-to-b from-zinc-800 to-black p-0.5 shadow-2xl border border-zinc-700/50 flex items-center justify-center overflow-hidden">
            <img
              src="/static/landing-page/3d-broadcast-fallback.jpg"
              alt="Icon"
              className="w-full h-full object-cover rounded-2xl opacity-90 hover:scale-105 transition duration-300"
            />
          </div>
        </div>

        {/* Heading in Domaine Display serif / modern display */}
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-normal tracking-tight text-white mb-6">
          Integrate <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-purple-300 to-indigo-400">tonight</span>
        </h2>
        <p className="mx-auto max-w-2xl text-zinc-400 text-base md:text-lg mb-12">
          A simple, elegant interface so you can start sending emails in minutes. It fits right into your code with SDKs for your favorite programming languages.
        </p>

        {/* Languages Strip */}
        <div className="flex items-center justify-start md:justify-center gap-2 overflow-x-auto pb-4 scrollbar-none mb-6">
          {LANGUAGES.map((lang) => (
            <button
              key={lang.id}
              onClick={() => setActiveLang(lang.id)}
              className={`px-4 py-2 rounded-xl text-xs md:text-sm font-medium transition whitespace-nowrap flex items-center gap-2 ${
                activeLang === lang.id
                  ? "bg-zinc-900 text-white border border-zinc-700 shadow-inner"
                  : "text-zinc-400 hover:text-zinc-200 hover:bg-zinc-950 border border-transparent"
              }`}
            >
              <span>{lang.name}</span>
            </button>
          ))}
        </div>

        {/* Framework Selector Pills (for Node) */}
        {activeLang === "node" && (
          <div className="flex items-center justify-start md:justify-center gap-2 overflow-x-auto pb-4 scrollbar-none mb-6 text-xs text-zinc-500">
            {FRAMEWORKS.map((fw) => (
              <button
                key={fw}
                onClick={() => setActiveFw(fw)}
                className={`px-3 py-1 rounded-lg border transition ${
                  activeFw === fw
                    ? "border-zinc-700 text-zinc-200 bg-zinc-950"
                    : "border-zinc-900 text-zinc-500 hover:text-zinc-400"
                }`}
              >
                {fw}
              </button>
            ))}
          </div>
        )}

        {/* Code Preview Card rendered with CommitMono */}
        <div className="relative mx-auto max-w-4xl rounded-2xl border border-zinc-800/90 bg-[#070707] p-6 text-left shadow-2xl overflow-hidden font-mono">
          <div className="flex items-center justify-between pb-4 border-b border-zinc-900/80 mb-4">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-zinc-800" />
              <span className="w-3 h-3 rounded-full bg-zinc-800" />
              <span className="w-3 h-3 rounded-full bg-zinc-800" />
              <span className="ml-3 text-xs text-zinc-500 font-mono">send-email.{activeLang === "python" ? "py" : activeLang === "ruby" ? "rb" : activeLang === "go" ? "go" : "ts"}</span>
            </div>
            <button
              onClick={handleCopy}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-zinc-800 bg-zinc-950 text-xs text-zinc-300 hover:text-white hover:border-zinc-700 transition"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5 text-zinc-400" />}
              <span>{copied ? "Copied" : "Copy"}</span>
            </button>
          </div>

          <pre className="font-mono text-xs sm:text-sm text-zinc-300 leading-relaxed overflow-x-auto p-2 scrollbar-none selection:bg-zinc-800">
            <code>
              {snippet.split("\n").map((line, idx) => (
                <div key={idx} className="table-row">
                  <span className="table-cell pr-6 select-none text-zinc-600 text-right">{idx + 1}</span>
                  <span className="table-cell">{line}</span>
                </div>
              ))}
            </code>
          </pre>
        </div>
      </div>
    </section>
  );
}
