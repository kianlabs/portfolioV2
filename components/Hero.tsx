import { ArrowUpRight } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="beranda"
      data-hero
      className="min-h-screen flex items-center justify-center pt-16 pb-20 px-6"
    >
      <div className="max-w-4xl w-full text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-full border border-white/10 bg-white/5">
          <span className="w-2 h-2 rounded-full bg-white/60"></span>
          <p className="text-[12px] font-medium text-white/60 uppercase tracking-[0.1em]">
            Based in France
          </p>
        </div>

        {/* Main Heading */}
        <h1
          data-hero-title
          className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-[-0.03em] text-white mb-6"
        >
          Creative Developer
          <br />
          &amp; Designer
        </h1>

        {/* Subheading */}
        <p
          data-hero-text
          className="text-base sm:text-lg text-white/60 max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          Crafting monochrome, motion-driven digital experiences. 7+ years
          specializing in SaaS & agencies, focused on web product design that
          moves and inspires.
        </p>

        {/* CTA */}
        <a
          href="#kontak"
          className="inline-flex items-center gap-2 px-6 py-3.5 bg-white/10 hover:bg-white/20 text-white font-medium rounded-md transition border border-white/10"
        >
          View Projects
          <ArrowUpRight className="w-4 h-4" />
        </a>

        {/* Expertise Pills - below CTA */}
        <div className="mt-16 flex flex-wrap gap-3 justify-center">
          <div className="px-4 py-2 rounded-full border border-white/10 bg-white/5">
            <span className="text-[12px] font-medium text-white/70">
              Frontend Engineering
            </span>
          </div>
          <div className="px-4 py-2 rounded-full border border-white/10 bg-white/5">
            <span className="text-[12px] font-medium text-white/70">
              Interface Design
            </span>
          </div>
          <div className="px-4 py-2 rounded-full border border-white/10 bg-white/5">
            <span className="text-[12px] font-medium text-white/70">
              Motion Systems
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
