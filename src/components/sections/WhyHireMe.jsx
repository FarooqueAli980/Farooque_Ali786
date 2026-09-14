import { motion } from 'framer-motion'
import { Code2, DatabaseZap, LayoutGrid, Rocket, ShieldCheck, Workflow, Zap } from 'lucide-react'
import Container from '../ui/Container'
import SectionHeading from '../ui/SectionHeading'
import Card from '../ui/Card'

const highlights = [
  { title: 'Clean Code', description: 'Readable, scalable, and maintainable code with strong engineering habits.', icon: Code2 },
  { title: 'Scalable Architecture', description: 'Thoughtful component and API design that supports long-term growth.', icon: DatabaseZap },
  { title: 'Responsive Design', description: 'Interfaces that feel polished on mobile, tablet, and desktop.', icon: LayoutGrid },
  { title: 'Fast Performance', description: 'Optimized rendering, efficient structure, and smooth user experiences.', icon: Zap },
  { title: 'Secure Authentication', description: 'JWT-based flows and secure access practices for production apps.', icon: ShieldCheck },
  { title: 'REST API Expertise', description: 'Reliable API design, integration, and data handling across products.', icon: Workflow },
  { title: 'Modern UI', description: 'Refined visuals with a strong focus on usability and clarity.', icon: Rocket },
  { title: 'Agile Workflow', description: 'Comfortable collaborating in fast-paced, iteration-driven delivery cycles.', icon: Workflow },
]

export default function WhyHireMe() {
  return (
    <section className="py-24 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Why Hire Me"
          title="Built for reliability, speed, and long-term growth"
          description="I bring a recruiter-friendly blend of product thinking, technical depth, and clean execution to every engagement."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {highlights.map((item, index) => {
            const Icon = item.icon
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.55, delay: index * 0.06 }}
              >
                <Card className="h-full">
                  <div className="rounded-2xl bg-[var(--color-primary)]/10 p-3 text-[var(--color-primary)] w-fit">
                    <Icon size={18} />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-[var(--color-text-primary)]">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-[var(--color-text-secondary)]">{item.description}</p>
                </Card>
              </motion.div>
            )
          })}
        </div>
      </Container>
    </section>
  )
}
