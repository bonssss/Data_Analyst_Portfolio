import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fcfdfd" },
    { media: "(prefers-color-scheme: dark)", color: "#090d16" },
  ],
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://bonsadesalegn.dev"),
  title: "Bonsa Desalegn — Data Analyst & Data Engineer Portfolio",
  description:
    "Data Analytics & Data Engineering Portfolio of Bonsa Desalegn. Building resilient ETL pipelines, optimizing relational databases, and turning raw data into high-impact dashboards using Python, SQL, PostgreSQL, Power BI, and Excel.",
  keywords: [
    "Bonsa Desalegn",
    "Data Analyst",
    "Data Engineer",
    "Data Engineering",
    "ETL Pipeline",
    "Power BI",
    "SQL",
    "PostgreSQL",
    "Python",
    "Excel",
    "Business Intelligence",
    "Data Visualization",
    "Addis Ababa",
    "Ethiopia",
  ],
  authors: [{ name: "Bonsa Desalegn" }],
  creator: "Bonsa Desalegn",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://bonsadesalegn.dev",
    title: "Bonsa Desalegn — Data Analyst & Data Engineer Portfolio",
    description:
      "I design reliable data pipelines and turn raw data into clear business insights. Explore data engineering workflows, ETL pipelines, and Power BI dashboards.",
    siteName: "Bonsa Desalegn Portfolio",
    images: [
      {
        url: "/images/hero_laptop.png",
        width: 1200,
        height: 630,
        alt: "Bonsa Desalegn - Data Analytics & Engineering Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bonsa Desalegn — Data Analyst & Data Engineer",
    description: "Building resilient data pipelines and turning raw data into executive dashboards.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  const storedTheme = localStorage.getItem('theme');
                  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                  if (storedTheme === 'dark' || (!storedTheme && prefersDark)) {
                    document.documentElement.classList.add('dark');
                  } else {
                    document.documentElement.classList.remove('dark');
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body className="antialiased min-h-screen selection:bg-sky-500/20 selection:text-sky-900 dark:selection:text-sky-200">
        {children}
      </body>
    </html>
  );
}
