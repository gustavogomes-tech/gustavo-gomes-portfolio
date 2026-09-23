import styles from './Contact.module.css'

function Contact() {
    return (
        <section
            className={styles.contact}
            id="contact"
        >
            <div className="container">
                <div className={styles.content}>
                    <span className={styles.number}>
                        06.
                    </span>

                    <span className={styles.label}>
                        Vamos conversar?
                    </span>

                    <h2>
                        Tem um projeto, oportunidade
                        ou quer trocar uma ideia?
                    </h2>

                    <p>
                        Estou sempre aberto a conversar sobre desenvolvimento
                        de software, e-commerce, Adobe Commerce, Node.js,
                        integrações e novas oportunidades.
                    </p>

                    <div className={styles.actions}>
                        <a
                            href="mailto:gustavogomesdoria@outlook.com"
                            className={styles.primaryButton}
                        >
                            Entrar em contato
                        </a>

                        <a
                            href="https://www.linkedin.com/in/gustavo-gomes-doria-76786a182/"
                            target="_blank"
                            rel="noreferrer"
                            className={styles.secondaryButton}
                        >
                            LinkedIn ↗
                        </a>
                    </div>

                    <div className={styles.info}>
                        <div>
                            <span>E-mail</span>

                            <a href="mailto:gustavogomesdoria@outlook.com">
                                gustavogomesdoria@outlook.com
                            </a>
                        </div>

                        <div>
                            <span>Telefone</span>

                            <a href="tel:+5511959799619">
                                +55 11 95979-9619
                            </a>
                        </div>

                        <div>
                            <span>Localização</span>

                            <p>
                                São Paulo, Brasil
                            </p>
                        </div>

                        <div>
                            <span>Disponibilidade</span>

                            <p>
                                Remoto • Híbrido
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact