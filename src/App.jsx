import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Carousel from './components/Carousel'
import Vision from './components/Vision'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { useScrollReveal } from './hooks/useScrollReveal'

export default function App() {
  useScrollReveal()

  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Carousel />
      <Vision />
      <Experience />
      <Skills />
      <Contact />
      <Footer />
    </>
  )
}
