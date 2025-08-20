# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js 15 personal portfolio website for ukyonagata.jp that replaces the previous Notion-based implementation. The site features a modern tech stack with TypeScript and Tailwind CSS 4, targeting deployment on Cloudflare Pages.

## Commands

### Development
- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build for production with Turbopack
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Architecture

### Tech Stack
- **Next.js 15** with App Router and TypeScript
- **Tailwind CSS 4** for styling
- **Turbopack** for fast builds and dev server
- **RSS Parser** for note.com blog integration
- **Lucide React** for icons

### Site Structure
The site follows a multi-page structure:
- `/` - Home page with hero section
- `/profile` - Personal profile and bio
- `/portfolio` - Project showcase
- `/projects` - Detailed project descriptions
- `/research` - Academic research and publications
- `/blog` - Blog posts fetched from note.com RSS

### Component Architecture
```
src/
├── app/           # Next.js App Router pages
├── components/    # Reusable components
│   ├── layout/    # Header, Footer, Layout components
│   ├── ui/        # Basic UI components (Card, Button, etc.)
│   ├── sections/  # Page-specific sections
│   └── features/  # Complex feature components
```

### Key Features
- **RSS Integration**: Automatically fetches blog posts from `https://note.com/ukyonagata/rss`
- **Static Generation**: Optimized for performance with SSG
- **Responsive Design**: Mobile-first approach
- **TypeScript**: Full type safety throughout
- **Import Aliases**: Uses `@/*` for clean imports

### Fonts
Uses Geist Sans and Geist Mono fonts from next/font/google with CSS variables for consistent typography.

### Deployment Target
Configured for Cloudflare Pages deployment with static export optimization.