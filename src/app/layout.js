import "./globals.css";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import Head from "next/head";

export const metadata = {
  title: "Dota patches and guides",
  description: "Created by Arseniy Nazarevskiy",
  icons: {
    icon: ["/favicon.ico?v=4"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
