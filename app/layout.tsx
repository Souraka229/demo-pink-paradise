import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Pink Paradise | Restaurant & Pâtisserie – Parakou",
  description:
    "Pink Paradise à Parakou : un cadre élégant pour vos repas, pâtisseries sur mesure et événements privés. Réservez ou commandez via WhatsApp.",
  keywords:
    "restaurant Parakou, Pink Paradise, pâtisserie Parakou, événement Parakou, réservation restaurant Bénin, Amawignon",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className="antialiased">{children}</body>
    </html>
  );
}
