import { site } from "@/content/site";

export function Footer() {
  return (
    <footer className="bg-ink text-paper/60">
      <div className="container-x flex flex-col gap-4 py-8 text-xs font-semibold uppercase tracking-[0.16em] sm:flex-row sm:items-center sm:justify-between">
        <p>
          <span className="font-display text-base tracking-wide text-paper">
            Gopi<span className="text-accent">.</span>Raj
          </span>
          <span className="ml-3">© {new Date().getFullYear()}</span>
        </p>
        <p>Motion · Design · Web · {site.location}</p>
        <a href="#top" className="hover:text-accent">
          Back to top ↑
        </a>
      </div>
    </footer>
  );
}
