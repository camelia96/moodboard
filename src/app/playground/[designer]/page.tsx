import { notFound } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { getPlaygroundBySlug, getAllPlaygrounds } from "@/lib/playgrounds";
import { ArrowLeft } from "lucide-react";

// Import example components
import { AnimatedButton } from "@/playgrounds/example/components/AnimatedButton";
import { GradientCard } from "@/playgrounds/example/components/GradientCard";
import { LoadingStates } from "@/playgrounds/example/components/LoadingStates";

// Component registry - maps component names to actual components
const componentRegistry: Record<string, React.ComponentType> = {
  AnimatedButton,
  GradientCard,
  LoadingStates,
};

export async function generateStaticParams() {
  const playgrounds = getAllPlaygrounds();
  return playgrounds.map((playground) => ({
    designer: playground.slug,
  }));
}

export default function PlaygroundPage({
  params,
}: {
  params: { designer: string };
}) {
  const playground = getPlaygroundBySlug(params.designer);

  if (!playground) {
    notFound();
  }

  const initials = playground.name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase();

  return (
    <div className="container py-12 md:py-16">
      {/* Back button */}
      <Button variant="ghost" size="sm" asChild className="mb-8">
        <Link href="/playground">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Playgrounds
        </Link>
      </Button>

      {/* Playground Header */}
      <div className="mb-12">
        <div className="flex items-start gap-6 mb-6">
          <Avatar className="h-20 w-20">
            <AvatarImage src={playground.avatar} alt={playground.name} />
            <AvatarFallback className="text-2xl">{initials}</AvatarFallback>
          </Avatar>
          <div className="flex-1">
            <h1 className="text-4xl font-bold tracking-tight mb-2">
              {playground.title}
            </h1>
            <p className="text-lg text-muted-foreground mb-4">
              by {playground.name}
            </p>
            <p className="text-base text-muted-foreground max-w-2xl mb-4">
              {playground.description}
            </p>
            <div className="flex flex-wrap gap-2">
              {playground.tags.map((tag) => (
                <Badge key={tag} variant="secondary">
                  {tag}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Experiments */}
      <div className="space-y-8">
        <h2 className="text-2xl font-bold tracking-tight">
          Experiments ({playground.experiments.length})
        </h2>

        <div className="space-y-8">
          {playground.experiments.map((experiment) => {
            const Component = componentRegistry[experiment.component];

            return (
              <Card key={experiment.id} className="overflow-hidden">
                <CardHeader className="border-b bg-muted/30">
                  <CardTitle>{experiment.title}</CardTitle>
                  <CardDescription>{experiment.description}</CardDescription>
                </CardHeader>
                <CardContent className="p-0">
                  {Component ? (
                    <Component />
                  ) : (
                    <div className="p-8 text-center text-muted-foreground">
                      Component "{experiment.component}" not found
                    </div>
                  )}
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
}
