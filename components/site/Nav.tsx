import Link from "next/link";
import { SITE } from "@/lib/content";

export default function Nav() {
  return (
    <header className="site-header" role="banner">
      <div className="header-inner">
        <div className="site-branding">
          <p className="site-title">
            <Link href="#top">
              {SITE.handle}
              <span className="dot">.mx</span>
            </Link>
          </p>
          <nav className="main-navigation" aria-label="Main">
            <ul>
              <li>
                <a href="#projects">Projects</a>
              </li>
              <li>
                <a href="#work">Work</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
