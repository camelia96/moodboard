import { PlaygroundMetadata } from "@/types/playground";

// Import all playground metadata
import { metadata as exampleMetadata } from "@/playgrounds/example/metadata";

// Registry of all available playgrounds
const playgroundRegistry: PlaygroundMetadata[] = [
  exampleMetadata,
];

export function getAllPlaygrounds(): PlaygroundMetadata[] {
  return playgroundRegistry;
}

export function getPlaygroundBySlug(slug: string): PlaygroundMetadata | undefined {
  return playgroundRegistry.find((p) => p.slug === slug);
}
