import { NavLink } from 'react-router-dom'

const links = [
  { to: '/', label: '首页', en: 'Home' },
  { to: '/menu', label: '菜单', en: 'Menu' },
]

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-chili-900/10 bg-cream/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3">
        <NavLink to="/" className="flex items-center gap-3">
          <span className="flex h-11 w-11 items-center justify-center rounded-full bg-chili-600 font-display text-xl font-black text-cream shadow-sm">
            碗
          </span>
          <span className="leading-tight">
            <span className="block font-display text-lg font-bold tracking-wide text-ink">
              川小碗<span className="text-chili-600">·</span>中华现炒大王
            </span>
            <span className="block text-[11px] uppercase tracking-[0.2em] text-ink/50">
              Munch Bowl Melbourne
            </span>
          </span>
        </NavLink>

        <nav className="flex items-center gap-1 sm:gap-2">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end
              className={({ isActive }) =>
                `rounded-full px-3 py-2 text-sm font-semibold transition sm:px-4 ${
                  isActive
                    ? 'bg-chili-600 text-cream shadow-sm'
                    : 'text-ink/70 hover:bg-chili-100 hover:text-chili-700'
                }`
              }
            >
              {l.label} <span className="hidden text-xs font-normal opacity-70 sm:inline">/ {l.en}</span>
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  )
}
