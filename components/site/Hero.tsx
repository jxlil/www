import { SITE, LINKS } from "@/lib/content";
import { GithubIcon, XIcon, InstagramIcon } from "@/components/site/Icons";

export default function Hero() {
  return (
    <div className="about section">
      <div className="about-headshot">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={SITE.avatar} alt={SITE.name} width={100} height={100} />
      </div>
      <h1>
        <span className="bio-bold">{SITE.title}</span>
      </h1>
      <p>{SITE.intro}</p>

      <div className="about-links">
        <a
          className="social"
          href={LINKS.github}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <GithubIcon />
        </a>
        <a
          className="social"
          href={LINKS.x}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="X"
        >
          <XIcon />
        </a>
        <a
          className="social"
          href={LINKS.instagram}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
        >
          <InstagramIcon />
        </a>
      </div>
    </div>
  );
}
