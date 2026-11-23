export interface SkillGroup {
  title: string;
  skills: string[];
  translations: Partial<Record<"fr" | "ro", { title: string; skills: string[] }>>;
}

export const skillGroups: SkillGroup[] = [
  {
    title: "Frontend",
    skills: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Angular"],
    translations: {
      fr: { title: "Front-end", skills: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Angular"] },
      ro: { title: "Frontend", skills: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Angular"] },
    },
  },
  {
    title: "Backend",
    skills: ["PHP", "Node.js", "Java", "REST APIs", "SQL"],
    translations: {
      fr: { title: "Back-end", skills: ["PHP", "Node.js", "Java", "API REST", "SQL"] },
      ro: { title: "Backend", skills: ["PHP", "Node.js", "Java", "API REST", "SQL"] },
    },
  },
  {
    title: "CMS & E-commerce",
    skills: ["Shopify", "Liquid", "WordPress", "WooCommerce"],
    translations: {
      fr: { title: "CMS et e-commerce", skills: ["Shopify", "Liquid", "WordPress", "WooCommerce"] },
      ro: { title: "CMS și e-commerce", skills: ["Shopify", "Liquid", "WordPress", "WooCommerce"] },
    },
  },
  {
    title: "Digital Experience",
    skills: ["UX/UI", "Responsive Design", "SEO", "E-commerce Optimization"],
    translations: {
      fr: { title: "Expérience numérique", skills: ["UX/UI", "Design adaptatif", "SEO", "Optimisation e-commerce"] },
      ro: { title: "Experiență digitală", skills: ["UX/UI", "Design responsive", "SEO", "Optimizare e-commerce"] },
    },
  },
  {
    title: "Project Management",
    skills: [
      "Agile",
      "Scrum",
      "Digital Project Management",
      "Data Analysis",
      "Digital Transformation",
    ],
    translations: {
      fr: {
        title: "Gestion de projet",
        skills: ["Agile", "Scrum", "Gestion de projets numériques", "Analyse de données", "Transformation numérique"],
      },
      ro: {
        title: "Management de proiect",
        skills: ["Agile", "Scrum", "Management de proiecte digitale", "Analiza datelor", "Transformare digitală"],
      },
    },
  },
];
