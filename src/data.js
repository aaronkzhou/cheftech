export const restaurant = {
  nameZh: '川小碗·中华现炒大王',
  nameEn: 'Munch Bowl Melbourne',
  rating: 4.7,
  reviews: 182,
  priceRange: '$1–20',
  cuisine: '亚洲混合风味',
  cuisineEn: 'Asian Fusion',
  city: 'Melbourne VIC',
  address: '421 Elizabeth St, Melbourne VIC 3000',
  services: ['堂食 Dine-in', '外带 Takeaway', '外送 Delivery'],
  hours: [
    { days: '周日 – 周四 · Sun – Thu', time: '11:30 – 23:30' },
    { days: '周五、周六 · Fri – Sat', time: '11:30 – 02:30' },
  ],
}

export const menu = [
  {
    category: '招牌小碗 · Signature Bowls',
    items: [
      { zh: '麻婆豆腐', en: 'Sichuan Classic Mapo Tofu', price: 8, tags: ['🌶️', '素'] },
      { zh: '西红柿炒鸡蛋', en: 'Scrambled Egg with Tomato', price: 6, tags: ['素'] },
      { zh: '干煸豇豆', en: 'Stir-fried String Beans w/ Preserved Veg', price: 8, tags: ['素'] },
      { zh: '川味小炒肉', en: 'Sichuan Pan-fried Pork', price: 19, tags: ['🌶️'] },
    ],
  },
  {
    category: '现炒大王 · Wok Specials',
    items: [
      { zh: '干辣椒炒鸡', en: 'Spicy Fried Chicken with Dry Chili', price: 19, tags: ['🌶️🌶️'] },
      { zh: '宫保鸡丁', en: 'Kung Pao Chicken', price: 19, tags: ['🌶️'] },
      { zh: '香辣牛肉', en: 'Beef with Chilli & Spicy Sauce', price: 17, tags: ['🌶️🌶️'] },
    ],
  },
  {
    category: '主食 · Rice & Noodles',
    items: [
      { zh: '招牌炒饭', en: 'Special Fried Rice', price: 12, tags: [] },
      { zh: '炒面 / 乌冬', en: 'Stir-fried Noodles / Udon', price: 12, tags: [] },
    ],
  },
]

export const deals = [
  { zh: '素菜小碗起', en: 'Veg bowls from', price: '$6' },
  { zh: '荤菜小碗起', en: 'Meat bowls from', price: '$8' },
  { zh: '米饭无限续', en: 'Unlimited rice refill', price: '$3' },
  { zh: '点三菜送米饭', en: '3 dishes = free rice', price: '$0' },
]
