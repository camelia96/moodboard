"use client";

import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";

export function AnimatedButton() {
  return (
    <div className="flex flex-col gap-6 p-8">
      <div>
        <h3 className="text-lg font-semibold mb-2">Animated Button</h3>
        <p className="text-sm text-muted-foreground mb-4">
          Hover and click to see the animations
        </p>
      </div>

      <div className="flex flex-wrap gap-4">
        <Button
          size="lg"
          className="group relative overflow-hidden transition-all hover:scale-105 hover:shadow-lg"
        >
          <span className="relative z-10 flex items-center gap-2">
            <Sparkles className="h-4 w-4 transition-transform group-hover:rotate-12" />
            Hover Me
          </span>
          <span className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/20 to-primary/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
        </Button>

        <Button
          size="lg"
          variant="outline"
          className="relative overflow-hidden transition-all hover:scale-105 hover:border-primary before:absolute before:inset-0 before:bg-primary/10 before:translate-y-full hover:before:translate-y-0 before:transition-transform"
        >
          <span className="relative z-10">Slide Up Effect</span>
        </Button>

        <Button
          size="lg"
          variant="secondary"
          className="transition-all hover:scale-110 hover:rotate-1 active:scale-95 active:rotate-0"
        >
          Scale & Rotate
        </Button>
      </div>
    </div>
  );
}
