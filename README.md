# Design Playground

A collaborative space for design experiments and creative UI explorations. Built for the Mosaic Design System team to learn, experiment, and share creative work.

## What is this?

Design Playground is a place where designers can:

- 🎨 Experiment with UI components and patterns
- ✨ Create and share animations and micro-interactions
- 🚀 Practice modern web development with Next.js, Tailwind, and shadcn/ui
- 🤝 Learn Git workflows and pull request submissions
- 💡 Get creative without constraints

Each team member gets their own "playground" - a dedicated space to showcase their experiments. The main branch is protected, and all contributions go through pull requests for learning and collaboration.

## Tech Stack

- **[Next.js 14](https://nextjs.org)** - React framework with App Router
- **[TypeScript](https://www.typescriptlang.org)** - Type-safe JavaScript
- **[Tailwind CSS](https://tailwindcss.com)** - Utility-first styling
- **[shadcn/ui](https://ui.shadcn.com)** - High-quality component library
- **[Lucide Icons](https://lucide.dev)** - Beautiful icon library

## Getting Started

### Prerequisites

- Node.js 18+ installed
- Git installed
- A code editor (VS Code recommended)

### Local Development

1. **Clone the repository**

   ```bash
   git clone https://github.com/mosaic-design-system/design-playground.git
   cd design-playground
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Run the development server**

   ```bash
   npm run dev
   ```

4. **Open your browser**

   Visit [http://localhost:3000](http://localhost:3000) to see the site.

### Making Changes

The development server has hot reload - your changes will appear instantly as you edit files.

## Project Structure

```
design-playground/
├── src/
│   ├── app/                    # Next.js app routes
│   │   ├── page.tsx           # Home page
│   │   └── playground/
│   │       ├── page.tsx       # Playgrounds directory
│   │       └── [designer]/
│   │           └── page.tsx   # Individual playground page
│   ├── components/
│   │   ├── ui/                # shadcn/ui components
│   │   ├── nav.tsx           # Navigation
│   │   └── playground-card.tsx
│   ├── lib/
│   │   ├── utils.ts          # Utility functions
│   │   └── playgrounds.ts    # Playground registry
│   ├── playgrounds/
│   │   ├── example/          # Example playground
│   │   └── starter-template/ # Template for new playgrounds
│   └── types/
│       └── playground.ts     # TypeScript types
├── public/
│   └── avatars/              # Profile images
└── docs/
    └── CONTRIBUTING.md       # Contribution guide
```

## Contributing

We welcome contributions from all team members! Here's how to add your playground:

1. **Read the contribution guide**: [CONTRIBUTING.md](docs/CONTRIBUTING.md)
2. **Copy the starter template**: `src/playgrounds/starter-template`
3. **Create your experiments**: Build creative components
4. **Submit a pull request**: Share your work with the team

See the full guide in [docs/CONTRIBUTING.md](docs/CONTRIBUTING.md) for detailed instructions.

## Example Playgrounds

Check out the example playground to see what's possible:

- **Animated Buttons** - Hover effects and transitions
- **Gradient Cards** - Animated gradient backgrounds
- **Loading States** - Various loading animations

Browse all playgrounds at `/playground` or click through the gallery on the home page.

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## Learning Resources

New to these technologies? Check out these resources:

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [shadcn/ui Components](https://ui.shadcn.com)
- [TypeScript Handbook](https://www.typescriptlang.org/docs)
- [Git Basics](https://git-scm.com/book/en/v2/Getting-Started-Git-Basics)

## Questions or Issues?

- Open an issue on GitHub
- Ask in the team channel
- Check the [CONTRIBUTING.md](docs/CONTRIBUTING.md) guide

## License

This project is for internal use by the Mosaic Design System team.

---

Built with ❤️ by the Mosaic Design System team
