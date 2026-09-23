import { technologyGroups } from '../../data/technologies'
import styles from './Technologies.module.css'

function Technologies() {
    return (
        <section
            className={styles.technologies}
            id="technologies"
        >
            <div className="container">
                <div className="section-heading">
                    <span>04.</span>
                    <h2>Tecnologias</h2>
                </div>

                <p className={styles.intro}>
                    Tecnologias que fazem parte da minha experiência
                    profissional, formação e dos projetos que venho
                    desenvolvendo.
                </p>

                <div className={styles.legend}>
                    <span>
                        <i className={styles.professional} />
                        Experiência profissional
                    </span>

                    <span>
                        <i className={styles.personal} />
                        Projetos pessoais
                    </span>

                    <span>
                        <i className={styles.education} />
                        Formação
                    </span>
                </div>

                <div className={styles.grid}>
                    {technologyGroups.map((group) => (
                        <article
                            className={styles.card}
                            key={group.id}
                        >
                            <span className={styles.number}>
                                {String(group.id).padStart(2, '0')}
                            </span>

                            <h3>{group.title}</h3>

                            <p>{group.description}</p>

                            <div className={styles.items}>
                                {group.technologies.map((technology) => (
                                    <div
                                        className={styles.technology}
                                        key={technology.name}
                                    >
                                        <span>
                                            {technology.name}
                                        </span>

                                        <i
                                            className={
                                                technology.context ===
                                                'Experiência profissional'
                                                    ? styles.professional
                                                    : technology.context ===
                                                    'Projetos pessoais'
                                                        ? styles.personal
                                                        : styles.education
                                            }
                                            title={technology.context}
                                        />
                                    </div>
                                ))}
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Technologies