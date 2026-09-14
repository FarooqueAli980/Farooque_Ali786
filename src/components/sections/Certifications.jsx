import { motion } from 'framer-motion'
import { BadgeCheck } from 'lucide-react'
import Container from '../ui/Container'
import SectionHeading from '../ui/SectionHeading'
import Card from '../ui/Card'
import certifications from '../../data/certifications.json'

export default function Certifications() {
  return (
    <section className="py-24 sm:py-28">
      <Container>
        <SectionHeading eyebrow="Certifications" title="Continually sharpening the craft" description="Learning stays central to how I build better products and make stronger decisions." />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {certifications.map((item, index) => (
            <motion.div key={item.name} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.55, delay: index * 0.08 }}>
              <Card className="h-full">
                <div className="rounded-2xl bg-[var(--color-primary)]/10 p-3 text-[var(--color-primary)] w-fit"><BadgeCheck size={18} /></div>
                <h3 className="mt-4 text-lg font-semibold text-[var(--color-text-primary)]">{item.name}</h3>
                <p className="mt-2 text-[var(--color-text-secondary)]">{item.issuer}</p>
                <p className="mt-4 text-sm font-medium text-[var(--color-primary)]">{item.year}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  )
}
