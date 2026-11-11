"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ArrowUpRight, ChevronLeft, ChevronRight, Play, X } from "lucide-react";
import { posters, videos, webProjects } from "@/content/site";
import { Reveal } from "./Reveal";

type Tab = "video" | "design" | "web";
type Modal = { kind: "video" | "poster"; index: number } | null;

const tabs: { id: Tab; label: string; count: number }[] = [
  { id: "video", label: "Motion", count: videos.length },
  { id: "design", label: "Design", count: posters.length },
  { id: "web", label: "Web", count: webProjects.length },
];

export function Work() {
  const [tab, setTab] = useState<Tab>("video");
  const [modal, setModal] = useState<Modal>(null);

  return (
    <section id="work" className="bg-paper">
      <div className="container-x py-20 sm:py-28">
        <Reveal className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="eyebrow">Selected work</p>
            <h2 className="h-display mt-5 text-6xl sm:text-8xl">
              Proof, not <span className="text-accent">promises.</span>
            </h2>
          </div>

          <div role="tablist" aria-label="Work categories" className="flex gap-2">
            {tabs.map((t) => (
              <button
                key={t.id}
                role="tab"
                id={`tab-${t.id}`}
                aria-selected={tab === t.id}
                aria-controls={`panel-${t.id}`}
                onClick={() => setTab(t.id)}
                className={`rounded-full border px-5 py-3 text-xs font-extrabold uppercase tracking-[0.16em] transition-colors sm:px-7 ${
                  tab === t.id
                    ? "border-ink bg-ink text-paper"
                    : "border-ink/20 text-ink/60 hover:border-ink hover:text-ink"
                }`}
              >
                {t.label} <span className={tab === t.id ? "text-accent" : "text-ink/40"}>{t.count}</span>
              </button>
            ))}
          </div>
        </Reveal>

        <div className="mt-12">
          {tab === "video" && (
            <div
              role="tabpanel"
              id="panel-video"
              aria-labelledby="tab-video"
              className="grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-3 lg:grid-cols-4"
            >
              {videos.map((v, i) => (
                <button
                  key={v.id}
                  type="button"
                  onClick={() => setModal({ kind: "video", index: i })}
                  className="group relative aspect-[9/16] overflow-hidden rounded-2xl bg-ink text-left"
                  aria-label={`Play ${v.title}`}
                >
                  <Image
                    src={v.thumbnail}
                    alt=""
                    fill
                    sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 50vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <span className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent" />
                  <span className="absolute left-3 top-3 flex h-10 w-10 items-center justify-center rounded-full bg-accent text-ink transition-transform group-hover:scale-110">
                    <Play size={16} className="ml-0.5 fill-current" />
                  </span>
                  {v.views && (
                    <span
                      className={`absolute right-3 top-3 rounded-full bg-black/60 px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-white backdrop-blur ${
                        v.viewsPlaceholder ? "ph" : ""
                      }`}
                    >
                      {v.views}
                    </span>
                  )}
                  <span className="absolute inset-x-3 bottom-3 text-white">
                    <span className="block text-[10px] font-bold uppercase tracking-[0.18em] text-accent">
                      {v.category}
                    </span>
                    <span className="mt-1 block text-sm font-bold leading-snug sm:text-base">{v.title}</span>
                  </span>
                </button>
              ))}

              {videos.length === 0 && (
                <div className="col-span-2 flex aspect-[9/8] flex-col justify-between rounded-2xl bg-ink p-6 text-paper sm:p-8 md:aspect-auto">
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-accent">Coming soon</p>
                  <p className="h-display text-4xl sm:text-6xl">New motion graphics work is rendering.</p>
                </div>
              )}

              <div className="flex aspect-[9/16] flex-col justify-between rounded-2xl border-2 border-dashed border-ink/20 p-5">
                <p className="h-display text-3xl text-ink/30 sm:text-4xl">Your video next?</p>
                <a href="#contact" className="text-xs font-extrabold uppercase tracking-[0.16em] text-ink hover:text-accent">
                  Start a project <ArrowUpRight size={14} className="inline" />
                </a>
              </div>
            </div>
          )}

          {tab === "design" && (
            <div
              role="tabpanel"
              id="panel-design"
              aria-labelledby="tab-design"
              className="grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-3"
            >
              {posters.map((p, i) => (
                <button
                  key={p.id}
                  type="button"
                  onClick={() => setModal({ kind: "poster", index: i })}
                  className="group relative aspect-[4/5] overflow-hidden rounded-2xl bg-ink text-left"
                  aria-label={`View ${p.title}`}
                >
                  <Image
                    src={p.src}
                    alt={`${p.title}, ${p.category}`}
                    fill
                    sizes="(min-width: 1024px) 33vw, 50vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <span className="absolute inset-x-0 bottom-0 translate-y-full bg-ink/90 p-4 text-paper transition-transform duration-300 group-hover:translate-y-0 group-focus-visible:translate-y-0">
                    <span className="block text-[10px] font-bold uppercase tracking-[0.18em] text-accent">
                      {p.category}
                    </span>
                    <span className="block text-sm font-bold">{p.title}</span>
                  </span>
                </button>
              ))}
            </div>
          )}

          {tab === "web" && (
            <div role="tabpanel" id="panel-web" aria-labelledby="tab-web" className="grid gap-6 lg:grid-cols-2">
              {webProjects.map((w) => (
                <a
                  key={w.id}
                  href={w.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col justify-between rounded-3xl bg-ink p-8 text-paper transition-colors hover:bg-black sm:p-10"
                >
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-accent">{w.category}</p>
                    <h3 className="h-display mt-3 text-5xl sm:text-6xl">{w.title}</h3>
                    <p className="mt-4 max-w-md leading-relaxed text-paper/70">{w.description}</p>
                  </div>
                  <div className="mt-10 flex flex-wrap items-end justify-between gap-6">
                    <ul className="flex flex-wrap gap-2">
                      {w.stack.map((s) => (
                        <li
                          key={s}
                          className="rounded-full border border-white/15 px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-paper/70"
                        >
                          {s}
                        </li>
                      ))}
                    </ul>
                    <span className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-[0.16em] text-accent">
                      Visit live site
                      <ArrowUpRight size={16} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    </span>
                  </div>
                </a>
              ))}

              <div className="flex min-h-[16rem] flex-col justify-between rounded-3xl border-2 border-dashed border-ink/20 p-8 sm:p-10">
                <p className="h-display text-4xl text-ink/30 sm:text-5xl">Need a site that loads fast and sells?</p>
                <a href="#contact" className="text-xs font-extrabold uppercase tracking-[0.16em] text-ink hover:text-accent">
                  Get a quote <ArrowUpRight size={14} className="inline" />
                </a>
              </div>
            </div>
          )}
        </div>
      </div>

      {modal && <Lightbox modal={modal} setModal={setModal} />}
    </section>
  );
}

function Lightbox({ modal, setModal }: { modal: NonNullable<Modal>; setModal: (m: Modal) => void }) {
  const closeRef = useRef<HTMLButtonElement>(null);
  const total = modal.kind === "video" ? videos.length : posters.length;

  const close = useCallback(() => setModal(null), [setModal]);
  const step = useCallback(
    (dir: number) => setModal({ kind: modal.kind, index: (modal.index + dir + total) % total }),
    [modal, total, setModal],
  );

  useEffect(() => {
    const previouslyFocused = document.activeElement as HTMLElement | null;
    closeRef.current?.focus();
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prevOverflow;
      previouslyFocused?.focus();
    };
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [close, step]);

  const title = modal.kind === "video" ? videos[modal.index].title : posters[modal.index].title;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={title}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm"
      onClick={close}
    >
      <button
        ref={closeRef}
        type="button"
        onClick={close}
        aria-label="Close"
        className="absolute right-4 top-4 z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white text-ink hover:bg-accent"
      >
        <X size={20} />
      </button>

      {total > 1 && (
        <>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              step(-1);
            }}
            aria-label="Previous"
            className="absolute left-2 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white hover:bg-accent hover:text-ink sm:left-6"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              step(1);
            }}
            aria-label="Next"
            className="absolute right-2 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white hover:bg-accent hover:text-ink sm:right-6"
          >
            <ChevronRight size={20} />
          </button>
        </>
      )}

      <div onClick={(e) => e.stopPropagation()} className="relative">
        {modal.kind === "video" ? (
          <div className="relative aspect-[9/16] h-[82vh] max-w-[92vw] overflow-hidden rounded-2xl bg-black">
            {videos[modal.index].src.endsWith(".mp4") ? (
              <video
                key={videos[modal.index].id}
                src={videos[modal.index].src}
                poster={videos[modal.index].thumbnail}
                controls
                autoPlay
                playsInline
                className="absolute inset-0 h-full w-full object-contain"
              />
            ) : (
              <iframe
                key={videos[modal.index].id}
                src={videos[modal.index].src}
                title={title}
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 h-full w-full border-0"
              />
            )}
          </div>
        ) : (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            key={posters[modal.index].id}
            src={posters[modal.index].src}
            alt={`${posters[modal.index].title}, ${posters[modal.index].category}`}
            className="max-h-[86vh] max-w-[92vw] rounded-xl object-contain"
          />
        )}
      </div>
    </div>
  );
}
