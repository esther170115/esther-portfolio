# Copilot Instructions for Esther's Portfolio

## Project Overview
A bilingual (EN/ZH) portfolio website showcasing ops automation and data validation expertise. Built with Next.js 16 + React 19, styled with Tailwind CSS v4 and animated with Framer Motion.

## Architecture

### Stack & Key Dependencies
- **Framework**: Next.js 16.1.6 (App Router in `app/` directory)
- **UI**: React 19.2.3, Tailwind CSS v4 + PostCSS
- **Animation**: Framer Motion
- **Icons**: Lucide React
- **Language**: TypeScript (strict mode)

### Single-Page Component Structure
The entire site is built in [app/page.tsx](app/page.tsx) as a single ~790-line file with section components:
- `TopNav` - sticky navigation with language toggle
- `Hero` - introduction and key metrics
- `Projects` - project showcase with active state (4 projects: Clarity Gate, GateKey AI, FileSmith AI, Sherlock)
- `Skills` - capabilities grouped into 3 categories (Automation, Data, Engineering)
- `Contact` - contact info and next steps

**Important**: All content is client-side rendered. Projects, metrics, and links are stored as data objects (`PROJECTS`, `METRICS`, `LINKS`) at the top of the file.

## Key Patterns & Conventions

### Styling & Layout
- **Class utility**: Custom `classNames(...xs)` helper function (not npm package) concatenates classes with filtering at line ~125
- **Responsive grid**: Heavy use of `lg:grid-cols-X` and `sm:px-X` for mobile-first design
- **Glassmorphism**: White/10 and white/5 opacity borders and backgrounds throughout
- **Gradient containers**: Projects use dynamic gradient backgrounds via `${project.gradient}` classes

### State & Language
- Single language state: `const [lang, setLang] = useState("zh")` in main Portfolio component
- Pattern: Ternary expressions for EN/ZH content (`lang === "zh" ? "中文" : "English"`)
- Language toggle button in TopNav updates parent state and cascades to all child components

### Animations
- Framer Motion `<motion.div>` for entry animations (opacity + y-axis transformations)
- Common pattern: `initial={{ opacity: 0, y: 12 }}` → `animate={{ opacity: 1, y: 0 }}` with `delay` staggering
- Smooth project detail transitions using `key={activeProject.id}` and `motion.div`

### Reusable Components
- `<Pill>` - inline badge styling (white/5 bg, white/10 border)
- `<SectionTitle>` - section headers with eyebrow text, title, description
- Both use Tailwind classes and Lucide icons for consistency

### Data Structure (example from PROJECTS)
```tsx
{
  id: "clarify-gate",         // Used for state key
  title: "Clarity Gate",       // Display name
  subtitle: "...",
  icon: ShieldCheck,          // Lucide icon component
  tags: ["tag1", "tag2"],     // Shown in preview
  problem: "...",             // Detailed description
  solution: "...",
  impact: [...],              // Bullet list
  stack: [...],               // Tech pills
  gradient: "from-indigo-500/20 via-sky-500/10 to-transparent"  // Dynamic bg gradient
}
```

## Developer Workflows

### Development
```bash
npm run dev      # Start Next.js dev server (localhost:3000)
npm run build    # Production build
npm start        # Run production server
npm run lint     # ESLint check (uses next/core-web-vitals + typescript)
```

### Code Quality
- **ESLint Config**: [eslint.config.mjs](eslint.config.mjs) uses Next.js recommended rules
- **TypeScript**: Strict mode enabled; global Tailwind path aliases `@/*` → root
- **PostCSS**: Minimal config for Tailwind v4 plugin

## Common Editing Tasks

### Add/Update Project
1. Add object to `PROJECTS` array (~line 40) with above data structure
2. Ensure `id` is unique (used for state key)
3. Import icon from lucide-react if new
4. Update `LINKS` object for email/LinkedIn/GitHub endpoints

### Update Skills Section
Edit `groups` array in `Skills()` component (line ~675). Structure:
```tsx
{
  title: "Category",
  items: ["skill 1", "skill 2", ...]
}
```

### Change Colors/Gradients
- Glassmorphism: Search `white/5` and `white/10` (opacity values)
- Accent buttons: White background with `text-black`
- Project gradients: Stored in `PROJECTS[].gradient` (Tailwind gradient classes)

### Bilingual Content
Add Chinese and English versions in ternary: `{lang === "zh" ? "中文" : "English"}`

## No-Go Patterns
- ❌ **Do NOT** create separate component files or use complex folder structure
- ❌ **Do NOT** add new npm dependencies without discussion
- ❌ **Do NOT** use CSS-in-JS or inline styles (stays pure Tailwind)
- ❌ **Do NOT** refactor large sections without preserving animation/state logic

## Integration Points
- **External**: Email link in LINKS, LinkedIn/GitHub URLs (currently placeholders)
- **Self-contained**: No API routes, databases, or backend integration
- **Screenshot placeholders**: Aspect ratio `16/9`, dimensions noted as "1200×700"

## Tips for Productivity
1. Keep components as-is; edit data objects and content strings instead
2. Use Tailwind's responsive prefixes (`sm:`, `lg:`, etc.) for layout changes
3. Test language toggle to ensure both EN/ZH render correctly
4. Run `npm run lint` before committing to catch unused imports
5. Reference existing project cards when adding new ones—copy structure and adjust text/metrics

