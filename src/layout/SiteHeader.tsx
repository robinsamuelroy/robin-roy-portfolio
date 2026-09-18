import { useEffect, useState } from "react";
import { navLinks, siteMeta } from "../content/navLinks";
import { ThemeToggle } from "../components/ThemeToggle";
import styles from "./SiteHeader.module.css";

export function SiteHeader() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setIsScrolled(window.scrollY > 24);
    }

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const className = [styles.header, isScrolled ? styles.scrolled : ""]
    .filter(Boolean)
    .join(" ");

  return (
    <header className={className}>
      <div className={styles.inner}>
        <a className={styles.mark} href="#top">
          <span className={styles.markName}>{siteMeta.name}</span>
          <span className={styles.markRole}>{siteMeta.role}</span>
        </a>

        <nav className={styles.nav} aria-label="Primary">
          <ul className={styles.navList}>
            {navLinks.map((link) => (
              <li key={link.href}>
                <a className={styles.navLink} href={link.href}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}