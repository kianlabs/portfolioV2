import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

/**
 * Minimal premium laptop mockup.
 * - Screen renders the Bertani screenshot when available (public/projects/bertani.webp),
 *   otherwise a clear placeholder in place.
 * - Set canShowImage to true once the file exists.
 */
function LaptopShowcase() {
  const canShowImage = false;

  return (
    <div
      data-laptop
      className="relative mx-auto w-full max-w-xl lg:max-w-none"
    >
      {/* Screen */}
      <div className="overflow-hidden rounded-t-xl bg-[#101216] p-1.5 sm:p-2">
        {/* Thin top bezel / camera notch */}
        <div className="mb-1.5 flex justify-center">
          <div className="h-1 w-16 rounded-full bg-[#1c1f26]" />
        </div>

        <div className="relative overflow-hidden rounded-md bg-[#161925]">
          {canShowImage ? (
            <Image
              src="/projects/bertani.webp"
              alt="Bertani — Web Application screenshot"
              width={1280}
              height={800}
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="aspect-[16/10] w-full object-cover"
              priority
            />
          ) : (
            <div className="flex aspect-[16/10] items-center justify-center p-8">
              <div className="text-center">
                <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-white/30">
                  Bertani
                </p>
                <p className="mt-3 text-xl font-bold tracking-[-0.02em] text-white/50 sm:text-2xl">
                  Web Application
                </p>
                <p className="mt-2 text-sm text-white/40">
                  Screenshot coming soon
                </p>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Laptop base */}
      <div className="relative mx-2 h-3 rounded-b-2xl bg-[#0c0e12] sm:mx-3 sm:h-3.5">
        <div className="mx-6 h-full rounded-b-xl bg-[#15171c] sm:mx-10">
          <div className="absolute inset-x-0 bottom-0 h-1 rounded-b-2xl bg-[#1f2229]" />
        </div>
      </div>

      {/* Soft grounding shadow under the laptop only */}
      <div
        className="absolute -bottom-6 left-1/2 h-6 w-4/5 -translate-x-1/2 rounded-[100%] bg-[#161925]/15 blur-md"
        aria-hidden="true"
      />
    </div>
  );
}

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

      {/* Right — Featured project laptop (Bertani) */}
      <div
        data-hero-preview
        className="relative"
      >
        <LaptopShowcase />
      </div>
    </section>
  );
}
