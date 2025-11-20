# PWA + API Skeleton – Architecture to Code

This repository is a small but realistic demo that shows how I structure a
modern web solution:

- a static-first PWA-capable web frontend (Eleventy + Tailwind), and  
- a clean TypeScript API underneath.

The goal is not feature completeness, but to demonstrate:
- clear separation between frontend and backend,
- a structure that can scale beyond a demo,
- and an architecture-first way of thinking.

---

## Architecture Overview

### `web/`
- Static site generated with Eleventy  
- Tailwind CSS for styling  
- Can be extended into a full PWA (manifest + service worker)  
- Clean folder layout for future components  

### `api/`
- Node.js + Express in TypeScript  
- Slot-based demo API:
  - `GET /slots/available`
  - `POST /slots/request`
- Simple in-memory logic to keep the example lightweight  
- Realistic structure for scaling into a full backend

---

## Tech Stack

- **Frontend:**  
  - Eleventy  
  - Tailwind CSS  
  - PostCSS  

- **Backend:**  
  - Node.js  
  - Express  
  - TypeScript  

- **Tooling:**  
  - pnpm workspaces  
  - ts-node-dev for fast iteration  

---

## Getting Started

### 1. Install dependencies

Install all workspace packages at once:

```bash
pnpm install

or install individually:

```bash
pnpm --filter pwa-api-web install
```bash
pnpm --filter pwa-api-backend install

### 2. Development

Run backend (API)

pnpm --filter pwa-api-backend dev
API will run on:
http://localhost:4000

Run frontend (web)

pnpm --filter pwa-api-web dev
Frontend will run on:
http://localhost:8080

### 3. Example API Usage

Get all available slots
curl http://localhost:4000/slots/available

Request a slot
curl -X POST http://localhost:4000/slots/request \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Peter",
    "email": "test@example.com",
    "slotId": "2025-01-10-0900"
  }'

### 4. When This Repository Is Useful
To demonstrate how I connect architecture and implementation.
- As a starting point for client demos or internal tools.
- As a reference for clean project layout and separation of concerns.
- For recruiters or CTOs evaluating architecture + engineering capability.

