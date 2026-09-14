import { motion } from 'framer-motion'
import { Briefcase } from 'lucide-react'
import Container from '../ui/Container'
import SectionHeading from '../ui/SectionHeading'
import Card from '../ui/Card'
import experience from '../../data/experience.json'

export default function Experience() {
  return (
    <section id="experience" className="py-24 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Experience"
          title="A modern full-stack journey shaped by real product delivery"
          description="My experience spans freelance client work and internship roles where I built production-ready features end to end."
        />
        <div className="mt-12 relative space-y-6 before:absolute before:left-5 before:top-2 before:h-[calc(100%-1rem)] before:w-px before:bg-[var(--color-border)] md:before:left-6">
          {experience.map((item, index) => (
            <motion.div key={item.company} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.55, delay: index * 0.08 }}>
              <Card className="relative ml-10 md:ml-14">
                <div className="absolute -left-10 top-6 flex h-10 w-10 items-center justify-center rounded-full border border-[var(--color-primary)]/30 bg-[var(--color-primary)]/10 text-[var(--color-primary)] md:-left-14">
                  <Briefcase size={16} />
                </div>
                <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                  <div>
                    <h3 className="text-xl font-semibold text-[var(--color-text-primary)]">{item.role}</h3>
                    <p className="mt-1 text-[var(--color-primary)]">{item.company}</p>
                    <p className="mt-4 max-w-2xl text-base leading-8 text-[var(--color-text-secondary)]">{item.description}</p>
                    <ul className="mt-4 flex flex-wrap gap-2">
                      {item.highlights.map((highlight) => (
                        <li key={highlight} className="rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] px-3 py-1 text-sm text-[var(--color-text-secondary)]">{highlight}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] px-4 py-2 text-sm font-medium text-[var(--color-text-secondary)]">{item.period}</div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  )
}
