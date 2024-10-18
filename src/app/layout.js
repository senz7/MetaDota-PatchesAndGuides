import "./globals.css";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const metadata = {
  title: "Dota patches and guides",
  description: "Created by Arseniy Nazarevskiy",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
      </body>
      <Footer />
    </html>
  );
}
