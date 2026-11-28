import type { ImageMetadata } from "astro";
import clnLogo from "./cln-logo.avif";
import balanceLogo from "./lo-balance.avif";
import ecoGlaceLogo from "./logo-eco-glace.webp";

export interface Project {
  title: string;
  description: string;
  technologies: string[];
  domain: Record<"en" | "fr" | "ro", string>;
  translations?: Partial<
    Record<
      "en" | "fr" | "ro",
      { title?: string; description: string }
    >
  >;
  image?: ImageMetadata;
  imageAlt?: string;
  liveUrl?: string;
  repositoryUrl?: string;
}

export const projects: Project[] = [
  {
    title: "En Forme au Max",
    domain: {
      en: "Fitness & coaching",
      fr: "Fitness et coaching",
      ro: "Fitness și antrenament",
    },
    description:
      "A website for personal training, coaching programs, and clients.",
    technologies: ["Wix"],
    translations: {
      fr: {
        description: "Un site dédié au coaching sportif et aux programmes d’entraînement.",
      },
      ro: {
        description: "Un site dedicat antrenamentului personal și programelor de fitness.",
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
      "A service website for cryogenic cleaning and its environmental benefits.",
    technologies: ["Wix"],
    translations: {
      fr: {
        description: "Un site de services consacré au nettoyage cryogénique et à ses avantages écologiques.",
      },
      ro: {
        description: "Un site de prezentare a serviciilor de curățare criogenică și a beneficiilor ecologice.",
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
      "A company website showcasing construction and interior finishing services.",
    technologies: ["Wix"],
    translations: {
      fr: {
        description: "Un site d’entreprise qui présente des services de construction et d’aménagement intérieur.",
      },
      ro: {
        description: "Un site de prezentare pentru servicii de construcții și amenajări interioare.",
      },
    },
    image: clnLogo,
    imageAlt: "LMJ Enterprise",
    liveUrl: "https://www.lmjenterprise.com/",
  },
];
