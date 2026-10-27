export interface TechItem {
  id: string;
  name: string;
  category: "Analytics" | "Engineering" | "Development & Tools";
  status: "using" | "exploring";
}

export const categorizedSkills: {
  category: "Analytics" | "Engineering" | "Development & Tools";
  icon: string;
  items: TechItem[];
}[] = [
  {
    category: "Analytics",
    icon: "chart",
    items: [
      { id: "python", name: "Python", category: "Analytics", status: "using" },
      { id: "pandas", name: "Pandas", category: "Analytics", status: "using" },
      { id: "numpy", name: "NumPy", category: "Analytics", status: "using" },
      { id: "sql", name: "SQL", category: "Analytics", status: "using" },
      { id: "powerbi", name: "Power BI", category: "Analytics", status: "using" },
      { id: "excel", name: "Excel", category: "Analytics", status: "using" },
      { id: "matplotlib", name: "Matplotlib", category: "Analytics", status: "using" },
    ],
  },
  {
    category: "Engineering",
    icon: "gear",
    items: [
      { id: "kafka", name: "Kafka", category: "Engineering", status: "using" },
      { id: "spark", name: "Spark", category: "Engineering", status: "using" },
      { id: "etl-elt", name: "ETL/ELT", category: "Engineering", status: "using" },
      { id: "postgresql", name: "PostgreSQL", category: "Engineering", status: "using" },
      { id: "mysql", name: "MySQL", category: "Engineering", status: "using" },
      { id: "data-pipelines", name: "Data Pipelines", category: "Engineering", status: "using" },
    ],
  },
  {
    category: "Development & Tools",
    icon: "code",
    items: [
      { id: "git", name: "Git", category: "Development & Tools", status: "using" },
      { id: "github", name: "GitHub", category: "Development & Tools", status: "using" },
      { id: "jupyter", name: "Jupyter", category: "Development & Tools", status: "using" },
      { id: "vscode", name: "VS Code", category: "Development & Tools", status: "using" },
      { id: "linux", name: "Linux", category: "Development & Tools", status: "using" },
      { id: "docker", name: "Docker", category: "Development & Tools", status: "exploring" },
    ],
  },
];
