// ─────────────────────────────────────────────────────────────
// Contenido del sitio. Edita aquí todos los textos e items.
// ─────────────────────────────────────────────────────────────

export const SITE = {
  name: "Jalil SA",
  handle: "jxlil",
  // Foto de perfil (avatar de GitHub)
  avatar: "https://avatars.githubusercontent.com/u/61639983?v=4",
  // Titular del hero
  title: "I'm Jalil — developer and creator on the internet.",
  // Párrafo de introducción
  intro:
    "I build web scraping and automation tools — from large-scale data systems at Rappi to open-source work like scrapy-impersonate. This is a living page with my experience and the things I build.",
} as const;

export const LINKS = {
  github: "https://github.com/jxlil",
  x: "https://www.x.com/jxlilmx",
  instagram: "https://www.instagram.com/jxlil.mx/",
} as const;

// ── WORK = trayectoria / experiencia ──────────────────────────
export type WorkItem = {
  role: string;
  company: string;
  modality: string;
  period: string;
  description?: string;
  url?: string;
};

export const WORK: WorkItem[] = [
  {
    role: "Web Scraping Engineer",
    company: "Rappi",
    modality: "Remote",
    period: "2022 — Present",
    description:
      "Development and operation of large-scale web scraping systems: data extraction, processing, and reliable delivery.",
    url: "https://www.linkedin.com/in/jalil-sa-2330351aa/",
  },
  {
    role: "Freelancer",
    company: "Upwork",
    modality: "Remote",
    period: "2020 — 2022",
    description:
      "Freelance web scraping and data automation with Python on Upwork: competitive price monitoring, e-commerce data extraction, and anti-ban strategies.",
    url: "https://www.upwork.com/freelancers/~01e70e17a9fdc985e4",
  },
];

// ── PROJECTS = galería de portafolio ──────────────────────────
export type Project = {
  title: string;
  description: string;
  tags: string[];
  url?: string;
  // Imagen opcional de portada (en /public). Si no, se usa un fondo.
  image?: string;
};

export const PROJECTS: Project[] = [
  {
    title: "scrapy-impersonate",
    description:
      "Scrapy download handler that integrates curl_cffi to impersonate real browsers' TLS signatures and JA3 fingerprints (Chrome, Firefox, Safari, Edge), bypassing anti-bot blocks. Published on PyPI, 200+ stars on GitHub.",
    tags: ["Python", "Scrapy", "curl_cffi", "TLS / JA3"],
    url: "https://github.com/jxlil/scrapy-impersonate",
  },
];
