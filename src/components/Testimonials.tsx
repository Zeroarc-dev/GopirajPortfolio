import { MessageCircle } from "lucide-react";
import { testimonials } from "@/content/site";
import { Reveal } from "./Reveal";

export function Testimonials() {
  // Only real reviews are shown. The section stays hidden until at least one exists.
  const real = testimonials.filter((t) => !t.placeholder);
  if (real.length === 0) return null;

  return (
    <section aria-labelledby="testimonials-title" className="border-t border-ink/10 bg-paper">
      <div className="container-x py-20 sm:py-28">
        <Reveal>
          <p className="eyebrow">Client words</p>
          <h2 id="testimonials-title" className="h-display mt-5 text-6xl sm:text-8xl">
            Straight from <span className="text-accent">the chat.</span>
          </h2>
          <p className="mt-6 max-w-xl text-ink/60">
            Replies from clients after delivery, exactly as they sent them. Names kept private.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {real.map((t, i) => (
            <Reveal key={i} delay={i * 90} className="h-full">
              <figure className="flex h-full flex-col justify-between rounded-3xl bg-ink p-6 sm:p-7">
                <blockquote className="flex flex-col items-start gap-2">
                  {t.messages.map((m) => (
                    <p
                      key={m}
                      className="max-w-[92%] rounded-2xl rounded-tl-md bg-white/10 px-4 py-3 text-[17px] leading-relaxed text-paper first:rounded-tl-2xl"
                    >
                      {m}
                    </p>
                  ))}
                </blockquote>
                <figcaption className="mt-8 flex items-center gap-3 border-t border-white/10 pt-5">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent text-ink">
                    <MessageCircle size={18} aria-hidden />
                  </span>
                  <span>
                    <span className="block font-bold text-paper">{t.client}</span>
                    <span className="block text-sm text-paper/50">{t.source}</span>
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
