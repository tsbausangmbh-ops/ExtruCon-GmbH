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

### SSR-Priorität (Ergebnis: 1000+ Impressionen/Tag)
Eigene SSR als Priority 1 – Wenn Googlebot die Seite aufruft, bekommt er sofort das vollständige statische HTML mit allen H1, H2, H3-Headings, Meta-Tags, JSON-LD und Content. Kein Warten auf externe Services.

Prerender.io als Fallback – Falls keine statische HTML-Datei existiert (sollte nicht vorkommen), wird Prerender.io als Fallback genutzt.

Automatischer Cache-Refresh – Bei jedem Deployment werden alle URLs bei Prerender.io neu gecacht als zusätzliche Absicherung.

JSON-LD @graph-Struktur – Saubere Structured Data auf jeder Seite (Organization, WebSite, WebPage, Service) – Google versteht dadurch genau, was die Seite bietet und für wen.

Meta-Tags auf jeder Unterseite – Jede URL hat eigene Title, Description, OG-Tags – das hilft Google bei der Zuordnung zu verschiedenen Suchanfragen.

Sitemap mit allen URLs – Google kennt alle Seiten und crawlt sie systematisch.

Das Zusammenspiel aus korrektem SSR + Structured Data + sauberen Meta-Tags sorgt dafür, dass Google die Seiten besser versteht, schneller indexiert und häufiger in den Suchergebnissen zeigt.

### Crawler Flow (Googlebot, Bingbot, GPTBot, ChatGPT etc.)
1. Crawler detected via User-Agent
2. **Priority 1**: Server delivers full static HTML from `client/public/static/` (includes H1, H2, H3, meta tags, JSON-LD, full body content)
3. **Fallback**: If no static HTML exists → request forwarded to Prerender.io
4. Response includes `X-SSR-Source` and `X-SSR-Debug` headers for debugging
5. All 21 pages have static HTML files (including `/kontakt/` and `/termin/`)

### Normal Visitor Flow
- SSR injection active: meta-tags, OG-tags, Twitter-tags, canonical, JSON-LD, AND noscript body content (H1/H2/H3) from static HTML files are injected into the SPA's index.html before serving
- Each page gets its own page-specific SEO content server-side (title, description, structured data, heading structure)
- React SPA loads on top for full interactivity (SEOHead component manages client-side updates)
- noscript block contains full page content for non-JS environments
- In dev mode: index.html is read fresh each time; in production: cached for performance

### Cache Refresh
- POST `/api/prerender/recache` (protected by PRERENDER_TOKEN, 5min rate limit)
- Recaches all URLs from sitemap (no language variants)
- Batched in groups of 5 with 500ms delay between batches
- URLs must be sent WITH trailing slash (canonical form) to Prerender.io

### Debug Headers
- `X-SSR-Source`: Shows which source served the page (`ssr-static`, `prerender.io-fallback`, `prerender.io-partial`, `ssr-visitor`, `none`)
- `X-SSR-Debug`: Shows source details (`ssr-priority` for static HTML, or Prerender.io fetch details)

### Key Files
- `server/lib/prerender.ts` - SSR middleware, crawler detection, Prerender.io fallback, cache refresh
- `server/routes.ts` - Middleware integration and recache API endpoint
- `client/public/static/` - Primary static HTML files with full SEO content (21 files for all pages)

## SEO Technical Details

### Structured Data (JSON-LD)
- **@graph pattern**: Single JSON-LD block with `@graph` array containing WebSite, WebPage, ProfessionalService/LocalBusiness, and FAQPage (homepage only) entities
- **No meta keywords**: Removed per Google 2026 best practices; keywords meta tag not used anywhere
- **Canonical URLs**: All canonicals and og:url use trailing slash for consistency (e.g., `https://extrucon.de/ki-agenten/`)

### URL Strategy
- **Trailing slashes**: All canonical URLs use trailing slashes (e.g., `/ki-agenten/`). Server 301-redirects non-trailing-slash to trailing-slash.
- **SSR lookup**: Middleware normalizes paths by stripping trailing slashes before STATIC_PAGES lookup, so both `/ki-agenten` and `/ki-agenten/` serve SSR content.
- **Prerender.io URLs**: Must always use trailing slash format (canonical form), otherwise Prerender.io returns 404 → fallback to static HTML

### German-Only SEO Strategy
- **No hreflang tags**: Removed from all files AND sitemap; only German version is indexed
- **301 redirects**: All `?lang=` query parameters are 301-redirected to the clean German URL with trailing slash
- **robots.txt blocks `?lang=`**: Explicit `Disallow: /*?lang=` prevents crawlers from attempting language URLs
- **inLanguage**: Set to `de-DE` only in JSON-LD (no multi-language array)

### Sitemap Strategy
- **21 German-only pages** with trailing slashes, no hreflang, no non-page resources
- **Served from `server/seoFiles.ts`**: NOT from `client/public/sitemap.xml` (both must stay in sync)
- **robots.txt also from `seoFiles.ts`**: Single `User-agent: *` block, no Crawl-delay
- **areaServed**: Focused on Fürstenfeldbruck, München, Bayern for local ranking
- **Client-side i18n**: Language switching (EN, HR, TR) remains for visitors via localStorage but is invisible to search engines
- **Recache**: Only German URLs are recached via Prerender.io (no language variants)

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