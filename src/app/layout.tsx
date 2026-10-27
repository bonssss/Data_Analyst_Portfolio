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
  title: "Bonsa Desalegn — Data Analyst Portfolio",
  description:
    "Data Analytics Portfolio of Bonsa Desalegn. Exploring real-world datasets, uncovering actionable trends, and building high-impact dashboards using Python, SQL, Power BI, and Excel.",
  keywords: [
    "Bonsa Desalegn",
    "Data Analyst",
    "Power BI",
    "SQL",
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
    title: "Bonsa Desalegn — Data Analyst Portfolio",
    description:
      "I turn raw data into clear insights. Explore data analysis case studies, Power BI dashboards, and Python pipelines.",
    siteName: "Bonsa Desalegn Portfolio",
    images: [
      {
        url: "/images/hero_laptop.png",
        width: 1200,
        height: 630,
        alt: "Bonsa Desalegn - Data Analytics Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bonsa Desalegn — Data Analyst",
    description: "Turning raw data into clear business insights and interactive dashboards.",
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
