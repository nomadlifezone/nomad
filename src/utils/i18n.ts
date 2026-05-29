/**
 * 多语言内容辅助函数
 */

/**
 * 从 Markdown 内容中提取指定语言的正文
 * 
 * 格式示例：
 * <!-- lang:zh -->
 * 中文内容...
 * <!-- lang:en -->
 * English content...
 */
export function extractContentByLang(rawContent: string, lang: 'zh' | 'en'): string {
  const langMarker = `<!-- lang:${lang} -->`;
  const otherLang = lang === 'zh' ? 'en' : 'zh';
  const otherLangMarker = `<!-- lang:${otherLang} -->`;

  // 找到当前语言标记的位置
  const startIndex = rawContent.indexOf(langMarker);
  if (startIndex === -1) {
    // 如果没有语言标记，返回全部内容（兼容旧格式）
    return rawContent;
  }

  // 找到下一个语言标记的位置
  const endIndex = rawContent.indexOf(otherLangMarker, startIndex);

  // 提取内容
  const start = startIndex + langMarker.length;
  const end = endIndex !== -1 ? endIndex : rawContent.length;
  
  return rawContent.slice(start, end).trim();
}

/**
 * 难度等级翻译映射
 */
export const difficultyMap = {
  easy: {
    zh: '简单',
    en: 'Easy',
  },
  medium: {
    zh: '中等',
    en: 'Medium',
  },
  hard: {
    zh: '困难',
    en: 'Hard',
  },
} as const;

/**
 * 获取翻译后的难度文本
 */
export function getDifficultyText(
  difficulty: 'easy' | 'medium' | 'hard',
  lang: 'zh' | 'en'
): string {
  return difficultyMap[difficulty][lang];
}

/**
 * 获取本地化的字段值
 * 支持字符串或多语言对象
 */
export function getLocalizedField<T>(
  field: T | { zh: T; en: T } | undefined,
  lang: 'zh' | 'en',
  fallback?: T
): T | undefined {
  if (!field) return fallback;
  
  if (typeof field === 'object' && field !== null && 'zh' in field && 'en' in field) {
    return (field as { zh: T; en: T })[lang];
  }
  
  return field as T;
}

/**
 * 获取本地化的数组
 */
export function getLocalizedArray(
  field: string[] | { zh: string[]; en: string[] } | undefined,
  lang: 'zh' | 'en'
): string[] {
  if (!field) return [];
  
  if (typeof field === 'object' && !Array.isArray(field) && 'zh' in field && 'en' in field) {
    return field[lang];
  }
  
  return field as string[];
}

/**
 * 获取本地化的字符串
 */
export function getLocalizedString(
  field: string | { zh: string; en: string } | undefined,
  lang: 'zh' | 'en',
  fallback: string = ''
): string {
  if (!field) return fallback;
  
  if (typeof field === 'object' && 'zh' in field && 'en' in field) {
    return field[lang];
  }
  
  return field as string;
}
