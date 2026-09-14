export default function Footer() {
  return (
    <footer className="border-t border-chili-900/10 bg-ink text-cream">
      <div className="mx-auto max-w-6xl px-5 py-12">
        <div className="grid gap-10 sm:grid-cols-3">
          <div>
            <h3 className="font-display text-lg font-bold">
              川小碗<span className="text-chili-400">·</span>中华现炒大王
            </h3>
            <p className="mt-1 text-sm text-cream/60">Munch Bowl Melbourne</p>
            <p className="mt-4 text-sm leading-relaxed text-cream/70">
              亚洲混合风味 · 现炒小碗菜
              <br />
              Asian fusion flavours, wok-fresh bowls.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-chili-300">
              营业信息 · Info
            </h4>
            <ul className="mt-4 space-y-2 text-sm text-cream/70">
              <li>周日–周四 11:30–23:30</li>
              <li>周五、周六 11:30–02:30</li>
              <li className="pt-1 text-cream/50">
                Sun–Thu 11:30am–11:30pm · Fri–Sat 11:30am–2:30am
              </li>
              <li className="pt-2">堂食 Dine-in · 外带 Takeaway · 外送 Delivery</li>
            </ul>
          </div>

          {/* Contact card — Chinese then English, from the business card */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-chili-300">
              联系方式 · Contact
            </h4>

            {/* 中文版 */}
            <div className="mt-4 rounded-xl border border-cream/10 bg-cream/5 p-4 text-sm">
              <p className="text-xs font-semibold uppercase tracking-wide text-chili-300">
                董事 Director
              </p>
              <p className="mt-1 font-display text-base font-bold text-cream">石先生 Martin Shi</p>
              <p className="text-cream/60">ChefTech Solution PTY LTD（川小厨母公司）</p>
              <dl className="mt-3 space-y-1.5 text-cream/80">
                <div className="flex justify-between gap-3">
                  <dt className="text-cream/50">澳洲手机</dt>
                  <dd className="font-medium">0457 649 999</dd>
                </div>
                <div className="flex justify-between gap-3">
                  <dt className="text-cream/50">中国手机</dt>
                  <dd className="font-medium">180 9886 0109</dd>
                </div>
                <div className="flex justify-between gap-3">
                  <dt className="text-cream/50">门店地址</dt>
                  <dd className="font-medium text-right">421 Elizabeth St, 3000</dd>
                </div>
              </dl>
            </div>

            {/* English version */}
            <div className="mt-3 rounded-xl border border-cream/10 bg-cream/5 p-4 text-sm">
              <p className="text-xs font-semibold uppercase tracking-wide text-chili-300">Director</p>
              <p className="mt-1 font-display text-base font-bold text-cream">Martin Shi</p>
              <p className="text-cream/60">ChefTech Solution PTY LTD</p>
              <dl className="mt-3 space-y-1.5 text-cream/80">
                <div className="flex justify-between gap-3">
                  <dt className="text-cream/50">Mobile · Australia</dt>
                  <dd className="font-medium">0457 649 999</dd>
                </div>
                <div className="flex justify-between gap-3">
                  <dt className="text-cream/50">Mobile · China</dt>
                  <dd className="font-medium">180 9886 0109</dd>
                </div>
                <div className="flex justify-between gap-3">
                  <dt className="text-cream/50">Shop</dt>
                  <dd className="font-medium text-right">421 Elizabeth St, 3000</dd>
                </div>
              </dl>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-cream/10 pt-6 text-xs text-cream/40 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} ChefTech Solution PTY LTD. 川小碗 Munch Bowl 为其墨尔本旗下品牌。</p>
          <p>ChefTech Solution PTY LTD · Munch Bowl is a Melbourne subsidiary brand.</p>
        </div>
      </div>
    </footer>
  )
}
