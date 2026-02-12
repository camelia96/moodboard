# Moodboard Transformation - Continuation Plan

## Current Status: 40% Complete

We're transforming the Design Playground into Moodboard - a collaborative mood board app where the team builds features together.

---

## ✅ Completed Work

### 1. Data Layer (100% Complete)
- ✅ Created `src/lib/types.ts` - TypeScript interfaces for inspiration items
- ✅ Created `src/data/inspiration.json` - 5 example inspiration items with Unsplash images
- ✅ Created `src/lib/data.ts` - Data management functions (getAllItems, getItemById, search, filtering)
- ✅ Created directories: `src/data/` and `public/uploads/`

### 2. Cleanup (100% Complete)
- ✅ Deleted `src/app/playground/` directory
- ✅ Deleted `src/playgrounds/` directory
- ✅ Deleted `src/components/playground-card.tsx`
- ✅ Deleted `src/lib/playgrounds.ts`
- ✅ Deleted `src/types/` directory

### 3. Form Components (100% Complete)
- ✅ Installed shadcn/ui components: input, textarea, select, label

---

## 🚧 Remaining Work

### Priority 1: Core UI Components (30 min)

**1. Create `src/components/inspiration-card.tsx`**
```typescript
// Card component to display individual inspiration items
// Features:
// - Image display with aspect ratio
// - Title and tags
// - Hover effect showing description
// - Click to navigate to detail page
// - Category badge
// - Smooth animations
```

**2. Create `src/components/inspiration-grid.tsx`**
```typescript
// Grid layout component
// Features:
// - Responsive grid (1 col mobile, 2 tablet, 3+ desktop)
// - Maps through items array
// - Renders InspirationCard for each item
// - Empty state when no items
```

### Priority 2: Pages (45 min)

**3. Update `src/app/page.tsx`**
```typescript
// Replace current content with Moodboard home page
// Features:
// - Hero section explaining "Moodboard"
// - InspirationGrid component showing all items
// - "Add Inspiration" CTA button
// - Clean, visual layout
```

**4. Create `src/app/add/page.tsx`**
```typescript
// Add new inspiration item page
// Features:
// - Form with all fields (title, description, image URL, link, tags, category)
// - Success message after submission
// - Navigate back to home after adding
// Note: For v1, just show a message that form submission isn't wired up yet
// (Good first issue for the team!)
```

**5. Create `src/app/item/[id]/page.tsx`**
```typescript
// Individual item detail page
// Features:
// - Large image display
// - Full title and description
// - Tags as badges
// - Category badge
// - "Visit Link" button if URL exists
// - "Back to Home" button
// - Date and contributor info
```

### Priority 3: Navigation & Branding (15 min)

**6. Update `src/components/nav.tsx`**
```typescript
// Update navigation
// Changes:
// - Logo text: "Design Playground" → "Moodboard"
// - Remove "Playgrounds" link
// - Add "Add Inspiration" link
// - Keep GitHub link
// - Update GitHub URL to mention moodboard
```

**7. Update `src/app/layout.tsx`**
```typescript
// Update metadata and footer
// Changes:
// - Title: "Design Playground" → "Moodboard"
// - Description: Update to describe mood board app
// - Footer: Update description
```

### Priority 4: Documentation (30 min)

**8. Update `README.md`**
Complete rewrite describing Moodboard:
- What is Moodboard
- How to add inspiration items
- How to contribute features (not individual playgrounds)
- Feature ideas for PRs
- Screenshots of the app

**9. Update `docs/CONTRIBUTING.md`**
Complete rewrite for feature contributions:
- How to add new features
- List of feature ideas (search, filtering, dark mode, collections, etc.)
- Code patterns and style guide
- Testing guidelines

**10. Update `.github/PULL_REQUEST_TEMPLATE.md`**
Update for feature PRs:
- Change from "playground submission" to "feature PR"
- Update checklist items
- Add "Type of change" section

### Priority 5: Testing & Commit (15 min)

**11. Test locally**
- Start dev server
- Verify home page displays inspiration grid
- Check navigation works
- Verify no console errors
- Test responsive design

**12. Run build**
```bash
npm run build
```
- Ensure build succeeds
- Fix any TypeScript errors

**13. Create commit**
```bash
git add -A
git commit -m "Transform Design Playground into Moodboard

- Remove playground system (individual designer spaces)
- Add mood board/inspiration system (collaborative features)
- Create data layer with types, JSON storage, and management functions
- Add 5 example inspiration items
- Install form components (input, textarea, select, label)

Breaking Changes:
- Removed /playground routes
- Removed playground components and types
- Changed from individual spaces to shared app

Next Steps:
- Add UI components (inspiration-card, inspiration-grid)
- Create pages (home, add, item detail)
- Update branding and navigation
- Update documentation

Co-Authored-By: Claude Opus 4.6 <noreply@anthropic.com>"
```

---

## 📋 Implementation Details

### InspirationCard Component Structure
```typescript
interface InspirationCardProps {
  item: InspirationItem;
}

// Features to implement:
// 1. Card wrapper with hover effects
// 2. Image with aspect ratio (use Next.js Image)
// 3. Overlay on hover showing description
// 4. Tags as small badges
// 5. Category badge in corner
// 6. Click handler to navigate to /item/[id]
// 7. Smooth transitions
```

### InspirationGrid Component Structure
```typescript
interface InspirationGridProps {
  items: InspirationItem[];
}

// Grid layout:
// - grid-cols-1 (mobile)
// - sm:grid-cols-2 (tablet)
// - lg:grid-cols-3 (desktop)
// - xl:grid-cols-4 (large desktop)
// - gap-6 between items
// - Auto-fit for responsive
```

### Home Page Structure
```typescript
// Layout:
// 1. Hero section (text-center, max-w-3xl)
//    - Title: "Moodboard"
//    - Description: "Collaborative inspiration tool"
//    - "Add Inspiration" button → /add
// 2. InspirationGrid with all items from getAllItems()
// 3. Optional: Empty state if no items
```

### Add Page Structure
```typescript
// Form fields:
// 1. Title (required, input)
// 2. Description (required, textarea)
// 3. Image URL (required, input)
// 4. Link URL (optional, input)
// 5. Tags (required, input - comma separated)
// 6. Category (required, select dropdown)
// 7. Submit button

// For v1: Show message "Coming soon! This will be a great first PR for the team"
// Don't implement actual form submission yet
```

### Item Detail Page Structure
```typescript
// Layout:
// 1. Back button (top-left)
// 2. Large image (max-w-4xl, centered)
// 3. Title (text-3xl, font-bold)
// 4. Description
// 5. Tags (flex wrap of badges)
// 6. Category badge
// 7. Visit Link button (if URL exists)
// 8. Meta info (date added, contributor)
```

---

## 🎨 Design Patterns to Follow

### Colors & Styling
- Use existing shadcn/ui theme colors
- Primary color for CTAs and highlights
- Muted colors for metadata
- Card component styles from shadcn

### Spacing
- Consistent padding: p-6 for cards, p-8 for sections
- Gap between grid items: gap-6
- Max widths: max-w-7xl for containers

### Typography
- Headings: font-bold tracking-tight
- Body: text-base text-muted-foreground
- Meta info: text-sm text-muted-foreground

### Animations
- Hover effects: transition-all duration-300
- Scale on hover: hover:scale-105
- Shadow on hover: hover:shadow-lg

---

## 🔍 Key Files Reference

**Data Files:**
- `/src/lib/types.ts` - Type definitions
- `/src/data/inspiration.json` - Data store (5 items)
- `/src/lib/data.ts` - Data functions

**Existing Infrastructure:**
- `/src/app/layout.tsx` - Root layout (needs branding update)
- `/src/components/nav.tsx` - Navigation (needs update)
- `/src/components/ui/` - shadcn components (ready to use)

**To Create:**
- `/src/components/inspiration-card.tsx`
- `/src/components/inspiration-grid.tsx`
- `/src/app/page.tsx` (replace existing)
- `/src/app/add/page.tsx`
- `/src/app/item/[id]/page.tsx`

---

## 📦 Example Inspiration Items

The JSON file has 5 items:
1. Gradient Button Animation (UI Design)
2. Typography Pairing: Playfair & Inter (Typography)
3. Ocean Color Palette (Color)
4. Playful Character Illustration (Illustration)
5. Clean Dashboard Layout (UI Design)

All use Unsplash images that load quickly and look professional.

---

## ⚡ Quick Start Commands

```bash
# Resume development
cd design-playground
npm run dev

# Check current structure
ls -la src/

# View data
cat src/data/inspiration.json

# Test build
npm run build
```

---

## 🎯 Success Criteria

The transformation is complete when:
- ✅ Home page displays grid of inspiration items
- ✅ Clicking an item shows detail page
- ✅ "Add Inspiration" link goes to add page (even if form isn't functional)
- ✅ Navigation and branding say "Moodboard"
- ✅ Documentation describes the new app and feature contributions
- ✅ Build succeeds with no errors
- ✅ Mobile responsive
- ✅ Clean commit pushed to Git

---

## 💡 Notes

**Why leave add form non-functional?**
- Makes a perfect "good first issue" for the team
- They learn to wire up forms and data persistence
- Sets the pattern for future contributions

**Feature ideas for team to add later:**
1. Wire up add form to write to JSON
2. Add search functionality
3. Add filtering by category/tags
4. Add dark mode
5. Add collections/boards
6. Migrate to real database
7. Add user authentication
8. Add image upload (vs URL only)
9. Add favorites/likes
10. Add sharing functionality

---

**Estimated remaining time:** ~2 hours
**Current status:** Data layer complete, ready to build UI
**Next action:** Create inspiration-card.tsx component
