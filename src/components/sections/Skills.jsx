import { useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import Container from '../ui/Container'
import SectionHeading from '../ui/SectionHeading'
import Card from '../ui/Card'
import skills from '../../data/skills.json'

function getInitials(name) {
  return name
    .split(/\s+/)
    .slice(0, 2)
    .map((word) => word[0]?.toUpperCase() || '')
    .join('')
}

export default function Skills() {
  const shouldReduceMotion = useReducedMotion()
  const [hoveredCard, setHoveredCard] = useState(null)
  const [cardPointer, setCardPointer] = useState({ x: 0, y: 0 })

  const particles = [
    { id: 1, left: '8%', top: '18%', size: 'h-2.5 w-2.5' },
    { id: 2, right: '10%', top: '22%', size: 'h-2 w-2' },
    { id: 3, left: '16%', bottom: '14%', size: 'h-1.5 w-1.5' },
    { id: 4, right: '18%', bottom: '20%', size: 'h-2 w-2' },
  ]

  return (
    <section id="skills" className="relative overflow-hidden py-24 sm:py-28">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className={`absolute rounded-full bg-[rgba(99,102,241,0.24)] blur-xl ${particle.size}`}
            style={{ left: particle.left, right: particle.right, top: particle.top, bottom: particle.bottom }}
            animate={shouldReduceMotion ? { opacity: 0.2 } : { opacity: [0.15, 0.35, 0.18], y: [0, -10, 0], x: [0, 6, 0], scale: [0.9, 1.15, 0.95] }}
            transition={{ duration: 7 + particle.id, repeat: Infinity, ease: 'easeInOut' }}
          />
        ))}
      </div>

      <Container>
        <SectionHeading
          eyebrow="Skills"
          title="A refined stack built for modern product delivery"
          description="I combine a polished frontend foundation with strong backend and product-thinking skills to ship reliable experiences."
        />

        <div className="relative mt-12 grid gap-6 xl:grid-cols-2">
          {skills.map((group, index) => (
            <motion.div
              key={group.category}
              initial={shouldReduceMotion ? false : { opacity: 0, y: 24, scale: 0.98 }}
              whileInView={shouldReduceMotion ? { opacity: 1, y: 0, scale: 1 } : { opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.6, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
              whileHover={shouldReduceMotion ? { y: -4, scale: 1.01 } : { y: -8, scale: 1.02, transition: { type: 'spring', stiffness: 220, damping: 18 } }}
            >
              <Card className="relative h-full overflow-hidden rounded-[20px] border-[var(--color-border)] bg-[linear-gradient(135deg,var(--color-surface),var(--color-card))] p-7 shadow-[0_24px_70px_rgba(15,23,42,0.08)] backdrop-blur-xl">
                <motion.div
                  className="pointer-events-none absolute inset-0 rounded-[20px]"
                  animate={shouldReduceMotion ? { opacity: 0 } : { opacity: [0, 0.65, 0.25, 0], scale: [0.98, 1.01, 1, 1] }}
                  transition={{ duration: 3.6, repeat: Infinity, ease: 'easeInOut' }}
                  style={{ background: 'linear-gradient(120deg, rgba(99,102,241,0.16), rgba(168,85,247,0.12), transparent 70%)' }}
                />

                <div className="relative flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-semibold text-(--color-text-primary)">{group.category}</h3>
                    <p className="mt-1 text-sm text-(--color-text-secondary)">{group.description}</p>
                  </div>
                </div>

                <div className="relative mt-6 grid gap-4 sm:grid-cols-2">
                  {group.items.map((item, itemIndex) => {
                    const shouldSpin = ['React.js', 'Node.js', 'MongoDB', 'JavaScript'].includes(item.name)

                    return (
                      <motion.div
                        key={item.name}
                        initial={shouldReduceMotion ? false : { opacity: 0, y: 18, scale: 0.96 }}
                        whileInView={shouldReduceMotion ? { opacity: 1, y: 0, scale: 1 } : { opacity: 1, y: 0, scale: 1 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.44, delay: itemIndex * 0.05, ease: [0.22, 1, 0.36, 1] }}
                        whileHover={shouldReduceMotion ? { y: -4, scale: 1.02 } : { y: -12, scale: 1.08, rotateX: 7, rotateY: -7, transition: { type: 'spring', stiffness: 220, damping: 16 } }}
                        onMouseEnter={() => setHoveredCard(item.name)}
                        onMouseLeave={() => setHoveredCard(null)}
                        onMouseMove={(event) => {
                          const rect = event.currentTarget.getBoundingClientRect()
                          setHoveredCard(item.name)
                          setCardPointer({ x: event.clientX - rect.left, y: event.clientY - rect.top })
                        }}
                        className="skill-card group relative overflow-hidden rounded-[20px] border border-[var(--color-border)] bg-[var(--color-card)]/80 p-4 shadow-[0_10px_35px_rgba(15,23,42,0.08)] backdrop-blur-xl"
                      >
                        <motion.div
                          className="pointer-events-none absolute inset-0 overflow-hidden rounded-[20px]"
                          animate={shouldReduceMotion ? { opacity: 0 } : { opacity: hoveredCard === item.name ? 1 : 0 }}
                          transition={{ duration: 0.28, ease: 'easeOut' }}
                        >
                          <motion.div
                            className="absolute h-28 w-28 rounded-full blur-3xl"
                            animate={shouldReduceMotion ? { opacity: 0, x: -100, y: -100 } : { x: hoveredCard === item.name ? cardPointer.x - 56 : -120, y: hoveredCard === item.name ? cardPointer.y - 56 : -120, opacity: hoveredCard === item.name ? 1 : 0 }}
                            transition={shouldReduceMotion ? { duration: 0 } : { type: 'spring', stiffness: 140, damping: 18, mass: 0.4 }}
                            style={{ background: 'radial-gradient(circle, rgba(99,102,241,0.24) 0%, rgba(168,85,247,0.14) 45%, transparent 80%)' }}
                          />
                        </motion.div>

                        <div className="relative flex items-center gap-3">
                          <motion.div
                            className="skill-logo-shell flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)]/90 shadow-[inset_0_1px_0_rgba(255,255,255,0.8)] backdrop-blur-sm"
                            animate={shouldReduceMotion ? { y: 0, rotate: 0, scale: 1 } : { y: [0, -6, 0], rotate: shouldSpin ? [0, 360] : 0, scale: [1, 1.01, 1] }}
                            transition={shouldReduceMotion ? { duration: 0 } : { duration: shouldSpin ? 24 : 2.8, repeat: Infinity, ease: 'easeInOut' }}
                            whileHover={shouldReduceMotion ? { scale: 1.05, rotate: 0 } : { scale: 1.15, rotate: 8, transition: { type: 'spring', stiffness: 220, damping: 16 } }}
                          >
                            <motion.div
                              className="absolute inset-0 rounded-2xl bg-[radial-gradient(circle,rgba(99,102,241,0.18),transparent_70%)] blur-xl"
                              animate={shouldReduceMotion ? { opacity: 0 } : { opacity: hoveredCard === item.name ? 0.95 : 0.5 }}
                              transition={{ duration: 0.25 }}
                            />
                            {item.imageUrl ? (
                              <img
                                src={item.imageUrl}
                                alt={`${item.name} logo`}
                                loading="lazy"
                                decoding="async"
                                width="64"
                                height="64"
                                className="skill-logo-image relative z-10 h-11 w-11 object-contain"
                              />
                            ) : (
                              <span className="relative z-10 text-sm font-semibold tracking-[0.2em] text-(--color-text-secondary)">
                                {getInitials(item.name)}
                              </span>
                            )}
                          </motion.div>
                          <div className="min-w-0">
                            <p className="truncate text-sm font-semibold text-(--color-text-primary)">{item.name}</p>
                            <p className="mt-1 text-xs text-(--color-text-secondary)">{item.level}</p>
                          </div>
                        </div>
                      </motion.div>
                    )
                  })}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  )
}
