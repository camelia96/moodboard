export interface Experiment {
  id: string;
  title: string;
  description: string;
  component: string;
}

export interface PlaygroundMetadata {
  name: string;
  slug: string;
  title: string;
  description: string;
  avatar?: string;
  tags: string[];
  experiments: Experiment[];
}
