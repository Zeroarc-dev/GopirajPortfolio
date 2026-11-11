import { ArrowUpRight, Check } from "lucide-react";
import { packages, packagesNote, whatsappLink } from "@/content/site";
import { Reveal } from "./Reveal";

export function Packages() {
  return (
    <section id="packages" aria-labelledby="packages-title" className="bg-paper">
      <div className="container-x py-20 sm:py-28">
        <Reveal>
          <p className="eyebrow">Packages</p>
          <h2 id="packages-title" className="h-display mt-5 text-6xl sm:text-8xl">
            Clear prices. <span className="text-accent">Pick one.</span>
          </h2>
          <p className="mt-6 max-w-xl text-ink/60">
            Motion graphics packages for shops, local businesses and creators. Every price is a
            starting point, and you get an exact quote before any work begins.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-5 lg:grid-cols-3 lg:items-stretch">
          {packages.map((p, i) => {
            const dark = p.featured;
            return (
              <Reveal key={p.id} delay={i * 90} className="h-full">
                <article
                  className={`relative flex h-full flex-col rounded-3xl p-7 sm:p-9 ${
                    dark ? "bg-ink text-paper" : "border border-ink/10 bg-card text-ink"
                  }`}
                >
                  {p.featured && (
                    <p className="absolute right-6 top-6 rounded-full bg-accent px-3 py-1.5 text-[10px] font-extrabold uppercase tracking-[0.16em] text-ink">
                      Best value
                    </p>
                  )}
                  <h3 className="h-display text-4xl">{p.name}</h3>
                  <p className={`mt-2 text-sm ${dark ? "text-paper/60" : "text-ink/60"}`}>{p.summary}</p>

                  <p className="mt-8">
                    <span
                      className={`block text-[11px] font-bold uppercase tracking-[0.18em] ${
                        dark ? "text-paper/50" : "text-ink/50"
                      }`}
                    >
                      Starting from
                    </span>
                    <span className="h-display mt-1 block text-7xl text-accent">
                      {p.price}
                      {p.per && (
                        <span className={`ml-2 font-sans text-sm font-semibold normal-case tracking-normal ${dark ? "text-paper/50" : "text-ink/50"}`}>
                          {p.per}
                        </span>
                      )}
                    </span>
                  </p>

                  <ul className={`mt-8 flex-1 space-y-3 border-t pt-7 ${dark ? "border-white/10" : "border-ink/10"}`}>
                    {p.includes.map((item) => (
                      <li key={item} className={`flex gap-3 text-sm ${dark ? "text-paper/85" : "text-ink/80"}`}>
                        <Check size={16} className="mt-0.5 shrink-0 text-accent" aria-hidden />
                        {item}
                      </li>
                    ))}
                  </ul>

                  <a
                    href={whatsappLink(`Hi Gopi, I'm interested in the ${p.name} package.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`mt-9 self-start ${dark ? "btn-accent" : "btn-ink"}`}
                  >
                    Choose {p.name} <ArrowUpRight size={16} />
                  </a>
                </article>
              </Reveal>
            );
          })}
        </div>

        <Reveal>
          <p className="mt-8 max-w-3xl text-sm leading-relaxed text-ink/55">{packagesNote}</p>
        </Reveal>
      </div>
    </section>
  );
}
