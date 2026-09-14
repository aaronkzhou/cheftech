import { menu, deals, restaurant } from '../data.js'
import DishIcon from '../components/DishIcon.jsx'
import { useLanguage } from '../LanguageContext.jsx'

export default function Menu() {
  const { t } = useLanguage()

  return (
    <div>
      <section className="bg-chili-600 py-14 text-cream sm:py-20">
        <div className="mx-auto max-w-6xl px-5">
          <span className="inline-block rounded-full bg-cream/15 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em]">
            {t(restaurant.cuisine, restaurant.cuisineEn)}
          </span>
          <h1 className="mt-4 font-display text-4xl font-black sm:text-5xl">{t('菜单', 'Menu')}</h1>
          <p className="mt-2 text-cream/80">
            {restaurant.priceRange} · {restaurant.city}
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-10">
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          {deals.map((d) => (
            <div key={d.en} className="rounded-xl border border-chili-900/10 bg-white p-4 text-center shadow-sm">
              <p className="font-display text-xl font-black text-chili-600">{d.price}</p>
              <p className="mt-1 text-xs font-semibold text-ink">{t(d.zh, d.en)}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl space-y-14 px-5 pb-20">
        {menu.map((section) => (
          <div key={section.category.en}>
            <h2 className="font-display text-2xl font-bold text-ink">{t(section.category.zh, section.category.en)}</h2>
            <div className="mt-5 divide-y divide-ink/10 rounded-2xl border border-ink/10 bg-white shadow-sm">
              {section.items.map((item) => (
                <div key={item.en} className="flex items-center justify-between gap-4 px-5 py-4">
                  <div className="flex items-center gap-4">
                    <span className="flex h-12 w-14 shrink-0 items-center justify-center rounded-xl bg-chili-50">
                      <DishIcon icon={item.icon} className="h-10 w-14" />
                    </span>
                    <div>
                      <p className="font-semibold text-ink">
                        {t(item.zh, item.en)}{' '}
                        {item.tags?.length > 0 && <span className="ml-1 text-sm">{item.tags.join(' ')}</span>}
                      </p>
                    </div>
                  </div>
                  <p className="font-display text-lg font-black text-chili-600">${item.price}</p>
                </div>
              ))}
            </div>
          </div>
        ))}

        <p className="text-center text-xs text-ink/40">
          {t(
            '🌶️ 代表辣度 · 素 代表素食 · 价格如有变动，以门店实际为准',
            '🌶️ = spice level · 素 = vegetarian · Prices may vary, please confirm with the restaurant.',
          )}
        </p>
      </section>
    </div>
  )
}
