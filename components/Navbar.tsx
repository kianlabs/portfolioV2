"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { label: "Home", href: "#beranda" },
  { label: "Projects", href: "#work" },
  { label: "Blog", href: "#blog" },
  { label: "Contact", href: "#kontak" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-[#0a0a0a]/80 backdrop-blur-md border-b border-white/5">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        {/* Logo */}
        <a
          href="#beranda"
          className="text-sm font-bold tracking-[-0.02em] text-white"
        >
          Zed<span className="text-white/50">.</span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[13px] font-medium text-white/60 transition hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTA + Theme Toggle */}
        <div className="hidden items-center gap-4 md:flex">
          <button className="text-white/60 hover:text-white transition">
            {/* Moon icon for dark mode toggle */}
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </button>
          <a
            href="#kontak"
            className="px-5 py-2.5 text-[13px] font-semibold text-white bg-white/10 hover:bg-white/20 rounded-md transition border border-white/10"
          >
            Let&apos;s Talk
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white/60 hover:text-white"
          aria-label="Toggle menu"
        >
          {open ? (
            <X className="h-5 w-5" />
          ) : (
            <Menu className="h-5 w-5" />
          )}
        </button>
      </div>

      {/* Mobile Nav */}
      {open && (
        <nav className="border-t border-white/5 bg-[#0a0a0a] px-6 pb-6 pt-4 md:hidden">
          <div className="flex flex-col gap-4">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-white/60 hover:text-white transition"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#kontak"
              className="mt-2 px-5 py-3 text-sm font-semibold text-white bg-white/10 hover:bg-white/20 rounded-md transition text-center border border-white/10"
            >
              Let&apos;s Talk
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
