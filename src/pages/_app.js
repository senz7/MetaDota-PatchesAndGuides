import { Footer } from "@/components/Footer";
import "../app/globals.css";
import { Header } from "@/components/Header";

export default function App({ Component, pageProps }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <Component {...pageProps} />;
      <Footer />
    </div>
  );
}
