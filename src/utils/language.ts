/**
 * 语言管理工具
 * 使用 localStorage 保存语言偏好，实现客户端语言切换
 */

export type Language = 'zh' | 'en';

const LANGUAGE_KEY = 'nomad-language';

/**
 * 获取当前语言偏好
 */
export function getLanguage(): Language {
  if (typeof window === 'undefined') {
    return 'zh'; // 服务端默认中文
  }
  
  const saved = localStorage.getItem(LANGUAGE_KEY);
  if (saved === 'zh' || saved === 'en') {
    return saved;
  }
  
  // 自动检测浏览器语言
  const browserLang = navigator.language.toLowerCase();
  return browserLang.startsWith('zh') ? 'zh' : 'en';
}

/**
 * 设置语言偏好
 */
export function setLanguage(lang: Language) {
  if (typeof window !== 'undefined') {
    localStorage.setItem(LANGUAGE_KEY, lang);
    document.documentElement.setAttribute('data-lang', lang);
    document.documentElement.setAttribute('lang', lang);
    
    // 触发自定义事件，通知页面语言已改变
    window.dispatchEvent(new CustomEvent('languagechange', { detail: { language: lang } }));
  }
}

/**
 * 初始化语言设置
 */
export function initLanguage() {
  if (typeof window !== 'undefined') {
    const lang = getLanguage();
    document.documentElement.setAttribute('data-lang', lang);
    document.documentElement.setAttribute('lang', lang);
  }
}
