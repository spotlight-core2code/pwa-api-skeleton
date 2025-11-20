# PWA + API Skeleton – Architecture to Code

This repository demonstrates how I structure a small but realistic web solution:
a modern, lightweight PWA frontend and a simple API layer underneath.

The goal is not feature-completeness, but to show:
- clear separation of concerns,
- a clean build pipeline,
- and an architecture that can scale beyond a demo.

## Architecture Overview

- `web/`
  - Static-first web frontend using Eleventy + Tailwind
  - PWA manifest and service worker
  - Designed for fast initial load and good Core Web Vitals
- `api/`
  - Node/Express (TypeScript) backend
  - Simple slot/availability endpoints (inspired by booking scenarios)
  - Clean separation between routing and domain logic

## Tech Stack

- Web:
  - Eleventy
  - Tailwind CSS
  - Progressive Web App (manifest + service worker)
- API:
  - Node.js + Express
  - TypeScript

## Getting Started

### Prerequisites

- Node.js (>= 20.x)
- pnpm or npm

### Installation

```bash
pnpm install
pnpm --filter web install
pnpm --filter api install
