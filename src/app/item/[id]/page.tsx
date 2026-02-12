import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { getItemById, getAllItems } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, ExternalLink, Calendar, User } from "lucide-react";

interface PageProps {
  params: Promise<{ id: string }>;
}

// Generate static params for all items
export async function generateStaticParams() {
  const items = getAllItems();
  return items.map((item) => ({
    id: item.id,
  }));
}

export default async function ItemDetailPage({ params }: PageProps) {
  const { id } = await params;
  const item = getItemById(id);

  if (!item) {
    notFound();
  }

  return (
    <div className="container py-12">
      <div className="mx-auto max-w-4xl">
        {/* Back Button */}
        <Button variant="ghost" size="sm" asChild className="mb-6">
          <Link href="/">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Link>
        </Button>

        {/* Main Content */}
        <div className="space-y-8">
          {/* Image */}
          <Card className="overflow-hidden border-0 shadow-lg">
            <div className="relative aspect-[16/10] w-full bg-muted">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover"
                priority
                sizes="(max-width: 1200px) 100vw, 1200px"
              />
            </div>
          </Card>

          {/* Title and Category */}
          <div>
            <div className="mb-3 flex items-center gap-2">
              <Badge variant="secondary" className="text-sm">
                {item.category}
              </Badge>
            </div>
            <h1 className="text-4xl font-bold tracking-tight mb-4">
              {item.title}
            </h1>
          </div>

          {/* Description */}
          <Card>
            <CardContent className="pt-6">
              <p className="text-lg leading-relaxed text-muted-foreground">
                {item.description}
              </p>
            </CardContent>
          </Card>

          {/* Tags */}
          {item.tags.length > 0 && (
            <div>
              <h2 className="mb-3 text-sm font-semibold uppercase tracking-wide text-muted-foreground">
                Tags
              </h2>
              <div className="flex flex-wrap gap-2">
                {item.tags.map((tag) => (
                  <Badge key={tag} variant="outline" className="text-sm">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
          )}

          {/* Meta Information */}
          <Card>
            <CardContent className="pt-6">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="flex items-center gap-3 text-sm">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-muted">
                    <Calendar className="h-5 w-5 text-muted-foreground" />
                  </div>
                  <div>
                    <p className="font-medium">Date Added</p>
                    <p className="text-muted-foreground">
                      {new Date(item.dateAdded).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-muted">
                    <User className="h-5 w-5 text-muted-foreground" />
                  </div>
                  <div>
                    <p className="font-medium">Added By</p>
                    <p className="text-muted-foreground">{item.addedBy}</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Actions */}
          <div className="flex flex-col gap-3 sm:flex-row">
            {item.url && (
              <Button size="lg" asChild className="flex-1">
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Visit Source
                </a>
              </Button>
            )}
            <Button size="lg" variant="outline" asChild className="flex-1">
              <Link href="/">Back to Gallery</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
