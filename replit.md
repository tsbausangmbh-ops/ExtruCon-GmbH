# ExtruCon Website

## Overview

ExtruCon is a full-stack web application for a German AI agency (KI-Agentur) based in Fürstenfeldbruck, near Munich. The website showcases AI agents, automation services, and AI-powered web development offerings. It features a multi-language interface (German, English, Croatian, Turkish), an integrated AI chatbot powered by OpenAI, and comprehensive service pages for KI-Agenten, Automatisierungen, and Webseiten mit KI.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React with TypeScript, using Vite as the build tool
- **Routing**: Wouter for lightweight client-side routing
- **Styling**: Tailwind CSS v4 with custom theme variables for a dark tech aesthetic
- **UI Components**: shadcn/ui component library (New York style) with Radix UI primitives
- **State Management**: TanStack React Query for server state
- **Animations**: Framer Motion for smooth transitions and effects
- **Internationalization**: Custom i18n implementation with context-based language switching

### Backend Architecture
- **Runtime**: Node.js with Express
- **Language**: TypeScript with ESM modules
- **API Structure**: RESTful endpoints under `/api/*` prefix
- **AI Integration**: OpenAI API (via Replit AI Integrations) for the chatbot functionality
- **Development**: Vite dev server with HMR for frontend, tsx for server hot-reloading

### Data Storage
- **ORM**: Drizzle ORM with PostgreSQL dialect
- **Schema Location**: `shared/schema.ts` for type-safe database models
- **Current Schema**: Basic users table with UUID primary keys
- **Storage Abstraction**: Interface-based storage layer (`IStorage`) with in-memory implementation ready for database swap

### Build System
- **Client Build**: Vite outputs to `dist/public`
- **Server Build**: esbuild bundles server code to `dist/index.cjs`
- **Path Aliases**: `@/` for client src, `@shared/` for shared code, `@assets/` for attached assets

### Project Structure
```
client/           # React frontend application
  src/
    components/   # Reusable UI components
    pages/        # Route-based page components
    lib/          # Utilities, i18n, query client
    hooks/        # Custom React hooks
server/           # Express backend
  routes.ts       # API route definitions
  storage.ts      # Data access layer
  static.ts       # Static file serving
shared/           # Shared types and schemas
  schema.ts       # Drizzle database schema
```

## External Dependencies

### AI Services
- **OpenAI API**: Powers the chatbot via Replit AI Integrations (`AI_INTEGRATIONS_OPENAI_BASE_URL`, `AI_INTEGRATIONS_OPENAI_API_KEY`)

### Database
- **PostgreSQL**: Connected via `DATABASE_URL` environment variable
- **Drizzle Kit**: For schema migrations (`db:push` command)

### Third-Party Libraries
- **Radix UI**: Full suite of accessible UI primitives for dialogs, dropdowns, tooltips, etc.
- **Lucide React**: Icon library
- **date-fns**: Date formatting utilities
- **zod**: Schema validation with drizzle-zod integration
- **class-variance-authority + clsx + tailwind-merge**: For component variant styling

### Replit-Specific
- **@replit/vite-plugin-runtime-error-modal**: Error overlay in development
- **@replit/vite-plugin-cartographer**: Development tooling
- **@replit/vite-plugin-dev-banner**: Development environment indicator

## SEO & Internal Linking

### Internal Linking Strategy
- **RelatedServices Component**: Located in `client/src/components/InternalLinks.tsx` - displays 3 contextual related services based on current page
- **ExploreMoreSection Component**: Also in `InternalLinks.tsx` - displays all navigation links in a tag-cloud style
- **GeoLinks Component**: Adds geo-targeted links for local SEO (Fürstenfeldbruck, München, Bayern)

### Pages with RelatedServices
All pages now use the unified `RelatedServices` component from `InternalLinks.tsx` with the `currentPage` prop:
- Main services: ki-agenten, automatisierungen, webseiten-ki
- Landing pages: marketing, social-media, content, brand, web, ki-automatisierung, seo
- Other pages: faq, chatbot, contact, referenzen, ratgeber, ueber-uns

### i18n for Related Services
All `relatedServices` translations are in `client/src/lib/i18n.tsx` for DE, EN, HR, TR languages

## Structured Data & Schema Markup

### Global Schemas (index.html)
- **Organization**: Complete company information with contact details, address, social links
- **LocalBusiness**: Local business info with geo-coordinates, opening hours, area served
- **WebSite**: Site identification with publisher reference
- **WebPage with Speakable**: Voice search optimization for Google Assistant/Alexa using XPath selectors

### Service Page Schemas
All 7 service pages (`/leistungen/*`) include:
- **Service Schema**: Service type, provider, area served, description
- **FAQPage Schema**: 3 relevant FAQs per service for rich snippets

Service pages with schemas:
- Marketing, SocialMedia, Content, Brand, Web, SEO, KI

### Geo-Targeting
- Geo meta tags: DE-BY region, Fürstenfeldbruck placename, coordinates
- LocalBusiness areaServed: Germany, Croatia, Turkey, Bayern, München, Fürstenfeldbruck
- GeoLinks component for location-specific internal links

## Pre-Rendering for SEO

### Setup
A custom Puppeteer-based pre-rendering script is available at `script/prerender.ts` to generate static HTML for all routes, enabling better SEO for search engines and AI assistants.

### Usage
```bash
# First build the app
npm run build

# Then run pre-rendering
npx tsx script/prerender.ts
```

### Rendered Routes
The script pre-renders all main routes including:
- Homepage and main service pages
- All /leistungen/* sub-pages
- Location pages (/muenchen/*, /starnberg, etc.)
- Legal pages (impressum, datenschutz, etc.)