import { Link } from 'react-router-dom'
import Stars from '../components/Stars.jsx'
import DishIcon from '../components/DishIcon.jsx'
import { restaurant, menu, deals } from '../data.js'

const serviceIcons = {
  '堂食 Dine-in': (
    <path d="M4 3v10M4 3a2 2 0 012 2v3a2 2 0 01-2 2m0-7a2 2 0 00-2 2v3a2 2 0 002 2m8-7v14m8-14c-2.2 0-4 2-4 5s1.8 5 4 5m0-10v14" />
  ),
  '外带 Takeaway': (
    <path d="M4 8h16l-1.2 10.2a2 2 0 01-2 1.8H7.2a2 2 0 01-2-1.8L4 8zM8 8V6a4 4 0 118 0v2" />
  ),
  '外送 Delivery': (
    <path d="M3 7h11v8H3zM14 10h4l3 3v2h-7zM6.5 19a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm12 0a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
  ),
}

const featured = menu.flatMap((s) => s.items).filter((_, i) => i % 3 === 0).slice(0, 4)

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-chili-700 via-chili-600 to-chili-500 text-cream">
        <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-cream/10 blur-3xl" />
        <div className="pointer-events-none absolute -left-16 bottom-0 h-56 w-56 rounded-full bg-ink/20 blur-3xl" />

        <div className="relative mx-auto max-w-6xl px-5 py-16 sm:py-24">
          <span className="inline-block rounded-full bg-cream/15 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em]">
            亚洲混合风味 · Asian Fusion
          </span>

          <h1 className="mt-5 font-display text-4xl font-black leading-tight sm:text-6xl">
            川小碗<span className="text-chili-200">·</span>中华现炒大王
          </h1>
          <p className="mt-2 text-lg font-medium text-cream/80 sm:text-xl">Munch Bowl Melbourne</p>

          <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm sm:text-base">
            <span className="flex items-center gap-1.5 font-semibold">
              <Stars rating={restaurant.rating} />
              {restaurant.rating} <span className="text-cream/70">({restaurant.reviews})</span>
            </span>
            <span className="text-cream/50">·</span>
            <span>{restaurant.priceRange}</span>
            <span className="text-cream/50">·</span>
            <span>{restaurant.city}</span>
          </div>

          <div className="mt-9 flex flex-wrap gap-3">
            <Link
              to="/menu"
              className="rounded-full bg-cream px-6 py-3 text-sm font-bold text-chili-700 shadow-lg shadow-ink/10 transition hover:bg-chili-50"
            >
              查看菜单 View Menu
            </Link>
            <a
              href="#location"
              className="rounded-full border border-cream/40 px-6 py-3 text-sm font-bold text-cream transition hover:bg-cream/10"
            >
              门店位置 Find Us
            </a>
          </div>
        </div>
      </section>

      {/* Service tags */}
      <section className="mx-auto -mt-8 max-w-6xl px-5">
        <div className="grid gap-4 rounded-2xl bg-cream p-4 shadow-xl shadow-ink/10 ring-1 ring-ink/5 sm:grid-cols-3">
          {restaurant.services.map((s) => (
            <div key={s} className="flex items-center gap-3 rounded-xl px-3 py-2">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-chili-50 text-chili-600">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                  {serviceIcons[s]}
                </svg>
              </span>
              <span className="text-sm font-semibold text-ink">{s}</span>
            </div>
          ))}
        </div>
      </section>

      {/* About */}
      <section className="mx-auto max-w-6xl px-5 py-16 sm:py-24">
        <div className="grid gap-10 sm:grid-cols-2 sm:gap-16">
          <div>
            <h2 className="font-display text-3xl font-bold text-ink">关于我们 · About</h2>
            <p className="mt-4 leading-relaxed text-ink/70">
              川小碗·中华现炒大王主打云南、四川风味的地道小碗菜，一菜一味，现点现炒，锅气十足。
              麻婆豆腐、皮蛋等招牌菜品香辣过瘾，让你在墨尔本市中心也能吃到熟悉的家乡味道。
            </p>
            <p className="mt-4 leading-relaxed text-ink/60">
              Munch Bowl serves Southwest Chinese comfort food — Yunnan &amp; Sichuan-style dishes
              in mini bowls, wok-fired to order with real heat and proper wok hei, right in the
              heart of Melbourne.
            </p>
            <p className="mt-6 rounded-xl bg-chili-50 px-4 py-3 text-sm text-chili-800">
              川小碗 Munch Bowl 是 <span className="font-semibold">ChefTech Solution PTY LTD</span> 旗下位于墨尔本的品牌子公司。
              <br />
              <span className="text-chili-700/70">
                Munch Bowl is a Melbourne-based subsidiary brand of ChefTech Solution PTY LTD.
              </span>
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {deals.map((d) => (
              <div key={d.en} className="rounded-2xl border border-chili-900/10 bg-white p-5 shadow-sm">
                <p className="font-display text-2xl font-black text-chili-600">{d.price}</p>
                <p className="mt-1 text-sm font-semibold text-ink">{d.zh}</p>
                <p className="text-xs text-ink/50">{d.en}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Signature dishes */}
      <section className="bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-5">
          <div className="flex items-end justify-between">
            <h2 className="font-display text-3xl font-bold text-ink">招牌菜品 · Signature Dishes</h2>
            <Link to="/menu" className="text-sm font-semibold text-chili-600 hover:underline">
              完整菜单 Full menu →
            </Link>
          </div>

          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {featured.map((item) => (
              <div
                key={item.en}
                className="group flex flex-col justify-between rounded-2xl border border-ink/5 bg-cream p-5 transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div>
                  <div className="flex h-24 items-center justify-center rounded-xl bg-chili-100">
                    <DishIcon icon={item.icon} className="h-14 w-20" />
                  </div>
                  <p className="mt-4 font-display text-lg font-bold text-ink">{item.zh}</p>
                  <p className="text-xs text-ink/50">{item.en}</p>
                  {item.tags?.length > 0 && (
                    <p className="mt-1 text-sm">{item.tags.join(' ')}</p>
                  )}
                </div>
                <p className="mt-4 font-display text-xl font-black text-chili-600">${item.price}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location & hours */}
      <section id="location" className="mx-auto max-w-6xl px-5 py-16 sm:py-24">
        <h2 className="font-display text-3xl font-bold text-ink">门店位置 &amp; 营业时间</h2>
        <p className="text-sm text-ink/50">Location &amp; Hours</p>

        <div className="mt-8 grid gap-8 sm:grid-cols-2">
          <div className="space-y-6">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-chili-600">地址 Address</p>
              <p className="mt-1 text-lg font-semibold text-ink">{restaurant.address}</p>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-chili-600">营业时间 Hours</p>
              <ul className="mt-2 space-y-1 text-ink/70">
                {restaurant.hours.map((h) => (
                  <li key={h.days} className="flex justify-between gap-4 border-b border-ink/5 py-1.5 text-sm">
                    <span>{h.days}</span>
                    <span className="font-semibold text-ink">{h.time}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="overflow-hidden rounded-2xl border border-ink/10 shadow-sm">
            <iframe
              title="Munch Bowl Melbourne location"
              className="h-full min-h-[260px] w-full"
              loading="lazy"
              src={`https://maps.google.com/maps?q=${encodeURIComponent(restaurant.address)}&z=16&output=embed`}
            />
          </div>
        </div>
      </section>
    </div>
  )
}
