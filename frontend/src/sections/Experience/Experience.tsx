import { experiences } from '../../data/experiences'
import styles from './Experience.module.css'

function Experience() {
    return (
        <section
            className={styles.experience}
            id="experience"
        >
            <div className="container">
                <div className="section-heading">
                    <span>02.</span>
                    <h2>Experiência</h2>
                </div>

                <div className={styles.timeline}>
                    {experiences.map((experience) => (
                        <article
                            className={styles.item}
                            key={experience.id}
                        >
                            <div className={styles.marker} />

                            <div className={styles.card}>
                                <div className={styles.header}>
                                    <div>
                                        <h3>{experience.role}</h3>

                                        <span className={styles.company}>
                                            {experience.company}
                                        </span>
                                    </div>

                                    <span className={styles.period}>
                                        {experience.period}
                                    </span>
                                </div>

                                <p>
                                    {experience.description}
                                </p>

                                <div className={styles.tags}>
                                    {experience.technologies.map(
                                        (technology) => (
                                            <span key={technology}>
                                                {technology}
                                            </span>
                                        ),
                                    )}
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Experience