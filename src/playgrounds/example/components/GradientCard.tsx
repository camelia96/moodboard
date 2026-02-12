"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export function GradientCard() {
  return (
    <div className="flex flex-col gap-6 p-8">
      <div>
        <h3 className="text-lg font-semibold mb-2">Gradient Cards</h3>
        <p className="text-sm text-muted-foreground mb-4">
          Cards with animated gradient backgrounds
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card className="group relative overflow-hidden transition-all hover:shadow-xl hover:scale-105">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <CardHeader className="relative z-10">
            <CardTitle>Ocean Wave</CardTitle>
            <CardDescription>Blue to purple gradient</CardDescription>
          </CardHeader>
          <CardContent className="relative z-10">
            <p className="text-sm">Hover to see the gradient animation</p>
          </CardContent>
        </Card>

        <Card className="group relative overflow-hidden transition-all hover:shadow-xl hover:scale-105">
          <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 via-emerald-500/20 to-teal-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <CardHeader className="relative z-10">
            <CardTitle>Forest Mist</CardTitle>
            <CardDescription>Green to teal gradient</CardDescription>
          </CardHeader>
          <CardContent className="relative z-10">
            <p className="text-sm">Subtle color transitions on hover</p>
          </CardContent>
        </Card>

        <Card className="group relative overflow-hidden transition-all hover:shadow-xl hover:scale-105">
          <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 via-red-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <CardHeader className="relative z-10">
            <CardTitle>Sunset Glow</CardTitle>
            <CardDescription>Orange to pink gradient</CardDescription>
          </CardHeader>
          <CardContent className="relative z-10">
            <p className="text-sm">Warm colors with smooth transitions</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
