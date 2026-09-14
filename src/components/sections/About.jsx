import { motion, useReducedMotion } from 'framer-motion'
import { Sparkles, MapPin, Mail, Phone, Layers, ShieldCheck, Code2, Briefcase, Workflow, Lightbulb, ExternalLink } from 'lucide-react'
import Container from '../ui/Container'
import SectionHeading from '../ui/SectionHeading'
import Card from '../ui/Card'
import profile from '../../data/profile.json'

const highlights = [
  '1–2 years Freelance Experience',
  'Full Stack MERN Developer',
  'Passionate about scalable web applications',
  'REST API Development',
  'Authentication & Authorization',
  'Responsive UI Development',
  'Agile Collaboration',
  'Clean Code',
  'Problem Solving',
]

const iconMap = {
  0: Briefcase,
  1: Layers,
  2: Lightbulb,
  3: Workflow,
  4: ShieldCheck,
  5: Code2,
  6: Workflow,
  7: Sparkles,
  8: Lightbulb,
}

export default function About() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <section id="about" className="relative overflow-hidden bg-[var(--color-background)] py-16 sm:py-24 lg:py-28">
      {/* Subtle Background Glow Elements */}
      <div className="absolute top-1/2 left-1/2 -z-10 h-[280px] w-[320px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-500/5 blur-[120px] sm:h-[400px] sm:w-[600px]" />

      <Container>
        {/* Professional Title Upgrade */}
        <SectionHeading
          eyebrow="About Me"
          title="Engineering High-Performance Web Ecosystems With Zero Technical Debt"
          description="Specialized in structuring secure architectures, optimizing database models, and delivering production-ready applications built to scale."
        />

        <div className="mt-10 grid items-stretch gap-6 sm:mt-12 lg:mt-14 lg:grid-cols-[1.15fr_0.85fr]">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            <Card className="flex h-full flex-col justify-between rounded-[1.5rem] border border-[var(--color-border)] bg-[var(--color-surface)]/40 p-5 shadow-xl backdrop-blur-md sm:p-8 sm:rounded-[2rem]">
              <div className="flex flex-col items-center text-center">
                <div className="rounded-2xl border border-indigo-500/20 bg-indigo-500/10 p-3 text-indigo-500 shadow-[inset_0_1px_0_rgba(255,255,255,0.1)]">
                  <Sparkles size={20} />
                </div>
                <h3 className="mt-4 text-xl font-bold tracking-tight text-[var(--color-text-primary)] sm:text-2xl">My Developer Journey</h3>

                <p className="mt-5 max-w-xl text-sm leading-7 text-[var(--color-text-secondary)] antialiased sm:mt-6 sm:text-base sm:leading-8">
                  {profile.description || "Passionate Full Stack Developer specializing in building high-performance web applications using MongoDB, Express, React, Next.js, and Node.js."}
                </p>
                <p className="mt-4 max-w-xl text-sm leading-7 text-[var(--color-text-secondary)] antialiased sm:text-base sm:leading-8">
                  I enjoy turning complex business requirements into polished engineering frameworks with a strong focus on absolute maintainability, clean design structures, and modern performance matrix.
                </p>
              </div>

              <div className="mt-8 grid gap-2.5 text-left sm:grid-cols-2 sm:gap-3">
                {highlights.map((item, index) => {
                  const Icon = iconMap[index] || Sparkles
                  return (
                    <motion.div
                      key={item}
                      whileHover={shouldReduceMotion ? {} : { y: -2, scale: 1.01 }}
                      transition={{ duration: 0.2 }}
                      className="flex items-center gap-3 rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)]/80 px-3 py-3 text-sm font-medium text-[var(--color-text-secondary)] shadow-sm transition-colors hover:border-indigo-500/30 hover:bg-[var(--color-surface)] sm:px-4 sm:py-3.5"
                    >
                      <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-[var(--color-primary)]/5 text-[var(--color-primary)]">
                        <Icon size={16} />
                      </div>
                      <span className="break-words leading-5">{item}</span>
                    </motion.div>
                  )
                })}
              </div>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.1 }}
            className="flex flex-col"
          >
            <Card className="flex h-full flex-col justify-between rounded-[1.5rem] border border-[var(--color-border)] bg-[var(--color-surface)]/40 p-5 shadow-xl backdrop-blur-md sm:p-8 sm:rounded-[2rem]">
              <div>
                <h3 className="text-xl font-bold tracking-tight text-[var(--color-text-primary)] sm:text-2xl">Connect Details</h3>
                <p className="mt-2 text-sm text-[var(--color-text-secondary)]/80">Let&apos;s build something exceptional together.</p>

                <div className="mt-6 space-y-3 sm:mt-8 sm:space-y-3.5">
                  {[
                    { label: 'Email Me', value: profile.email, href: `mailto:${profile.email}`, icon: Mail, badge: 'Fast Reply' },
                    { label: 'Call Direct', value: profile.phone, href: `tel:${profile.phone.replace(/\s+/g, '')}`, icon: Phone, badge: 'WhatsApp Available' },
                    { label: 'Location', value: profile.location || "Karachi, Pakistan", href: '#', icon: MapPin, badge: 'Remote / Hybrid' }
                  ].map((contact) => {
                    const Icon = contact.icon
                    return (
                      <a
                        key={contact.label}
                        href={contact.href}
                        className="group flex flex-col gap-2 rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)]/80 p-3.5 shadow-sm transition-all hover:border-indigo-500/20 hover:bg-[var(--color-surface)] sm:p-4"
                      >
                        <div className="flex items-center justify-between gap-2">
                          <span className="text-[10px] font-bold uppercase tracking-wider text-[var(--color-text-secondary)]/50 sm:text-xs">{contact.label}</span>
                          {contact.badge && (
                            <span className="rounded-full border border-indigo-500/10 bg-indigo-500/5 px-2 py-0.5 text-[9px] font-semibold text-indigo-500 sm:text-[10px]">
                              {contact.badge}
                            </span>
                          )}
                        </div>
                        <div className="flex items-start justify-between gap-3 text-sm font-semibold text-[var(--color-text-primary)] sm:text-base">
                          <div className="flex min-w-0 items-start gap-3">
                            <Icon size={18} className="mt-0.5 shrink-0 text-[var(--color-primary)]" />
                            <span className="break-all leading-6 sm:break-normal">{contact.value}</span>
                          </div>
                          {contact.href !== '#' && (
                            <ExternalLink size={14} className="mt-1 shrink-0 text-[var(--color-text-secondary)]/40 opacity-0 transition-all group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                          )}
                        </div>
                      </a>
                    )
                  })}
                </div>
              </div>

              <div className="mt-8 rounded-2xl border border-dashed border-[var(--color-border)] bg-indigo-500/[0.01] p-4">
                <p className="text-xs font-medium leading-relaxed text-[var(--color-text-secondary)] sm:text-sm">
                  💡 <strong>Looking for a developer?</strong> I am fully optimized for remote setups, agile code sprints, and production-ready deployments.
                </p>
              </div>
            </Card>
          </motion.div>
        </div>
      </Container>
    </section>
  )
}