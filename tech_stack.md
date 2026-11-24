# Technology Stack

## Core
- Next.js App Router
- TypeScript
- Tailwind CSS
- shadcn/ui
- Lucide React

## Optional
- Motion / Framer Motion for subtle transitions
- React Hook Form and Zod for contact form validation
- next/font for optimized typography

## Suggested Structure
```text
src/
  app/
    layout.tsx
    page.tsx
    globals.css
  components/
    layout/
      navbar.tsx
      footer.tsx
    sections/
      hero.tsx
      about.tsx
      skills.tsx
      projects.tsx
      services.tsx
      contact.tsx
    projects/
      project-card.tsx
      project-preview.tsx
  data/
    portfolio.ts
  lib/
    utils.ts
  types/
    portfolio.ts
public/
  images/
    projects/
      al-noor-islamic-academy.png
      asma-restaurant.png
      agricology.png
      carewell-clinic.png
      bakka-training-center.png
```

## Image Handling
- Use the five supplied screenshots in `public/images/projects/`.
- Reference local files with `next/image`.
- Keep original screenshots available for enlarged preview.
- Use a consistent thumbnail ratio and a clean crop that minimizes browser chrome; do not remove or falsify website content.
- Never replace the supplied project screenshots with generated imagery.

## Engineering
- Prefer Server Components; use Client Components only for interactive UI.
- Store project metadata in `src/data/portfolio.ts`.
- Keep project URLs and technology tags empty until Asmaa confirms them.
- Contact form must clearly disclose demo-only behavior until a delivery service is connected.
- Run lint, TypeScript checks, and `next build`.
