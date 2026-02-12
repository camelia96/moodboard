import { InspirationItem } from "@/lib/types";
import { InspirationCard } from "./inspiration-card";

interface InspirationGridProps {
  items: InspirationItem[];
}

export function InspirationGrid({ items }: InspirationGridProps) {
  if (items.length === 0) {
    return (
      <div className="flex min-h-[400px] flex-col items-center justify-center rounded-lg border border-dashed border-border p-12 text-center">
        <h3 className="mb-2 text-xl font-semibold">No inspiration yet</h3>
        <p className="text-sm text-muted-foreground">
          Be the first to add some inspiration to the board!
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {items.map((item) => (
        <InspirationCard key={item.id} item={item} />
      ))}
    </div>
  );
}
