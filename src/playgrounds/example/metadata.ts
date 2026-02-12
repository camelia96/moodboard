import { PlaygroundMetadata } from "@/types/playground";

export const metadata: PlaygroundMetadata = {
  name: "Design Team",
  slug: "example",
  title: "Example Playground",
  description: "Exploring modern UI patterns, micro-interactions, and delightful component designs",
  avatar: "/avatars/example.jpg",
  tags: ["animations", "buttons", "cards", "interactions"],
  experiments: [
    {
      id: "animated-button",
      title: "Animated Button",
      description: "A button with smooth hover and click animations",
      component: "AnimatedButton",
    },
    {
      id: "gradient-card",
      title: "Gradient Card",
      description: "Card with animated gradient background on hover",
      component: "GradientCard",
    },
    {
      id: "loading-states",
      title: "Loading States",
      description: "Various loading state designs and animations",
      component: "LoadingStates",
    },
  ],
};
