import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "Bobmanuel | Full-Stack Developer, Graphic Designer & Video Editor",
  description:
    "Connect with Bobmanuel — Full-Stack Developer, Graphic Designer and Video Editor. View the portfolio, social media and contact links in one place.",
  keywords: [
    "Bobmanuel",
    "Full-Stack Developer",
    "Graphic Designer",
    "Video Editor",
    "Web Developer Nigeria",
  ],
  openGraph: {
    title: "Bobmanuel — Build. Design. Create.",
    description: "Portfolio, social media and contact links for Bobmanuel.",
    type: "website",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#f3ecdf",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
