export default function Badge({ children, className = '' }) {
  return (
    <span className={`inline-flex items-center rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] px-3 py-1 text-sm font-medium text-[var(--color-text-secondary)] ${className}`}>
      {children}
    </span>
  )
}
