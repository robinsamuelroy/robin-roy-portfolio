import type { CtaContent } from "../../content/heroContent";
import styles from "./HeroCopy.module.css";

export interface HeroCopyProps {
  eyebrow: string;
  headline: string;
  subhead: string;
  primaryCta: CtaContent;
  secondaryCta: CtaContent;
}

export function HeroCopy({
  eyebrow,
  headline,
  subhead,
  primaryCta,
  secondaryCta,
}: HeroCopyProps) {
  return (
    <div className={styles.copy}>
      <p className={styles.eyebrow}>{eyebrow}</p>
      <h1 id="hero-headline" className={styles.headline}>
        {headline}
      </h1>
      <p className={styles.subhead}>{subhead}</p>
      <div className={styles.ctaGroup}>
        <a className={styles.primary} href={primaryCta.href}>
          {primaryCta.label}
        </a>
        <a className={styles.secondary} href={secondaryCta.href}>
          {secondaryCta.label}
        </a>
      </div>
    </div>
  );
}