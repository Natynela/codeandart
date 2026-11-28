export interface Education {
  key:
    | "mastersPhysicsTechnology"
    | "bachelorComputerScience"
    | "aecTransactionalWebDevelopment"
    | "certificateAppliedComputerScience"
    | "dessEcommerce";
  institution: string;
}

export const education: Education[] = [
  {
    key: "mastersPhysicsTechnology",
    institution: "",
  },
  {
    key: "bachelorComputerScience",
    institution: "",
  },
  {
    key: "aecTransactionalWebDevelopment",
    institution: "",
  },
  {
    key: "certificateAppliedComputerScience",
    institution: "",
  },
  {
    key: "dessEcommerce",
    institution: "HEC Montréal",
  },
];
