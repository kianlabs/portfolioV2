import About from "../components/About";
import Contact from "../components/Contact";
import FAQ from "../components/FAQ";
import FloatingWhatsApp from "../components/FloatingWhatsApp";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import ScrollAnimations from "../components/ScrollAnimations";
import SelectedWork from "../components/SelectedWork";
import Process from "../components/Process";
import Services from "../components/Services";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-[#FDFFFC] text-[#161925]">
        <Hero />
        <SelectedWork />
        <Services />
        <Process />
        <About />
        <FAQ />
        <Contact />
      </main>

      <ScrollAnimations />
      <FloatingWhatsApp />
    </>
  );
}
