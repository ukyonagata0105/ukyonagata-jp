# Project Structure

## Root Directory Organization

### Configuration Files
```
ukyonagata-jp/
├── next.config.ts          # Next.js configuration with TypeScript
├── tsconfig.json           # TypeScript compiler configuration
├── eslint.config.mjs       # ESLint configuration with flat config
├── postcss.config.mjs      # PostCSS configuration for Tailwind CSS
├── next-env.d.ts          # Next.js TypeScript declarations
├── package.json           # Project dependencies and scripts
└── package-lock.json      # Locked dependency versions
```

### Documentation Files
```
ukyonagata-jp/
├── README.md              # Standard project documentation
├── CLAUDE.md              # Claude Code specific guidance and context
└── .kiro/steering/        # Project steering documents (this directory)
    ├── product.md         # Product overview and features
    ├── tech.md           # Technology stack documentation
    └── structure.md      # Project structure guide (this file)
```

### Core Application Structure
```
ukyonagata-jp/
├── src/                   # Source code directory
│   └── app/              # Next.js App Router pages and layouts
├── public/               # Static assets and public files
└── node_modules/         # Installed dependencies (generated)
```

## Subdirectory Structures

### Source Directory (`src/`)
```
src/
└── app/                  # Next.js 15 App Router directory
    ├── layout.tsx        # Root layout component with fonts and metadata
    ├── page.tsx          # Home page component
    ├── globals.css       # Global CSS styles and Tailwind imports
    └── favicon.ico       # Site favicon
```

### Planned Source Structure
Based on the component architecture outlined in CLAUDE.md, the planned structure will be:

```
src/
├── app/                  # Next.js App Router pages
│   ├── layout.tsx        # Root layout with fonts and global styles
│   ├── page.tsx          # Home page (/)
│   ├── profile/          # Profile page (/profile)
│   │   └── page.tsx
│   ├── portfolio/        # Portfolio showcase (/portfolio)
│   │   └── page.tsx
│   ├── projects/         # Detailed projects (/projects)
│   │   └── page.tsx
│   ├── research/         # Academic research (/research)
│   │   └── page.tsx
│   ├── blog/             # Blog with RSS integration (/blog)
│   │   └── page.tsx
│   ├── globals.css       # Global styles and Tailwind imports
│   └── favicon.ico       # Site favicon
├── components/           # Reusable component library
│   ├── layout/           # Layout-related components
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   └── Navigation.tsx
│   ├── ui/               # Basic UI components
│   │   ├── Card.tsx
│   │   ├── Button.tsx
│   │   └── Typography.tsx
│   ├── sections/         # Page-specific sections
│   │   ├── Hero.tsx
│   │   ├── Portfolio.tsx
│   │   └── Research.tsx
│   └── features/         # Complex feature components
│       ├── RSSFeed.tsx
│       └── ProjectGallery.tsx
├── lib/                  # Utility libraries and configurations
│   ├── rss.ts           # RSS parsing utilities
│   ├── utils.ts         # General utility functions
│   └── constants.ts     # Application constants
└── types/                # TypeScript type definitions
    ├── index.ts         # General type exports
    ├── rss.ts           # RSS-related types
    └── portfolio.ts     # Portfolio-specific types
```

### Public Directory (`public/`)
```
public/
├── file.svg             # File icon for learning links
├── globe.svg            # Globe icon for external links
├── next.svg             # Next.js logo
├── vercel.svg           # Vercel logo for deployment links
├── window.svg           # Window icon for examples
└── [future assets]      # Portfolio images, project screenshots, etc.
```

## Code Organization Patterns

### Component Structure
1. **Page Components**: Located in `src/app/` following Next.js App Router conventions
2. **Layout Components**: Shared layouts, headers, footers in `src/components/layout/`
3. **UI Components**: Reusable, atomic components in `src/components/ui/`
4. **Section Components**: Page-specific sections in `src/components/sections/`
5. **Feature Components**: Complex, business-logic components in `src/components/features/`

### Utility Organization
- **Library Functions**: Utility functions and configurations in `src/lib/`
- **Type Definitions**: TypeScript types organized by domain in `src/types/`
- **Constants**: Application-wide constants in dedicated files

### Asset Organization
- **Static Assets**: Images, icons, and files in `public/` directory
- **Component Assets**: Component-specific assets co-located when possible
- **Global Styles**: CSS and style-related files in `src/app/`

## File Naming Conventions

### Component Files
- **React Components**: PascalCase with `.tsx` extension (e.g., `Header.tsx`, `ProjectCard.tsx`)
- **Page Components**: Always named `page.tsx` within route directories
- **Layout Components**: Always named `layout.tsx` within route directories

### Utility Files
- **Utility Functions**: camelCase with `.ts` extension (e.g., `rss.ts`, `utils.ts`)
- **Type Files**: camelCase with `.ts` extension (e.g., `portfolio.ts`, `rss.ts`)
- **Configuration Files**: Descriptive names with appropriate extensions

### Directory Names
- **Route Directories**: kebab-case matching URL structure (e.g., `/research`, `/portfolio`)
- **Component Categories**: camelCase for organization (e.g., `layout/`, `features/`)
- **Utility Directories**: camelCase for clarity (e.g., `lib/`, `types/`)

### Asset Files
- **Images**: Descriptive kebab-case names (e.g., `project-screenshot.jpg`)
- **Icons**: Descriptive names with format (e.g., `file.svg`, `globe.svg`)
- **Documents**: Clear, descriptive names (e.g., `resume.pdf`)

## Import Organization

### Path Aliases
TypeScript configured with path mapping for clean imports:
```typescript
// tsconfig.json paths configuration
{
  "paths": {
    "@/*": ["./src/*"]
  }
}
```

### Import Patterns
```typescript
// External library imports (React, Next.js, third-party)
import React from 'react'
import Link from 'next/link'
import { rssParser } from 'rss-parser'

// Internal imports using path aliases
import { Button } from '@/components/ui/Button'
import { Header } from '@/components/layout/Header'
import { ProjectType } from '@/types/portfolio'
import { RSS_CONFIG } from '@/lib/constants'

// Relative imports for co-located files
import './globals.css'
```

### Import Order Convention
1. **React and Next.js imports**
2. **Third-party library imports**
3. **Internal component imports** (using `@/` aliases)
4. **Type imports** (with `type` keyword when possible)
5. **Relative imports** (CSS, co-located files)
6. **Default exports last**

## Key Architectural Principles

### Separation of Concerns
- **Pages**: Focus solely on routing and page-level composition
- **Components**: Reusable, single-responsibility UI elements
- **Utilities**: Pure functions for data processing and helpers
- **Types**: Clear interfaces and type definitions

### Component Hierarchy
1. **Atomic Components**: Basic UI elements (Button, Input, Typography)
2. **Molecular Components**: Combined atoms (Card, SearchBox)
3. **Organism Components**: Complex UI sections (Header, ProductList)
4. **Template Components**: Page-level layouts
5. **Page Components**: Specific page implementations

### Data Flow Architecture
- **Static Data**: Compile-time data fetching for content
- **RSS Integration**: Build-time fetching of external blog content
- **Type Safety**: TypeScript interfaces for all data structures
- **Props Pattern**: Clear prop interfaces for component communication

### Performance Principles
- **Static Generation**: All pages pre-rendered for optimal performance
- **Component Lazy Loading**: Dynamic imports for large components when needed
- **Image Optimization**: Next.js Image component for all images
- **Bundle Optimization**: Tree-shaking and code splitting by default

### Maintainability Guidelines
- **Single Responsibility**: Each component and function has one clear purpose
- **Composition over Inheritance**: Favor composition patterns for flexibility
- **Type-First Development**: Define interfaces before implementation
- **Documentation**: JSDoc comments for complex functions and components
- **Testing Strategy**: Component testing for critical UI elements (future implementation)

### Scalability Considerations
- **Modular Architecture**: Easy to add new pages and components
- **Extension Points**: Clear patterns for adding new features
- **Configuration Management**: Environment-based configuration system
- **Content Management**: Flexible system for adding new content types