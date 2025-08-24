# Dealsdee Project - Claude Instructions

## Development Setup

### Port Configuration
- **Development server**: Always use port 8000 (`npm run dev` runs on http://localhost:8000)
- **Production server**: Also configured to use port 8000 (`npm start` runs on port 8000)

### Commands to Run
- `npm run dev` - Start development server on port 8000
- `npm run build` - Build the project
- `npm start` - Start production server on port 8000
- `npm run lint` - Run ESLint

## Project Structure

### Key Directories
- `/app/components/` - Reusable UI components
- `/app/content/` - Markdown files for articles/reviews
- `/app/lib/` - Utility functions
- `/app/(pages)/` - Route group for main pages

### Important Components
- `Layout.tsx` - Main layout with Header and Footer
- `Header.tsx` - Navigation with mobile hamburger menu
- `Footer.tsx` - Site footer with policy links
- `Button.tsx` - Primary and secondary button variants
- `Card.tsx` - Card component for article previews

### Page Templates
- Homepage: `/app/(pages)/page.tsx`
- Article/Review: `/app/(pages)/reviews/[slug]/page.tsx`
- Category: `/app/(pages)/category/[slug]/page.tsx`
- 404 Page: `/app/not-found.tsx`

### Design System
- Primary color: #111827 (Near Black)
- Accent color: #F97316 (Bright Orange) - for CTAs
- Background: #F9FAFB (Off-white)
- Text Primary: #1F2937 (Dark Gray)
- Text Secondary: #6B7280 (Medium Gray)
- Font: Inter (18px body text, various heading sizes)

### Content Management
- Reviews stored in `/app/content/reviews/` as MDX files
- Sample review: `sample-review.mdx` with full frontmatter structure
- Frontmatter includes: title, slug, date, author, category, score, featuredImage, pros, cons, affiliate links

### Features Implemented
- Responsive design (Mobile-First)
- Accessibility features (keyboard navigation, focus states, ARIA labels)
- SEO optimization (generateMetadata functions)
- Loading skeletons for all dynamic pages
- Sticky sidebar "Magic Box" on desktop article pages
- Mobile hamburger menu
- MDX support for content

### Testing Pages
- Homepage: http://localhost:8000
- Sample Review: http://localhost:8000/reviews/sample-review
- Category Example: http://localhost:8000/category/office-chairs
- 404 Test: http://localhost:8000/non-existent-page

## Notes for Claude
- Always use port 8000 for development
- Follow the established Design System colors and typography
- Maintain accessibility standards
- Use semantic HTML throughout
- All images should use Next.js Image component when implemented