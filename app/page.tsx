import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Projects from "../components/Projects";
import Collaborators from "../components/Collaborators";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[#0a0a0a] text-white">
        <Hero />
        <Projects />
        <Collaborators />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
