import styles from './Hero.module.css'

const technologies = [
    'Magento 2',
    'PHP',
    'Node.js',
    'TypeScript',
    'React',
    'APIs REST',
]

function Hero() {
    return (
        <section className={styles.hero}>
            <div className={`container ${styles.content}`}>
                <span className={styles.label}>
                    Software Developer • Full Stack
                </span>

                <h1>
                    Olá, eu sou{' '}
                    <strong>
                        Gustavo Gomes Doria.
                    </strong>
                </h1>

                <h2>
                    Desenvolvo soluções para web, e-commerce
                    e integrações entre sistemas.
                </h2>

                <p>
                    Desenvolvedor com mais de 5 anos de experiência,
                    especializado em Adobe Commerce (Magento 2), PHP,
                    APIs e integrações, expandindo minha atuação com
                    Node.js, TypeScript e React.
                </p>

                <div className={styles.technologies}>
                    {technologies.map((technology) => (
                        <span key={technology}>
                            {technology}
                        </span>
                    ))}
                </div>

                <div className={styles.actions}>
                    <a
                        href="#projects"
                        className={styles.primaryButton}
                    >
                        Ver projetos
                    </a>

                    <a
                        href="https://www.linkedin.com/in/gustavo-gomes-doria-76786a182/"
                        target="_blank"
                        rel="noreferrer"
                        className={styles.secondaryButton}
                    >
                        LinkedIn
                    </a>
                </div>
            </div>
        </section>
    )
}

export default Hero