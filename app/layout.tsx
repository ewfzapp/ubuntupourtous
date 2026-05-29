import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ubuntu Pour Tous — Apprendre Linux simplement",
  description: "Le guide le plus bienveillant et didactique pour passer à Ubuntu Linux. Pour les seniors, les étudiants, les victimes de virus et tous les déçus de Windows.",
  keywords: "ubuntu, linux, apprendre linux, passer à linux, débutant linux, tutorial ubuntu français",
  openGraph: {
    title: "Ubuntu Pour Tous",
    description: "Apprendre Ubuntu Linux, étape par étape, sans prise de tête.",
    url: "https://ubuntupourtous.org",
    siteName: "Ubuntu Pour Tous",
    locale: "fr_FR",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
