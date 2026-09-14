import { motion } from 'framer-motion'
import { GraduationCap } from 'lucide-react'
import Container from '../ui/Container'
import SectionHeading from '../ui/SectionHeading'
import Card from '../ui/Card'
import education from '../../data/education.json'

export default function Education() {
  return (
    <section className="py-24 sm:py-28">
      <Container>
        <SectionHeading eyebrow="Education" title="A strong foundation for thoughtful product work" description="Formal training in computer science and UX design continues to shape how I solve problems and craft interfaces." />
        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {education.map((item, index) => (
            <motion.div key={item.degree} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.55, delay: index * 0.08 }}>
              <Card className="h-full">
                <div className="flex items-center gap-3">
                  <div className="rounded-2xl bg-[var(--color-primary)]/10 p-3 text-[var(--color-primary)]"><GraduationCap size={18} /></div>
                  <div>
                    <h3 className="text-xl font-semibold text-[var(--color-text-primary)]">{item.degree}</h3>
                    <p className="mt-1 text-[var(--color-primary)]">{item.school}</p>
                  </div>
                </div>
                <p className="mt-4 text-sm font-medium text-[var(--color-text-secondary)]">{item.period}</p>
                <p className="mt-4 text-base leading-8 text-[var(--color-text-secondary)]">{item.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  )
}
