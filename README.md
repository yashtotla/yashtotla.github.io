# yashtotla.github.io

Personal site of Yash Totla — backend and distributed-systems engineer, incoming
MSCS at Georgia Tech, focused on systems for AI (LLM inference, model serving).

Live at **[yashtotla.github.io](https://yashtotla.github.io)**.

## Stack

- React 19 + TypeScript, built with Vite 8
- TanStack Router (file-based routing) + TanStack Query
- Tailwind CSS v4 + shadcn/ui (Radix primitives)
- d3-geo / d3-zoom for the interactive travel map
- Deployed to GitHub Pages via GitHub Actions

## Pages

- `/` — experience timeline and selected projects
- `/sysml` — SysML Corner: a curated collection on systems for ML
- `/scratchpad` — a freeflowing wall (travel map, music, and links)

## Develop

```bash
npm install
npm run dev     # dev server on http://localhost:3000
npm run build   # production build + type-check
npm run lint
```

Pushing to `main` builds and deploys automatically via `.github/workflows/deploy.yml`.
