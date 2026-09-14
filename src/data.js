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
    category: '凉菜 · Cold Starters',
    items: [
      { zh: '皮蛋豆腐', en: 'Century Egg with Silken Tofu', price: 8, tags: [], icon: 'century' },
      { zh: '凉拌黄瓜', en: 'Smashed Cucumber Salad', price: 7, tags: ['🌶️', '素'], icon: 'cold' },
      { zh: '泡椒凤爪', en: 'Pickled Chili Chicken Feet', price: 9, tags: ['🌶️'], icon: 'cold' },
      { zh: '口水鸡', en: 'Mouth-watering Chicken', price: 12, tags: ['🌶️'], icon: 'chicken' },
    ],
  },
  {
    category: '招牌小碗 · Signature Bowls',
    items: [
      { zh: '麻婆豆腐', en: 'Sichuan Classic Mapo Tofu', price: 8, tags: ['🌶️', '素'], icon: 'tofu' },
      { zh: '西红柿炒鸡蛋', en: 'Scrambled Egg with Tomato', price: 6, tags: ['素'], icon: 'egg' },
      { zh: '干煸豇豆', en: 'Stir-fried String Beans w/ Preserved Veg', price: 8, tags: ['素'], icon: 'greens' },
      { zh: '鱼香茄子', en: 'Fish-fragrant Eggplant', price: 10, tags: ['🌶️', '素'], icon: 'eggplant' },
      { zh: '蒜蓉空心菜', en: 'Garlic Stir-fried Water Spinach', price: 9, tags: ['素'], icon: 'greens' },
      { zh: '川味小炒肉', en: 'Sichuan Pan-fried Pork', price: 19, tags: ['🌶️'], icon: 'pork' },
    ],
  },
  {
    category: '现炒大王 · Wok Specials',
    items: [
      { zh: '干辣椒炒鸡', en: 'Spicy Fried Chicken with Dry Chili', price: 19, tags: ['🌶️🌶️'], icon: 'chicken' },
      { zh: '宫保鸡丁', en: 'Kung Pao Chicken', price: 19, tags: ['🌶️'], icon: 'chicken' },
      { zh: '辣子鸡', en: 'Chongqing Spicy Diced Chicken', price: 19, tags: ['🌶️🌶️'], icon: 'chicken' },
      { zh: '回锅肉', en: 'Twice-cooked Pork Belly', price: 18, tags: ['🌶️'], icon: 'pork' },
      { zh: '香辣牛肉', en: 'Beef with Chilli & Spicy Sauce', price: 17, tags: ['🌶️🌶️'], icon: 'beef' },
      { zh: '水煮鱼片', en: 'Poached Fish in Sichuan Chili Oil', price: 19, tags: ['🌶️🌶️'], icon: 'fish' },
    ],
  },
  {
    category: '汤类 · Soups',
    items: [
      { zh: '酸辣汤', en: 'Hot & Sour Soup', price: 6, tags: ['🌶️'], icon: 'soup' },
      { zh: '番茄蛋花汤', en: 'Tomato Egg Drop Soup', price: 6, tags: ['素'], icon: 'soup' },
    ],
  },
  {
    category: '主食 · Rice & Noodles',
    items: [
      { zh: '招牌炒饭', en: 'Special Fried Rice', price: 12, tags: [], icon: 'rice' },
      { zh: '炒面 / 乌冬', en: 'Stir-fried Noodles / Udon', price: 12, tags: [], icon: 'noodle' },
      { zh: '过桥米线', en: 'Yunnan Crossing-the-Bridge Rice Noodles', price: 13, tags: [], icon: 'noodle' },
      { zh: '麻辣米线', en: 'Spicy Sichuan Rice Noodles', price: 12, tags: ['🌶️'], icon: 'noodle' },
    ],
  },
  {
    category: '饮料 · Drinks',
    items: [
      { zh: '瓶装饮料', en: 'Bottled Soft Drink', price: 4, tags: [], icon: 'drink' },
      { zh: '酸梅汤', en: 'Sour Plum Juice', price: 5, tags: [], icon: 'drink' },
    ],
  },
]

export const deals = [
  { zh: '素菜小碗起', en: 'Veg bowls from', price: '$6' },
  { zh: '荤菜小碗起', en: 'Meat bowls from', price: '$8' },
  { zh: '米饭无限续', en: 'Unlimited rice refill', price: '$3' },
  { zh: '点三菜送米饭', en: '3 dishes = free rice', price: '$0' },
]
