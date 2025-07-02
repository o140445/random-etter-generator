import Link from 'next/link';
import { t } from '@/i18n/utils';
import { Language } from '@/i18n/config';

interface FooterProps {
  currentLanguage: Language;
}

export default function Footer({ currentLanguage }: FooterProps) {
  return (
    <footer className="text-center py-6 text-sm text-gray-500 bg-gray-100 w-full h-16">
      <div className="flex justify-center items-center gap-2">
        <Link href="/blog" className="mx-2 hover:underline">{t('blog', currentLanguage)}</Link>
        <span className="hidden sm:inline">|</span>
        <Link href="/privacy-policy" className="mx-2 hover:underline">{t('privacyPolicy', currentLanguage)}</Link>
        <span className="hidden sm:inline">|</span>
        <Link href="/terms-of-service" className="mx-2 hover:underline">{t('termsOfService', currentLanguage)}</Link>
      </div>
    </footer>
  );
} 