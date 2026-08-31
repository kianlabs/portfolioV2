import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="beranda"
      data-hero
      className="mx-auto grid min-h-screen max-w-7xl items-center gap-16 px-6 pb-20 pt-32 lg:grid-cols-2 lg:gap-24"
    >
      {/* Left */}
      <div>
        <p
          data-hero-badge
          className="mb-8 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#626773]"
        >
          Web &amp; Application Development
        </p>

        <h1
          data-hero-title
          className="max-w-3xl text-5xl font-bold leading-[0.95] tracking-[-0.04em] sm:text-6xl lg:text-7xl"
        >
          We build digital
          <br />
          products that help
          <br />
          businesses{" "}
          <span className="text-[#C1292E]">grow.</span>
        </h1>

        <p
          data-hero-text
          className="mt-8 max-w-lg text-base leading-7 text-[#514f59]"
        >
          Kyan Labs membantu bisnis, UMKM, startup, dan personal brand
          mewujudkan website dan aplikasi yang cepat, modern,
          dan mudah digunakan.
        </p>

        <div
          data-hero-actions
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <a
            href="#kontak"
            className="inline-flex items-center gap-2 rounded-md bg-[#C1292E] px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-[#a82025]"
          >
            Diskusikan project Anda
            <ArrowUpRight className="h-4 w-4" />
          </a>

          <a
            href="#work"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-[#514f59] transition hover:text-[#161925]"
          >
            Lihat portfolio
            <ArrowUpRight className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>

      {/* Right — Featured project visual (Bertani) */}
      <div
        data-hero-preview
        className="relative"
      >
        <div className="overflow-hidden rounded-lg bg-[#161925]">
          {/* Set hasImage to true once /projects/bertani.webp is available in public/. */}
          {false ? (
            <Image
              src="/projects/bertani.webp"
              alt="Bertani — Web Application"
              width={1200}
              height={900}
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="aspect-[4/3] w-full object-cover"
              priority
            />
          ) : (
            <div className="flex aspect-[4/3] min-h-[400px] items-center justify-center p-8 sm:min-h-[480px]">
              <div className="text-center">
                <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-white/30">
                  Featured Project
                </p>
                <p className="mt-3 text-3xl font-bold tracking-[-0.02em] text-white/50">
                  Bertani
                </p>
                <p className="mt-2 max-w-[220px] text-sm text-white/40">
                  Web Application — screenshot akan tampil di sini.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
