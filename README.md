# Billy Daly Website

A personal portfolio website built with Astro, React, and Tailwind CSS.

## Features

- **Astro**: Fast, modern static site generator
- **React**: For interactive components (typewriter effect)
- **Tailwind CSS**: For styling
- **TypeScript**: For type safety

## Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
src/
├── components/          # Reusable components
│   ├── Navbar.astro    # Navigation component
│   └── TypewriterText.tsx # React component for typewriter effect
├── layouts/            # Page layouts
│   └── Layout.astro    # Main layout template
├── pages/              # Pages (file-based routing)
│   ├── index.astro     # Home page
│   └── scroll.astro    # Scroll demo page
└── styles/             # Global styles
    └── global.css      # Tailwind CSS imports
```

## Pages

- `/` - Home page with hero section and about me

## Deployment

This site is configured for static deployment and can be deployed to any static hosting service like Vercel, Netlify, or GitHub Pages.
