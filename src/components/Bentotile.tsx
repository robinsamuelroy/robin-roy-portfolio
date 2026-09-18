import type { CSSProperties, ReactNode } from "react";
import styles from "./BentoTile.module.css";

export type TileArea = "portrait" | "metric" | "accent" | "stack";
export type TileTone = "surface" | "accent" | "media";

export interface BentoTileProps {
  /**
   * Named grid area. Omit when the tile is placed by the parent grid's
   * flow rather than by an explicit area map.
   */
  area?: TileArea;
  tone?: TileTone;
  interactive?: boolean;
  /** Entrance stagger position. 0 is first. */
  order?: number;
  /** Placement or sizing overrides supplied by the consuming component. */
  className?: string;
  children: ReactNode;
}

export function BentoTile({
  area,
  tone = "surface",
  interactive = false,
  order = 0,
  className: overrides,
  children,
}: BentoTileProps) {
  const className = [
    styles.tile,
    styles[tone],
    interactive ? styles.interactive : "",
    overrides ?? "",
  ]
    .filter(Boolean)
    .join(" ");

  const style = { "--order": order } as CSSProperties;

  if (area) {
    style.gridArea = area;
  }

  return (
    <div className={className} style={style}>
      {children}
    </div>
  );
}