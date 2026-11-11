import { clients, stats } from "@/content/site";
import { Reveal } from "./Reveal";

export function Proof() {
  return (
    <section aria-label="Results and clients" className="border-b border-ink/10 bg-paper">
      <div className="container-x py-14 sm:py-20">
        <dl className={`grid grid-cols-2 gap-x-6 gap-y-10 ${stats.length === 3 ? "sm:grid-cols-3" : "lg:grid-cols-4"}`}>
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 70}>
              <div className="border-l-2 border-accent pl-4">
                <dd
                  className={`h-display inline-block text-6xl sm:text-7xl ${s.placeholder ? "ph" : ""}`}
                  title={s.placeholder ? "Placeholder: replace with your real number" : undefined}
                >
                  {s.value}
                </dd>
                <dt className="mt-2 text-sm font-semibold text-ink/60">{s.label}</dt>
              </div>
            </Reveal>
          ))}
        </dl>

        <Reveal className="mt-14 flex flex-col gap-5 sm:flex-row sm:items-center sm:gap-10">
          <p className="shrink-0 text-xs font-bold uppercase tracking-[0.22em] text-ink/50">Worked with</p>
          <ul className="flex flex-wrap items-center gap-x-10 gap-y-3">
            {clients.map((c) => (
              <li key={c.name} className="font-display text-2xl uppercase text-ink/70 sm:text-3xl">
                {c.name}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
