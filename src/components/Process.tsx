import { processSteps } from "@/content/site";
import { Reveal } from "./Reveal";

export function Process() {
  return (
    <section id="process" aria-labelledby="process-title" className="border-t border-ink/10 bg-paper">
      <div className="container-x py-20 sm:py-28">
        <Reveal>
          <p className="eyebrow">How I work</p>
          <h2 id="process-title" className="h-display mt-5 text-6xl sm:text-8xl">
            Simple. <span className="text-accent">No surprises.</span>
          </h2>
        </Reveal>

        <ol className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((step, i) => (
            <li key={step.title} className="h-full">
              <Reveal delay={i * 80} className="h-full">
                <div className="flex h-full flex-col rounded-3xl border border-ink/10 bg-card p-7">
                  <span className="h-display text-6xl text-accent">0{i + 1}</span>
                  <h3 className="h-display mt-6 text-3xl">{step.title}</h3>
                  <p className="mt-3 leading-relaxed text-ink/70">{step.text}</p>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
