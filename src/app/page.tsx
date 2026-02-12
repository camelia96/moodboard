import Link from "next/link";
import { Button } from "@/components/ui/button";
import { InspirationGrid } from "@/components/inspiration-grid";
import { getAllItems } from "@/lib/data";
import { Sparkles, Plus } from "lucide-react";

export default function Home() {
  const items = getAllItems();

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden border-b bg-gradient-to-b from-background to-muted/20 py-20 md:py-32">
        <div className="container relative z-10">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border bg-background/60 px-4 py-1.5 text-sm backdrop-blur-sm">
              <Sparkles className="h-4 w-4 text-primary" />
              <span>Collaborative inspiration collection</span>
            </div>
            <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              Welcome to{" "}
              <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                Moodboard
              </span>
            </h1>
            <p className="mb-8 text-lg text-muted-foreground md:text-xl">
              A collaborative space for our design team to collect and share visual inspiration.
              Discover beautiful UI patterns, color palettes, typography, and design ideas that
              spark creativity.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Button size="lg" asChild>
                <Link href="/add">
                  <Plus className="mr-2 h-4 w-4" />
                  Add Inspiration
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="https://github.com/mosaic-design-system/design-playground/blob/main/docs/CONTRIBUTING.md">
                  Contribute Features
                </Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Decorative gradient orbs */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -top-1/2 left-1/4 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />
          <div className="absolute -bottom-1/2 right-1/4 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />
        </div>
      </section>

      {/* Inspiration Gallery */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
              Inspiration Collection
            </h2>
            <p className="text-lg text-muted-foreground">
              Visual inspiration gathered by our design team
            </p>
          </div>

          <InspirationGrid items={items} />
        </div>
      </section>

      {/* CTA Section */}
      <section className="border-t bg-muted/30 py-16 md:py-24">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight">
              Ready to contribute?
            </h2>
            <p className="mb-8 text-lg text-muted-foreground">
              Help build Moodboard into the perfect inspiration tool. Add new features like search,
              filtering, collections, and more. Check out our contribution guide to get started!
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Button size="lg" asChild>
                <Link href="https://github.com/mosaic-design-system/design-playground/blob/main/docs/CONTRIBUTING.md">
                  View Contribution Guide
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a
                  href="https://github.com/mosaic-design-system/design-playground"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View on GitHub
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
