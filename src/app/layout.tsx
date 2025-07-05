import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Modern Homepage",
  description: "A modern React-based homepage with sleek design",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
