"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

const navItems = [
  { label: "Início", href: "#inicio" },
  { label: "Diferenciais", href: "#servicos" },
  { label: "Cases", href: "#cases" },
  { label: "FAQ", href: "#faq" },
  { label: "Contato", href: "#contato" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 24);
    }
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-200 ${
        scrolled
          ? "backdrop-blur-md bg-white/85 border-b border-gray-100 shadow-sm"
          : "bg-transparent"
      }`}
      style={{ height: 64 }}
    >
      <div className="mx-auto max-w-[1280px] h-full px-6 lg:px-8">
        <div className="h-full flex items-center justify-between">
          <a href="#inicio" className="flex items-center gap-3">
            <div className="relative h-10 w-10 shrink-0">
              <Image
                src="/images/logo.png"
                alt="YL"
                fill
                className="object-contain"
                priority
              />
            </div>
            <span className="text-base font-semibold text-slate-900">
              Yuri Loureiro
            </span>
          </a>

          <nav className="hidden lg:flex items-center gap-6">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-slate-700 hover:text-slate-900 px-3 py-2 transition"
                style={{ scrollMarginTop: "84px" }}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="#contato"
              className="hidden sm:inline-flex items-center rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white hover:brightness-95 transition"
            >
              Quero um site assim
            </a>

            <button
              aria-label="Abrir menu"
              onClick={() => setOpen((s) => !s)}
              className="inline-flex items-center justify-center rounded-md p-2 lg:hidden text-slate-700 hover:bg-slate-100"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path
                  d="M4 6h16M4 12h16M4 18h16"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {open && (
          <nav className="lg:hidden border-t border-gray-100 bg-white/95">
            <div className="px-4 py-4">
              <div className="flex flex-col gap-2">
                {navItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-md px-3 py-2 text-base font-medium text-slate-700 hover:bg-slate-100"
                    style={{ scrollMarginTop: "84px" }}
                  >
                    {item.label}
                  </a>
                ))}
                <a
                  href="#contato"
                  className="mt-2 inline-block rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white text-center"
                >
                  Quero um site assim
                </a>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
