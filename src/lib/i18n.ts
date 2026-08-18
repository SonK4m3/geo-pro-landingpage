export type Locale = 'vi' | 'en';

export const defaultLocale: Locale = 'vi';
export const locales: Locale[] = ['vi', 'en'];

export function getLocaleFromPathname(pathname: string): Locale {
  return pathname.startsWith('/en') ? 'en' : 'vi';
}
