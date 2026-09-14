import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Menu, X, SunMedium, MoonStar, House, UserRound, Briefcase, Mail } from 'lucide-react'
import navigation from '../../data/navigation.json'
import profile from '../../data/profile.json'
import heroImage from '/images/FarooquePort.jpeg'

const navIcons = {
  '#home': House,
  '#about': UserRound,
  '#skills': Briefcase,
  '#contact': Mail,
  '#experience': Briefcase,
}

function getPreferredTheme() {
  if (typeof window === 'undefined') return 'dark'

  try {
    const savedTheme = window.localStorage.getItem('theme')
    if (savedTheme === 'dark' || savedTheme === 'light') {
      return savedTheme
    }
  } catch {
    // Ignore storage access errors
  }

  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

// 1. Har step ke liye light background aur unke matching soft text colors ka array
const scrollSteps = [
  { bg: 'bg-[color:var(--color-background)]/75', text: 'text-[var(--color-text-primary)]', border: 'border-[var(--color-border)]/70', linkHover: 'hover:bg-[var(--color-surface)] hover:text-[var(--color-primary)]' }, // Step 0 (Top)
  { bg: 'bg-blue-50/90 dark:bg-blue-950/40', text: 'text-blue-700 dark:text-blue-300', border: 'border-blue-200/50 dark:border-blue-800/40', linkHover: 'hover:bg-blue-100 dark:hover:bg-blue-900/40' },                  // Step 1
  { bg: 'bg-emerald-50/90 dark:bg-emerald-950/40', text: 'text-emerald-700 dark:text-emerald-300', border: 'border-emerald-200/50 dark:border-emerald-800/40', linkHover: 'hover:bg-emerald-100 dark:hover:bg-emerald-900/40' }, // Step 2
  { bg: 'bg-purple-50/90 dark:bg-purple-950/40', text: 'text-purple-700 dark:text-purple-300', border: 'border-purple-200/50 dark:border-purple-800/40', linkHover: 'hover:bg-purple-100 dark:hover:bg-purple-900/40' },    // Step 3
  { bg: 'bg-amber-50/90 dark:bg-amber-950/40', text: 'text-amber-800 dark:text-amber-300', border: 'border-amber-200/50 dark:border-amber-800/40', linkHover: 'hover:bg-amber-100 dark:hover:bg-amber-900/40' },          // Step 4
  { bg: 'bg-rose-50/90 dark:bg-rose-950/40', text: 'text-rose-700 dark:text-rose-300', border: 'border-rose-200/50 dark:border-rose-800/40', linkHover: 'hover:bg-rose-100 dark:hover:bg-rose-900/40' },               // Step 5
  { bg: 'bg-cyan-50/90 dark:bg-cyan-950/40', text: 'text-cyan-700 dark:text-cyan-300', border: 'border-cyan-200/50 dark:border-cyan-800/40', linkHover: 'hover:bg-cyan-100 dark:hover:bg-cyan-900/40' },            // Step 6
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [theme, setTheme] = useState(getPreferredTheme)
  // 2. State jo current step ka index (0 se 6) track karegi
  const [currentStep, setCurrentStep] = useState(0)

  useEffect(() => {
    const nextTheme = theme === 'dark' ? 'dark' : 'light'
    document.documentElement.dataset.theme = nextTheme
    document.documentElement.style.colorScheme = nextTheme

    try {
      window.localStorage.setItem('theme', nextTheme)
    } catch {
      // Ignore storage access errors
    }
  }, [theme])

  // 3. Scroll position check karke index set karne wala logic
  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY
      
      if (y < 200) {
        setCurrentStep(0)
      } else if (y >= 200 && y < 500) {
        setCurrentStep(1)
      } else if (y >= 500 && y < 900) {
        setCurrentStep(2)
      } else if (y >= 900 && y < 1300) {
        setCurrentStep(3)
      } else if (y >= 1300 && y < 1700) {
        setCurrentStep(4)
      } else if (y >= 1700 && y < 2100) {
        setCurrentStep(5)
      } else {
        setCurrentStep(6)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Current step ke active colors nikalne ke liye shortcut variable
  const activeStyle = scrollSteps[currentStep]

  return (
    <header className="sticky top-0 left-0 z-50 w-full bg-transparent px-4 py-3 transition-all duration-500 md:px-8">
      {/* 4. Dynamic styles apply kiye gaye hain jo backdrop-blur ko maintain rakhenge */}
      <div 
        className={`mx-auto flex max-w-7xl items-center justify-between px-6 py-4 transition-all duration-500 rounded-full shadow-lg backdrop-blur-md
          ${activeStyle.bg} ${activeStyle.text} ${activeStyle.border}`}
      >
        {/* Logo / Name */}
        <a href="#home" className="flex items-center gap-3 text-lg font-semibold transition-colors duration-500">
          <motion.img
            src={heroImage}
            alt={profile.name}
            className="h-10 w-10 rounded-full border border-current object-cover transition-colors duration-500"
            whileHover={{ scale: 1.08, transition: { type: 'spring', stiffness: 220, damping: 16 } }}
          />
          <span>{profile.name}</span>
        </a>

        {/* Desktop Links */}
        <nav className="hidden items-center gap-2 md:flex">
          {navigation.map((item) => {
            const Icon = navIcons[item.href] || House
            return (
              <a 
                key={item.href} 
                href={item.href} 
                className={`group flex flex-col items-center gap-1 rounded-full px-3 py-2 text-sm font-medium transition-all duration-500 ${activeStyle.linkHover}`}
              >
                <div className="flex items-center gap-2">
                  <Icon size={16} />
                  <span>{item.label}</span>
                </div>
                {/* Underline color bhi dynamic text color ke sath automatically match karegi */}
                <span className="h-[2px] w-0 rounded-full bg-current transition-all duration-300 group-hover:w-full" />
              </a>
            )
          })}
        </nav>

        {/* Action Buttons */}
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'))}
            className="rounded-full border border-current bg-transparent p-2 transition-all duration-500 hover:bg-current/10"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <SunMedium size={18} /> : <MoonStar size={18} />}
          </button>
          <button
            type="button"
            onClick={() => setOpen((prev) => !prev)}
            className="rounded-full border border-current bg-transparent p-2 md:hidden transition-all duration-500 hover:bg-current/10"
            aria-label="Toggle navigation"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <motion.div
        initial={false}
        animate={{ height: open ? 'auto' : 0, opacity: open ? 1 : 0 }}
        className={`overflow-hidden border md:hidden rounded-2xl mt-2 shadow-md transition-all duration-500 ${activeStyle.bg} ${activeStyle.border}`}
      >
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-4 sm:px-8">
          {navigation.map((item) => {
            const Icon = navIcons[item.href] || House
            return (
              <a 
                key={item.href} 
                href={item.href} 
                className={`flex items-center gap-2 text-sm font-medium transition-colors duration-500 ${activeStyle.text}`} 
                onClick={() => setOpen(false)}
              >
                <Icon size={16} />
                {item.label}
              </a>
            )
          })}
        </div>
      </motion.div>
    </header>
  )
}