import { NavLink } from 'react-router-dom'
import { useLanguage } from '../LanguageContext.jsx'

const links = [
  { to: '/', zh: '首页', en: 'Home' },
  { to: '/menu', zh: '菜单', en: 'Menu' },
]

export default function Navbar() {
  const { lang, setLang, t } = useLanguage()

  return (
    <header className="sticky top-0 z-50 border-b border-chili-900/10 bg-cream/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-5 py-3">
        <NavLink to="/" className="flex items-center gap-3">
          <span className="flex h-11 w-11 items-center justify-center rounded-full bg-chili-600 font-display text-xl font-black text-cream shadow-sm">
            碗
          </span>
          <span className="leading-tight">
            <span className="block font-display text-lg font-bold tracking-wide text-ink">
              {t('川小碗·中华现炒大王', 'Munch Bowl Melbourne')}
            </span>
            <span className="block text-[11px] uppercase tracking-[0.2em] text-ink/50">
              {t('Munch Bowl Melbourne', '川小碗·中华现炒大王')}
            </span>
          </span>
        </NavLink>

        <div className="flex items-center gap-2 sm:gap-3">
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
                {t(l.zh, l.en)}
              </NavLink>
            ))}
          </nav>

          <div
            role="group"
            aria-label="Language switch"
            className="flex items-center gap-0.5 rounded-full bg-ink/5 p-0.5 text-xs font-bold"
          >
            <button
              type="button"
              onClick={() => setLang('zh')}
              aria-pressed={lang === 'zh'}
              className={`rounded-full px-2.5 py-1.5 transition ${
                lang === 'zh' ? 'bg-chili-600 text-cream shadow-sm' : 'text-ink/50 hover:text-ink'
              }`}
            >
              中文
            </button>
            <button
              type="button"
              onClick={() => setLang('en')}
              aria-pressed={lang === 'en'}
              className={`rounded-full px-2.5 py-1.5 transition ${
                lang === 'en' ? 'bg-chili-600 text-cream shadow-sm' : 'text-ink/50 hover:text-ink'
              }`}
            >
              EN
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}
