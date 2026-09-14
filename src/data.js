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
  services: [
    { key: 'dinein', zh: '堂食', en: 'Dine-in' },
    { key: 'takeaway', zh: '外带', en: 'Takeaway' },
    { key: 'delivery', zh: '外送', en: 'Delivery' },
  ],
  hours: [
    { zh: '周日 – 周四', en: 'Sun – Thu', time: '11:30 – 23:30' },
    { zh: '周五、周六', en: 'Fri – Sat', time: '11:30 – 02:30' },
  ],
}

export const menu = [
  {
    category: { zh: '凉菜', en: 'Cold Starters' },
    items: [
      { zh: '皮蛋豆腐', en: 'Century Egg with Silken Tofu', price: 8, tags: [], icon: 'century' },
      { zh: '凉拌黄瓜', en: 'Smashed Cucumber Salad', price: 7, tags: ['🌶️', '素'], icon: 'cold' },
      { zh: '泡椒凤爪', en: 'Pickled Chili Chicken Feet', price: 9, tags: ['🌶️'], icon: 'cold' },
      { zh: '口水鸡', en: 'Mouth-watering Chicken', price: 12, tags: ['🌶️'], icon: 'chicken' },
      { zh: '蒜泥白肉', en: 'Garlic Poached Pork Belly Slices', price: 10, tags: ['🌶️'], icon: 'pork' },
      { zh: '老醋花生', en: 'Sichuan Vinegar Peanuts', price: 6, tags: ['素'], icon: 'cold' },
    ],
  },
  {
    category: { zh: '招牌小碗', en: 'Signature Bowls' },
    items: [
      { zh: '麻婆豆腐', en: 'Sichuan Classic Mapo Tofu', price: 8, tags: ['🌶️', '素'], icon: 'tofu' },
      { zh: '西红柿炒鸡蛋', en: 'Scrambled Egg with Tomato', price: 6, tags: ['素'], icon: 'egg' },
      { zh: '干煸豇豆', en: 'Stir-fried String Beans w/ Preserved Veg', price: 8, tags: ['素'], icon: 'greens' },
      { zh: '鱼香茄子', en: 'Fish-fragrant Eggplant', price: 10, tags: ['🌶️', '素'], icon: 'eggplant' },
      { zh: '蒜蓉空心菜', en: 'Garlic Stir-fried Water Spinach', price: 9, tags: ['素'], icon: 'greens' },
      { zh: '川味小炒肉', en: 'Sichuan Pan-fried Pork', price: 19, tags: ['🌶️'], icon: 'pork' },
      { zh: '麻辣豆干', en: 'Spicy Dried Tofu', price: 7, tags: ['🌶️', '素'], icon: 'tofu' },
      { zh: '酸菜鱼片', en: 'Pickled Mustard Green Fish Fillet', price: 18, tags: ['🌶️'], icon: 'fish' },
    ],
  },
  {
    category: { zh: '现炒大王', en: 'Wok Specials' },
    items: [
      { zh: '干辣椒炒鸡', en: 'Spicy Fried Chicken with Dry Chili', price: 19, tags: ['🌶️🌶️'], icon: 'chicken' },
      { zh: '宫保鸡丁', en: 'Kung Pao Chicken', price: 19, tags: ['🌶️'], icon: 'chicken' },
      { zh: '辣子鸡', en: 'Chongqing Spicy Diced Chicken', price: 19, tags: ['🌶️🌶️'], icon: 'chicken' },
      { zh: '藤椒鸡', en: 'Sichuan Green Peppercorn Chicken', price: 18, tags: ['🌶️'], icon: 'chicken' },
      { zh: '回锅肉', en: 'Twice-cooked Pork Belly', price: 18, tags: ['🌶️'], icon: 'pork' },
      { zh: '香辣牛肉', en: 'Beef with Chilli & Spicy Sauce', price: 17, tags: ['🌶️🌶️'], icon: 'beef' },
      { zh: '水煮牛肉', en: 'Sichuan Poached Beef in Chili Oil', price: 19, tags: ['🌶️🌶️'], icon: 'beef' },
      { zh: '水煮鱼片', en: 'Poached Fish in Sichuan Chili Oil', price: 19, tags: ['🌶️🌶️'], icon: 'fish' },
      { zh: '干锅花菜', en: 'Dry-pot Cauliflower', price: 12, tags: ['🌶️', '素'], icon: 'greens' },
    ],
  },
  {
    category: { zh: '汤类', en: 'Soups' },
    items: [
      { zh: '酸辣汤', en: 'Hot & Sour Soup', price: 6, tags: ['🌶️'], icon: 'soup' },
      { zh: '番茄蛋花汤', en: 'Tomato Egg Drop Soup', price: 6, tags: ['素'], icon: 'soup' },
      { zh: '冬瓜排骨汤', en: 'Winter Melon Pork Rib Soup', price: 9, tags: [], icon: 'soup' },
    ],
  },
  {
    category: { zh: '主食', en: 'Rice & Noodles' },
    items: [
      { zh: '招牌炒饭', en: 'Special Fried Rice', price: 12, tags: [], icon: 'rice' },
      { zh: '蛋炒饭', en: 'Egg Fried Rice', price: 10, tags: [], icon: 'rice' },
      { zh: '炒面 / 乌冬', en: 'Stir-fried Noodles / Udon', price: 12, tags: [], icon: 'noodle' },
      { zh: '过桥米线', en: 'Yunnan Crossing-the-Bridge Rice Noodles', price: 13, tags: [], icon: 'noodle' },
      { zh: '麻辣米线', en: 'Spicy Sichuan Rice Noodles', price: 12, tags: ['🌶️'], icon: 'noodle' },
      { zh: '牛肉面', en: 'Beef Noodle Soup', price: 14, tags: [], icon: 'noodle' },
    ],
  },
  {
    category: { zh: '甜品', en: 'Desserts' },
    items: [
      { zh: '红糖糍粑', en: 'Brown Sugar Glutinous Rice Cakes', price: 8, tags: ['素'], icon: 'dumpling' },
      { zh: '芝麻汤圆', en: 'Sesame Rice Balls', price: 7, tags: ['素'], icon: 'dumpling' },
    ],
  },
  {
    category: { zh: '饮料', en: 'Drinks' },
    items: [
      { zh: '瓶装饮料', en: 'Bottled Soft Drink', price: 4, tags: [], icon: 'drink' },
      { zh: '酸梅汤', en: 'Sour Plum Juice', price: 5, tags: [], icon: 'drink' },
      { zh: '冰粉', en: 'Bingfen Iced Jelly', price: 6, tags: [], icon: 'drink' },
      { zh: '凉茶', en: 'Herbal Tea', price: 4, tags: [], icon: 'drink' },
    ],
  },
]

export const deals = [
  { zh: '素菜小碗起', en: 'Veg bowls from', price: '$6' },
  { zh: '荤菜小碗起', en: 'Meat bowls from', price: '$8' },
  { zh: '米饭无限续', en: 'Unlimited rice refill', price: '$3' },
  { zh: '点三菜送米饭', en: '3 dishes = free rice', price: '$0' },
]
