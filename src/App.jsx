import { useContext } from 'react'
import { ThemeContext } from './context/theme'
import Header from './components/header/header'
import About from './components/about/about'
import Projects from './components/projects/projects'
import Skills from './components/skills/skills'
import ScrollToTop from './components/scrolltotop/scrolltotop'
import Contact from './components/contact/contact'
import Footer from './components/footer/footer'
import './App.css'

const App = () => {
  const [{ themeName }] = useContext(ThemeContext)

  return (
    <div id='top' className={`${themeName} app`}>
      <Header />

      <main>
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>

      <ScrollToTop />
      <Footer />
    </div>
  )
}

export default App
