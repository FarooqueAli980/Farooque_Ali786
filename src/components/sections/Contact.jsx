import { motion } from 'framer-motion'
import { Mail, MapPin, Phone } from 'lucide-react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import Container from '../ui/Container'
import SectionHeading from '../ui/SectionHeading'
import Card from '../ui/Card'
import Button from '../ui/Button'
import profile from '../../data/profile.json'

export default function Contact() {
  return (
    <section id="contact" className="py-16 sm:py-24 lg:py-28">
      <Container>
        <SectionHeading
          eyebrow="Contact"
          title="Open to recruiter conversations and freelance opportunities"
          description="If you need a MERN developer who can build thoughtfully and ship cleanly, I’d love to connect."
        />
        <div className="mt-8 grid gap-6 sm:mt-10 lg:mt-12 lg:grid-cols-[0.9fr_1.1fr]">
          <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.55 }}>
            <Card className="h-full p-5 sm:p-6">
              <h3 className="text-xl font-semibold text-[var(--color-text-primary)] sm:text-2xl">Let’s connect</h3>
              <div className="mt-6 space-y-4 text-sm text-[var(--color-text-secondary)] sm:text-base">
                <div className="flex items-start gap-3 break-all"><Mail size={18} className="mt-0.5 shrink-0 text-[var(--color-primary)]" /> {profile.email}</div>
                <div className="flex items-start gap-3 break-all"><Phone size={18} className="mt-0.5 shrink-0 text-[var(--color-primary)]" /> {profile.phone}</div>
                <div className="flex items-start gap-3 break-all"><MapPin size={18} className="mt-0.5 shrink-0 text-[var(--color-primary)]" /> {profile.location}</div>
              </div>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <Button href="https://github.com/FarooqueAli980" target="_blank" rel="noreferrer" variant="secondary" className="w-full justify-center gap-2 sm:w-auto">
                  <FaGithub size={16} /> GitHub
                </Button>
                <Button href="https://linkedin.com/in/farooque-ali-5b5ba9317" target="_blank" rel="noreferrer" variant="secondary" className="w-full justify-center gap-2 sm:w-auto">
                  <FaLinkedin size={16} /> LinkedIn
                </Button>
              </div>
            </Card>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.55, delay: 0.08 }}>
            <Card className="p-5 sm:p-6">
              <form className="space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <input className="w-full rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] px-4 py-3 text-sm text-[var(--color-text-primary)] outline-none placeholder:text-[var(--color-muted)]" placeholder="Name" />
                  <input className="w-full rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] px-4 py-3 text-sm text-[var(--color-text-primary)] outline-none placeholder:text-[var(--color-muted)]" placeholder="Email" />
                </div>
                <input className="w-full rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] px-4 py-3 text-sm text-[var(--color-text-primary)] outline-none placeholder:text-[var(--color-muted)]" placeholder="Subject" />
                <textarea className="min-h-32 w-full rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] px-4 py-3 text-sm text-[var(--color-text-primary)] outline-none placeholder:text-[var(--color-muted)] sm:min-h-40" placeholder="Tell me about your project or role" />
                <Button type="button" className="w-full justify-center sm:w-auto">Send Message</Button>
              </form>
            </Card>
          </motion.div>
        </div>
      </Container>
    </section>
  )
}
