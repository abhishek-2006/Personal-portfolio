<div align="center">
  <img src="app/favicon.ico" alt="Logo" width="80" height="80" />
  <h1 align="center">Abhishek Shah | Interactive Developer Portfolio</h1>
  <p align="center">
    A highly optimized, 3D-integrated personal portfolio built with <strong>Next.js 16</strong>, <strong>TailwindCSS 4</strong>, and <strong>Three.js</strong>.
  </p>
  <p align="center">
    <a href="https://abhishekshah-portfolio.vercel.app"><strong>View Live Demo »</strong></a>
  </p>
  <br/>
  <p align="center">
    <img src="https://img.shields.io/badge/Next.js-16-black?style=for-the-badge&logo=next.js" alt="Next.js" />
    <img src="https://img.shields.io/badge/React-19-blue?style=for-the-badge&logo=react" alt="React" />
    <img src="https://img.shields.io/badge/TailwindCSS-4-38B2AC?style=for-the-badge&logo=tailwind-css" alt="TailwindCSS" />
    <img src="https://img.shields.io/badge/Three.js-black?style=for-the-badge&logo=three.js" alt="Three.js" />
    <img src="https://img.shields.io/badge/Vercel-Deployed-black?style=for-the-badge&logo=vercel" alt="Vercel" />
  </p>
</div>

<br/>

## 📖 Overview

Welcome to the open-source repository of my professional portfolio. As a **Full-Stack Developer and Software Engineer**, I built this project to act as both a functional showcase of my past work and a technical demonstration of my ability to write performant, scalable, and visually stunning web applications.

This isn't just a static site. It features an integrated 3D WebGL cyber-geometric core, custom game logic (Tic-Tac-Toe), Framer Motion micro-interactions, and rigorous performance optimizations designed to achieve high Lighthouse scores on both desktop and mobile devices.

---

## ✨ Core Features & Pages

- **Dynamic 3D Hero (`/`)**: A floating, interactive Icosahedron geometry built with `@react-three/fiber` that reacts to mouse tracking. Dynamically loaded to preserve initial paint speeds.
- **Interactive Skills (`/skills`)**: A visually engaging grid demonstrating proficiency in languages, frameworks, backend architecture, and DevOps.
- **Featured Projects (`/projects`)**: A curated showcase of my most impactful open-source and professional work, featuring a modern glassmorphism UI.
- **Built-in Arcade (`/tictactoe`)**: A fully responsive, custom-built Tic-Tac-Toe engine featuring a Neo-Dark UI, smooth 60FPS animations, and multiple AI difficulties ranging from Easy to Unbeatable.
- **Contact Hub (`/contact`)**: A clean, accessible connection point with direct links to my professional network.

---

## ⚡ Technical Achievements & Optimizations

Creating a 3D-heavy website while maintaining mobile performance requires aggressive optimization. Here is how this portfolio achieves its speed:

1. **Zero-Blocking 3D Loading**: 
   The Three.js canvas (`AbstractGeometricCore`) is decoupled from the server-side payload using `next/dynamic` with `ssr: false`. This drastically reduces **Total Blocking Time (TBT)**, allowing the browser to paint the text and critical assets instantly before initializing the heavy WebGL context.
   
2. **Device-Aware WebGL Rendering**: 
   The application detects if the user is on a mobile device and gracefully degrades the 3D complexity. The particle count drops from 4,000 to 1,500, and geometry vertices are halved, preventing thermal throttling on handheld devices while maintaining 60 FPS.

3. **Optimized LCP (Largest Contentful Paint)**: 
   Critical images use explicit Next.js `sizes` configurations `(max-width: 640px) 256px...` and strict `priority` tags to fetch exactly the right file size for the viewport, slashing LCP times by avoiding oversized image downloads.

4. **Global Skeleton Loaders**: 
   Every route utilizes custom `loading.jsx` files built with Tailwind pulse animations to provide a highly responsive, app-like feel during navigation and data fetches.

5. **Advanced SEO**: 
   Implemented semantic HTML5 structure, highly configured `application/ld+json` Schema markup, dynamic OpenGraph metadata, and deep SEO indexing directives.

---

## 🛠 Technology Stack

### Frontend & UI
- **Next.js 16 (App Router)**: Server Components, API routes, and optimized image/font loading.
- **React 19**: Hooks, Suspense, and state management.
- **TailwindCSS 4**: Atomic CSS styling, custom theme configurations, and fluid typography.
- **Framer Motion**: Complex orchestrations, scroll-linked animations, and page transitions.
- **Lucide React**: Clean, lightweight SVG iconography.

### Graphics & 3D
- **Three.js**: Core 3D engine.
- **React-Three-Fiber**: React reconciler for Three.js.
- **Drei**: Helper components for R3F (Canvas, Cameras, Geometries).

---

## 📂 Project Architecture

```bash
abhishekshah-portfolio/
├── app/
│   ├── components/       # Reusable UI components (Navbar, Hero, 3D Backgrounds)
│   ├── contact/          # Contact page route & logic
│   ├── projects/         # Projects showcase route
│   ├── skills/           # Skills visualization route
│   ├── tictactoe/        # Interactive game route & AI logic
|   ├── chess/            # Interactive game route & AI logic
│   ├── globals.css       # Tailwind base, utilities, and CSS variables
│   ├── layout.tsx        # Root layout, Global SEO, JSON-LD Schema
│   └── page.jsx          # Entry point and Hero section
├── public/               # Static assets (images, icons, models)
├── next.config.ts        # Next.js build and compiler configurations
└── tailwind.config.ts    # Tailwind theme extension & design tokens
```

---

## 💻 Local Development

Want to explore the code or run it locally? Follow these steps:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/abhishek-2006/abhishekshah-portfolio.git
   ```

2. **Navigate to the directory:**
   ```bash
   cd abhishekshah-portfolio
   ```

3. **Install dependencies:**
   Make sure you have Node.js installed, then run:
   ```bash
   npm install
   ```

4. **Start the development server:**
   ```bash
   npm run dev
   ```

5. **View the app:**
   Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📬 Let's Connect

I am always open to discussing new projects, creative ideas, or opportunities to be part of your visions.

- **LinkedIn**: [Abhishek Shah](https://www.linkedin.com/in/abhishekshah-dev/)
- **X (Twitter)**: [@shahabhishek409](https://x.com/shahabhishek409)
- **GitHub**: [@abhishek-2006](https://github.com/abhishek-2006)
- **Instagram**: [@abhishekshah_112](https://instagram.com/abhishekshah_112)

<br/>
<div align="center">
  <sub>Built with ❤️ by Abhishek Shah.</sub>
</div>
 