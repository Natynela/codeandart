export type ProjectCategory =
  | "E-commerce"
  | "Shopify Development"
  | "WordPress Development"
  | "Web Applications"
  | "UI/UX & Digital Projects";

export interface Project {
  title: string;
  description: string;
  category: ProjectCategory;
  technologies: string[];
  translations?: Partial<
    Record<"en" | "fr" | "ro", { title: string; description: string }>
  >;
  image?: string;
  imageAlt?: string;
  liveUrl?: string;
  repositoryUrl?: string;
}

export const projectCategories: ProjectCategory[] = [
  "E-commerce",
  "Shopify Development",
  "WordPress Development",
  "Web Applications",
  "UI/UX & Digital Projects",
];

// Add verified, publishable case studies here; no client or project details are assumed.
export const projects: Project[] = [];
