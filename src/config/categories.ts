/**
 * 攻略分类配置
 * 这个文件定义了所有可用的分类和子分类
 */

export interface Category {
  id: string;
  name: {
    zh: string;
    en: string;
  };
  icon: string;
  description?: {
    zh: string;
    en: string;
  };
  subcategories?: Subcategory[];
}

export interface Subcategory {
  id: string;
  name: {
    zh: string;
    en: string;
  };
  icon?: string;
}

export const categories: Category[] = [
  {
    id: 'domestic-travel',
    name: {
      zh: '国内旅游',
      en: 'Domestic Travel',
    },
    icon: '🇨🇳',
    description: {
      zh: '探索中国的美丽城市和自然风光',
      en: 'Explore beautiful cities and nature in China',
    },
    subcategories: [
      {
        id: 'city-guides',
        name: { zh: '城市攻略', en: 'City Guides' },
        icon: '🏙️',
      },
      {
        id: 'natural-scenery',
        name: { zh: '自然景观', en: 'Natural Scenery' },
        icon: '🏔️',
      },
      {
        id: 'cultural-heritage',
        name: { zh: '历史文化', en: 'Cultural Heritage' },
        icon: '🏛️',
      },
      {
        id: 'food-culture',
        name: { zh: '美食文化', en: 'Food Culture' },
        icon: '🍜',
      },
    ],
  },
  {
    id: 'international-travel',
    name: {
      zh: '国际旅游',
      en: 'International Travel',
    },
    icon: '🌏',
    description: {
      zh: '周边国家和地区的旅行指南',
      en: 'Travel guides for nearby countries',
    },
    subcategories: [
      {
        id: 'japan',
        name: { zh: '日本', en: 'Japan' },
        icon: '🇯🇵',
      },
      {
        id: 'thailand',
        name: { zh: '泰国', en: 'Thailand' },
        icon: '🇹🇭',
      },
      {
        id: 'singapore',
        name: { zh: '新加坡', en: 'Singapore' },
        icon: '🇸🇬',
      },
      {
        id: 'korea',
        name: { zh: '韩国', en: 'South Korea' },
        icon: '🇰🇷',
      },
    ],
  },
  {
    id: 'transportation',
    name: {
      zh: '出行攻略',
      en: 'Transportation',
    },
    icon: '🚗',
    description: {
      zh: '交通工具使用和出行规划',
      en: 'Transportation and travel planning',
    },
    subcategories: [
      {
        id: 'metro',
        name: { zh: '地铁/交通', en: 'Metro/Transit' },
        icon: '🚇',
      },
      {
        id: 'airport',
        name: { zh: '机场指南', en: 'Airport Guide' },
        icon: '✈️',
      },
      {
        id: 'high-speed-rail',
        name: { zh: '高铁攻略', en: 'High-Speed Rail' },
        icon: '🚄',
      },
      {
        id: 'taxi-rideshare',
        name: { zh: '出租/网约车', en: 'Taxi/Ride-share' },
        icon: '🚕',
      },
    ],
  },
  {
    id: 'living-services',
    name: {
      zh: '生活服务',
      en: 'Living Services',
    },
    icon: '💰',
    description: {
      zh: '日常生活必备服务指南',
      en: 'Essential services for daily life',
    },
    subcategories: [
      {
        id: 'payment',
        name: { zh: '支付指南', en: 'Payment Guide' },
        icon: '💳',
      },
      {
        id: 'communication',
        name: { zh: '通信/网络', en: 'Communication' },
        icon: '📱',
      },
      {
        id: 'accommodation',
        name: { zh: '住宿建议', en: 'Accommodation' },
        icon: '🏨',
      },
      {
        id: 'finance',
        name: { zh: '金融理财', en: 'Finance' },
        icon: '💰',
      },
    ],
  },
];

/**
 * 根据分类 ID 获取分类信息
 */
export function getCategoryById(id: string): Category | undefined {
  return categories.find((cat) => cat.id === id);
}

/**
 * 根据分类 ID 和子分类 ID 获取子分类信息
 */
export function getSubcategoryById(
  categoryId: string,
  subcategoryId: string
): Subcategory | undefined {
  const category = getCategoryById(categoryId);
  return category?.subcategories?.find((sub) => sub.id === subcategoryId);
}

/**
 * 获取所有分类的 ID 列表
 */
export function getAllCategoryIds(): string[] {
  return categories.map((cat) => cat.id);
}

/**
 * 获取所有子分类的 ID 列表（包含父分类信息）
 */
export function getAllSubcategoryIds(): Array<{
  categoryId: string;
  subcategoryId: string;
}> {
  const result: Array<{ categoryId: string; subcategoryId: string }> = [];
  categories.forEach((cat) => {
    cat.subcategories?.forEach((sub) => {
      result.push({ categoryId: cat.id, subcategoryId: sub.id });
    });
  });
  return result;
}
