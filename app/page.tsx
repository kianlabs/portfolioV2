import About from "../components/About";
import CTA from "../components/CTA";
import FAQ from "../components/FAQ";
import FloatingWhatsApp from "../components/FloatingWhatsApp";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Portfolio from "../components/Portfolio";
import Pricing from "../components/Pricing";
import Process from "../components/Process";
import Services from "../components/Services";
import Trust from "../components/Trust";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-[#FDFFFC] text-[#161925]">
        <Hero />
        <Trust />
        <About />
        <Services />
        <Pricing />
        <Portfolio />
        <Process />
        <FAQ />
        <CTA />
      </main>

      <Footer />
      <FloatingWhatsApp />
    </>
  );
}

