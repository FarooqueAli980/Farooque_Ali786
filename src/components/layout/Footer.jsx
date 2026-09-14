import { ArrowUpRight } from 'lucide-react'
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'
import navigation from '../../data/navigation.json'
import profile from '../../data/profile.json'
import socialLinks from '../../data/socialLinks.json'

const iconMap = {
  Github: FaGithub,
  Linkedin: FaLinkedin,
  Mail: FaEnvelope,
}

export default function Footer() {
  return (
    <footer className="border-t border-[var(--color-border)] bg-[var(--color-surface)]/70 py-10">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-6 sm:px-8 lg:flex-row lg:items-end lg:justify-between lg:px-10">
        <div>
          <p className="text-lg font-semibold text-[var(--color-text-primary)]">{profile.name}</p>
          <p className="mt-2 max-w-xl text-sm leading-7 text-[var(--color-text-secondary)]">MERN Full Stack Developer focused on scalable, secure, and production-ready web applications.</p>
        </div>
        <div className="flex flex-wrap gap-5 text-sm text-[var(--color-text-secondary)]">
          {navigation.map((item) => (
            <a key={item.href} href={item.href} className="transition hover:text-[var(--color-primary)]">{item.label}</a>
          ))}
        </div>
        <div className="flex items-center gap-3">
          {socialLinks.map((item) => {
            const Icon = iconMap[item.icon] || Send
            return (
              <a key={item.label} href={item.href} target="_blank" rel="noreferrer" className="rounded-full border border-[var(--color-border)] bg-[var(--color-card)] p-2 text-[var(--color-text-secondary)] transition hover:text-[var(--color-primary)]">
                <Icon size={16} />
              </a>
            )
          })}
        </div>
      </div>
      <div className="mx-auto mt-8 flex max-w-7xl flex-col gap-3 px-6 text-sm text-[var(--color-text-secondary)] sm:px-8 lg:flex-row lg:items-center lg:justify-between lg:px-10">
        <p>© 2026 {profile.name}. All rights reserved.</p>
        <a href="#home" className="inline-flex items-center gap-2 font-medium text-[var(--color-primary)]">
          Back to top <ArrowUpRight size={16} />
        </a>
      </div>
    </footer>
  )
}
