// ─────────────────────────────────────────────────────────────
// ALL SITE CONTENT LIVES IN THIS FILE.
// To add a reel, poster, client or review: edit the lists below.
// Anything marked `placeholder: true` (or containing "XX") is NOT
// real data yet. Replace it before going live.
// ─────────────────────────────────────────────────────────────

export const site = {
  name: "Gopi Raj",
  url: "https://gopiraj.com",
  title: "Gopi Raj | Motion Designer, Graphic Designer & Web Developer",
  description:
    "Freelance motion designer, graphic designer and web developer from Ranchi, India. Motion graphics, brand visuals and websites for businesses and creators.",
  location: "Ranchi, India",
  email: "gopiraj2010oct@gmail.com",
  whatsapp: "916207658670",
  formEndpoint: "https://formspree.io/f/xqegngow",
  resume: "/gopi-raj-resume.pdf",
  socials: [
    { name: "Instagram", handle: "@im.romer_", url: "https://www.instagram.com/im.romer_" },
    { name: "LinkedIn", handle: "Gopi Raj", url: "https://www.linkedin.com/in/gopi-raj-365339348" },
    { name: "GitHub", handle: "Zeroarc-dev", url: "https://github.com/Zeroarc-dev" },
  ],
};

export const whatsappLink = (message = "Hi Gopi, I have a project I'd like to discuss.") =>
  `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`;

// ── Proof ────────────────────────────────────────────────────
export type Stat = { value: string; label: string; placeholder?: boolean };

export const stats: Stat[] = [
  { value: "15+", label: "Motion graphics videos made" },
  { value: "7", label: "Brands worked with" },
  // Instagram dashboard, 11 Oct to 10 Nov 2026: 42,939 views
  { value: "42K+", label: "Reel views in 30 days" },
];

// Names only for now. Swap for logos once you have them.
export const clients: { name: string; placeholder?: boolean }[] = [
  { name: "Unevo" },
  { name: "TFrenzy" },
  { name: "National Store" },
  { name: "Ramgarh Store" },
  { name: "Ikonic Salon" },
  { name: "Unevo" },
  { name: "ConceptsWiz" },
];

// ── Work ─────────────────────────────────────────────────────
export type VideoProject = {
  id: string;
  title: string;
  category: string;
  thumbnail: string;
  /** A local .mp4 path, or a Vimeo player URL */
  src: string;
  /** e.g. "120K views". Leave undefined to hide. */
  views?: string;
  viewsPlaceholder?: boolean;
};

// To add a piece: put a compressed 720x1280 .mp4 and a .webp thumbnail in
// public/work/video/, then add an entry here. `src` can also be a Vimeo player URL.
export const videos: VideoProject[] = [
  {
    id: "tv-antenna-3d",
    title: "How a TV Antenna Works",
    category: "3D explainer",
    thumbnail: "/work/video/tv-antenna-3d.webp",
    src: "/work/video/tv-antenna-3d.mp4",
  },
  {
    id: "before-after-timeline",
    title: "Before / After Edit Breakdown",
    category: "Edit breakdown",
    thumbnail: "/work/video/before-after-timeline.webp",
    src: "/work/video/before-after-timeline.mp4",
  },
  {
    id: "password-crack",
    title: "How Fast Can Your Password Be Cracked?",
    category: "Explainer reel",
    thumbnail: "/work/video/password-crack.webp",
    src: "/work/video/password-crack.mp4",
  },
  {
    id: "sim-check-sanchar-saathi",
    title: "SIM Check with Sanchar Saathi",
    category: "Explainer reel",
    thumbnail: "/work/video/sim-check-sanchar-saathi.webp",
    src: "/work/video/sim-check-sanchar-saathi.mp4",
  },
  {
    id: "password-leak-check",
    title: "Is Your Password Already Leaked?",
    category: "Explainer reel",
    thumbnail: "/work/video/password-leak-check.webp",
    src: "/work/video/password-leak-check.mp4",
  },
];

export type Poster = { id: string; title: string; category: string; src: string };

export const posters: Poster[] = [
  { id: "ikonic-poster", title: "Ikonic Poster", category: "Poster design", src: "/work/design/ikonic-poster.webp" },
  { id: "unevo-built-in-trust", title: "Built in Trust", category: "Brand campaign", src: "/work/design/unevo-built-in-trust.webp" },
  { id: "bhoola-poster", title: "Bhoola Poster", category: "Event design", src: "/work/design/bhoola-poster.webp" },
  { id: "national-store", title: "National Store", category: "Retail marketing", src: "/work/design/national-store.webp" },
  { id: "unevo-marketing", title: "Unevo Marketing", category: "Marketing poster", src: "/work/design/unevo-marketing.webp" },
  { id: "unevo-instagram-post", title: "Unevo Instagram Post", category: "Social media", src: "/work/design/unevo-instagram-post.webp" },
];

export type WebProject = {
  id: string;
  title: string;
  category: string;
  description: string;
  stack: string[];
  link: string;
};

export const webProjects: WebProject[] = [
  {
    id: "conceptswiz",
    title: "ConceptsWiz",
    category: "Education platform",
    description:
      "Lessons, tests and learning support brought together in one clean experience for students.",
    stack: ["React", "Node.js", "PostgreSQL", "Tailwind CSS"],
    link: "https://conceptswiz.com/",
  },
];

// ── Services ─────────────────────────────────────────────────
export type Service = {
  id: string;
  title: string;
  pitch: string;
  includes: string[];
  bestFor: string;
};

export const services: Service[] = [
  {
    id: "video",
    title: "Motion Graphics",
    pitch: "Animated videos that explain, sell and stop the scroll: text, shapes and sound moving in sync.",
    includes: [
      "Kinetic typography and animated reels",
      "Logo animations and brand intros",
      "Explainer and product videos",
      "Reel editing with sound design",
    ],
    bestFor: "Brands, shops and creators who post regularly",
  },
  {
    id: "design",
    title: "Graphic Design",
    pitch: "Posters and social visuals that look like one brand, not ten different templates.",
    includes: [
      "Posters and festival creatives",
      "Instagram post and story sets",
      "Brand kits: colours, type, layouts",
      "Thumbnails and ad creatives",
    ],
    bestFor: "Businesses that need consistent weekly content",
  },
  {
    id: "web",
    title: "Web Development",
    pitch: "Fast, mobile-first websites and web apps that are easy to update and easy to find.",
    includes: [
      "Business and portfolio websites",
      "Landing pages for campaigns",
      "Full-stack web apps (React, Next.js, Node.js)",
      "SEO basics and speed tuning",
    ],
    bestFor: "Anyone who needs to look credible online",
  },
];

// ── Packages ─────────────────────────────────────────────────
// Prices are "starting from". Change them here any time.
export type Package = {
  id: string;
  name: string;
  summary: string;
  price: string;
  per?: string;
  includes: string[];
  featured?: boolean;
};

export const packages: Package[] = [
  {
    id: "single",
    name: "Single",
    summary: "One reel, to try working together.",
    price: "₹999",
    per: "per reel",
    includes: [
      "1 motion graphics reel, up to 30 seconds",
      "Text animation with your photos or clips",
      "Music and sound effects",
      "2 rounds of revisions",
    ],
  },
  {
    id: "monthly",
    name: "Monthly",
    summary: "Regular reels so your page never goes quiet.",
    price: "₹6,999",
    per: "per month",
    includes: [
      "8 motion graphics reels a month",
      "One consistent look for your brand",
      "Music and sound effects on every reel",
      "2 rounds of revisions per reel",
    ],
    featured: true,
  },
  {
    id: "brand-pack",
    name: "Brand Pack",
    summary: "Reels and posters together, one brand look.",
    price: "₹9,999",
    per: "per month",
    includes: [
      "8 motion graphics reels a month",
      "12 posters or social media posts",
      "Festival and offer creatives included",
      "2 rounds of revisions per item",
    ],
  },
];

export const packagesNote =
  "3D animation, script writing, longer videos and rush delivery are quoted separately. Need only design or a website? Message me for a quote.";

// ── Process ──────────────────────────────────────────────────
export const processSteps: { title: string; text: string }[] = [
  {
    title: "Brief",
    text: "Message me what you need, where it will be posted and your deadline. Reference links help a lot.",
  },
  {
    title: "Plan & quote",
    text: "I reply with the approach, a timeline and a clear price, so you know exactly what you are getting.",
  },
  {
    title: "First draft",
    text: "You get a first version to review. Tell me what works and what does not, and I refine it.",
  },
  {
    title: "Final delivery",
    text: "Once you approve, I send the final files in the sizes and formats your platforms need.",
  },
];

// ── Testimonials ─────────────────────────────────────────────
// Client replies copied word for word from WhatsApp. Client names are kept private.
export type Testimonial = {
  /** Each string is one chat message, exactly as the client sent it. */
  messages: string[];
  client: string;
  source: string;
  placeholder?: boolean;
};

export const testimonials: Testimonial[] = [
  {
    messages: ["This is amazing 🤩 i like it.", "The colors oh my god 🤩💜"],
    client: "Brand identity client",
    source: "WhatsApp, after delivery",
  },
  {
    messages: ["This is clean 🔥🔥", "I really love this 🥰🥰"],
    client: "Graphic design client",
    source: "WhatsApp, after delivery",
  },
  {
    messages: [
      "Okay bro, this is good 🔥🔥🔥🔥🔥, you literally cooked this man. I love how you added some details that were not included, it makes it more attractive.",
      "Thanks",
    ],
    client: "Graphic design client",
    source: "WhatsApp, after delivery",
  },
];

// ── About ────────────────────────────────────────────────────
export const tools = [
  "Premiere Pro",
  "After Effects",
  "CapCut",
  "Photoshop",
  "Next.js",
  "React",
  "Tailwind CSS",
  "Node.js",
];
