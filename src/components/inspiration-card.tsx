"use client";

import Link from "next/link";
import Image from "next/image";
import { InspirationItem } from "@/lib/types";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface InspirationCardProps {
  item: InspirationItem;
}

export function InspirationCard({ item }: InspirationCardProps) {
  return (
    <Link href={`/item/${item.id}`} className="group block">
      <Card className="overflow-hidden border-0 shadow-md transition-all duration-300 hover:scale-105 hover:shadow-xl">
        <div className="relative aspect-[4/3] overflow-hidden bg-muted">
          {/* Image */}
          <Image
            src={item.image}
            alt={item.title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-110"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />

          {/* Category Badge - Top Right */}
          <div className="absolute right-3 top-3 z-10">
            <Badge variant="secondary" className="bg-background/80 backdrop-blur-sm">
              {item.category}
            </Badge>
          </div>

          {/* Hover Overlay with Description */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            <div className="absolute bottom-0 left-0 right-0 p-4">
              <p className="text-sm text-white/90 line-clamp-3">{item.description}</p>
            </div>
          </div>
        </div>

        {/* Card Content */}
        <div className="p-4">
          <h3 className="mb-2 text-lg font-bold tracking-tight line-clamp-1">
            {item.title}
          </h3>

          {/* Tags */}
          <div className="flex flex-wrap gap-1.5">
            {item.tags.slice(0, 3).map((tag) => (
              <Badge
                key={tag}
                variant="outline"
                className="text-xs"
              >
                {tag}
              </Badge>
            ))}
            {item.tags.length > 3 && (
              <Badge variant="outline" className="text-xs">
                +{item.tags.length - 3}
              </Badge>
            )}
          </div>
        </div>
      </Card>
    </Link>
  );
}
