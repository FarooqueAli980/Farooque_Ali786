import { motion } from 'framer-motion'
import { Quote } from 'lucide-react'
import Container from '../ui/Container'
import SectionHeading from '../ui/SectionHeading'
import Card from '../ui/Card'
import testimonials from '../../data/testimonials.json'

export default function Testimonials() {
  return (
    <section className="py-24 sm:py-28">
      <Container>
        <SectionHeading eyebrow="Testimonials" title="Trusted by founders and product teams" description="Collaboration matters as much as execution, and the work speaks for itself." />
        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {testimonials.map((item, index) => (
            <motion.div key={item.name} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.55, delay: index * 0.08 }}>
              <Card className="h-full">
                <div className="rounded-2xl bg-[var(--color-primary)]/10 p-3 text-[var(--color-primary)] w-fit"><Quote size={18} /></div>
                <p className="mt-5 text-lg leading-8 text-[var(--color-text-secondary)]">“{item.quote}”</p>
                <div className="mt-6">
                  <p className="font-semibold text-[var(--color-text-primary)]">{item.name}</p>
                  <p className="text-sm text-[var(--color-text-secondary)]">{item.role}</p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  )
}
