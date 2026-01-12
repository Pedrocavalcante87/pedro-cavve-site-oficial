# Pedro Cavve Official Website - Development Instructions

## Project Overview

Professional one-page artist website for Pedro Cavve (R&B, Soul, Pop artist)

- Premium branding with dark, nocturnal aesthetic
- Next.js with App Router, React, Tailwind CSS
- Minimalist, elegant, emotional experience

## Development Status

- [x] Create copilot-instructions.md
- [x] Scaffold Next.js project
- [x] Configure Tailwind with custom dark palette
- [x] Create Hero component
- [x] Create Bio component
- [x] Create MusicHighlight component
- [x] Create Platforms component
- [x] Create Footer component
- [x] Integrate components into main page
- [x] Add subtle animations
- [x] Optimize for Vercel deployment
- [x] Create comprehensive documentation
- [x] Test build successfully

## Project Structure

```
app/              - Next.js App Router
components/       - React components
public/           - Static assets (add images here)
*.md             - Documentation files
```

## Key Files

- README.md - Main documentation
- CUSTOMIZATION.md - How to personalize content
- CONTENT-GUIDELINES.md - Content writing best practices
- TECHNICAL-SPECS.md - Technical specifications

## Design Rules

- Color palette: deep black, graphite gray, dark brown, midnight blue
- No bright colors, no generic linktree appearance
- Negative space is essential
- Subtle animations only (fade, slide, hover)
- Typography hierarchy must be clear
- Monochromatic social platform cards

## Stack

- Next.js 15+ (App Router)
- React 19
- TypeScript
- Tailwind CSS 3
- Ready for Vercel deployment

## Development

```bash
npm run dev    # Start dev server (localhost:3000)
npm run build  # Production build
npm start      # Run production build
```

## Next Steps

1. Add artist images to /public folder
2. Update links in components/Platforms.tsx
3. Personalize bio in components/Bio.tsx
4. Update single info in components/MusicHighlight.tsx
5. Deploy to Vercel
