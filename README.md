# Moodboard

A collaborative mood board application for collecting and sharing visual design inspiration. Built for the Mosaic Design System team to curate, discover, and get inspired by beautiful design.

## What is Moodboard?

Moodboard is a team inspiration hub where designers can:

- 🎨 **Collect Visual Inspiration** - Save UI designs, color palettes, typography, and illustrations
- 🔍 **Discover Ideas** - Browse curated design inspiration from the team
- 🏷️ **Organize by Tags** - Categorize and find inspiration with tags and categories
- 🤝 **Build Features Together** - Contribute new functionality through pull requests
- 💡 **Stay Inspired** - Keep a living collection of ideas that spark creativity

Unlike traditional mood board tools, Moodboard is collaborative and customizable. The team can add features, improve search, build collections, and shape the tool to fit our workflow.

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
   git clone https://github.com/mosaic-design-system/moodboard.git
   cd moodboard
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

   Visit [http://localhost:3000](http://localhost:3000) to see Moodboard.

### Making Changes

The development server has hot reload - your changes will appear instantly as you edit files.

## Project Structure

```
moodboard/
├── src/
│   ├── app/                     # Next.js app routes
│   │   ├── page.tsx            # Home page (inspiration gallery)
│   │   ├── add/
│   │   │   └── page.tsx        # Add new inspiration
│   │   └── item/[id]/
│   │       └── page.tsx        # Individual item detail page
│   ├── components/
│   │   ├── ui/                 # shadcn/ui components
│   │   ├── nav.tsx            # Navigation
│   │   ├── inspiration-card.tsx
│   │   └── inspiration-grid.tsx
│   ├── lib/
│   │   ├── utils.ts           # Utility functions
│   │   ├── types.ts           # TypeScript interfaces
│   │   └── data.ts            # Data management functions
│   └── data/
│       └── inspiration.json   # Inspiration items storage
├── public/
│   └── uploads/               # User-uploaded images (future)
└── docs/
    └── CONTRIBUTING.md        # Contribution guide
```

## How to Add Inspiration

Currently, inspiration items are stored in `src/data/inspiration.json`. To add a new item:

1. Open `src/data/inspiration.json`
2. Add a new object following this structure:

```json
{
  "id": "6",
  "title": "Your Inspiration Title",
  "description": "Detailed description of what makes this inspiring...",
  "image": "https://images.unsplash.com/photo-...",
  "url": "https://source-link.com",
  "tags": ["tag1", "tag2", "tag3"],
  "category": "UI Design",
  "dateAdded": "2024-02-12",
  "addedBy": "Your Name"
}
```

**Categories:** UI Design, Illustration, Typography, Color, Photography, Other

**Pro tip:** Use [Unsplash](https://unsplash.com) for high-quality, free images!

## Contributing Features

Moodboard is built collaboratively. We encourage the team to add new features and improvements! Here are some ideas:

### Feature Ideas (Great for PRs!)

**Beginner-Friendly:**
- ✅ Wire up the "Add Inspiration" form to save to JSON
- 🔍 Add search functionality to filter items
- 🏷️ Add tag filtering on the home page
- 🎨 Add category filtering
- 🌙 Add dark mode toggle

**Intermediate:**
- 📁 Add collections/boards feature
- ❤️ Add favorites/likes system
- 🖼️ Add image upload (instead of URL only)
- 📱 Improve mobile responsive design
- ⌨️ Add keyboard navigation

**Advanced:**
- 🗄️ Migrate from JSON to a real database (SQLite, PostgreSQL, etc.)
- 🔐 Add user authentication
- 🔗 Add shareable links for individual items or collections
- 📊 Add analytics (most liked, most viewed, etc.)
- 🎯 Add AI-powered tag suggestions

See [docs/CONTRIBUTING.md](docs/CONTRIBUTING.md) for detailed contribution guidelines.

## Data Structure

### InspirationItem Interface

```typescript
interface InspirationItem {
  id: string;
  title: string;
  description: string;
  image: string;        // URL or path
  url?: string;         // External source link
  tags: string[];
  category: Category;   // UI Design | Illustration | Typography | Color | Photography | Other
  dateAdded: string;    // ISO date string
  addedBy: string;      // GitHub username or name
}
```

### Available Functions

Located in `src/lib/data.ts`:

- `getAllItems()` - Get all inspiration items
- `getItemById(id)` - Get single item by ID
- `getItemsByTag(tag)` - Filter by tag
- `getItemsByCategory(category)` - Filter by category
- `getAllTags()` - Get all unique tags
- `searchItems(query)` - Search titles, descriptions, and tags

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## Example Inspiration Items

Moodboard comes with 5 example items:

1. **Gradient Button Animation** - UI Design with hover effects
2. **Typography Pairing: Playfair & Inter** - Font combinations
3. **Ocean Color Palette** - Calming blue color scheme
4. **Playful Character Illustration** - Bold illustration style
5. **Clean Dashboard Layout** - Modern dashboard design

Browse them at [http://localhost:3000](http://localhost:3000) after starting the dev server!

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

## Roadmap

**v1.0 (Current)** - Basic mood board functionality
- ✅ Display inspiration grid
- ✅ View individual items
- ✅ Add form UI (submission not wired)

**v1.1 (Next)** - Enhanced functionality
- 🚧 Wire up add form
- 🚧 Add search
- 🚧 Add filtering

**v2.0 (Future)** - Advanced features
- 🔮 Collections/boards
- 🔮 User authentication
- 🔮 Database migration
- 🔮 Image uploads

## License

This project is for internal use by the Mosaic Design System team.

---

Built with ❤️ by the Mosaic Design System team
