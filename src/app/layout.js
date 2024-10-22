import "./globals.css";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

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
      <body className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 transition-colors duration-200">
        <div className="flex flex-col min-h-screen">
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
