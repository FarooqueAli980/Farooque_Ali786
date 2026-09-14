import { motion } from 'framer-motion'
import { ArrowUpRight, Globe, Sparkles } from 'lucide-react'
import Container from '../ui/Container'
import SectionHeading from '../ui/SectionHeading'
import Card from '../ui/Card'
import Button from '../ui/Button'
import projects from '../../data/projects.json'

export default function Projects() {
  return (
    <section id="projects" className="py-24 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Projects"
          title="Selected work with a premium feel"
          description="Each project is crafted for clarity, performance, and polished user experience."
        />
        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55, delay: index * 0.08 }}
              whileHover={{ y: -8, scale: 1.01 }}
              className="group h-full"
            >
              <Card className="h-full overflow-hidden border-[var(--color-border)] bg-[linear-gradient(135deg,var(--color-surface),var(--color-card))] p-0 shadow-[0_28px_80px_rgba(15,23,42,0.12)]">
                <div className="relative overflow-hidden">
                  <img src={project.image} alt={project.title} className="h-56 w-full object-cover transition duration-500 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/65 via-slate-950/10 to-transparent" />
                  <div className="absolute left-4 top-4 flex items-center gap-2 rounded-full border border-[var(--color-border)] bg-[var(--color-card)]/80 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.28em] text-[var(--color-text-primary)] backdrop-blur-xl">
                    <Sparkles className="h-3.5 w-3.5" />
                    Featured
                  </div>
                </div>

                <div className="p-5 sm:p-6">
                  <h3 className="text-xl font-semibold text-(--color-text-primary)">{project.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-(--color-text-secondary)">{project.description}</p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span key={tech} className="rounded-full border border-(--color-border) bg-(--color-surface)/90 px-2.5 py-1 text-xs font-medium text-(--color-text-secondary) shadow-sm">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="mt-5 flex flex-wrap gap-2.5">
                    <Button href={project.github} variant="secondary" target="_blank" rel="noreferrer">
                      <Globe className="mr-2 h-4 w-4" /> GitHub
                    </Button>
                    <Button href={project.demo} target="_blank" rel="noreferrer">
                      Live Demo <ArrowUpRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </Card>
            </motion.article>
          ))}
        </div>
      </Container>
    </section>
  )
}
