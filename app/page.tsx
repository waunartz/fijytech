import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ToolsBar from "@/components/ToolsBar";
import Services from "@/components/Services";
import Mission from "@/components/Mission";
import HowItWorks from "@/components/HowItWorks";
import Pricing from "@/components/Pricing";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="w-full">
      <Navbar />
      <Hero />
      <ToolsBar />
      <Services />
      <Mission />
      <HowItWorks />
      <Pricing />
      <CTA />
      <Footer />
    </main>
  );
}
