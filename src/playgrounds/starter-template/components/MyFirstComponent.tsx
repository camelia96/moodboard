"use client";

// Import any components you need from shadcn/ui or lucide-react
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

/**
 * Example component template
 *
 * Tips:
 * - Use "use client" at the top if you need interactivity (useState, onClick, etc.)
 * - Import shadcn/ui components from "@/components/ui/*"
 * - Import icons from "lucide-react"
 * - Use Tailwind CSS classes for styling
 * - Feel free to create multiple components in this folder
 */
export function MyFirstComponent() {
  return (
    <div className="flex flex-col gap-6 p-8">
      {/* Header */}
      <div>
        <h3 className="text-lg font-semibold mb-2">My First Experiment</h3>
        <p className="text-sm text-muted-foreground mb-4">
          Replace this with a description of your experiment
        </p>
      </div>

      {/* Your creative experiment goes here */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card>
          <CardHeader>
            <CardTitle>Example Card</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-4">
              Start building your creative component here!
            </p>
            <Button>Click Me</Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Another Example</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              You have complete creative freedom. Experiment with:
            </p>
            <ul className="mt-2 space-y-1 text-sm text-muted-foreground list-disc list-inside">
              <li>Animations and transitions</li>
              <li>Color gradients and effects</li>
              <li>Interactive elements</li>
              <li>Layout experiments</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
