"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Lightbulb } from "lucide-react";
import { Category } from "@/lib/types";

const categories: Category[] = [
  "UI Design",
  "Illustration",
  "Typography",
  "Color",
  "Photography",
  "Other",
];

export default function AddInspirationPage() {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    image: "",
    url: "",
    tags: "",
    category: "" as Category | "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission will be implemented as a first PR for the team!
    alert("Form submission coming soon! This will be a great first PR for the team to implement. 🚀");
  };

  return (
    <div className="container py-12">
      <div className="mx-auto max-w-3xl">
        {/* Header */}
        <div className="mb-8">
          <Button variant="ghost" size="sm" asChild className="mb-6">
            <Link href="/">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Link>
          </Button>

          <div className="flex items-center gap-3 mb-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
              <Lightbulb className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h1 className="text-3xl font-bold tracking-tight">Add Inspiration</h1>
              <p className="text-muted-foreground">Share something that inspires you</p>
            </div>
          </div>
        </div>

        {/* Form Card */}
        <Card>
          <CardHeader>
            <CardTitle>Inspiration Details</CardTitle>
            <CardDescription>
              Fill out the details below to add a new inspiration item to the board
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Title */}
              <div className="space-y-2">
                <Label htmlFor="title">
                  Title <span className="text-destructive">*</span>
                </Label>
                <Input
                  id="title"
                  placeholder="e.g., Beautiful gradient button"
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  required
                />
              </div>

              {/* Description */}
              <div className="space-y-2">
                <Label htmlFor="description">
                  Description <span className="text-destructive">*</span>
                </Label>
                <Textarea
                  id="description"
                  placeholder="Describe what makes this inspiring and why you're sharing it..."
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  rows={4}
                  required
                />
              </div>

              {/* Image URL */}
              <div className="space-y-2">
                <Label htmlFor="image">
                  Image URL <span className="text-destructive">*</span>
                </Label>
                <Input
                  id="image"
                  type="url"
                  placeholder="https://images.unsplash.com/..."
                  value={formData.image}
                  onChange={(e) => setFormData({ ...formData, image: e.target.value })}
                  required
                />
                <p className="text-sm text-muted-foreground">
                  Tip: Use Unsplash for high-quality, free images
                </p>
              </div>

              {/* Link URL (optional) */}
              <div className="space-y-2">
                <Label htmlFor="url">Link URL (optional)</Label>
                <Input
                  id="url"
                  type="url"
                  placeholder="https://dribbble.com/..."
                  value={formData.url}
                  onChange={(e) => setFormData({ ...formData, url: e.target.value })}
                />
                <p className="text-sm text-muted-foreground">
                  Link to the source or related content
                </p>
              </div>

              {/* Tags */}
              <div className="space-y-2">
                <Label htmlFor="tags">
                  Tags <span className="text-destructive">*</span>
                </Label>
                <Input
                  id="tags"
                  placeholder="buttons, animations, gradients (comma-separated)"
                  value={formData.tags}
                  onChange={(e) => setFormData({ ...formData, tags: e.target.value })}
                  required
                />
                <p className="text-sm text-muted-foreground">
                  Separate tags with commas
                </p>
              </div>

              {/* Category */}
              <div className="space-y-2">
                <Label htmlFor="category">
                  Category <span className="text-destructive">*</span>
                </Label>
                <Select
                  value={formData.category}
                  onValueChange={(value) => setFormData({ ...formData, category: value as Category })}
                  required
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select a category" />
                  </SelectTrigger>
                  <SelectContent>
                    {categories.map((category) => (
                      <SelectItem key={category} value={category}>
                        {category}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Coming Soon Notice */}
              <div className="rounded-lg border border-amber-500/50 bg-amber-500/10 p-4">
                <h3 className="mb-1 font-semibold text-sm text-amber-900 dark:text-amber-100">
                  🚀 Good First Issue!
                </h3>
                <p className="text-sm text-amber-800 dark:text-amber-200">
                  Form submission isn't wired up yet - this would be a perfect first PR for the team!
                  You'll need to implement saving the data to the JSON file and navigating back to the home page.
                </p>
              </div>

              {/* Submit Button */}
              <div className="flex gap-3 pt-2">
                <Button type="submit" size="lg" className="flex-1">
                  Add to Moodboard
                </Button>
                <Button type="button" variant="outline" size="lg" asChild>
                  <Link href="/">Cancel</Link>
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>

        {/* Help Text */}
        <p className="mt-6 text-center text-sm text-muted-foreground">
          Want to implement form submission?{" "}
          <Link href="https://github.com/mosaic-design-system/design-playground/blob/main/docs/CONTRIBUTING.md" className="text-primary hover:underline">
            Check out our contribution guide
          </Link>
        </p>
      </div>
    </div>
  );
}
