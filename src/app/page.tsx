import Link from "next/link";
import { Button } from "@/components/ui/button";
import { PlaygroundCard } from "@/components/playground-card";
import { getAllPlaygrounds } from "@/lib/playgrounds";
import { ArrowRight, Sparkles } from "lucide-react";

export default function Home() {
  const playgrounds = getAllPlaygrounds();

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden border-b bg-gradient-to-b from-background to-muted/20 py-20 md:py-32">
        <div className="container relative z-10">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border bg-background/60 px-4 py-1.5 text-sm backdrop-blur-sm">
              <Sparkles className="h-4 w-4 text-primary" />
              <span>A collaborative design experiment</span>
            </div>
            <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              Welcome to the{" "}
              <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                Design Playground
              </span>
            </h1>
            <p className="mb-8 text-lg text-muted-foreground md:text-xl">
              A collaborative space where our design team experiments with components,
              animations, and creative UI patterns. Explore what we've built and contribute
              your own creative ideas.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Button size="lg" asChild>
                <Link href="/playground">
                  Browse Playgrounds
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="https://github.com/mosaic-design-system/design-playground/blob/main/docs/CONTRIBUTING.md">
                  Contribute
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

      {/* Playgrounds Gallery */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
              Featured Playgrounds
            </h2>
            <p className="text-lg text-muted-foreground">
              Explore creative experiments from our design team
            </p>
          </div>

          {playgrounds.length > 0 ? (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {playgrounds.map((playground) => (
                <PlaygroundCard
                  key={playground.slug}
                  slug={playground.slug}
                  name={playground.name}
                  title={playground.title}
                  description={playground.description}
                  avatar={playground.avatar}
                  tags={playground.tags}
                  experimentCount={playground.experiments.length}
                />
              ))}
            </div>
          ) : (
            <div className="rounded-lg border border-dashed p-12 text-center">
              <p className="text-muted-foreground">
                No playgrounds yet. Be the first to contribute!
              </p>
              <Button className="mt-4" variant="outline" asChild>
                <Link href="https://github.com/mosaic-design-system/design-playground/blob/main/docs/CONTRIBUTING.md">
                  Get Started
                </Link>
              </Button>
            </div>
          )}
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
              Add your own playground, experiment with new ideas, and share your creative
              work with the team. It's easy to get started!
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
