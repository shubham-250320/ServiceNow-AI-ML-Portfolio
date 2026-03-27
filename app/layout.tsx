import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Shubham Soni — Senior ServiceNow Platform Engineer | AI/ML",
  description:
    "Senior ServiceNow Platform Engineer with 4+ years delivering AI-native automation at enterprise scale. GenAI middleware, NASK, Predictive Intelligence, Virtual Agent. Top 3 of 70+ global teams, Scania Hackathon 2026.",
  keywords: [
    "ServiceNow",
    "Now Assist",
    "NASK",
    "Predictive Intelligence",
    "GenAI",
    "Platform Engineer",
    "AI Automation",
    "ITSM",
    "Shubham Soni",
  ],
  authors: [{ name: "Shubham Soni" }],
  openGraph: {
    title: "Shubham Soni — Senior ServiceNow Platform Engineer",
    description:
      "4+ years engineering AI-native automation at enterprise scale for Scania and Volkswagen.",
    url: "https://shubham-servicenow.vercel.app",
    siteName: "Shubham Soni Portfolio",
    type: "website",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* No "dark" class — SN site is light-themed */}
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Source+Sans+3:wght@300;400;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased bg-bg-primary text-text-primary">
        {children}
      </body>
    </html>
  );
}