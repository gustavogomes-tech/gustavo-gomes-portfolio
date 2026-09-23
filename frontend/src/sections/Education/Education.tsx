import { education } from '../../data/education'
import styles from './Education.module.css'

function Education() {
    const graduation = education.filter(
        (item) => item.type === 'Graduação',
    )

    const courses = education.filter(
        (item) => item.type === 'Curso',
    )

    return (
        <section
            className={styles.education}
            id="education"
        >
            <div className="container">
                <div className="section-heading">
                    <span>05.</span>
                    <h2>Formação & Cursos</h2>
                </div>

                <p className={styles.intro}>
                    Formação acadêmica e cursos que fazem parte da minha
                    trajetória e desenvolvimento profissional.
                </p>

                <div className={styles.block}>
                    <h3 className={styles.blockTitle}>
                        Formação acadêmica
                    </h3>

                    <div className={styles.graduationGrid}>
                        {graduation.map((item) => (
                            <article
                                className={styles.educationCard}
                                key={item.id}
                            >
                                <div className={styles.cardHeader}>
                                    <span className={styles.type}>
                                        {item.type}
                                    </span>

                                    {item.status && (
                                        <span className={styles.status}>
                                            {item.status}
                                        </span>
                                    )}
                                </div>

                                <h4>{item.title}</h4>

                                <span className={styles.institution}>
                                    {item.institution}
                                </span>

                                <span className={styles.period}>
                                    {item.period}
                                </span>

                                {item.description && (
                                    <p>
                                        {item.description}
                                    </p>
                                )}
                            </article>
                        ))}
                    </div>
                </div>

                <div className={styles.block}>
                    <h3 className={styles.blockTitle}>
                        Cursos
                    </h3>

                    <div className={styles.courseGrid}>
                        {courses.map((item) => (
                            <article
                                className={styles.courseCard}
                                key={item.id}
                            >
                                <div>
                                    <span className={styles.courseType}>
                                        {item.type}
                                    </span>

                                    <h4>{item.title}</h4>

                                    <span className={styles.institution}>
                                        {item.institution}
                                    </span>
                                </div>

                                <div>
                                    <span className={styles.period}>
                                        {item.period}
                                    </span>

                                    {item.technologies && (
                                        <div className={styles.tags}>
                                            {item.technologies.map(
                                                (technology) => (
                                                    <span key={technology}>
                                                        {technology}
                                                    </span>
                                                ),
                                            )}
                                        </div>
                                    )}

                                    {item.certificate && (
                                        <a
                                            className={styles.certificate}
                                            href={item.certificate}
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            Ver certificado ↗
                                        </a>
                                    )}
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Education