import { heroContent as defaultContent } from "../../content/heroContent";
import type { HeroContent } from "../../content/heroContent";
import { HeroCopy } from "./HeroCopy";
import {
  AccentTile,
  MetricTile,
  PortraitTile,
  StackTile,
} from "./Herotiles";
import styles from "./Hero.module.css";

export interface HeroProps {
  content?: HeroContent;
}

export function Hero({ content = defaultContent }: HeroProps) {
  return (
    <section className={styles.hero} aria-labelledby="hero-headline">
      <div className={styles.copyRegion}>
        <HeroCopy
          eyebrow={content.eyebrow}
          headline={content.headline}
          subhead={content.subhead}
          primaryCta={content.primaryCta}
          secondaryCta={content.secondaryCta}
        />
      </div>

      <div className={styles.bentoRegion}>
        <div className={styles.bentoGrid}>
          <PortraitTile portrait={content.portrait} />
          <MetricTile metric={content.metric} />
          <AccentTile accent={content.accent} />
          <StackTile stack={content.stack} />
        </div>
      </div>
    </section>
  );
}