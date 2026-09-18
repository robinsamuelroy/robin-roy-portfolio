import { projects, workHeading, workIntro } from "../../content/projects";
import { ProjectCard } from "./ProjectCard";
import styles from "./Work.module.css";

export function Work() {
  return (
    <section className={styles.section} id="work" aria-labelledby="work-heading">
      <div className={styles.header}>
        <h2 className={styles.heading} id="work-heading">
          {workHeading}
        </h2>
        <p className={styles.intro}>{workIntro}</p>
      </div>

      <div className={styles.grid}>
        {projects.map((project, index) => (
          <ProjectCard key={project.id} project={project} order={index} />
        ))}
      </div>
    </section>
  );
}