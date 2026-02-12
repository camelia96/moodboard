# Contributing to Moodboard

Welcome! This guide will help you contribute features and improvements to Moodboard. Whether you're fixing bugs, adding new functionality, or improving existing features, we're excited to have your contributions!

## Overview

Contributing to Moodboard involves:

1. Setting up your local environment
2. Choosing a feature to work on
3. Building and testing your changes
4. Submitting a pull request
5. Responding to code review feedback

## Prerequisites

Before you start, make sure you have:

- **Git** installed ([Download here](https://git-scm.com/downloads))
- **Node.js 18+** installed ([Download here](https://nodejs.org))
- **A code editor** (we recommend [VS Code](https://code.visualstudio.com))
- **A GitHub account** with access to the mosaic-design-system organization

## Step 1: Fork and Clone

1. **Fork the repository** (if not already done)
   - Visit the [repository on GitHub](https://github.com/mosaic-design-system/moodboard)
   - Click "Fork" in the top-right corner

2. **Clone your fork**
   ```bash
   git clone https://github.com/YOUR-USERNAME/moodboard.git
   cd moodboard
   ```

3. **Install dependencies**
   ```bash
   npm install
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```

   Visit `http://localhost:3000` to see Moodboard running locally.

## Step 2: Choose What to Work On

### Beginner-Friendly Features

Perfect for your first contribution:

#### 1. Wire Up Add Inspiration Form ⭐ Good First Issue!

**What to do:** Make the "Add Inspiration" form functional so it saves new items to the JSON file.

**Files to modify:**
- `src/app/add/page.tsx` - Update form submission handler
- `src/data/inspiration.json` - This is where new items will be saved

**Steps:**
1. Remove the alert in the `handleSubmit` function
2. Create a function to read the current JSON file
3. Add the new item to the array
4. Write the updated JSON back to the file
5. Navigate to home page after successful submission

**Tip:** For now, use `fs` on the server side. In the future, we'll migrate to a real database.

#### 2. Add Search Functionality

**What to do:** Add a search bar to the home page that filters inspiration items.

**Files to modify:**
- `src/app/page.tsx` - Add search input and filtering logic
- `src/components/inspiration-grid.tsx` - Pass filtered items

**Steps:**
1. Add a search input above the grid
2. Use `useState` to track the search query
3. Use `searchItems(query)` from `src/lib/data.ts`
4. Display filtered results in the grid

#### 3. Add Category Filtering

**What to do:** Add category filter buttons/dropdown on the home page.

**Files to modify:**
- `src/app/page.tsx` - Add category filter UI and logic
- `src/lib/types.ts` - Reference the `Category` type

**Steps:**
1. Add filter buttons for each category
2. Use `useState` to track selected category
3. Use `getItemsByCategory(category)` from `src/lib/data.ts`
4. Display filtered results in the grid

#### 4. Add Tag Filtering

**What to do:** Make tags clickable to filter by that tag.

**Files to modify:**
- `src/app/page.tsx` - Add tag filtering logic
- `src/components/inspiration-card.tsx` - Make tags clickable

**Steps:**
1. Make tags in cards clickable (Link or button)
2. Pass selected tag to home page via URL params
3. Use `getItemsByTag(tag)` from `src/lib/data.ts`
4. Display filtered results

### Intermediate Features

#### 5. Add Collections/Boards

**What to do:** Allow users to create collections and organize inspiration items into boards.

**New files to create:**
- `src/lib/collections.ts` - Collection data functions
- `src/data/collections.json` - Collection storage
- `src/app/collections/page.tsx` - Collections list page
- `src/app/collections/[id]/page.tsx` - Individual collection page

#### 6. Add Favorites System

**What to do:** Let users mark items as favorites.

**Files to modify:**
- `src/lib/types.ts` - Add `isFavorited` property
- `src/components/inspiration-card.tsx` - Add favorite button
- Storage for favorite state (localStorage or JSON file)

#### 7. Add Image Upload

**What to do:** Allow users to upload images instead of only using URLs.

**Files to modify:**
- `src/app/add/page.tsx` - Add file input
- Create API route for file upload: `src/app/api/upload/route.ts`
- Store images in `public/uploads/`

### Advanced Features

#### 8. Migrate to Database

**What to do:** Replace JSON file storage with a real database (SQLite, PostgreSQL, etc.).

**Steps:**
1. Choose a database (recommend starting with SQLite for simplicity)
2. Set up database schema
3. Create migration from JSON to database
4. Update all data functions in `src/lib/data.ts`
5. Add database client configuration

#### 9. Add User Authentication

**What to do:** Add login/signup so users can track their own contributions.

**Recommended:** Use NextAuth.js or Clerk

**Steps:**
1. Set up authentication provider
2. Add login/signup pages
3. Protect routes that require authentication
4. Associate inspiration items with users

#### 10. Add Sharing Functionality

**What to do:** Generate shareable links for items or collections.

**Steps:**
1. Create shareable URL structure
2. Add "Share" button to items
3. Generate and copy share links
4. Optional: Add social media share buttons

## Step 3: Create a New Branch

Always create a new branch for your changes:

```bash
git checkout -b feature/add-search
```

Use descriptive branch names:
- `feature/add-search` for new features
- `fix/broken-image` for bug fixes
- `docs/update-readme` for documentation
- `refactor/data-layer` for refactoring

## Step 4: Build Your Feature

### Code Guidelines

#### File Structure

```
src/
├── app/              # Next.js pages and routes
├── components/       # React components
├── lib/             # Utility functions and business logic
└── data/            # JSON data storage (temporary)
```

#### TypeScript Best Practices

- Use existing types from `src/lib/types.ts`
- Create new types when needed
- Avoid `any` type
- Use type inference when possible

```typescript
// Good
const items: InspirationItem[] = getAllItems();

// Bad
const items: any = getAllItems();
```

#### Component Patterns

1. **Use "use client" for interactive components**
   ```typescript
   "use client";

   import { useState } from "react";
   ```

2. **Import UI components from shadcn/ui**
   ```typescript
   import { Button } from "@/components/ui/button";
   import { Card, CardContent } from "@/components/ui/card";
   ```

3. **Use icons from lucide-react**
   ```typescript
   import { Search, Filter, Heart } from "lucide-react";
   ```

#### Styling with Tailwind

```typescript
// Responsive design
className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"

// Hover effects
className="transition-all duration-300 hover:scale-105 hover:shadow-lg"

// Dark mode support
className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
```

### Data Management

**Current approach (JSON file):**
- Read/write to `src/data/inspiration.json`
- Use functions from `src/lib/data.ts`
- Keep functions pure and predictable

**Future approach (Database):**
- Once we migrate to a database, update functions in `src/lib/data.ts`
- Keep the same function signatures so components don't break

### Testing Your Changes

1. **Test in development**
   ```bash
   npm run dev
   ```
   - Test all user interactions
   - Check responsive design (mobile, tablet, desktop)
   - Verify no console errors

2. **Test the build**
   ```bash
   npm run build
   ```
   - Fix any TypeScript errors
   - Fix any linting errors

3. **Test in production mode**
   ```bash
   npm start
   ```

## Step 5: Commit Your Changes

1. **Check what's changed**
   ```bash
   git status
   ```

2. **Stage your files**
   ```bash
   git add src/app/page.tsx
   git add src/components/search-bar.tsx
   ```

3. **Commit with a clear message**
   ```bash
   git commit -m "Add search functionality to filter inspiration items"
   ```

**Good commit messages:**
- "Add search bar to home page"
- "Fix broken image links in inspiration cards"
- "Refactor data functions for better performance"

**Bad commit messages:**
- "Update files"
- "Fix stuff"
- "WIP"

## Step 6: Push and Create Pull Request

1. **Push to your fork**
   ```bash
   git push origin feature/add-search
   ```

2. **Create a Pull Request**
   - Go to the repository on GitHub
   - Click "Compare & pull request"
   - Fill in the PR template:
     - **Type of change:** Feature / Bug fix / Documentation / Refactor
     - **Description:** What does this PR do?
     - **Testing:** How did you test this?
     - **Screenshots:** Add before/after images if applicable
   - Click "Create pull request"

3. **Wait for review**
   - A maintainer will review your PR
   - They may ask questions or request changes
   - Respond to feedback and make updates
   - Once approved, your work will be merged!

## Code Review Process

### What Reviewers Look For

- **Functionality:** Does it work as expected?
- **Code Quality:** Is it readable and maintainable?
- **Type Safety:** Are TypeScript types used correctly?
- **Performance:** Does it perform well?
- **Accessibility:** Is it usable for everyone?
- **Mobile Responsive:** Does it work on all screen sizes?

### Responding to Feedback

- Be open to suggestions
- Ask questions if something is unclear
- Make requested changes promptly
- Thank reviewers for their time

## Troubleshooting

### Build errors

```bash
npm run build
```

Fix any TypeScript or ESLint errors shown.

### Type errors

- Check that you're using the correct types from `src/lib/types.ts`
- Make sure all imports are correct
- Use TypeScript's inference when possible

### Changes not appearing

1. Make sure the dev server is running
2. Try refreshing the browser (hard refresh: Cmd+Shift+R / Ctrl+Shift+R)
3. Check the terminal for errors
4. Restart the dev server if needed

### Git conflicts

If you get merge conflicts:
```bash
git fetch origin
git rebase origin/main
```

Follow the prompts to resolve conflicts.

## Getting Help

- Check existing code for examples
- Ask in the team chat
- Open an issue on GitHub
- Read the documentation:
  - [Next.js docs](https://nextjs.org/docs)
  - [Tailwind CSS docs](https://tailwindcss.com/docs)
  - [shadcn/ui components](https://ui.shadcn.com)

## Feature Ideas

Looking for something to work on? Here's a prioritized list:

### High Priority
1. ✅ Wire up add form to save to JSON
2. 🔍 Add search functionality
3. 🏷️ Add tag filtering
4. 🎨 Add category filtering
5. 🌙 Add dark mode toggle

### Medium Priority
6. 📁 Add collections/boards
7. ❤️ Add favorites system
8. 🖼️ Add image upload
9. 📱 Improve mobile experience
10. ⌨️ Add keyboard navigation

### Low Priority / Future
11. 🗄️ Migrate to real database
12. 🔐 Add user authentication
13. 🔗 Add shareable links
14. 📊 Add analytics dashboard
15. 🎯 Add AI tag suggestions
16. 🌍 Add multi-language support
17. 📥 Add bulk import
18. 📤 Add export functionality

## What Happens Next?

1. A maintainer reviews your PR
2. You may be asked to make changes
3. Once approved, your PR is merged to main
4. Your feature goes live!
5. The team can use and enjoy your contribution

## Recognition

All contributors will be:
- Listed in the project's contributors
- Credited in release notes
- Celebrated in team updates

Thank you for contributing to Moodboard! Your work helps make this tool better for everyone on the team.

---

Happy building! We're excited to see what you create!
