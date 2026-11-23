export interface SkillGroup {
  title: string;
  skills: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    title: "Frontend",
    skills: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Angular"],
  },
  {
    title: "Backend",
    skills: ["PHP", "Node.js", "Java", "REST APIs", "SQL"],
  },
  {
    title: "CMS & E-commerce",
    skills: ["Shopify", "Liquid", "WordPress", "WooCommerce"],
  },
  {
    title: "Digital Experience",
    skills: ["UX/UI", "Responsive Design", "SEO", "E-commerce Optimization"],
  },
  {
    title: "Project Management",
    skills: ["Agile", "Scrum", "Digital Project Management", "Data Analysis"],
  },
];
