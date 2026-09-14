import { ArrowLeft } from 'lucide-react'
import Button from '../components/ui/Button'

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[var(--color-background)] px-6">
      <div className="max-w-xl text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[var(--color-primary)]">404</p>
        <h1 className="mt-4 text-4xl font-semibold text-[var(--color-text-primary)] sm:text-6xl">Page not found</h1>
        <p className="mt-6 text-lg leading-8 text-[var(--color-text-secondary)]">The page you’re looking for doesn’t exist or has moved.</p>
        <div className="mt-8 flex justify-center">
          <Button href="/"> <ArrowLeft className="mr-2 h-4 w-4" /> Return home</Button>
        </div>
      </div>
    </main>
  )
}
