# NULL//SIGNAL

A brutalist, system-driven portfolio built with React, Vite, Tailwind CSS, Motion, and React Three Fiber.

## Overview

NULL//SIGNAL is a personal portfolio project designed to feel sharp, technical, and visually distinct. The site blends brutalist layout structure with a high-contrast interface system, responsive design, custom route transitions, and an interactive 3D hero element.

The goal of the project was to create a portfolio that feels intentional from both a design and engineering perspective while still staying usable across desktop, tablet, and mobile.

## Live Focus

This portfolio is built to present:
- frontend and backend engineering interest
- product-minded UI/UX decisions
- strong visual identity
- reusable component structure
- responsive implementation
- polished interaction design

## Features

- Responsive layout for desktop, tablet, and mobile
- Branded home page with hero, portrait, 3D artifact, and contact section
- Dedicated projects archive page
- Interactive 3D "Signal Core" element built with React Three Fiber
- Theme-matching route transitions
- Reusable project card system
- Contact section with social/resume links
- Metadata, favicon support, and 404 page
- Centralized site configuration for quick content updates

## Stack

- React 19
- Vite
- Tailwind CSS
- React Router
- Motion
- Three.js
- @react-three/fiber
- @react-three/drei

## Design Direction

NULL//SIGNAL uses a visual system centered around:
- brutalist structure
- strong borders and panels
- monospace system labels
- high-contrast surfaces
- terminal-inspired supporting details
- motion that feels like a signal handoff rather than a generic page fade

## Project Structure

```txt
src/
  app/
    router.jsx
  assets/
    images/
  components/
    layout/
    sections/
    ui/
  features/
    home/
    projects/
    not-found/
  lib/
    motion.js
    site.js
  three/
    SignalCoreCanvas.jsx
```

## Pages

### Home
Includes:
- hero section
- portrait frame
- interactive 3D element
- about section
- featured projects
- contact section

### Projects
Includes:
- archive intro
- reusable project cards
- live and GitHub links
- responsive project grid

### 404
Includes:
- branded fallback page for invalid routes

## Current Projects Included

- RAW//WAVE
- GLITCHTYPE '93
- CYBER HEAVEN

## Why This Project Matters

This project demonstrates:
- component-based architecture
- responsive UI implementation
- design system thinking
- 3D integration in a production-style frontend
- route transition polish
- portfolio-focused product presentation

It is meant to function not just as a personal website, but also as a proof-of-skill project showing frontend structure, interaction design, and system-minded implementation.

## Local Setup

```bash
npm install
npm run dev
```

## Production Build

```bash
npm run build
npm run preview
```

## Personalization

To customize the portfolio, update:
- `src/lib/site.js` for personal info, tagline, and links
- `src/features/projects/projects.data.js` for project content
- `src/assets/images/` for portrait and project thumbnails
- `public/` for resume, favicon, and Open Graph assets

## Future Improvements

Potential next steps:
- dedicated case study pages for each project
- project filtering or category toggles
- downloadable resume and richer contact workflow
- additional backend/system-focused project entries
- improved analytics or lightweight CMS-driven content

## Author

**Luis Fonseca**

Built as a portfolio project under the NULL//SIGNAL identity.
