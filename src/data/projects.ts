import type { ImageMetadata } from "astro";
import clnLogo from "./cln-logo.avif";
import balanceLogo from "./lo-balance.avif";
import ecoGlaceLogo from "./logo-eco-glace.webp";

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
  domain: Record<"en" | "fr" | "ro", string>;
  translations?: Partial<
    Record<
      "en" | "fr" | "ro",
      { title?: string; description: string; contribution: string }
    >
  >;
  image?: ImageMetadata;
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
    domain: {
      en: "Fitness & coaching",
      fr: "Fitness et coaching",
      ro: "Fitness și antrenament",
    },
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
    image: balanceLogo,
    imageAlt: "En Forme au Max",
    liveUrl: "https://balancetotalfitness.com/",
  },
  {
    title: "Eco Glace Nettoyage",
    domain: {
      en: "Cryogenic cleaning",
      fr: "Nettoyage cryogénique",
      ro: "Curățare criogenică",
    },
    description:
      "I developed a website presenting cryogenic cleaning services, the process, and the company’s environmental information.",
    contribution:
      "I developed the website with Wix and structured its service and informational content.",
    category: "UI/UX & Digital Projects",
    technologies: ["Wix"],
    translations: {
      fr: {
        description:
          "J’ai développé un site qui présente les services de nettoyage cryogénique, le procédé et les informations environnementales de l’entreprise.",
        contribution:
          "J’ai développé le site avec Wix et structuré les pages de services et d’information.",
      },
      ro: {
        description:
          "Am dezvoltat un site care prezintă serviciile de curățare criogenică, procesul și informațiile companiei despre mediu.",
        contribution:
          "Am dezvoltat site-ul cu Wix și am structurat conținutul despre servicii și informații.",
      },
    },
    image: ecoGlaceLogo,
    imageAlt: "Eco Glace Nettoyage",
    liveUrl: "https://ecoglacenettoyage.ca/",
  },
  {
    title: "LMJ Enterprise",
    domain: {
      en: "Construction & interiors",
      fr: "Construction et aménagement intérieur",
      ro: "Construcții și amenajări interioare",
    },
    description:
      "I developed a business website for construction and interior systems, showcasing LMJ’s services and experience.",
    contribution:
      "I developed the website with Wix and organized its content to present the company's services clearly.",
    category: "UI/UX & Digital Projects",
    technologies: ["Wix"],
    translations: {
      fr: {
        description:
          "J’ai développé un site pour une entreprise de construction et d’aménagement intérieur, qui présente les services et l’expérience de LMJ.",
        contribution:
          "J’ai développé le site avec Wix et organisé son contenu pour présenter clairement les services de l’entreprise.",
      },
      ro: {
        description:
          "Am dezvoltat un site pentru o companie de construcții și amenajări interioare, prezentând serviciile și experiența LMJ.",
        contribution:
          "Am dezvoltat site-ul cu Wix și am organizat conținutul pentru a prezenta clar serviciile companiei.",
      },
    },
    image: clnLogo,
    imageAlt: "LMJ Enterprise",
    liveUrl: "https://www.lmjenterprise.com/",
  },
];
