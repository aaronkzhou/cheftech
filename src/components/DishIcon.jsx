const bowl = (fill) => (
  <path d="M6 30a26 26 0 0052 0z" fill={fill} />
)

const icons = {
  tofu: (
    <>
      {bowl('#f6c4ba')}
      <rect x="20" y="16" width="24" height="16" rx="2" fill="#fdf3f1" stroke="#b8331c" strokeWidth="1.5" />
      <circle cx="26" cy="24" r="1.6" fill="#d6472a" />
      <circle cx="34" cy="20" r="1.6" fill="#d6472a" />
      <circle cx="38" cy="27" r="1.6" fill="#d6472a" />
    </>
  ),
  egg: (
    <>
      {bowl('#f6c4ba')}
      <circle cx="24" cy="24" r="7" fill="#ef4444" opacity="0.85" />
      <circle cx="36" cy="20" r="6" fill="#ef4444" opacity="0.7" />
      <path d="M20 26q6 6 12 0" stroke="#fef3c7" strokeWidth="5" fill="none" strokeLinecap="round" />
    </>
  ),
  greens: (
    <>
      {bowl('#dcecd8')}
      {[18, 26, 34, 42].map((x, i) => (
        <rect key={x} x={x - 2} y={16 + (i % 2) * 4} width="4" height="18" rx="2" fill="#4d7c46" />
      ))}
    </>
  ),
  eggplant: (
    <>
      {bowl('#e7d7f0')}
      <ellipse cx="26" cy="24" rx="8" ry="6" fill="#6b3fa0" transform="rotate(-20 26 24)" />
      <ellipse cx="38" cy="20" rx="7" ry="5" fill="#8a5cc2" transform="rotate(-15 38 20)" />
      <rect x="23" y="14" width="4" height="6" rx="1" fill="#4d7c46" />
    </>
  ),
  pork: (
    <>
      {bowl('#f6c4ba')}
      <rect x="17" y="17" width="14" height="12" rx="3" fill="#e8a598" stroke="#b8331c" strokeWidth="1.2" />
      <rect x="30" y="20" width="16" height="10" rx="3" fill="#d6472a" />
    </>
  ),
  chicken: (
    <>
      {bowl('#fbe3de')}
      <path d="M17 28c-2-6 2-12 9-12s10 5 9 12z" fill="#e56d51" />
      {[21, 27, 33, 39].map((x) => (
        <path key={x} d={`M${x} 16l1.5 3-3 0z`} fill="#932818" />
      ))}
    </>
  ),
  beef: (
    <>
      {bowl('#f6c4ba')}
      <path d="M16 28c0-7 6-13 16-13s16 6 16 13z" fill="#a5342a" />
      <path d="M20 24c4-4 20-4 24 0" stroke="#fdf3f1" strokeWidth="1.5" fill="none" opacity="0.6" />
    </>
  ),
  fish: (
    <>
      {bowl('#dbeafe')}
      <path d="M16 24c6-6 18-6 24 0-6 6-18 6-24 0z" fill="#e56d51" />
      <path d="M40 24l6-5v10z" fill="#b8331c" />
      <circle cx="21" cy="22" r="1.4" fill="#4a140d" />
    </>
  ),
  cold: (
    <>
      {bowl('#dcecd8')}
      <path d="M18 22c4-6 22-6 26 0-2 4-24 4-26 0z" fill="#7cb342" />
      {[22, 28, 34].map((x) => (
        <circle key={x} cx={x} cy="20" r="1.4" fill="#b8331c" />
      ))}
    </>
  ),
  century: (
    <>
      {bowl('#e7d7f0')}
      <rect x="18" y="17" width="28" height="10" rx="3" fill="#fdf8f1" stroke="#c9a86a" strokeWidth="1.2" />
      <circle cx="26" cy="22" r="3.4" fill="#3a2e57" />
      <circle cx="38" cy="22" r="3.4" fill="#3a2e57" />
    </>
  ),
  soup: (
    <>
      {bowl('#fde68a')}
      <path d="M14 22h36c0 6-8 10-18 10s-18-4-18-10z" fill="#f59e0b" opacity="0.85" />
      <path d="M22 12c0 2-2 2-2 4M32 12c0 2-2 2-2 4" stroke="#c9a86a" strokeWidth="1.5" fill="none" strokeLinecap="round" />
    </>
  ),
  rice: (
    <>
      {bowl('#fde68a')}
      <path d="M15 22h34c-1 5-8 8-17 8s-16-3-17-8z" fill="#fef3c7" stroke="#c9a86a" strokeWidth="1" />
      {[22, 28, 34].map((x) => (
        <circle key={x} cx={x} cy="19" r="1.3" fill="#e56d51" />
      ))}
    </>
  ),
  noodle: (
    <>
      {bowl('#fde68a')}
      <path d="M15 26c3-8 4-8 6 0M23 26c3-8 4-8 6 0M31 26c3-8 4-8 6 0M39 26c3-8 4-8 6 0" stroke="#f59e0b" strokeWidth="2.4" fill="none" strokeLinecap="round" />
    </>
  ),
  drink: (
    <>
      <path d="M20 14h20l-3 26a3 3 0 01-3 3H26a3 3 0 01-3-3z" fill="#fbe3de" stroke="#b8331c" strokeWidth="1.5" />
      <rect x="20" y="14" width="20" height="4" rx="2" fill="#d6472a" />
      <line x1="30" y1="10" x2="30" y2="14" stroke="#932818" strokeWidth="2" />
    </>
  ),
}

export default function DishIcon({ icon = 'rice', className = 'h-14 w-14' }) {
  return (
    <svg viewBox="0 0 60 44" className={className} role="img" aria-label={icon}>
      {icons[icon] ?? icons.rice}
    </svg>
  )
}
