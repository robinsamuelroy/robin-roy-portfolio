import { siteMeta, socialLinks } from "../content/navLinks";
import styles from "./SiteFooter.module.css";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <p className={styles.credit}>
          {siteMeta.name} · {siteMeta.location} · {year}
        </p>

        <ul className={styles.links}>
          {socialLinks.map((link) => (
            <li key={link.href}>
              <a
                className={styles.link}
                href={link.href}
                rel={
                  link.href.startsWith("http") ? "noreferrer noopener" : undefined
                }
                target={link.href.startsWith("http") ? "_blank" : undefined}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}