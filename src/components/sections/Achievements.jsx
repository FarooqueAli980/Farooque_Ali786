import { motion } from 'framer-motion'
import Container from '../ui/Container'
import SectionHeading from '../ui/SectionHeading'
import Card from '../ui/Card'
import achievements from '../../data/achievements.json'

export default function Achievements() {
  return (
    <section className="py-24 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Achievements"
          title="Results-oriented impact across freelance and internship work"
          description="The focus has always been on building practical, high-quality solutions that support growth and user satisfaction."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {achievements.map((item, index) => (
            <motion.div key={item.title} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.55, delay: index * 0.08 }}>
              <Card className="text-center">
                <p className="text-4xl font-semibold text-[var(--color-primary)]">{item.value}</p>
                <p className="mt-3 text-base text-[var(--color-text-secondary)]">{item.title}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  )
}
