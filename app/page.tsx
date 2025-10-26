"use client";

import { Button } from "@/components/ui/button";
import ScrambleText, { ScrambleTextRotator } from "@/components/ScrambleText";


const PROFILE = {
  name: "Jalil SA",
  handle: "jxlil",
  title: "Web Scraping Engineer",
  location: "Durango, México",
  links: {
    github: "https://github.com/jxlil",
    x: "https://www.x.com/jxlilmx",
    instagram: "https://www.instagram.com/jxlil.mx/"
  },
} as const;

const EXPERIENCE: Array<{
  slug: string;
  company: string;
  role: string;
  since: string;
  until?: string;
  location?: string;
}> = [
    {
      slug: "rappi",
      company: "Rappi",
      role: "Web Scraping Engineer",
      since: "2022",
      until: "present",
      location: "remote",
    },
    {
      slug: "upwork",
      company: "Upwork",
      role: "Freelancer",
      since: "2020",
      until: "2022",
      location: "remote",
    },
  ];

const PROJECTS: Array<{
  slug: string;
  title: string;
  summary: string;
  year: string;
  tags?: Array<string>;
  href?: string;
}> = [
    {
      slug: "scrapy-impersonate",
      title: "scrapy-impersonate",
      summary: "Scrapy download handler that can impersonate browser JA3 fingerprints.",
      year: "2023",
      href: "https://github.com/jxlil/scrapy-impersonate",
    },
  ];

const LOCATIONS = [
  "24.88872, -105.07433",
  "48.85837, 2.29448",
  "40.75800, -73.98550",
  "29.97923, 31.13420",
  "27.17514, 78.04211",
  "-13.16307, -72.54513",
  "30.32160, 35.44440",
  "13.41250, 103.86667",
  "27.98810, 86.92500",
  "40.67690, 117.23690",
  "34.96714, 135.77272",
  "36.46130, 25.37500",
  "25.19720, 55.27440",
  "-25.34443, 131.03688",
  "-19.73000, 149.23500",
  "-2.33330, 34.83330",
  "63.88040, -22.44950",
  "51.42540, -116.17730",
  "-16.50040, -151.74150",
  "-20.13380, -67.48910",
  "69.64920, 18.95530",
] as const;


export default function Page() {
  return (
    <main className="mx-auto w-full max-w-[700px] px-4 py-8">
      <Hero />
      <Experience />
      <Projects />
      <Footer />
    </main>
  );
}

function Hero() {
  return (
    <section className="mx-auto px-4 pb-2 pt-16 sm:px-6">
      <h1 className="text-3xl font-bold leading-tight tracking-tight sm:text-2xl md:text-3xl">
        <a className="transition-opacity" href="/tempus">
          {PROFILE.name}
        </a>
      </h1>
      <p className="mt-2 text-sm text-zinc-400">
        Now: {PROFILE.title}
      </p>
      <p className="mt-2 text-sm text-zinc-400">
        Location: <ScrambleTextRotator phrases={LOCATIONS} intervalMs={6000} />
      </p>
    </section>
  );
}

function Experience() {
  return (
    <section className="mx-auto max-w-6xl px-4 sm:px-6">
      <h2 className="pb-4 pt-10 text-xl font-bold leading-tight tracking-tight" >Experience</h2>
      <ul className="divide-y divide-zinc-900 border-y border-zinc-900">
        {EXPERIENCE.map((c, i) => (
          <li key={c.slug} className="group relative">
            <ExperienceRow experienceItem={c} index={i} />
          </li>
        ))}
      </ul>
    </section>
  );
}

function ExperienceRow({
  experienceItem,
  index,
}: {
  experienceItem: (typeof EXPERIENCE)[number];
  index: number;
}) {
  return (
    <div className="relative grid grid-cols-1 items-start gap-4 py-4 sm:grid-cols-12">
      <div className="sm:col-span-8">
        <h3 className="flex items-center gap-2 text1xl font-semibold tracking-tight">
          <span className="text-zinc-400">
            {String(index + 1).padStart(2, "0")}
          </span>
          <ScrambleText text={experienceItem.company} scramble={24} />
        </h3>
        <p className="mt-2 max-w-2xl text-zinc-400 text-sm">{experienceItem.role} — {experienceItem.location}</p>
      </div>

      <div className="sm:col-span-4 sm:flex sm:flex-col sm:items-end">
        <div className="flex items-center gap-2 text-zinc-400">
          <span className="text-sm">{experienceItem.since} - {experienceItem.until}</span>
        </div>
      </div>
    </div>
  );
}

function Projects() {
  return (
    <section className="mx-auto max-w-6xl px-4 sm:px-6">
      <h2 className="pb-4 pt-10 text-xl font-bold leading-tight tracking-tight" >Projects</h2>
      <ul className="divide-y divide-zinc-900 border-y border-zinc-900">
        {PROJECTS.map((c, i) => (
          <li key={c.slug} className="group relative">
            <ProjectRow projectItem={c} index={i} />
          </li>
        ))}
      </ul>
    </section>
  );
}

function ProjectRow({
  projectItem,
  index,
}: {
  projectItem: (typeof PROJECTS)[number];
  index: number;
}) {
  const href = projectItem.href || "#";
  return (
    <Anchor href={href} className="block" aria-label={`Abrir ${projectItem.title}`} newTab={/^https?:\/\//.test(href)}>
      <div className="relative grid grid-cols-1 items-start gap-4 py-4 sm:grid-cols-12">
        <div className="sm:col-span-8">
          <h3 className="flex items-center gap-2 text1xl font-semibold tracking-tight">
            <span className="text-zinc-400">
              {String(index + 1).padStart(2, "0")}
            </span>
            <ScrambleText text={projectItem.title} scramble={16} />
          </h3>
          <p className="mt-2 max-w-2xl text-zinc-400 text-sm">{projectItem.summary}</p>
        </div>

        <div className="sm:col-span-4 sm:flex sm:flex-col sm:items-end">
          <div className="flex items-center gap-2 text-zinc-400">
            <span className="text-sm">{projectItem.year}</span>
            <ArrowUpRightIcon className="h-4 w-4 opacity-70 transition-opacity group-hover:opacity-100 group-hover:text-emerald-300" />
          </div>
        </div>
      </div>
    </Anchor>
  );
}

function Footer() {
  return (
    <footer className="py-4">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 text-sm text-zinc-400 sm:flex-row sm:px-6">
        <p>
          © {new Date().getFullYear()}
        </p>
        <div className="flex items-center gap-2">
          <IconLink href={PROFILE.links.github} aria="GitHub" Icon={GithubIcon} />
          <IconLink href={PROFILE.links.x} aria="X" Icon={XIcon} />
          <IconLink href={PROFILE.links.instagram} aria="Instagram" Icon={InstagramIcon} />
        </div>
      </div>
    </footer>
  );
}


function IconLink({
  href,
  aria,
  Icon,
}: {
  href?: string;
  aria: string;
  Icon: React.ComponentType<{ className?: string }>;
}) {
  if (!href) return null;
  return (
    <Button
      asChild
      variant="ghost"
      className="h-8 rounded-full text-zinc-300 hover:bg-zinc-900 hover:text-zinc-100"
    >
      <Anchor href={href} aria-label={aria} newTab={/^https?:\/\//.test(href)}>
        <Icon className="h-4 w-4" />
      </Anchor>
    </Button>
  );
}

function Anchor({
  href = "#",
  children,
  className,
  aria,
  "aria-label": ariaLabel,
  newTab,
}: {
  href?: string;
  children: React.ReactNode;
  className?: string;
  aria?: string;
  "aria-label"?: string;
  newTab?: boolean;
}) {
  const isExternal = !!newTab || /^https?:\/\//.test(href);
  return (
    <a
      href={href}
      className={className}
      aria-label={ariaLabel || aria}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
    >
      {children}
    </a>
  );
}

function GithubIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385c.6.105.825-.255.825-.57c0-.285-.015-1.23-.015-2.235c-3.015.555-3.795-.735-4.035-1.41c-.135-.345-.72-1.41-1.23-1.695c-.42-.225-1.02-.78-.015-.795c.945-.015 1.62.87 1.845 1.23c1.08 1.815 2.805 1.305 3.495.99c.105-.78.42-1.305.765-1.605c-2.67-.3-5.46-1.335-5.46-5.925c0-1.305.465-2.385 1.23-3.225c-.12-.3-.54-1.53.12-3.18c0 0 1.005-.315 3.3 1.23c.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23c.66 1.65.24 2.88.12 3.18c.765.84 1.23 1.905 1.23 3.225c0 4.605-2.805 5.625-5.475 5.925c.435.375.81 1.095.81 2.22c0 1.605-.015 2.895-.015 3.3c0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12" />
    </svg>
  );
}

function XIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M13.808 10.469L20.88 2h-1.676l-6.142 7.353L8.158 2H2.5l7.418 11.12L2.5 22h1.676l6.486-7.765L15.842 22H21.5zm-2.296 2.748l-.752-1.107L4.78 3.3h2.575l4.826 7.11l.751 1.107l6.273 9.242h-2.574z" />
    </svg>
  );
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M7.465 1.066C8.638 1.012 9.012 1 12 1s3.362.013 4.534.066s1.972.24 2.672.511c.733.277 1.398.71 1.948 1.27c.56.549.992 1.213 1.268 1.947c.272.7.458 1.5.512 2.67C22.988 8.639 23 9.013 23 12s-.013 3.362-.066 4.535c-.053 1.17-.24 1.97-.512 2.67a5.4 5.4 0 0 1-1.268 1.949c-.55.56-1.215.992-1.948 1.268c-.7.272-1.5.458-2.67.512c-1.174.054-1.548.066-4.536.066s-3.362-.013-4.535-.066c-1.17-.053-1.97-.24-2.67-.512a5.4 5.4 0 0 1-1.949-1.268a5.4 5.4 0 0 1-1.269-1.948c-.271-.7-.457-1.5-.511-2.67C1.012 15.361 1 14.987 1 12s.013-3.362.066-4.534s.24-1.972.511-2.672a5.4 5.4 0 0 1 1.27-1.948a5.4 5.4 0 0 1 1.947-1.269c.7-.271 1.5-.457 2.67-.511m8.98 1.98c-1.16-.053-1.508-.064-4.445-.064s-3.285.011-4.445.064c-1.073.049-1.655.228-2.043.379c-.513.2-.88.437-1.265.822a3.4 3.4 0 0 0-.822 1.265c-.151.388-.33.97-.379 2.043c-.053 1.16-.064 1.508-.064 4.445s.011 3.285.064 4.445c.049 1.073.228 1.655.379 2.043c.176.477.457.91.822 1.265c.355.365.788.646 1.265.822c.388.151.97.33 2.043.379c1.16.053 1.507.064 4.445.064s3.285-.011 4.445-.064c1.073-.049 1.655-.228 2.043-.379c.513-.2.88-.437 1.265-.822c.365-.355.646-.788.822-1.265c.151-.388.33-.97.379-2.043c.053-1.16.064-1.508.064-4.445s-.011-3.285-.064-4.445c-.049-1.073-.228-1.655-.379-2.043c-.2-.513-.437-.88-.822-1.265a3.4 3.4 0 0 0-1.265-.822c-.388-.151-.97-.33-2.043-.379m-5.85 12.345a3.669 3.669 0 0 0 4-5.986a3.67 3.67 0 1 0-4 5.986M8.002 8.002a5.654 5.654 0 1 1 7.996 7.996a5.654 5.654 0 0 1-7.996-7.996m10.906-.814a1.337 1.337 0 1 0-1.89-1.89a1.337 1.337 0 0 0 1.89 1.89" />
    </svg>
  );
}

function ArrowUpRightIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className} aria-hidden="true">
      <path d="M7 17L17 7" />
      <path d="M7 7h10v10" />
    </svg>
  );
}
