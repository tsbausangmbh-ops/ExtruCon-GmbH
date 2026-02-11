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
- **SEO/SSR**: Prerender.io integration with intelligent fallback (see SSR Architecture below)
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

## SSR Architecture (Prerender.io Integration)

### Crawler Flow (Googlebot, Bingbot, GPTBot, ChatGPT etc.)
1. Crawler detected via User-Agent → request forwarded to Prerender.io
2. Prerender.io returns fully rendered HTML
3. Server validates response: checks for JSON-LD and SSR content
4. If JSON-LD missing in Prerender.io cache → auto-injected from own static HTML files
5. If Prerender.io unreachable (timeout/error) → fallback to own static SSR files in `client/public/static/`
6. Response includes `X-SSR-Source` header for debugging

### Normal Visitor Flow
- SSR injection active: meta-tags, OG-tags, Twitter-tags, canonical, and JSON-LD from static HTML files are injected into the SPA's index.html before serving
- Each page gets its own page-specific SEO content server-side (title, description, structured data)
- React SPA loads on top for full interactivity (SEOHead component manages client-side updates)
- In dev mode: index.html is read fresh each time; in production: cached for performance

### Cache Refresh
- POST `/api/prerender/recache` (protected by PRERENDER_TOKEN, 5min rate limit)
- Recaches all 19 paths × 4 languages = 76 URLs
- Batched in groups of 5 with 200ms delay between batches

### Key Files
- `server/lib/prerender.ts` - Prerender.io middleware, crawler detection, validation, cache refresh
- `server/routes.ts` - Middleware integration and recache API endpoint
- `client/public/static/` - Fallback static HTML files with full SEO content

## SEO Technical Details

### Structured Data (JSON-LD)
- **@graph pattern**: Single JSON-LD block with `@graph` array containing WebSite, WebPage, ProfessionalService/LocalBusiness, and FAQPage (homepage only) entities
- **No meta keywords**: Removed per Google 2026 best practices; keywords meta tag not used anywhere
- **Canonical URLs**: All canonicals and og:url use trailing slash for consistency (e.g., `https://extrucon.de/ki-agenten/`)

### hreflang Tags
- All 19 static HTML files include page-specific hreflang tags for de, en, hr, tr, and x-default
- SSR injection extracts and injects hreflang tags from static files for normal visitors
- Format: `<link rel="alternate" hreflang="de" href="https://extrucon.de/page/" />`

## SEO & Internal Linking

### Internal Linking Strategy
- **RelatedServices Component**: Located in `client/src/components/InternalLinks.tsx` - displays 3 contextual related services based on current page
- **ExploreMoreSection Component**: Also in `InternalLinks.tsx` - displays all navigation links in a tag-cloud style
- **GeoLinks Component**: Adds geo-targeted links for local SEO (Fürstenfeldbruck, München, Bayern)

### Pages with RelatedServices
Main service pages use the new `RelatedServices` component from `InternalLinks.tsx`:
- KIAgenten.tsx → Links to Automatisierungen, WebseitenKI, Chatbot
- Automatisierungen.tsx → Links to KI-Agenten, WebseitenKI, Contact
- WebseitenKI.tsx → Links to KI-Agenten, Automatisierungen, Referenzen
- FAQ.tsx, Chatbot.tsx, Contact.tsx, Referenzen.tsx → Contextual service links

Sub-service pages use the legacy `RelatedServices` from `client/src/components/RelatedServices.tsx`:
- services/Marketing.tsx, services/SocialMedia.tsx, services/Content.tsx, etc.

### i18n for Related Services
All `relatedServices` translations are in `client/src/lib/i18n.tsx` for DE, EN, HR, TR languages