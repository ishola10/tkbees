import type { Metadata } from "next";
import "./globals.css";
import "./tkbees.css";
import { UiProvider } from "@/providers/UiProvider";
import { SiteShell } from "@/components/tkbees/SiteShell";

export const metadata: Metadata = {
  metadataBase: new URL("http://localhost:3001"),
  title: "TKBees — The Knowledge Ecosystem",
  description:
    "The student-first ecosystem where ambitious people meet the skills, mentors and opportunities that turn ideas into real-world results.",
  icons: { icon: "/favicon.svg" },
  openGraph: {
    title: "TKBees — The Knowledge Ecosystem",
    description: "Where student ideas take flight.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,700;0,9..144,900;1,9..144,400;1,9..144,700;1,9..144,900&family=Inter+Tight:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <UiProvider>
          <SiteShell>{children}</SiteShell>
        </UiProvider>
      </body>
    </html>
  );
}
