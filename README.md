# Gopi Raj Portfolio (v2)

Fast, single-page portfolio for a freelance video editor, graphic designer and web developer.
Next.js 14 static export + Tailwind CSS. No 3D libraries, no autoplay videos, no preloader.

## Run it

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # static site is written to ./out
npm run lint && npm run typecheck
```

Deploy: import the repo in Vercel (framework: Next.js). No settings or env vars needed.

## Edit content

Everything you see on the page comes from **`src/content/site.ts`**.

| To change | Edit |
| --- | --- |
| Reels | `videos` (thumbnail in `public/work/video/`, Vimeo player URL in `src`) |
| Posters | `posters` (image in `public/work/design/`, 4:5 WebP, about 1080px wide) |
| Web projects | `webProjects` |
| Services | `services` |
| Package prices | `packages` |
| Contact details, socials | `site` |
| Accent colour | `--accent` in `src/app/globals.css` (one line) |

## Before going live: replace placeholders

These are marked `placeholder: true` in `site.ts` and show with a dashed outline on the page:

- [ ] `clients`: swap the four names for logos when you have them (optional)
- [ ] `videos[].views`: add real view counts if you want the badge to show


- [ ] Hero showreel loop, when it exists (slot: the portrait column in `Hero.tsx`)

## Structure

```
src/app/            layout (SEO, fonts), page, 404, sitemap, robots
src/components/     Nav, Hero, Proof, Work (tabs + lightbox), Services,
                    Testimonials, About, Contact (Formspree form), Footer, Reveal
src/content/site.ts all content
public/             optimised WebP images, resume PDF, og.jpg
```
