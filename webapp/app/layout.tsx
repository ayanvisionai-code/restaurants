import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sweet Dishes | Editorial Fine Dining",
  description: "Modern dining with a timeless soul. Elegance, taste, and prestige.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <nav className="nav-header">
          <a href="/" className="nav-logo">
            {process.env.NEXT_PUBLIC_RESTAURANT_NAME || "Sweet Dishes"}
          </a>
          <ul className="nav-links">
            <li><a href="/">Home</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/menu">Menu</a></li>
            <li><a href="/experience">Tasting Menu</a></li>
            <li><a href="/contact">Reservations</a></li>
          </ul>
        </nav>
        {children}
      </body>
    </html>
  );
}
