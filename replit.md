# Portfolio Website for Team Pixell

## Overview
This is a portfolio website built with React, TypeScript, and Vite. It features a modern design with various UI components from Radix UI and animations using Framer Motion.

## Tech Stack
- **Frontend Framework**: React 18 with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **UI Components**: Radix UI, shadcn/ui
- **Animations**: Framer Motion (motion package)
- **Charts**: Recharts

## Project Structure
```
src/
├── components/     # React components
│   ├── figma/      # Figma-related components
│   └── ui/         # UI library components (shadcn/ui)
├── hooks/          # Custom React hooks
├── styles/         # Global styles
├── utils/          # Utility functions
├── App.tsx         # Main application component
└── main.tsx        # Application entry point
```

## Development
- **Dev Server**: Run `npm run dev` to start the development server on port 5000
- **Build**: Run `npm run build` to build for production (outputs to `docs/` folder)
- **Deploy**: Run `npm run deploy` to deploy to GitHub Pages

## Configuration
- Vite is configured to run on port 5000 with host 0.0.0.0 for Replit compatibility
- All hosts are allowed for the dev server to work with Replit's proxy
