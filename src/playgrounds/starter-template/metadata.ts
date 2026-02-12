import { PlaygroundMetadata } from "@/types/playground";

// TODO: Update this with your information
export const metadata: PlaygroundMetadata = {
  name: "Your Name",              // Your full name
  slug: "your-name",               // URL-friendly slug (lowercase, hyphenated)
  title: "Your Playground Title",  // Creative title for your playground
  description: "A brief description of what you're exploring in this playground", // 1-2 sentences
  avatar: "/avatars/your-name.jpg", // Optional: Path to your avatar image
  tags: ["tag1", "tag2", "tag3"],  // Keywords describing your experiments
  experiments: [
    {
      id: "my-first-experiment",
      title: "My First Experiment",
      description: "A brief description of what this experiment demonstrates",
      component: "MyFirstComponent", // Name of the component file (without .tsx)
    },
    // Add more experiments here
  ],
};
