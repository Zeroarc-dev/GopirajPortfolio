import Image from "next/image";
import { Download } from "lucide-react";
import { site, tools } from "@/content/site";
import { Reveal } from "./Reveal";

export function About() {
  return (
    <section id="about" className="border-t border-ink/10 bg-paper">
      <div className="container-x grid gap-12 py-20 sm:py-28 lg:grid-cols-12 lg:gap-16">
        <Reveal className="lg:col-span-5">
          <div className="relative mx-auto max-w-sm lg:max-w-none">
            <div aria-hidden className="absolute -bottom-4 -right-4 h-full w-full rounded-[2rem] bg-accent" />
            <Image
              src="/img/gopi-front.webp"
              alt="Portrait of Gopi Raj"
              width={500}
              height={500}
              sizes="(min-width: 1024px) 36vw, 90vw"
              className="relative aspect-square w-full rounded-[2rem] object-cover"
            />
          </div>
        </Reveal>

        <Reveal className="lg:col-span-7" delay={100}>
          <p className="eyebrow">About</p>
          <h2 className="h-display mt-5 text-6xl sm:text-7xl">
            Hi, I&apos;m <span className="text-accent">Gopi.</span>
          </h2>

          <div className="mt-6 max-w-2xl space-y-4 text-lg leading-relaxed text-ink/75">
            <p>
              I&apos;m a motion designer, graphic designer and web developer based in {site.location}.
              I help businesses and creators show up properly online: motion graphics people watch
              to the end, visuals that look like one brand, and websites that open fast on a phone.
            </p>
            <p>
              You work with me directly, from the first message to the final file. No agency layers,
              no handoffs.
            </p>
            <p className="text-base text-ink/55">Currently also studying cybersecurity.</p>
          </div>

          <h3 className="mt-10 text-xs font-bold uppercase tracking-[0.22em] text-ink/50">Tools I work in</h3>
          <ul className="mt-4 flex flex-wrap gap-2">
            {tools.map((t) => (
              <li key={t} className="rounded-full border border-ink/15 bg-card px-4 py-2 text-sm font-semibold">
                {t}
              </li>
            ))}
          </ul>

          <a href={site.resume} target="_blank" rel="noopener noreferrer" className="btn-ink mt-10">
            <Download size={16} /> Download resume
          </a>
        </Reveal>
      </div>
    </section>
  );
}
