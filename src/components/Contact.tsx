"use client";

import { useState } from "react";
import { ArrowUpRight, Mail, MessageCircle } from "lucide-react";
import { services, site, whatsappLink } from "@/content/site";

type Status = "idle" | "sending" | "sent" | "error";

const field =
  "w-full rounded-2xl border border-white/15 bg-white/[0.06] px-5 py-4 text-paper placeholder:text-paper/35 focus:border-accent focus:outline-none";

export function Contact() {
  const [status, setStatus] = useState<Status>("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus("sending");
    try {
      const res = await fetch(site.formEndpoint, {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" },
      });
      if (!res.ok) throw new Error(`Form service responded ${res.status}`);
      form.reset();
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="bg-accent text-ink">
      <div className="container-x grid gap-12 py-20 sm:py-28 lg:grid-cols-2 lg:gap-16">
        <div>
          <p className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.22em]">
            <span className="h-px w-8 bg-ink" /> Let&apos;s work together
          </p>
          <h2 className="h-display mt-5 text-7xl sm:text-8xl lg:text-9xl">Have a project in mind?</h2>
          <p className="mt-6 max-w-md text-lg font-medium leading-relaxed text-ink/80">
            Tell me what you need and when you need it. The fastest way to reach me is WhatsApp.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="btn-ink">
              <MessageCircle size={16} /> Chat on WhatsApp
            </a>
            <a
              href={`mailto:${site.email}`}
              className="btn border border-ink/40 normal-case tracking-normal hover:bg-ink hover:text-paper"
            >
              <Mail size={16} /> {site.email}
            </a>
          </div>

          <ul className="mt-12 flex flex-wrap gap-x-8 gap-y-3">
            {site.socials.map((s) => (
              <li key={s.name}>
                <a
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-1 text-sm font-extrabold uppercase tracking-[0.16em] underline-offset-4 hover:underline"
                >
                  {s.name}
                  <ArrowUpRight size={15} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <form onSubmit={onSubmit} className="self-start rounded-[2rem] bg-ink p-6 text-paper sm:p-10">
          {/* Honeypot: bots fill this, people never see it */}
          <input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden />

          <div className="grid gap-5 sm:grid-cols-2">
            <label className="block">
              <span className="mb-2 block text-[11px] font-bold uppercase tracking-[0.18em] text-paper/60">Name</span>
              <input required name="name" type="text" autoComplete="name" placeholder="Your name" className={field} />
            </label>
            <label className="block">
              <span className="mb-2 block text-[11px] font-bold uppercase tracking-[0.18em] text-paper/60">Email</span>
              <input required name="email" type="email" autoComplete="email" placeholder="you@example.com" className={field} />
            </label>
          </div>

          <label className="mt-5 block">
            <span className="mb-2 block text-[11px] font-bold uppercase tracking-[0.18em] text-paper/60">
              What do you need?
            </span>
            <select name="service" defaultValue="" required className={`${field} appearance-none`}>
              <option value="" disabled>
                Choose a service
              </option>
              {services.map((s) => (
                <option key={s.id} value={s.title} className="text-ink">
                  {s.title}
                </option>
              ))}
              <option value="A mix / not sure" className="text-ink">
                A mix / not sure yet
              </option>
            </select>
          </label>

          <label className="mt-5 block">
            <span className="mb-2 block text-[11px] font-bold uppercase tracking-[0.18em] text-paper/60">
              Project details
            </span>
            <textarea
              required
              name="message"
              rows={5}
              placeholder="What is it, when do you need it, and any links for reference"
              className={`${field} resize-none`}
            />
          </label>

          <button type="submit" disabled={status === "sending"} className="btn-accent mt-7 w-full disabled:opacity-60">
            {status === "sending" ? "Sending…" : "Send message"}
          </button>

          <p role="status" aria-live="polite" className="mt-4 min-h-[1.25rem] text-sm">
            {status === "sent" && <span className="text-green-400">Thanks! Your message is in. I&apos;ll reply soon.</span>}
            {status === "error" && (
              <span className="text-red-400">
                That didn&apos;t send. Please try again, or message me on WhatsApp instead.
              </span>
            )}
          </p>
        </form>
      </div>
    </section>
  );
}
