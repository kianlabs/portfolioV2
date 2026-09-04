"use client";

import { useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";

const links = [
  { label: "Work", href: "#work" },
  { label: "Services", href: "#layanan" },
  { label: "Process", href: "#proses" },
  { label: "About", href: "#tentang" },
  { label: "Contact", href: "#kontak" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-[#FDFFFC]">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <a href="#beranda" className="text-sm font-bold tracking-[-0.02em] uppercase">
          Kyan Labs<span className="text-[#C1292E]">.</span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[13px] font-medium text-[#514f59] transition hover:text-[#161925]"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="#kontak"
          className="hidden items-center gap-1.5 rounded-md bg-[#161925] px-5 py-2.5 text-[13px] font-semibold text-white transition hover:bg-[#C1292E] md:inline-flex"
        >
          Diskusikan project
          <ArrowUpRight className="h-3.5 w-3.5" />
        </a>

        <button
          onClick={() => setOpen(!open)}
          className="flex h-10 w-10 items-center justify-center md:hidden"
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-black/5 bg-[#FDFFFC] px-6 pb-6 pt-4 md:hidden">
          <nav className="flex flex-col gap-4">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-sm font-medium text-[#514f59] transition hover:text-[#161925]"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#kontak"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center gap-1.5 rounded-md bg-[#161925] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#C1292E]"
            >
              Diskusikan project
              <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
