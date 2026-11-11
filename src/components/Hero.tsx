import Image from "next/image";
import { ArrowDownRight, MessageCircle } from "lucide-react";
import { site, whatsappLink } from "@/content/site";

const lanes = ["Motion Graphics", "Kinetic Type", "Posters", "Brand Kits", "Websites", "Web Apps"];

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-ink text-paper">
      {/* soft accent glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute -left-40 top-1/3 h-[40rem] w-[40rem] rounded-full bg-accent/20 blur-[140px]"
      />

      <div className="container-x relative grid items-end gap-x-8 pt-28 sm:pt-36 lg:grid-cols-12 lg:pt-40">
        {/* Copy */}
        <div className="pb-10 lg:order-2 lg:col-span-7 lg:pb-24">
          <p className="mb-6 inline-flex items-center gap-x-1.5 whitespace-nowrap rounded-full border border-accent/60 px-3 py-2 text-[9px] font-bold uppercase tracking-[0.12em] text-accent sm:gap-x-2 sm:px-4 sm:text-[11px] sm:tracking-[0.18em]">
            Motion Designer <span aria-hidden>·</span> Graphic Designer <span aria-hidden>·</span> Web Developer
          </p>

          <h1 className="h-display text-[13.5vw] sm:text-7xl lg:text-[6.25rem] xl:text-[7.25rem]">
            I make brands <span className="text-accent">impossible</span> to scroll past.
          </h1>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-paper/70 sm:text-lg">
            Motion graphics, brand visuals and websites for businesses and creators. Animated,
            designed and built by one person, start to finish.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#work" className="btn-accent max-sm:px-5">
              View work <ArrowDownRight size={16} />
            </a>
            <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="btn-ghost-light max-sm:px-5">
              <MessageCircle size={16} /> WhatsApp me
            </a>
          </div>

          <p className="mt-8 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.16em] text-paper/60">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-60 motion-reduce:hidden" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-green-400" />
            </span>
            Available for freelance · {site.location}
          </p>
        </div>

        {/* Portrait */}
        <div className="relative mx-auto w-[82%] max-w-sm lg:order-1 lg:col-span-5 lg:w-full lg:max-w-none">
          <div aria-hidden className="absolute inset-x-[4%] bottom-0 aspect-square rounded-full bg-accent" />
          <div
            aria-hidden
            className="absolute left-0 top-[3%] z-10 rounded-full border border-white/30 bg-ink/70 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.2em] backdrop-blur"
          >
            Portfolio <span className="text-accent">2026</span>
          </div>
          <Image
            src="/img/gopi-profile.webp"
            alt="Gopi Raj"
            width={1239}
            height={1400}
            priority
            sizes="(min-width: 1024px) 40vw, 82vw"
            className="relative h-auto w-full drop-shadow-[0_20px_40px_rgba(0,0,0,0.45)]"
          />
        </div>
      </div>

      {/* Lanes marquee */}
      <div className="relative overflow-hidden border-y border-ink/20 bg-accent py-3 text-ink">
        <div className="flex w-max animate-marquee whitespace-nowrap" aria-hidden>
          {[0, 1].map((dup) => (
            <ul key={dup} className="flex shrink-0 items-center">
              {lanes.map((lane) => (
                <li key={lane} className="flex items-center font-display text-2xl uppercase sm:text-3xl">
                  <span className="px-6">{lane}</span>
                  <span className="text-lg">✦</span>
                </li>
              ))}
            </ul>
          ))}
        </div>
        <p className="sr-only">Services: {lanes.join(", ")}</p>
      </div>
    </section>
  );
}
