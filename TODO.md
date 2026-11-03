# TODO — resend-clone-vercel-deploy
<!-- agent-gate: on | max_loops: 8 -->
Goal: Deploy resend-clone-por to Vercel preview, run health checks, promote to production, and verify live URL
States: [ ] todo · [~] doing · [x] done (harness re-verifies) · [?] research needed · [!] blocked (reason required)

- [x] T0: Pre-flight security check and Vercel project link | file: .vercel/project.json | verify: `test -f /home/christ/resend-clone-por/.vercel/project.json`
- [ ] T1: Deploy preview on Vercel and verify HTTP 200 on preview URL | file: .scratchpad/preview_url.txt | verify: `test -f /home/christ/resend-clone-por/.scratchpad/preview_url.txt`
- [x] T2: Promote to production on Vercel and update repository README with live URL | file: README.md | verify: `grep -q "vercel.app" /home/christ/resend-clone-por/README.md`
