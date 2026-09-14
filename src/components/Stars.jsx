export default function Stars({ rating, className = '' }) {
  const full = Math.floor(rating)
  const hasHalf = rating - full >= 0.25 && rating - full < 0.75
  const total = 5

  return (
    <span className={`inline-flex items-center gap-0.5 ${className}`} aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: total }).map((_, i) => {
        const filled = i < full || (i === full && rating - full >= 0.75)
        const half = i === full && hasHalf
        return (
          <svg key={i} viewBox="0 0 20 20" className="h-4 w-4">
            <defs>
              <linearGradient id={`half-${i}`}>
                <stop offset="50%" stopColor="currentColor" />
                <stop offset="50%" stopColor="transparent" />
              </linearGradient>
            </defs>
            <path
              d="M10 1.5l2.6 5.6 6.1.6-4.6 4.1 1.3 6-5.4-3.1-5.4 3.1 1.3-6-4.6-4.1 6.1-.6z"
              fill={filled ? 'currentColor' : half ? `url(#half-${i})` : 'none'}
              stroke="currentColor"
              strokeWidth="1"
            />
          </svg>
        )
      })}
    </span>
  )
}
