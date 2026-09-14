import { motion } from 'framer-motion'
import { Layers3, PenTool, Zap, Server, ShieldCheck, Monitor, Database, Rocket } from 'lucide-react'
import Container from '../ui/Container'
import SectionHeading from '../ui/SectionHeading'
import Card from '../ui/Card'
import services from '../../data/services.json'

const icons = {
  'Frontend Development': Monitor,
  'Backend Development': Server,
  'Full Stack MERN Development': Layers3,
  'REST API Development': Rocket,
  'Authentication & Authorization': ShieldCheck,
  'Responsive Web Design': PenTool,
  'Database Design': Database,
  'Deployment': Zap,
}

export default function Services() {
  return (
    <section id="services" className="py-24 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Services"
          title="Specialized support for modern web products"
          description="I help teams move from idea to launch with strong frontend engineering, backend reliability, and thoughtful product execution."
        />
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = icons[service.title] || Layers3
            return (
              <motion.div key={service.title} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.55, delay: index * 0.08 }}>
                <Card className="h-full">
                  <div className="rounded-2xl bg-[var(--color-primary)]/10 p-3 text-[var(--color-primary)] w-fit"><Icon size={18} /></div>
                  <h3 className="mt-4 text-xl font-semibold text-[var(--color-text-primary)]">{service.title}</h3>
                  <p className="mt-3 text-base leading-8 text-[var(--color-text-secondary)]">{service.description}</p>
                </Card>
              </motion.div>
            )
          })}
        </div>
      </Container>
    </section>
  )
}
