// app/layout.tsx — Javari Social Media Manager
// CR AudioViz AI · EIN 39-3646201 · June 2026
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Javari Social Media Manager | CR AudioViz AI",
  description: "AI social media content — 30-day content calendars, platform-specific posts, hashtag strategy for Instagram, LinkedIn, TikTok.",
  keywords: "AI social media content, Instagram content calendar, LinkedIn posts AI, CR AudioViz AI, Javari AI, javariai.com",
  authors: [{ name: "CR AudioViz AI, LLC" }],
  creator: "CR AudioViz AI, LLC",
  publisher: "CR AudioViz AI, LLC",
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    title: "Javari Social Media Manager | CR AudioViz AI",
    description: "AI social media content — 30-day content calendars, platform-specific posts, hashtag strategy for Instagram, LinkedIn, TikTok.",
    url: "https://javari-social-media.vercel.app",
    siteName: "CR AudioViz AI",
    images: [{ url: "https://craudiovizai.com/craudiovizai-logo-metallic.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Javari Social Media Manager | CR AudioViz AI",
    description: "AI social media content — 30-day content calendars, platform-specific posts, hashtag strategy for Instagram, LinkedIn, TikTok.",
    images: ["https://craudiovizai.com/craudiovizai-logo-metallic.png"],
    creator: "@CRAudioVizAI",
  },
  alternates: { canonical: "https://javari-social-media.vercel.app" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="https://craudiovizai.com/icon.png" type="image/png" />
      </head>
      <body style={{ margin: 0, padding: 0, background: "#040912",
        color: "#e2e8f0", fontFamily: "system-ui, -apple-system, sans-serif" }}>
        {children}
      </body>
    </html>
  );
}
