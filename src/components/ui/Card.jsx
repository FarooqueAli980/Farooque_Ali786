import { motion } from 'framer-motion'

export default function Card({ children, className = '', hover = true }) {
  return (
    <motion.div
      whileHover={hover ? { y: -6, scale: 1.01 } : undefined}
      transition={{ duration: 0.25 }}
      className={`rounded-[28px] border border-[var(--color-border)] bg-[linear-gradient(135deg,var(--color-surface),var(--color-card))] p-6 shadow-[0_22px_70px_rgba(15,23,42,0.08)] backdrop-blur-xl ${className}`}
    >
      {children}
    </motion.div>
  )
}
