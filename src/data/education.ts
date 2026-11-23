export interface Education {
  key: "dess" | "computerScience";
  qualification: string;
  institution: string;
}

export const education: Education[] = [
  {
    key: "dess",
    qualification: "D.E.S.S. in E-commerce",
    institution: "HEC Montréal",
  },
  {
    key: "computerScience",
    qualification: "Bachelor’s Degree in Computer Science",
    institution: "",
  },
];
