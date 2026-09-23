import styles from './Header.module.css'

function Header() {
    return (
        <header className={styles.header}>
            <div className={`container ${styles.content}`}>
                <a href="#" className={styles.logo}>
                    <img
                        src="/images/gustavo-logo.png"
                        alt="Gustavo Gomes"
                    />
                </a>
                <nav className={styles.navigation}>
                    <a href="#about">Sobre</a>
                    <a href="#experience">Experiência</a>
                    <a href="#projects">Projetos</a>
                    <a href="#technologies">Tecnologias</a>
                    <a href="#education">Formação</a>
                    <a href="#contact">Contato</a>
                </nav>
            </div>
        </header>
    )
}

export default Header