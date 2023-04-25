import { Inter } from "next/font/google";
import Navbar from "@/components/Sections/Navbar";
import Hero from "@/components/Sections/Hero";
import Features from "@/components/Sections/Features";
import Footer from "@/components/Sections/Footer";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="container">
      <Navbar />
      <Hero />
      <Features />
      <Footer />
    </main>
  );
}
