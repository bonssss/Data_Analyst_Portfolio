export interface ToolItem {
  id: string;
  name: string;
  category: 'Language' | 'Library' | 'BI & Spreadsheets' | 'Database' | 'DevOps & IDE';
  iconType: string;
  accentBg: string;
  accentBorder: string;
  description: string;
  tags: string[];
}

export const toolsData: ToolItem[] = [
  {
    id: "python",
    name: "Python",
    category: "Language",
    iconType: "python",
    accentBg: "rgba(55, 118, 171, 0.08)",
    accentBorder: "rgba(55, 118, 171, 0.25)",
    description: "Core scripting language for data extraction, manipulation, statistical analysis, and automated workflows.",
    tags: ["Data Wrangling", "Automation", "ETL", "Statistics"]
  },
  {
    id: "pandas",
    name: "Pandas",
    category: "Library",
    iconType: "pandas",
    accentBg: "rgba(19, 7, 85, 0.08)",
    accentBorder: "rgba(19, 7, 85, 0.25)",
    description: "High-performance data frames, handling missing values, grouped aggregations, and tabular transformations.",
    tags: ["DataFrame", "Aggregation", "Cleaning", "Reshaping"]
  },
  {
    id: "numpy",
    name: "NumPy",
    category: "Library",
    iconType: "numpy",
    accentBg: "rgba(77, 119, 203, 0.08)",
    accentBorder: "rgba(77, 119, 203, 0.25)",
    description: "Fast multi-dimensional array operations, mathematical transformations, and vectorized calculations.",
    tags: ["Array Math", "Vectorization", "Linear Algebra"]
  },
  {
    id: "sql",
    name: "SQL",
    category: "Language",
    iconType: "sql",
    accentBg: "rgba(0, 117, 143, 0.08)",
    accentBorder: "rgba(0, 117, 143, 0.25)",
    description: "Writing complex queries, multi-table joins, subqueries, CTEs, and analytical window functions.",
    tags: ["Window Functions", "CTEs", "Subqueries", "Aggregations"]
  },
  {
    id: "power-bi",
    name: "Power BI",
    category: "BI & Spreadsheets",
    iconType: "powerbi",
    accentBg: "rgba(242, 200, 17, 0.10)",
    accentBorder: "rgba(242, 200, 17, 0.35)",
    description: "Building interactive dashboards, star-schema data models, DAX measures, and drill-through reporting.",
    tags: ["DAX", "Data Modeling", "Interactive Reports", "KPI Cards"]
  },
  {
    id: "excel",
    name: "Excel",
    category: "BI & Spreadsheets",
    iconType: "excel",
    accentBg: "rgba(33, 115, 70, 0.08)",
    accentBorder: "rgba(33, 115, 70, 0.25)",
    description: "Advanced formulas (XLOOKUP, INDEX/MATCH), Pivot Tables, dynamic charts, and financial/ad-hoc modeling.",
    tags: ["Pivot Tables", "XLOOKUP", "Conditional Logic", "Charts"]
  },
  {
    id: "jupyter",
    name: "Jupyter",
    category: "DevOps & IDE",
    iconType: "jupyter",
    accentBg: "rgba(243, 118, 38, 0.08)",
    accentBorder: "rgba(243, 118, 38, 0.25)",
    description: "Iterative exploratory data analysis (EDA), reproducible research notebooks, and visualization prototyping.",
    tags: ["Notebooks", "EDA", "Rapid Prototyping", "Documentation"]
  },
  {
    id: "postgresql",
    name: "PostgreSQL",
    category: "Database",
    iconType: "postgresql",
    accentBg: "rgba(51, 103, 145, 0.08)",
    accentBorder: "rgba(51, 103, 145, 0.25)",
    description: "Relational database querying, index optimization, JSONB querying, schema design, and stored procedures.",
    tags: ["RDBMS", "Indexing", "Performance", "Transactions"]
  },
  {
    id: "git",
    name: "Git",
    category: "DevOps & IDE",
    iconType: "git",
    accentBg: "rgba(240, 80, 50, 0.08)",
    accentBorder: "rgba(240, 80, 50, 0.25)",
    description: "Distributed version control, branch management, collaborative workflows, and version tracking for analytical code.",
    tags: ["Version Control", "Branching", "Code History"]
  },
  {
    id: "github",
    name: "GitHub",
    category: "DevOps & IDE",
    iconType: "github",
    accentBg: "rgba(36, 41, 46, 0.08)",
    accentBorder: "rgba(36, 41, 46, 0.25)",
    description: "Project repository hosting, portfolio publishing, CI/CD pipeline actions, and code documentation.",
    tags: ["Open Source", "Repositories", "Documentation"]
  },
  {
    id: "vscode",
    name: "VS Code",
    category: "DevOps & IDE",
    iconType: "vscode",
    accentBg: "rgba(0, 122, 204, 0.08)",
    accentBorder: "rgba(0, 122, 204, 0.25)",
    description: "Primary development environment with Python and SQL extensions, Git integration, and workspace management.",
    tags: ["Editor", "Extensions", "Debugging", "Productivity"]
  }
];
