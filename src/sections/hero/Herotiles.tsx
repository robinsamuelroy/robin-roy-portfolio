import { BentoTile } from "../../components/Bentotile";
import type {
  AccentContent,
  MetricContent,
  PortraitContent,
} from "../../content/heroContent";
import styles from "./Herotiles.module.css";

export function PortraitTile({ portrait }: { portrait: PortraitContent }) {
  return (
    <BentoTile
      area="portrait"
      tone="media"
      order={0}
      className={styles.portraitTile}
    >
      <picture>
        <source srcSet={portrait.avif} type="image/avif" />
        <source srcSet={portrait.webp} type="image/webp" />
        <img
          className={styles.portrait}
          src={portrait.jpeg}
          alt={portrait.alt}
          width={portrait.width}
          height={portrait.height}
          fetchPriority="high"
          decoding="async"
        />
      </picture>
    </BentoTile>
  );
}

export function MetricTile({ metric }: { metric: MetricContent }) {
  return (
    <BentoTile area="metric" interactive order={1}>
      <p className={styles.label}>{metric.label}</p>
      <p className={styles.value}>{metric.value}</p>
      <p className={styles.body}>{metric.body}</p>
    </BentoTile>
  );
}

export function AccentTile({ accent }: { accent: AccentContent }) {
  return (
    <BentoTile area="accent" tone="accent" interactive order={2}>
      <p className={`${styles.label} ${styles.labelOnAccent}`}>
        {accent.label}
      </p>
      <p className={styles.accentHeading}>{accent.heading}</p>
      <p className={`${styles.body} ${styles.bodyOnAccent}`}>{accent.body}</p>
    </BentoTile>
  );
}

export function StackTile({ stack }: { stack: string[] }) {
  return (
    <BentoTile area="stack" interactive order={3}>
      <ul className={styles.chipRow}>
        {stack.map((item) => (
          <li key={item} className={styles.chip}>
            {item}
          </li>
        ))}
      </ul>
    </BentoTile>
  );
}