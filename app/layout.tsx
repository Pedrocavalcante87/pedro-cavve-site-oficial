import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Pedro Cavve | R&B • Soul • Pop Contemporâneo",
  description: "Site oficial do artista Pedro Cavve - Cantor, produtor e rapper de R&B, soul e pop contemporâneo",
  keywords: ["Pedro Cavve", "R&B", "Soul", "Pop", "Música Brasileira", "Artista"],
  authors: [{ name: "Pedro Cavve" }],
  openGraph: {
    title: "Pedro Cavve | R&B • Soul • Pop Contemporâneo",
    description: "Site oficial do artista Pedro Cavve",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
