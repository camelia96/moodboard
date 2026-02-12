# Contributing to Design Playground

Welcome! This guide will help you add your own playground to the project. Don't worry if you're new to this - we'll walk through everything step by step.

## Overview

Contributing to Design Playground involves:

1. Setting up your local environment
2. Creating your playground using the starter template
3. Building your experiments
4. Testing locally
5. Submitting a pull request

## Prerequisites

Before you start, make sure you have:

- **Git** installed ([Download here](https://git-scm.com/downloads))
- **Node.js 18+** installed ([Download here](https://nodejs.org))
- **A code editor** (we recommend [VS Code](https://code.visualstudio.com))
- **A GitHub account** with access to the mosaic-design-system organization

## Step 1: Fork and Clone

1. **Fork the repository** (if not already done)
   - Visit the [repository on GitHub](https://github.com/mosaic-design-system/design-playground)
   - Click "Fork" in the top-right corner

2. **Clone your fork**
   ```bash
   git clone https://github.com/YOUR-USERNAME/design-playground.git
   cd design-playground
   ```

3. **Install dependencies**
   ```bash
   npm install
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```

   Visit `http://localhost:3000` to see the site running locally.

## Step 2: Create a New Branch

Always create a new branch for your changes:

```bash
git checkout -b add-my-playground
```

Use a descriptive branch name like `add-jane-playground` or `add-animation-experiments`.

## Step 3: Create Your Playground

### Copy the Starter Template

```bash
cp -r src/playgrounds/starter-template src/playgrounds/your-name
```

Replace `your-name` with your actual name (e.g., `jane-doe`). Use lowercase and hyphens.

### Update Your Metadata

Open `src/playgrounds/your-name/metadata.ts` and fill in your information:

```typescript
import { PlaygroundMetadata } from "@/types/playground";

export const metadata: PlaygroundMetadata = {
  name: "Jane Doe",
  slug: "jane-doe",
  title: "Jane's Creative Lab",
  description: "Exploring micro-interactions and playful UI patterns",
  avatar: "/avatars/jane-doe.jpg", // Optional
  tags: ["animations", "buttons", "interactions"],
  experiments: [
    {
      id: "hover-effects",
      title: "Hover Effects Collection",
      description: "Various button hover effects and transitions",
      component: "HoverEffects",
    },
  ],
};
```

**Tips:**
- `slug` should match your folder name
- `tags` help people find your work
- Add more experiments as you build them

### Create Your Components

1. **Create a component file** in `src/playgrounds/your-name/components/`:

   ```typescript
   // src/playgrounds/your-name/components/HoverEffects.tsx
   "use client";

   import { Button } from "@/components/ui/button";

   export function HoverEffects() {
     return (
       <div className="flex flex-col gap-6 p-8">
         <div>
           <h3 className="text-lg font-semibold mb-2">Hover Effects</h3>
           <p className="text-sm text-muted-foreground mb-4">
             Try hovering over these buttons
           </p>
         </div>

         <div className="flex gap-4">
           <Button className="transition-all hover:scale-110">
             Scale on Hover
           </Button>
           <Button className="relative overflow-hidden group">
             <span className="relative z-10">Slide Effect</span>
             <span className="absolute inset-0 bg-primary/20 translate-x-[-100%] group-hover:translate-x-0 transition-transform" />
           </Button>
         </div>
       </div>
     );
   }
   ```

2. **Use "use client" for interactive components**
   - Add `"use client"` at the top if you use state or event handlers

3. **Import shadcn/ui components**
   ```typescript
   import { Button } from "@/components/ui/button";
   import { Card, CardContent } from "@/components/ui/card";
   ```

4. **Import icons from lucide-react**
   ```typescript
   import { Heart, Star, Sparkles } from "lucide-react";
   ```

### Add Your Playground to the Registry

Open `src/lib/playgrounds.ts` and add your playground:

```typescript
import { metadata as exampleMetadata } from "@/playgrounds/example/metadata";
import { metadata as yourMetadata } from "@/playgrounds/your-name/metadata";

const playgroundRegistry: PlaygroundMetadata[] = [
  exampleMetadata,
  yourMetadata, // Add this line
];
```

### Register Your Components

Open `src/app/playground/[designer]/page.tsx` and add your components:

```typescript
// Add your imports
import { HoverEffects } from "@/playgrounds/your-name/components/HoverEffects";

// Add to the registry
const componentRegistry: Record<string, React.ComponentType> = {
  AnimatedButton,
  GradientCard,
  LoadingStates,
  HoverEffects, // Add this line
};
```

## Step 4: Test Locally

1. **Check the home page**
   - Visit `http://localhost:3000`
   - Your playground card should appear in the gallery

2. **Visit your playground**
   - Click on your playground card
   - Or navigate to `http://localhost:3000/playground/your-name`
   - All your experiments should be visible

3. **Test the build**
   ```bash
   npm run build
   ```

   Make sure there are no errors.

## Step 5: Optional - Add an Avatar

1. Add your photo to `public/avatars/your-name.jpg`
2. Update the `avatar` field in your metadata
3. Recommended size: 200x200px, keep file under 100KB

## Step 6: Commit Your Changes

1. **Check what's changed**
   ```bash
   git status
   ```

2. **Add your files**
   ```bash
   git add src/playgrounds/your-name
   git add src/lib/playgrounds.ts
   git add src/app/playground/[designer]/page.tsx
   git add public/avatars/your-name.jpg  # if you added one
   ```

3. **Commit with a clear message**
   ```bash
   git commit -m "Add Jane's playground with hover effects"
   ```

## Step 7: Push and Create Pull Request

1. **Push to your fork**
   ```bash
   git push origin add-my-playground
   ```

2. **Create a Pull Request**
   - Go to the repository on GitHub
   - Click "Compare & pull request"
   - Fill in the PR template:
     - Describe your playground
     - List your experiments
     - Add screenshots or GIFs if possible
   - Click "Create pull request"

3. **Wait for review**
   - A maintainer will review your PR
   - They may ask for changes
   - Once approved, your work will be merged!

## Tips for Great Experiments

### Use Tailwind Effectively

```typescript
// Hover effects
className="transition-all hover:scale-105 hover:shadow-lg"

// Animations
className="animate-spin"  // Built-in animation
className="animate-bounce"

// Gradients
className="bg-gradient-to-r from-blue-500 to-purple-600"

// Responsive design
className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
```

### Add Custom Animations

```typescript
// In your component
<div className="animate-[wiggle_1s_ease-in-out_infinite]">
  Wiggle animation
</div>
```

### Use shadcn/ui Components

Available components:
- Button, Card, Badge, Avatar
- Alert, Dialog, Popover, Tooltip
- Input, Select, Checkbox, Switch
- And many more at [ui.shadcn.com](https://ui.shadcn.com)

### Be Creative!

Some ideas:
- Button variations with different hover effects
- Card designs with gradients and animations
- Loading states and skeleton screens
- Form elements with custom styling
- Interactive toggles and switches
- Micro-interactions and transitions
- Color palette explorations
- Layout experiments

## Troubleshooting

### "Component not found" error

Make sure you:
1. Created the component file
2. Exported the component (use `export function ComponentName`)
3. Added it to `componentRegistry` in `page.tsx`
4. The component name in metadata matches exactly

### Build errors

Run:
```bash
npm run build
```

Fix any TypeScript or ESLint errors shown.

### Changes not appearing

1. Make sure the dev server is running
2. Try refreshing the browser
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

- Check existing playgrounds for examples
- Look at the starter template
- Ask in the team chat
- Open an issue on GitHub
- Read the [Next.js docs](https://nextjs.org/docs)
- Check [Tailwind CSS docs](https://tailwindcss.com/docs)

## Code Guidelines

- Use TypeScript for type safety
- Follow existing code style
- Keep components focused and simple
- Add comments for complex logic
- Use descriptive variable names
- Test your code before submitting

## What Happens Next?

1. A maintainer reviews your PR
2. You may be asked to make changes
3. Once approved, your PR is merged
4. Your playground goes live!
5. The team can see and learn from your work

## Ideas for Future Contributions

After your first playground:
- Add more experiments to your playground
- Try different animation libraries
- Experiment with 3D effects
- Build complex interactive components
- Create themed variations
- Add dark mode support
- Build responsive layouts

Happy building! We're excited to see what you create!
