# Asmaa Cali Jimcaale — Portfolio Website

## Project Overview
Create a distinctive, responsive portfolio for **Asmaa Cali Jimcaale**, a **Web Developer**, using a **Creative & Colorful** visual direction. The portfolio must showcase the five real website projects supplied by Asmaa, using her actual screenshots rather than generated or stock project mockups.

## Confirmed Profile Information
- Name: Asmaa Cali Jimcaale
- Profession: Web Developer
- Design preference: Creative & Colorful

Do not invent education, years of experience, employment history, clients, testimonials, contact details, or project results.

## Site Sections
1. Home / Hero — name, role, short introduction, and View My Work / Contact Me calls to action.
2. About — editable biography; do not invent missing personal details.
3. Skills — editable skill groups; only show technologies Asmaa confirms.
4. Projects — showcase the five supplied real projects below.
5. Services — proposed editable services: Responsive Website Development, Landing Page Design & Development, Website Redesign, Frontend Development.
6. Contact — accessible form with name, email, message; clearly explain if it is demo-only.
7. Footer — name, role, navigation, and real social/contact links only when supplied.

## Real Projects and Screenshot Assets
Use these exact screenshot files from `public/images/projects/`:
- `al-noor-islamic-academy.png` — **Al-Noor Islamic Academy**. Screenshot shows an Islamic academy website with Home, Courses, About Us, Faculty, Contact, and Enroll Now navigation.
- `asma-restaurant.png` — **Asma Restaurant**. Screenshot shows a restaurant landing page with menu and reservation calls to action, opening hours, location, and contact section.
- `agricology.png` — **Agricology**. Screenshot shows an agroecology website with Farmer Profiles, Resources, Projects, News/Blog/Events, About Us, and Donate navigation.
- `carewell-clinic.png` — **Carewell Clinic**. Screenshot shows a clinic website with Home, About, Services, Contacts, and appointment-request call to action.
- `bakka-training-center.png` — **Bakka Training Center**. Screenshot shows a training center website with Home, About, Services, Contact, and learning-focused hero section.

These five projects are supplied by Asmaa as her own completed work. Present them as portfolio projects, but do not invent dates, clients, performance metrics, technologies, or live URLs. Add editable fields for technologies, live demo, and source code; hide links when values are not supplied.

## Projects UI Requirements
- Create a polished responsive grid of five project cards.
- Use the supplied screenshot as each card's actual thumbnail, not an AI-generated substitute.
- Preserve screenshot fidelity. Do not redraw, replace, or fabricate website interfaces.
- Use `next/image` with local assets and sensible `alt` text.
- Display project title and a short description grounded in the screenshot.
- Add optional technology tags, Live Demo, and GitHub links only when Asmaa provides verified details.
- On click, open a larger project preview/lightbox or a project detail view.
- Ensure images are optimized, correctly cropped with `object-fit: cover`, and have a consistent card ratio. Allow users to inspect the full screenshot.
- Do not show browser file paths visible in the screenshot as project URLs. The screenshots include local browser chrome; crop the thumbnail presentation area through CSS/object positioning or use a clean preview treatment, while retaining the original image asset for full preview.

## Visual Direction
Creative, colorful, modern, professional. Suggested palette: deep navy/near-black, electric purple, coral, warm yellow, and cyan. Use expressive gradients selectively, bold readable typography, rounded cards, soft shadows, abstract shapes, and subtle motion. Avoid clutter.

## Accessibility and Quality
- Responsive mobile, tablet, desktop.
- Semantic HTML, accessible labels, keyboard navigation, visible focus states.
- Respect `prefers-reduced-motion`.
- Avoid layout shifts and broken assets.
- Contact form must validate and must not claim to send messages unless a real backend is configured.
- Keep content in a central data file for easy editing.
