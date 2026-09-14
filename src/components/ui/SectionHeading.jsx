import { motion } from 'framer-motion'

export default function SectionHeading({ eyebrow, title, description, align = 'left' }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.6 }}
      className={`max-w-2xl ${align === 'center' ? 'mx-auto text-center' : ''}`}
    >
      <p className="mb-3 text-xs font-semibold uppercase tracking-[0.24em] text-[var(--color-primary)] sm:text-sm">{eyebrow}</p>
      <h2 className="text-2xl font-semibold leading-tight text-[var(--color-text-primary)] sm:text-3xl lg:text-4xl">{title}</h2>
      <p className="mt-4 text-sm leading-7 text-[var(--color-text-secondary)] sm:text-base sm:leading-8">{description}</p>
    </motion.div>
  )
}
