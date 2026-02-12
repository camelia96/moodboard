import Link from "next/link";
import { Button } from "@/components/ui/button";
import { PlaygroundCard } from "@/components/playground-card";
import { getAllPlaygrounds } from "@/lib/playgrounds";
import { ArrowLeft } from "lucide-react";

export default function PlaygroundsPage() {
  const playgrounds = getAllPlaygrounds();

  return (
    <div className="container py-12 md:py-16">
      <div className="mb-8">
        <Button variant="ghost" size="sm" asChild className="mb-4">
          <Link href="/">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Link>
        </Button>
        <h1 className="text-4xl font-bold tracking-tight mb-4">All Playgrounds</h1>
        <p className="text-lg text-muted-foreground max-w-2xl">
          Explore all the creative experiments and UI explorations from our design team.
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
  );
}
