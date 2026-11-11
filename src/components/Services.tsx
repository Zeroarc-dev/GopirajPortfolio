import { ArrowUpRight, Check } from "lucide-react";
import { services, whatsappLink } from "@/content/site";
import { Reveal } from "./Reveal";

export function Services() {
  return (
    <section id="services" className="bg-ink text-paper">
      <div className="container-x py-20 sm:py-28">
        <Reveal>
          <p className="eyebrow">Services</p>
          <h2 className="h-display mt-5 max-w-4xl text-6xl sm:text-8xl">
            One person. <span className="text-accent">Three crafts.</span>
          </h2>
          <p className="mt-6 max-w-xl text-paper/60">
            Hire me for one, or all three. When the same person animates your video, designs your poster
            and builds your site, everything looks like it belongs together.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {services.map((s, i) => (
            <Reveal key={s.id} delay={i * 90} className="h-full">
              <article className="flex h-full flex-col rounded-3xl border border-white/10 bg-white/[0.04] p-7 sm:p-9">
                <p className="font-display text-xl text-accent">0{i + 1}</p>
                <h3 className="h-display mt-4 text-4xl sm:text-5xl">{s.title}</h3>
                <p className="mt-4 leading-relaxed text-paper/70">{s.pitch}</p>

                <ul className="mt-7 space-y-3 border-t border-white/10 pt-7">
                  {s.includes.map((item) => (
                    <li key={item} className="flex gap-3 text-sm text-paper/85">
                      <Check size={16} className="mt-0.5 shrink-0 text-accent" aria-hidden />
                      {item}
                    </li>
                  ))}
                </ul>

                <p className="mt-7 text-xs text-paper/50">
                  <span className="font-bold uppercase tracking-[0.16em]">Best for:</span> {s.bestFor}
                </p>

                <a
                  href={whatsappLink(`Hi Gopi, I'd like a quote for ${s.title}.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-accent mt-8 self-start"
                >
                  Get a quote <ArrowUpRight size={16} />
                </a>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
