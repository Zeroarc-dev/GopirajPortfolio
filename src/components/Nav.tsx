"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { whatsappLink } from "@/content/site";

const links = [
  { label: "Work", href: "#work" },
  { label: "Services", href: "#services" },
  { label: "Packages", href: "#packages" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export function Nav() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-6 sm:pt-5">
      <div className="mx-auto flex max-w-5xl items-center justify-between rounded-full border border-white/10 bg-ink/80 py-2 pl-5 pr-2 text-paper shadow-lg shadow-black/20 backdrop-blur-md">
        <a href="#top" className="font-display text-xl uppercase tracking-wide" aria-label="Gopi Raj, back to top">
          Gopi<span className="text-accent">.</span>Raj
        </a>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Main">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-xs font-bold uppercase tracking-[0.18em] text-paper/70 transition-colors hover:text-accent"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="btn bg-accent px-5 py-3 text-ink hover:bg-white"
          >
            Let&apos;s talk
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 md:hidden"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {open && (
        <nav
          id="mobile-menu"
          aria-label="Mobile"
          className="mx-auto mt-2 max-w-5xl rounded-3xl border border-white/10 bg-ink/95 p-6 text-paper backdrop-blur-md md:hidden"
        >
          <ul className="flex flex-col gap-1">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block py-2 font-display text-4xl uppercase hover:text-accent"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
