import type { Project } from '../../types/project'
import styles from './ProjectCard.module.css'

interface ProjectCardProps {
    project: Project
}

function ProjectCard({ project }: ProjectCardProps) {
    const hasActions =
        project.repository ||
        project.demo ||
        (project.links && project.links.length > 0)

    return (
        <article className={styles.card}>
            <div className={styles.top}>
                <div>
                    <div className={styles.meta}>
                        <span className={styles.type}>
                            {project.type}
                        </span>

                        {project.status && (
                            <span className={styles.status}>
                                {project.status}
                            </span>
                        )}
                    </div>

                    <h3>{project.title}</h3>

                    <span className={styles.subtitle}>
                        {project.subtitle}
                    </span>
                </div>

                {project.private && (
                    <span className={styles.private}>
                        Código privado
                    </span>
                )}
            </div>

            <p className={styles.description}>
                {project.description}
            </p>

            <div className={styles.highlights}>
                <h4>Principais pontos</h4>

                <ul>
                    {project.highlights.map((highlight) => (
                        <li key={highlight}>
                            {highlight}
                        </li>
                    ))}
                </ul>
            </div>

            <div className={styles.technologies}>
                {project.technologies.map((technology) => (
                    <span key={technology}>
                        {technology}
                    </span>
                ))}
            </div>

            {hasActions && (
                <div className={styles.actions}>
                    {project.repository && (
                        <a
                            href={project.repository}
                            target="_blank"
                            rel="noreferrer"
                        >
                            GitHub ↗
                        </a>
                    )}

                    {project.demo && (
                        <a
                            href={project.demo}
                            target="_blank"
                            rel="noreferrer"
                        >
                            Ver projeto ↗
                        </a>
                    )}

                    {project.links?.map((link) => (
                        <a
                            key={link.url}
                            href={link.url}
                            target="_blank"
                            rel="noreferrer"
                        >
                            {link.label} ↗
                        </a>
                    ))}
                </div>
            )}
        </article>
    )
}

export default ProjectCard