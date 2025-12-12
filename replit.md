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