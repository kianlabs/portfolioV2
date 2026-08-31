import { ArrowUpRight } from "lucide-react";

const WA_URL = "https://wa.me/6281318679190";
const EMAIL = "ridzkyan0504@gmail.com";

export default function Contact() {
  return (
    <section
      id="kontak"
      className="bg-[#161925] px-6 pt-28 pb-8 text-[#FDFFFC] lg:pt-36"
    >
      <div className="mx-auto max-w-7xl">
        {/* Main contact area */}
        <div className="grid gap-16 lg:grid-cols-3 lg:gap-24">
          {/* Left — Headline */}
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#F1D302]">
              Punya Project?
            </p>

            <h2 className="mt-5 text-4xl font-bold leading-[0.98] tracking-[-0.04em] sm:text-5xl lg:text-6xl">
              Bangun sesuatu
              <br />
              yang hebat
              <br />
              bersama Kyan Labs.
            </h2>
          </div>

          {/* Center — CTA */}
          <div className="flex flex-col justify-center">
            <p className="text-base leading-7 text-white/60">
              Yuk diskusikan ide Anda. Kami siap membantu mewujudkan
              produk digital yang berdampak.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={WA_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-md bg-[#C1292E] px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-[#a82025]"
              >
                Diskusikan project Anda
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Right — Contact info */}
          <div className="flex flex-col gap-8 lg:items-end lg:text-right">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white/40">
                WhatsApp
              </p>
              <a
                href={WA_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-flex items-center gap-1.5 text-sm font-medium text-white transition hover:text-[#C1292E]"
              >
                +62 813-1867-9190
                <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
            </div>

            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white/40">
                Email
              </p>
              <a
                href={`mailto:${EMAIL}`}
                className="mt-2 inline-flex items-center gap-1.5 text-sm font-medium text-white transition hover:text-[#C1292E]"
              >
                {EMAIL}
                <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-24 flex flex-col items-center justify-between gap-4 border-t border-white/10 py-8 sm:flex-row">
          <a
            href="#beranda"
            className="text-sm font-bold tracking-[-0.02em] uppercase"
          >
            Kyan Labs<span className="text-[#C1292E]">.</span>
          </a>

          <p className="text-xs text-white/40">
            &copy; 2026 Kyan Labs.
          </p>
        </div>
      </div>
    </section>
  );
}
