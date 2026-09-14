import { motion } from 'framer-motion'

const variants = {
  primary: 'bg-[var(--color-primary)] text-white shadow-[0_12px_30px_rgba(99,102,241,0.24)] hover:shadow-[0_18px_40px_rgba(99,102,241,0.3)]',
  secondary: 'bg-[var(--color-surface)] text-[var(--color-text-primary)] border border-[var(--color-border)] hover:bg-[var(--color-card)]'
}

export default function Button({ children, href, variant = 'primary', className = '', ...props }) {
  const classes = `inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold transition-all duration-300 ${variants[variant]} ${className}`

  if (href) {
    return (
      <motion.a whileHover={{ y: -2, scale: 1.01 }} whileTap={{ scale: 0.98 }} href={href} className={classes} {...props}>
        {children}
      </motion.a>
    )
  }

  return (
    <motion.button whileHover={{ y: -2, scale: 1.01 }} whileTap={{ scale: 0.98 }} className={classes} {...props}>
      {children}
    </motion.button>
  )
}
