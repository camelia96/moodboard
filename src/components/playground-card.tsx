import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface PlaygroundCardProps {
  slug: string;
  name: string;
  title: string;
  description: string;
  avatar?: string;
  tags: string[];
  experimentCount?: number;
}

export function PlaygroundCard({
  slug,
  name,
  title,
  description,
  avatar,
  tags,
  experimentCount = 0,
}: PlaygroundCardProps) {
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase();

  return (
    <Link href={`/playground/${slug}`} className="group">
      <Card className="h-full transition-all hover:shadow-lg hover:border-primary/50">
        <CardHeader>
          <div className="flex items-start gap-4">
            <Avatar className="h-12 w-12">
              <AvatarImage src={avatar} alt={name} />
              <AvatarFallback>{initials}</AvatarFallback>
            </Avatar>
            <div className="flex-1 space-y-1">
              <CardTitle className="group-hover:text-primary transition-colors">
                {title}
              </CardTitle>
              <p className="text-sm text-muted-foreground">{name}</p>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <CardDescription className="mb-4">{description}</CardDescription>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <Badge key={tag} variant="secondary" className="text-xs">
                {tag}
              </Badge>
            ))}
          </div>
          {experimentCount > 0 && (
            <p className="mt-4 text-sm text-muted-foreground">
              {experimentCount} {experimentCount === 1 ? "experiment" : "experiments"}
            </p>
          )}
        </CardContent>
      </Card>
    </Link>
  );
}
