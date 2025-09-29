import type React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { ToastContainer } from 'react-toastify'
import Experiences from './components/Experiences'
const App: React.FC = () => {

  return (
    <div>
      <ToastContainer
        position="top-center"
        autoClose={2000}
      />
      <Header />
      <Hero
        name="Vansh"
        role="Full Stack Developer"
        intro="I build elegant and scalable web experiences using MERN stack. Let's bring your ideas to life!"
        imageSrc="/me.png"
        resumeLink="https://drive.google.com/file/d/1UUhkMdk4zJ_qNMxCH65OgSNfV38M6Wod/view?usp=sharing"
        githubLink="https://github.com/vanshjais1777"
        linkedinLink="https://www.linkedin.com/in/vansh-jaiswal-806271218"
        phoneNo="+916386169658"
        emailLink="mailto: vanshjais1777@gmail.com"
      />
      <About />
      <Skills />
      <Experiences />
      <Projects />
      <Contact />
      <Footer />
    </div>
  )
}

export default App