export type ProjectCategory =
  | "E-commerce"
  | "Shopify Development"
  | "WordPress Development"
  | "Web Applications"
  | "UI/UX & Digital Projects";

export interface Project {
  title: string;
  description: string;
  contribution: string;
  category: ProjectCategory;
  technologies: string[];
  translations?: Partial<
    Record<
      "en" | "fr" | "ro",
      { title?: string; description: string; contribution: string }
    >
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

export const projects: Project[] = [
  {
    title: "En Forme au Max",
    description:
      "I developed a website for personal training and fitness services, presenting the coach, programs, and client information.",
    contribution:
      "I developed the website and organized its content into a clear, accessible experience.",
    category: "UI/UX & Digital Projects",
    technologies: ["Wix"],
    translations: {
      fr: {
        description:
          "J’ai développé un site pour des services d’entraînement personnel et de mise en forme, qui présente le coach, les services et les informations destinées aux clients.",
        contribution:
          "J’ai développé le site et organisé son contenu pour offrir une expérience claire et accessible.",
      },
      ro: {
        description:
          "Am dezvoltat un site pentru servicii de antrenament personal și fitness, care prezintă antrenorul, serviciile și informațiile pentru clienți.",
        contribution:
          "Am dezvoltat site-ul și am organizat conținutul pentru o experiență clară și accesibilă.",
      },
    },
    liveUrl: "https://balancetotalfitness.com/",
  },
  {
    title: "Eco Glace Nettoyage",
    description:
      "I developed a website presenting cryogenic cleaning services, the process, and the company’s environmental information.",
    contribution:
      "I developed the website in WordPress and structured its service and informational content.",
    category: "WordPress Development",
    technologies: ["WordPress"],
    translations: {
      fr: {
        description:
          "J’ai développé un site qui présente les services de nettoyage cryogénique, le procédé et les informations environnementales de l’entreprise.",
        contribution:
          "J’ai développé le site avec WordPress et structuré les pages de services et d’information.",
      },
      ro: {
        description:
          "Am dezvoltat un site care prezintă serviciile de curățare criogenică, procesul și informațiile companiei despre mediu.",
        contribution:
          "Am dezvoltat site-ul cu WordPress și am structurat conținutul despre servicii și informații.",
      },
    },
    liveUrl: "https://ecoglacenettoyage.ca/",
  },
  {
    title: "LMJ Enterprise",
    description:
      "I built this business website as an Astro project, with its content and visual assets maintained in the repository.",
    contribution:
      "I developed the website with Astro. I maintain the source code in my public GitHub repository.",
    category: "UI/UX & Digital Projects",
    technologies: ["Astro"],
    translations: {
      fr: {
        description:
          "J’ai réalisé ce site d’entreprise sous forme de projet Astro, avec le contenu et les ressources visuelles organisés dans le dépôt.",
        contribution:
          "J’ai développé le site avec Astro et j’en maintiens le code source dans mon dépôt GitHub public.",
      },
      ro: {
        description:
          "Am realizat acest site de prezentare ca proiect Astro, cu textul și resursele vizuale organizate în depozit.",
        contribution:
          "Am dezvoltat site-ul cu Astro și păstrez codul sursă în depozitul meu public GitHub.",
      },
    },
    repositoryUrl: "https://github.com/Natynela/cln-enterprise",
  },
];
