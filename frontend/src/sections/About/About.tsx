import styles from './About.module.css'

function About() {
    return (
        <section className={styles.about} id="about">
            <div className={`container ${styles.grid}`}>
                <div className="section-heading">
                    <span>01.</span>
                    <h2>Sobre mim</h2>
                </div>

                <div className={styles.content}>
                    <p className={styles.highlight}>
                        Sou desenvolvedor de software com mais de 5 anos de
                        experiência construindo e evoluindo soluções para
                        e-commerce e sistemas corporativos.
                    </p>

                    <p>
                        Minha principal experiência está no ecossistema{' '}
                        <strong>Adobe Commerce (Magento 2)</strong>, atuando
                        tanto no frontend quanto no backend, desenvolvimento
                        de APIs, integrações entre sistemas e implementação
                        de regras de negócio.
                    </p>

                    <p>
                        Ao longo da minha carreira participei de projetos B2B
                        complexos, incluindo integrações com sistemas como SAP
                        e Salesforce, além de atuar com PHP, React, Node.js,
                        MySQL, RabbitMQ e Docker.
                    </p>

                    <p>
                        Atualmente continuo aprofundando meus conhecimentos em
                        Node.js, TypeScript, arquitetura de software e
                        desenvolvimento backend, buscando ampliar minha atuação
                        como Software Engineer.
                    </p>

                    <div className={styles.stats}>
                        <div className={styles.stat}>
                            <strong>5+</strong>
                            <span>anos de experiência</span>
                        </div>

                        <div className={styles.stat}>
                            <strong>B2B</strong>
                            <span>e-commerce corporativo</span>
                        </div>

                        <div className={styles.stat}>
                            <strong>Full Stack</strong>
                            <span>frontend + backend</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About