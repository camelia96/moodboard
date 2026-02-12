"use client";

export function LoadingStates() {
  return (
    <div className="flex flex-col gap-6 p-8">
      <div>
        <h3 className="text-lg font-semibold mb-2">Loading States</h3>
        <p className="text-sm text-muted-foreground mb-4">
          Various loading animations and indicators
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Spinner */}
        <div className="flex flex-col items-center gap-3 p-6 rounded-lg border bg-card">
          <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent" />
          <p className="text-sm font-medium">Classic Spinner</p>
        </div>

        {/* Dots */}
        <div className="flex flex-col items-center gap-3 p-6 rounded-lg border bg-card">
          <div className="flex gap-2">
            <div className="h-3 w-3 rounded-full bg-primary animate-bounce [animation-delay:-0.3s]" />
            <div className="h-3 w-3 rounded-full bg-primary animate-bounce [animation-delay:-0.15s]" />
            <div className="h-3 w-3 rounded-full bg-primary animate-bounce" />
          </div>
          <p className="text-sm font-medium">Bouncing Dots</p>
        </div>

        {/* Pulse */}
        <div className="flex flex-col items-center gap-3 p-6 rounded-lg border bg-card">
          <div className="relative h-8 w-8">
            <div className="absolute inset-0 rounded-full bg-primary animate-ping opacity-75" />
            <div className="relative h-8 w-8 rounded-full bg-primary" />
          </div>
          <p className="text-sm font-medium">Pulse Effect</p>
        </div>

        {/* Progress Bar */}
        <div className="flex flex-col items-center gap-3 p-6 rounded-lg border bg-card">
          <div className="w-full h-2 bg-secondary rounded-full overflow-hidden">
            <div className="h-full bg-primary rounded-full animate-[shimmer_2s_ease-in-out_infinite] bg-gradient-to-r from-primary/0 via-primary to-primary/0 bg-[length:200%_100%]" />
          </div>
          <p className="text-sm font-medium">Progress Bar</p>
        </div>

        {/* Skeleton */}
        <div className="flex flex-col gap-3 p-6 rounded-lg border bg-card">
          <div className="h-4 bg-secondary rounded animate-pulse" />
          <div className="h-4 bg-secondary rounded animate-pulse w-5/6" />
          <div className="h-4 bg-secondary rounded animate-pulse w-4/6" />
          <p className="text-sm font-medium mt-2">Skeleton Loading</p>
        </div>

        {/* Rotating Square */}
        <div className="flex flex-col items-center gap-3 p-6 rounded-lg border bg-card">
          <div className="h-8 w-8 bg-primary animate-spin [animation-duration:3s]" />
          <p className="text-sm font-medium">Rotating Square</p>
        </div>
      </div>
    </div>
  );
}
