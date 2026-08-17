import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Pink Paradise | Restaurant & Pâtisserie – Parakou",
  description: "Pink Paradise à Parakou : cadre élégant, cuisine soignée, pâtisseries sur mesure et organisation d'événements.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body className="antialiased">{children}</body>
    </html>
  );
}
