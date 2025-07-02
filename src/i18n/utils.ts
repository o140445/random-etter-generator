import { Language, defaultLanguage } from './config';

// 预加载所有翻译文件
import en from './locales/en.json';
import de from './locales/de.json';
import fr from './locales/fr.json';
import it from './locales/it.json';
import es from './locales/es.json';
import pt from './locales/pt.json';
import ja from './locales/ja.json';
import ko from './locales/ko.json';

const translations: Record<Language, Record<string, string>> = {
  en,
  de,
  fr,
  it,
  es,
  pt,
  ja,
  ko,
} as Record<Language, Record<string, string>>;



export const t = (key: string, language: Language = defaultLanguage): string => {
  const translation = translations[language];
  
  if (!translation) {
    console.warn(`No translation found for language: ${language}`);
    return key;
  }
  
  const result = translation[key];
  if (!result) {
    console.warn(`Translation key not found: ${key} for language: ${language}`);
    return key;
  }
  
  return result;
};

export const getLanguageFromStorage = (): Language => {
  if (typeof window === 'undefined') {
    return defaultLanguage;
  }
  
  const stored = localStorage.getItem('language');
  return (stored as Language) || defaultLanguage;
};

export const setLanguageToStorage = (language: Language) => {
  if (typeof window === 'undefined') {
    return;
  }
  
  localStorage.setItem('language', language);
};