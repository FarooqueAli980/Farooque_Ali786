import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Navbar from './components/layout/Navbar'
import Hero from './components/sections/Hero'
import About from './components/sections/About'
import Skills from './components/sections/Skills'
import Experience from './components/sections/Experience'
import Education from './components/sections/Education'
import Services from './components/sections/Services'
import Projects from './components/sections/Projects'
import Achievements from './components/sections/Achievements'
import WhyHireMe from './components/sections/WhyHireMe'
import Contact from './components/sections/Contact'
import Footer from './components/layout/Footer'

function App() {
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const onScroll = () => {
      const height = document.documentElement.scrollHeight - window.innerHeight
      const progress = height > 0 ? (window.scrollY / height) * 100 : 0
      setScrollProgress(progress)
    }

    window.addEventListener('scroll', onScroll)
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className="min-h-screen bg-[var(--color-background)] text-[var(--color-text-primary)]">
      <div className="fixed inset-x-0 top-0 z-[60] h-1 bg-[var(--color-surface)]">
        <motion.div animate={{ width: `${scrollProgress}%` }} className="h-full bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-accent)]" />
      </div>
      <Navbar />
      <AnimatePresence mode="wait">
        <motion.main initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.4 }}>
          <Hero />
          <About />
          <Skills />
          <Experience />
          <Education />
          <Services />
          <Projects />
          <WhyHireMe />
          <Achievements />
          <Contact />
        </motion.main>
      </AnimatePresence>
      <Footer />
    </div>
  )
}

export default App
