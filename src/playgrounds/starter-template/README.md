# Starter Template

This is a template to help you create your own playground. Follow these steps to get started:

## Quick Start

1. **Copy this template folder**
   ```bash
   cp -r src/playgrounds/starter-template src/playgrounds/your-name
   ```

2. **Update the metadata**
   - Edit `metadata.ts` with your information
   - Update your name, slug, title, description, and tags
   - Define your experiments

3. **Create your components**
   - Add your components in the `components/` folder
   - You can rename `MyFirstComponent.tsx` or create new files
   - Make sure component names match what you list in `metadata.ts`

4. **Register your playground**
   - Open `src/lib/playgrounds.ts`
   - Import your metadata
   - Add it to the `playgroundRegistry` array

5. **Register your components**
   - Open `src/app/playground/[designer]/page.tsx`
   - Import your components
   - Add them to the `componentRegistry` object

6. **Test locally**
   ```bash
   npm run dev
   ```
   Visit `http://localhost:3000` to see your playground!

7. **Submit a pull request**
   See [CONTRIBUTING.md](../../../docs/CONTRIBUTING.md) for full details

## What You Can Build

- 🎨 UI component variations (buttons, cards, forms)
- ✨ Animations and micro-interactions
- 🎭 Loading states and transitions
- 📐 Layout experiments
- 🌈 Color and gradient explorations
- 🎪 Interactive elements
- 💫 Creative effects and patterns

## Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [shadcn/ui Components](https://ui.shadcn.com)
- [Lucide Icons](https://lucide.dev)

Have fun building!
