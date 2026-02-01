# Deep Flow Coworking Website - AI Agent Instructions

## Project Overview
This is a Next.js 15+ marketing website for Deep Flow Coworking, auto-synced from v0.app deployments. The site showcases coworking services (open space, meeting rooms, training rooms, domiciliation) with responsive UI built on Radix UI + Tailwind CSS.

**Key repos/deployments:**
- v0 chat: https://v0.app/chat/fS2QkQYFbgG
- Vercel: https://vercel.com/khalils-projects-97650cd6/v0-deep-flow-coworking-website

## Architecture & Structure

### Page Hierarchy
- **App Router (Next.js 15):** All pages use the app directory structure
- **Landing:** `app/page.tsx` → Navbar + Hero + Footer  
- **Subpages:** `/about`, `/contact`, `/services` (and nested service routes)
- **Service routes:** Nested under `app/services/` (openspace, meeting-room, training-room, domiciliation)

### Component Organization
Components in `components/` are **client-side interactive** (use `"use client"`):
- `navbar.tsx` – Sticky navigation with mobile menu toggle & services dropdown
- `hero.tsx`, `about.tsx`, `pricing.tsx`, `services.tsx`, `contact.tsx` – Page sections
- `theme-provider.tsx` – Next-themes wrapper (dark mode support initialized but not yet used)
- `footer.tsx` – Global footer

**Styling:** Tailwind CSS with Radix UI primitives. Layout uses `max-w-7xl mx-auto px-4` pattern for responsive containers.

### Key Dependencies
- **UI:** Radix UI v1.2+ (26+ components imported), Lucide React icons, cmdk (command palette)
- **Forms:** React Hook Form + @hookform/resolvers (zod validation)
- **Date/Time:** date-fns v4.1.0
- **Carousel:** embla-carousel-react
- **Analytics:** @vercel/analytics

### Build & Deployment
```bash
npm run dev      # Start dev server (localhost:3000)
npm run build    # Next.js build (outputs to .next/)
npm start        # Start production server
npm run lint     # ESLint (checks entire repo)
```
**Note:** TypeScript build errors are ignored (`typescript.ignoreBuildErrors: true` in next.config.mjs); images are unoptimized for v0 compatibility.

## Critical Patterns & Conventions

### Client vs Server Components
- Page layouts (`layout.tsx`) are Server Components by default
- All interactive components must have `"use client"` at the top
- Analytics is server-rendered (imported in layout.tsx)

### Routing & Navigation
- Use Next.js `Link` for all internal navigation (not `<a>` tags)
- Service pages use nested routes: `/services/[service-name]/page.tsx`
- Mobile menu is state-managed within Navbar component (`useState` for menu/dropdown open states)

### Styling Conventions
- **Responsive:** Mobile-first breakpoints (hidden, sm:, md:, lg:)
- **Colors:** Use Tailwind semantic names (`text-primary`, `bg-white`, `border-gray-200`)
- **Spacing:** Consistent 8-unit grid (px-4, px-6, px-8, gap-4, gap-8)
- **Shadows:** `shadow-sm` for borders, `shadow-lg` for cards
- **Transitions:** `transition-colors duration-200` for interactive elements

### Import Path Alias
TypeScript path alias: `@/*` maps to repo root. Use `@/components/navbar` instead of relative imports.

## Development Workflows

### Adding a New Page
1. Create `app/[route]/page.tsx` file
2. Import necessary components or create inline content
3. Add route link to Navbar component
4. Use `max-w-7xl mx-auto px-4` wrapper for layout consistency

### Modifying Components
- Keep components under 200 lines; extract sub-sections into new components
- Add `"use client"` for any state management or event handlers
- Update Navbar's `navLinks` array when routes change (keep in sync with file structure)

### Styling New Elements
- Always use Tailwind utility classes (no CSS files except globals.css)
- Follow existing responsive breakpoint patterns
- Reference `components/navbar.tsx` & `components/hero.tsx` for complex layouts

## Important Notes

- **v0 Auto-Sync:** Changes from v0.app deployments auto-push to this repo; manual edits here are overwritten on next v0 deploy
- **TypeScript:** Errors are ignored in build; maintain strict mode locally (tsconfig.json)
- **No Backend:** This is a static marketing site; no API routes or server functions
- **Icon Library:** Use Lucide React icons (`import { IconName } from "lucide-react"`)
- **Metadata:** Update site title/description in `app/layout.tsx` metadata object

## Testing & Validation
- Run `npm run lint` before committing to catch ESLint issues
- Test mobile responsiveness (Navbar should collapse to hamburger menu)
- Verify all internal links work with `npm run dev`
