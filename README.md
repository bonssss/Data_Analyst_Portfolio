# Bonsa Desalegn — Data Analytics & Engineering Portfolio

[![Next.js](https://img.shields.io/badge/Next.js-16.4.3-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.3.0-blue?style=flat-square&logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4.0-38bdf8?style=flat-square&logo=tailwindcss)](https://tailwindcss.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-emerald?style=flat-square)](LICENSE)

A clean, modern, editorial-style **Data Analytics & Data Engineering Portfolio** for **Bonsa Desalegn**. Built with a combination of data research journal aesthetics and a digital publication layout: crisp typography, warm white and obsidian dark palettes, custom interactive charts, and deep-dive case studies.

---

## 🌟 Key Features

- **Original Visual Identity**: Custom **BD** monogram, restrained electric-blue and teal accents, and handwritten annotations (`Data → Insights → Impact`).
- **Interactive Analytics Overview Hero**: Custom laptop display with interactive 12-month revenue curve, donut category breakdown, and key KPI counters.
- **Data Engineering & Analytics Architecture**: Dedicated visual pipeline illustration highlighting Data Lakehouse, SQL, ETL pipelines, and BI analytics.
- **Deep-Dive Case Study Drawers**: Modal inspection for every project with structured tabs:
  - Executive Overview & Problem Statement
  - Analytical Methodology & Data Pipeline
  - Quantified Business Findings & Recommendations
  - Reproducible Code Snippets (SQL queries, Python transformation pipelines, and DAX measures) with one-click copy.
- **Typographic Tools Matrix**: Clean interactive tool badges for Python, Pandas, NumPy, SQL, Power BI, Excel, Jupyter, PostgreSQL, Git, GitHub, and VS Code.
- **Dark / Light Mode**: Seamless theme switching with system preference detection and `localStorage` persistence.
- **Downloadable & Online CV**: Integrated PDF resume generator and in-browser curriculum vitae modal.
- **Connect & Inquiry Form**: Interactive contact form with input validation and celebration confetti feedback.

---

## 🛠️ Tech Stack & Architecture

### Frontend & UI
- **Framework**: [Next.js](https://nextjs.org/) (App Router, Turbopack, React 19)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/) + Custom SVG brand vectors
- **Micro-Interactions**: [ReactBits](https://reactbits.dev/) inspired components (`SpotlightCard`, `AnimatedCounter`, `ShinyText`) and [Canvas Confetti](https://www.npmjs.com/package/canvas-confetti)

### Core Analytics & Data Engineering Stack
- **Languages & Querying**: Python (Pandas, NumPy, Matplotlib, Seaborn), SQL (PostgreSQL, MySQL)
- **Business Intelligence**: Microsoft Power BI (DAX, Star Schema Data Modeling), Microsoft Excel (Pivot Tables, Advanced Formulas)
- **Data Engineering**: Data Wrangling, Missingness Imputation, Outlier Detection, RFM Customer Clustering, Star Schema Modeling
- **Development Tools**: Jupyter Notebooks, Git, GitHub, VS Code

---

## 📂 Featured Analytics Case Studies

| Project | Tools | Core Focus | Key Impact |
| :--- | :--- | :--- | :--- |
| **Sales Performance Analysis** | Power BI • SQL | Star schema modeling, DAX measures, margin driver diagnosis | Evaluated $125K revenue & 18.6% margin; automated 12 hrs/mo reporting |
| **Exploratory Data Analysis Pipeline** | Python • Pandas • Matplotlib | Automated auditing, median imputation, IQR outlier handling | Cleaned 120,000+ records, identified 80/20 Pareto customer revenue split |
| **HR Analytics & Attrition Dashboard** | Power BI • Excel | Attrition risk modeling, demographic & overtime analysis | Uncovered 30.5% turnover rate in mandatory overtime cohorts |
| **Customer Behavior & RFM Segmentation** | SQL • Python | PostgreSQL NTILE window functions, behavioral clustering | Classified 43,800+ accounts into Champions, Loyalists, and At-Risk groups |

---

## 📁 Project Directory Structure

```text
data-analyst-porfolio/
├── public/
│   ├── documents/
│   │   └── Bonsa_Desalegn_CV.pdf       # Downloadable resume
│   └── images/                         # Project previews & hero assets
├── src/
│   ├── app/
│   │   ├── globals.css                 # Editorial styling, theme tokens, fonts
│   │   ├── layout.tsx                  # SEO metadata, OpenGraph, theme script
│   │   └── page.tsx                    # Main assembled portfolio page
│   ├── components/
│   │   ├── AboutModal.tsx              # Detailed background & education modal
│   │   ├── ContactSection.tsx          # Contact details, wave SVG, message form
│   │   ├── DataEngineeringGraphic.tsx  # Pipeline, ETL, and lakehouse visual
│   │   ├── FeaturedProjects.tsx        # 4 case studies grid with filter pills
│   │   ├── Footer.tsx                  # Footer branding & floating back-to-top
│   │   ├── Hero.tsx                    # Asymmetric hero layout with CTAs
│   │   ├── HeroDashboard.tsx           # Interactive laptop device & live charts
│   │   ├── MonogramLogo.tsx            # Stylized BD monogram logo
│   │   ├── Navbar.tsx                  # Fixed header with active scroll tracking
│   │   ├── ProjectModal.tsx            # Deep-dive case study modal with tabs
│   │   ├── ResumeModal.tsx             # Interactive CV sheet preview
│   │   ├── SkillsAndAbout.tsx          # Typographic tools & About Me card
│   │   ├── SocialIcons.tsx             # Verified GitHub and LinkedIn SVG icons
│   │   ├── ThemeToggle.tsx             # Sun/Moon light and dark switcher
│   │   ├── ToolIcons.tsx               # Tech stack SVG branding icons
│   │   └── reactbits/
│   │       ├── AnimatedCounter.tsx     # Smooth KPI number counter
│   │       ├── DecryptedText.tsx       # Scramble cipher text reveal
│   │       ├── ShinyText.tsx           # Subtle shimmering gradient text
│   │       └── SpotlightCard.tsx       # Mouse-tracking radial glow container
│   ├── data/
│   │   ├── profile.ts                  # Bonsa Desalegn's verified personal info
│   │   ├── projects.ts                 # Structured project data & code snippets
│   │   └── skills.ts                   # Structured technical tools data
│   └── types/
│       └── index.ts                    # TypeScript data models
└── package.json
```

---

## 🚀 Getting Started

### Prerequisites
- **Node.js**: v18.18+ or v20+ (Node v22 recommended)
- **Package Manager**: `npm`, `pnpm`, or `yarn`

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/bonssss/Data_Analyst_Portfolio.git
   cd Data_Analyst_Portfolio
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the local development server**:
   ```bash
   npm run dev
   ```

4. **Open in browser**:
   Navigate to [http://localhost:3000](http://localhost:3000)

### Production Build

To test and compile a production-ready optimized build:

```bash
npm run build
npm run start
```

---

## ✏️ Customization

All portfolio content is organized cleanly in typed data files for easy updates:

- **Update Profile & Socials**: Edit [`src/data/profile.ts`](src/data/profile.ts)
- **Add or Edit Projects**: Edit [`src/data/projects.ts`](src/data/projects.ts)
- **Update Skills & Categories**: Edit [`src/data/skills.ts`](src/data/skills.ts)

---

## 📬 Contact & Connect

**Bonsa Desalegn** — *Data Analyst & Software Engineering Graduate*

- 📍 **Location**: Addis Ababa, Ethiopia
- ✉️ **Email**: [bonsa.desalegn@gmail.com](mailto:bonsa.desalegn@gmail.com)
- 💼 **LinkedIn**: [linkedin.com/in/bonsa-desalegn-90175b257](https://linkedin.com/in/bonsa-desalegn-90175b257/)
- 🐙 **GitHub**: [github.com/bonssss](https://github.com/bonssss)

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).
