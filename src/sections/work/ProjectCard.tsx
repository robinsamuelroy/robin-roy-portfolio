import { BentoTile } from "../../components/Bentotile";
import type { ProjectCardContent, ProjectLink } from "../../content/projects";
import styles from "./ProjectCard.module.css";

/**
 * Narrowing in action. Inside each branch TypeScript knows exactly which
 * variant it has, so `link.href` is safe in two of them and unavailable
 * in the third.
 */
function ProjectLinkLabel({ link }: { link: ProjectLink }) {
  if (link.kind === "private") {
    return <span className={styles.privateNote}>{link.note}</span>;
  }

  const label = link.kind === "live" ? "View live" : "View source";

  return (
    <a
      className={styles.link}
      href={link.href}
      target="_blank"
      rel="noreferrer noopener"
    >
      {label}
      <span aria-hidden="true"> →</span>
    </a>
  );
}

export interface ProjectCardProps {
  project: ProjectCardContent;
  order: number;
}

export function ProjectCard({ project, order }: ProjectCardProps) {
  return (
    <BentoTile
      tone={project.featured ? "accent" : "surface"}
      interactive
      order={order}
      className={project.featured ? styles.featured : styles.card}
    >
      <p className={styles.context}>{project.context}</p>
      <h3 className={styles.title}>{project.title}</h3>
      <p className={styles.summary}>{project.summary}</p>

      <ul className={styles.stack}>
        {project.stack.map((item) => (
          <li key={item} className={styles.chip}>
            {item}
          </li>
        ))}
      </ul>

      <div className={styles.footer}>
        <ProjectLinkLabel link={project.link} />
      </div>
    </BentoTile>
  );
}