import ProjectCard from '../../components/ProjectCard/ProjectCard'
import { projects } from '../../data/projects'
import styles from './Projects.module.css'

function Projects() {
    return (
        <section
            className={styles.projects}
            id="projects"
        >
            <div className="container">
                <div className="section-heading">
                    <span>03.</span>
                    <h2>Projetos & Cases</h2>
                </div>

                <p className={styles.intro}>
                    Alguns dos projetos profissionais e pessoais que
                    representam minha experiência e evolução como
                    desenvolvedor.
                </p>

                <div className={styles.grid}>
                    {projects.map((project) => (
                        <ProjectCard
                            key={project.id}
                            project={project}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Projects