import { useEffect, useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { ArrowRight, Download, Mouse, Terminal } from 'lucide-react'
import Button from '../ui/Button'
import profile from '../../data/profile.json'
import heroImage from '/images/FarooquePort.jpeg'

const titles = ['MERN Full Stack Developer', 'React.js Developer', 'Next.js Developer', 'Node.js Developer', 'Backend Developer']

// Official brand SVG paths aur unke professional theme colors
const socialLinks = [
  {
    label: 'GitHub',
    href: 'https://github.com/FarooqueAli980',
    // Custom SVGs ensure a pixel-perfect official brand look
    svg: (
      <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
      </svg>
    ),
    color: 'hover:text-neutral-100 hover:bg-neutral-900 hover:border-neutral-800 dark:hover:bg-white dark:hover:text-black'
  },
  {
    label: 'LinkedIn',
    href: 'https://linkedin.com/in/farooque-ali-5b5ba9317',
    svg: (
      <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
      </svg>
    ),
    color: 'hover:text-white hover:bg-[#0077B5] hover:border-[#0077B5]'
  },
  {
    label: 'Email',
    href: 'mailto:farooqueali980@gmail.com',
    svg: (
      <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
        <path d="M22 4H2C.9 4 0 4.9 0 6v12c0 1.1.9 2 2 2h20c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-10 6.25L2 8V6l10 6.25L22 6v2z"/>
      </svg>
    ),
    color: 'hover:text-white hover:bg-[#EA4335] hover:border-[#EA4335]'
  },
  {
    label: 'WhatsApp',
    href: 'https://wa.me/923480337841',
    svg: (
      <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.513 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.713-1.455L0 24zm6.59-4.846c1.6.95 3.497 1.45 5.416 1.451 5.38 0 9.758-4.379 9.761-9.76 0-2.605-1.01-5.057-2.845-6.894a9.662 9.662 0 0 0-6.91-2.863c-5.38 0-9.758 4.38-9.762 9.761-.001 1.996.522 3.943 1.517 5.66l-.99 3.61 3.704-.971z"/>
      </svg>
    ),
    color: 'hover:text-white hover:bg-[#25D366] hover:border-[#25D366]'
  },
]

export default function Hero() {
  const shouldReduceMotion = useReducedMotion()
  const [text, setText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const [loopNum, setLoopNum] = useState(0)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  const handlePointerMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect()
    const touch = event.touches?.[0]
    const clientX = touch?.clientX ?? event.clientX
    const clientY = touch?.clientY ?? event.clientY

    setMousePosition({ x: clientX - rect.left, y: clientY - rect.top })
  }

  const handlePointerLeave = () => setMousePosition({ x: 0, y: 0 })

  useEffect(() => {
    const currentTitle = titles[loopNum % titles.length]

    if (!isDeleting && text === currentTitle) {
      const timeout = window.setTimeout(() => setIsDeleting(true), 1600)
      return () => window.clearTimeout(timeout)
    }

    if (isDeleting && text === '') {
      setIsDeleting(false)
      setLoopNum((prev) => prev + 1)
      return
    }

    const timeout = window.setTimeout(() => {
      if (!isDeleting) {
        setText(currentTitle.slice(0, text.length + 1))
      } else {
        setText(currentTitle.slice(0, text.length - 1))
      }
    }, isDeleting ? 40 : 80)

    return () => window.clearTimeout(timeout)
  }, [text, isDeleting, loopNum])

  return (
    <section id="home" className="relative flex min-h-screen items-center overflow-hidden py-12 sm:py-20 lg:py-28">
      {/* Background Layer */}
      <div className="absolute inset-0 -z-20 overflow-hidden bg-[var(--color-background)]">
        <motion.div
          animate={shouldReduceMotion ? { opacity: 0.15 } : { opacity: [0.15, 0.35, 0.15], scale: [1, 1.05, 1] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,_rgba(99,102,241,0.18),_transparent_45%),radial-gradient(circle_at_20%_80%,_rgba(34,197,94,0.14),_transparent_45%)]"
        />
        <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] [background-image:linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] [background-size:40px_40px]" />
        
        <div className="absolute left-[-5%] top-[15%] h-72 w-72 rounded-full bg-[var(--color-primary)]/10 blur-[100px] animate-pulse" />
        <div className="absolute right-[5%] bottom-[15%] h-96 w-96 rounded-full bg-emerald-500/10 blur-[120px]" />

        <motion.div
          className="absolute inset-0 hidden lg:block"
          onMouseMove={(event) => {
            const rect = event.currentTarget.getBoundingClientRect()
            setMousePosition({ x: event.clientX - rect.left, y: event.clientY - rect.top })
          }}
          onMouseLeave={handlePointerLeave}
        >
          <motion.div
            className="pointer-events-none absolute h-[500px] w-[500px] rounded-full blur-[80px]"
            animate={shouldReduceMotion ? { opacity: 0 } : { x: mousePosition.x - 250, y: mousePosition.y - 250, opacity: 0.35 }}
            transition={{ type: 'spring', stiffness: 50, damping: 25 }}
            style={{ background: 'radial-gradient(circle, rgba(99,102,241,0.15) 0%, transparent 70%)' }}
          />
        </motion.div>
      </div>

      <div className="mx-auto grid w-full max-w-7xl items-center gap-16 px-6 sm:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:px-10">
        
        {/* Left Side Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="relative z-10 max-w-2xl text-left"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-indigo-500/20 bg-indigo-500/5 dark:bg-indigo-500/10 px-4 py-1.5 text-xs sm:text-sm font-semibold tracking-wide text-[var(--color-primary)] shadow-[inset_0_1px_0_rgba(255,255,255,0.1)] backdrop-blur-md"
          >
            <Terminal className="h-4 w-4" />
            <span>Available For Full-Time Roles & Freelance</span>
          </motion.div>

          <h1 className="text-4xl font-extrabold leading-[1.15] tracking-tight text-[var(--color-text-primary)] sm:text-5xl lg:text-6xl xl:text-7xl">
            Crafting Digital <br />
            <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-emerald-500 bg-clip-text text-transparent">
              Experiences
            </span> As MERN
          </h1>

          <div className="mt-6 flex min-h-[44px] items-center text-2xl font-bold tracking-tight text-[var(--color-text-primary)] sm:text-3xl">
            <span>I&apos;m a&nbsp;</span>
            <span className="bg-gradient-to-r from-[var(--color-primary)] to-purple-500 bg-clip-text text-transparent">{text}</span>
            <span className="ml-1 inline-block h-8 w-[3px] rounded-full bg-[var(--color-primary)] animate-bounce" />
          </div>

          <div className="mt-4 flex flex-wrap gap-2.5 text-xs font-semibold uppercase tracking-wider text-[var(--color-text-secondary)]">
            <span className="rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)]/60 px-3 py-1.5 backdrop-blur-sm shadow-sm">📍 {profile.location || "Karachi, Pakistan"}</span>
            <span className="rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)]/60 px-3 py-1.5 backdrop-blur-sm shadow-sm">💼 1-2 Yrs Experience</span>
          </div>

          <p className="mt-6 text-base leading-relaxed text-[var(--color-text-secondary)] sm:text-lg sm:leading-8">
            {profile.description}
          </p>

          <div className="mt-8 flex flex-wrap gap-3.5">
            <Button href={profile.resumeUrl} target="_blank" rel="noreferrer" className="group gap-2.5 rounded-xl bg-gradient-to-r from-indigo-500 to-indigo-600 px-6 py-3 text-white shadow-lg shadow-indigo-500/20 transition-all hover:opacity-95 hover:shadow-indigo-500/30">
              <Download size={16} className="transition-transform group-hover:-translate-y-0.5" /> Download Resume
            </Button>
            <Button href="#contact" variant="secondary" className="rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)]/40 px-6 py-3 backdrop-blur-sm hover:bg-[var(--color-surface)]">
              Let&apos;s Talk
            </Button>
            <Button href="https://github.com/FarooqueAli980" target="_blank" rel="noreferrer" variant="secondary" className="group rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)]/40 px-5 py-3 hover:bg-[var(--color-surface)]">
              GitHub <ArrowRight className="ml-1.5 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>

          {/* Social Icons Strip with Official SVGs */}
          <div className="mt-10 flex flex-wrap items-center gap-3">
            <span className="text-xs font-bold uppercase tracking-widest text-[var(--color-text-secondary)]/60 mr-2">Connect:</span>
            {socialLinks.map((item, index) => {
              return (
                <motion.a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  whileHover={shouldReduceMotion ? { scale: 1.05 } : { y: -4, scale: 1.1, rotate: index % 2 === 0 ? 4 : -4 }}
                  className={`group rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)]/70 p-3 text-[var(--color-text-secondary)] transition-all duration-300 shadow-sm backdrop-blur-md ${item.color}`}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.08 }}
                  aria-label={item.label}
                >
                  {item.svg}
                </motion.a>
              )
            })}
          </div>
        </motion.div>

        {/* Right 3D Visual Card Side */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="relative mx-auto w-full max-w-[450px] lg:mr-0"
          onMouseMove={handlePointerMove}
          onMouseLeave={handlePointerLeave}
          onTouchMove={handlePointerMove}
          onTouchEnd={handlePointerLeave}
        >
          <div className="relative rounded-[2.5rem] border border-white/10 bg-gradient-to-b from-white/10 to-transparent p-3 shadow-[0_40px_100px_rgba(0,0,0,0.15)] backdrop-blur-3xl sm:p-4 dark:border-white/5 dark:shadow-[0_40px_100px_rgba(0,0,0,0.4)]">
            <motion.div
              className="relative overflow-hidden rounded-[1.8rem] border border-white/20 bg-black/5 p-1.5 shadow-2xl dark:bg-white/5"
              style={{
                transform: shouldReduceMotion
                  ? 'perspective(1200px) rotateX(0deg) rotateY(0deg)'
                  : `perspective(1200px) rotateX(${((0.5 - mousePosition.y / 520) * 6).toFixed(2)}deg) rotateY(${((mousePosition.x / 450 - 0.5) * 8).toFixed(2)}deg)`,
                transformStyle: 'preserve-3d',
              }}
              transition={{ type: 'spring', stiffness: 120, damping: 22 }}
            >
              <div
                className="pointer-events-none absolute inset-0 opacity-30 mix-blend-screen transition-opacity duration-200"
                style={{
                  background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(99,102,241,0.3) 0%, transparent 60%)`
                }}
              />
              <img
                src={heroImage}
                alt={profile.name}
                width={640}
                height={640}
                loading="eager"
                decoding="async"
                className="mx-auto h-[260px] w-[260px] rounded-full object-cover object-center shadow-[0_16px_40px_rgba(99,102,241,0.18)] ring-1 ring-white/20 sm:h-[300px] sm:w-[300px] lg:h-[500px] lg:w-full lg:rounded-[1.6rem] lg:shadow-inner"
              />
            </motion.div>
          </div>

          {/* Floating Availability Badge */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="absolute -bottom-4 left-6 flex items-center gap-3 rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)]/95 p-4 shadow-xl backdrop-blur-md"
          >
            <div className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
            </div>
            <div>
              <p className="text-xs font-bold text-[var(--color-text-primary)] uppercase tracking-wider">{profile.role || "Full Stack Dev"}</p>
              <p className="text-xs text-[var(--color-text-secondary)] mt-0.5">Ready for projects</p>
            </div>
          </motion.div>
        </motion.div>

      </div>
    </section>
  )
}