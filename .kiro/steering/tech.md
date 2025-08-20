# Technology Stack

## Architecture

### Overall System Design
- **Static Site Generation (SSG)**: Pre-rendered pages for optimal performance and SEO
- **JAMstack Architecture**: JavaScript, APIs (RSS), and Markup for modern web development
- **Edge-First Deployment**: Optimized for Cloudflare Pages with global edge distribution
- **Component-Based**: Modular React components with reusable UI elements
- **Type-Safe Development**: Full TypeScript implementation for enhanced developer experience

### Rendering Strategy
- **Static Generation**: All pages pre-rendered at build time for maximum performance
- **RSS Data Fetching**: External blog content fetched during build process
- **Client-Side Hydration**: React takes over after initial static load for interactivity

## Frontend

### Core Framework
- **Next.js 15**: Latest version with App Router for modern routing and layout systems
- **React 19.1.0**: Latest stable React with concurrent features and improved performance
- **TypeScript 5**: Full type safety across the entire application

### Styling & UI
- **Tailwind CSS 4**: Latest version with PostCSS integration for utility-first styling
- **CSS Variables**: Custom properties for consistent theming and typography
- **Font Optimization**: Geist Sans and Geist Mono fonts via `next/font/google`
- **Responsive Design**: Mobile-first approach with breakpoint-based layouts

### Component Library
- **Lucide React 0.540.0**: Icon library for consistent visual elements
- **Custom Components**: Planned component architecture:
  - Layout components (Header, Footer, Navigation)
  - UI components (Card, Button, Typography)
  - Section components (Hero, Portfolio, Research)
  - Feature components (RSS Feed, Project Gallery)

### Build System
- **Turbopack**: Next.js 15's new bundler for faster development and builds
- **PostCSS**: CSS processing with Tailwind CSS plugin
- **TypeScript Compilation**: Incremental compilation with strict type checking

## Backend & Data

### Content Management
- **RSS Integration**: `rss-parser@3.13.0` for fetching blog content from note.com
- **Static Data**: JSON/markdown files for portfolio and project information
- **Build-time Fetching**: Content retrieved during build process for static generation

### External Services
- **Blog Content**: `https://note.com/ukyonagata/rss` for blog post integration
- **Asset Hosting**: Public directory for images and static assets
- **Edge Deployment**: Cloudflare Pages for global content delivery

## Development Environment

### Required Tools
- **Node.js**: Latest LTS version for runtime environment
- **npm**: Package manager for dependency management
- **TypeScript**: Language server for IDE integration
- **Git**: Version control system

### IDE Integration
- **TypeScript Support**: Full IntelliSense and type checking
- **ESLint Integration**: Real-time linting with Next.js and TypeScript rules
- **Hot Reloading**: Instant feedback during development with Turbopack
- **Path Aliases**: `@/*` imports for clean module resolution

### Code Quality Tools
- **ESLint**: Configured with Next.js core-web-vitals and TypeScript rules
- **TypeScript Strict Mode**: Enabled for maximum type safety
- **Prettier Integration**: Code formatting (assumed standard setup)

## Common Commands

### Development Workflow
```bash
# Start development server with Turbopack
npm run dev

# Build for production with Turbopack optimization
npm run build

# Start production server (for testing builds locally)
npm run start

# Run ESLint for code quality checks
npm run lint
```

### Additional Development Commands
```bash
# Install dependencies
npm install

# Clean build artifacts
rm -rf .next

# Type checking
npx tsc --noEmit
```

## Environment Variables

### Current Configuration
- **No environment variables currently required**
- **Future considerations**:
  - `NEXT_PUBLIC_SITE_URL`: For canonical URLs and metadata
  - `RSS_FEED_URL`: External configuration for blog RSS endpoint
  - `ANALYTICS_ID`: For web analytics integration

## Port Configuration

### Development
- **Primary Development Server**: `http://localhost:3000`
- **Default Next.js Port**: 3000 (configurable via `--port` flag)
- **Turbopack Integration**: Built-in to Next.js development server

### Production
- **Static Export**: No server required, deployed as static files
- **Cloudflare Pages**: Edge hosting without specific port requirements
- **CDN Distribution**: Global edge network for optimal performance

## Configuration Files

### TypeScript Configuration (`tsconfig.json`)
- **Target**: ES2017 for broad browser compatibility
- **Strict Mode**: Enabled for maximum type safety
- **Module Resolution**: Bundler mode for Next.js optimization
- **Path Mapping**: `@/*` aliases for clean imports
- **Incremental Compilation**: Enabled for faster rebuilds

### Next.js Configuration (`next.config.ts`)
- **Currently minimal**: Default configuration sufficient for current needs
- **Future additions**: Image optimization, redirects, headers as needed

### PostCSS Configuration (`postcss.config.mjs`)
- **Tailwind CSS Plugin**: Single plugin for CSS processing
- **Future additions**: Autoprefixer, CSS optimization plugins as needed

### ESLint Configuration (`eslint.config.mjs`)
- **Next.js Rules**: Core web vitals and TypeScript integration
- **Ignore Patterns**: Build artifacts and generated files excluded
- **Flat Config**: Modern ESLint configuration format

## Deployment Strategy

### Target Platform
- **Cloudflare Pages**: Primary deployment target for edge performance
- **Static Export**: Next.js configured for static site generation
- **Build Process**: Automated builds triggered by git pushes
- **Global CDN**: Automatic distribution to edge locations worldwide

### Performance Optimizations
- **Static Generation**: All pages pre-rendered for instant loading
- **Image Optimization**: Next.js Image component for optimized assets
- **Font Optimization**: Automatic font loading and optimization
- **Bundle Optimization**: Turbopack for efficient code splitting and bundling