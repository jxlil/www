import { SITE, LINKS } from "@/lib/content";
import { GithubIcon, XIcon, InstagramIcon } from "@/components/site/Icons";

function username(url: string) {
  const segments = new URL(url).pathname.split("/").filter(Boolean);
  return segments[segments.length - 1] ?? url;
}

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <div className="homepage-footer">
      <div className="elsewhere">
        <a className="btn" href={LINKS.github} target="_blank" rel="noopener noreferrer">
          <GithubIcon /> {username(LINKS.github)}
        </a>
        <a className="btn" href={LINKS.x} target="_blank" rel="noopener noreferrer">
          <XIcon /> {username(LINKS.x)}
        </a>
        <a className="btn" href={LINKS.instagram} target="_blank" rel="noopener noreferrer">
          <InstagramIcon /> {username(LINKS.instagram)}
        </a>
      </div>
      <div className="copyright">
        © {year} {SITE.name}. All rights reserved.
      </div>
    </div>
  );
}
