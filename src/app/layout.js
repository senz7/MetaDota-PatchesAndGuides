import "./globals.css";

import { ThemeProvider } from "@/components/ui/ThemeProvider";
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
      <body>
        <ThemeProvider>
          <div className="flex flex-col min-h-screen bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 transition-colors duration-500 ease-in-out">
            <Header />
            {children}
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
