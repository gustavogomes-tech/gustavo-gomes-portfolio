import Header from './components/Header/Header'
import Hero from './sections/Hero/Hero'
import About from './sections/About/About'
import Experience from './sections/Experience/Experience'
import Projects from './sections/Projects/Projects'
import Technologies from './sections/Technologies/Technologies'
import Education from './sections/Education/Education'
import Contact from './sections/Contact/Contact'

function App() {
    return (
        <>
            <Header />

            <main>
                <Hero />
                <About />
                <Experience />
                <Projects />
                <Technologies />
                <Education />
                <Contact />
            </main>
        </>
    )
}

export default App