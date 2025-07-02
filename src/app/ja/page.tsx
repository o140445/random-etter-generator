import { Metadata } from 'next';
import ja from '@/i18n/locales/ja.json';
import RandomLetterGenerator from '@/components/RandomLetterGenerator';
import FAQAccordion, { FAQItem } from '@/components/FAQAccordion';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'ランダム文字ジェネレーター - ランダムな文字のためのオンラインツール',
  description: 'ランダムな文字、数字、記号を即座にオンラインで生成します。パスワード、ゲームなどに最適。a-z、カスタム長、拡張オプションに対応。',
  keywords: ['ランダム文字ジェネレーター', 'ランダム文字', 'パスワードジェネレーター', 'ランダムな文字'],
  alternates: {
    canonical: 'https://www.random-letter-generator.com/ja',
    languages: {
      'en': '/',
      'de': '/de',
      'fr': '/fr',
      'it': '/it',
      'es': '/es',
      'pt': '/pt',
      'ja': '/ja',
      'ko': '/ko',
    },
  },
};

const faqItems: FAQItem[] = [
  {
    question: 'Pythonでランダムな文字を生成する方法は？',
    answer: (
      <pre className="bg-gray-100 dark:bg-gray-800 rounded-xl p-4 text-sm overflow-x-auto">
        <code>{`import random\nimport string\nprint(random.choice(string.ascii_letters))`}</code>
      </pre>
    ),
  },
  {
    question: 'Javaでランダムな文字を生成する方法は？',
    answer: (
      <pre className="bg-gray-100 dark:bg-gray-800 rounded-xl p-4 text-sm overflow-x-auto">
        <code>{`char randomChar = (char) ('a' + new java.util.Random().nextInt(26));`}</code>
      </pre>
    ),
  },
  {
    question: 'Pythonで5文字のランダムな単語を生成する方法は？',
    answer: (
      <pre className="bg-gray-100 dark:bg-gray-800 rounded-xl p-4 text-sm overflow-x-auto">
        <code>{`import random\nimport string\nprint(''.join(random.choices(string.ascii_lowercase, k=5)))`}</code>
      </pre>
    ),
  },
  {
    question: 'ランダム文字ジェネレーターとは？',
    answer: (
      <p className="text-gray-700 dark:text-gray-300">
        ランダム文字ジェネレーターは、パスワード、ゲーム、テストなどに使用するランダムな文字、数字、記号を作成するオンラインツールです。
      </p>
    ),
  },
  {
    question: 'ランダムな文字で安全なパスワードを作成する方法は？',
    answer: (
      <p className="text-gray-700 dark:text-gray-300">
        大文字、小文字、数字、記号を含むパスワードを作成するには、当社のジェネレーターを使用してください。少なくとも12文字の長さを選択し、\'l\'、\'1\'、\'O\'、\'0\'などの類似文字を避けてセキュリティを向上させてください。
      </p>
    ),
  },
  {
    question: 'ゲームやアクティビティ用にランダムな文字を生成できますか？',
    answer: (
      <p className="text-gray-700 dark:text-gray-300">
        はい！当社のランダム文字ジェネレーターは、ゲームコード、単語ゲーム、教育活動、創造的執筆の刺激を作成するのに最適です。長さと文字タイプをニーズに合わせてカスタマイズできます。
      </p>
    ),
  },
  {
    question: '開発用のランダムなテストデータを生成する方法は？',
    answer: (
      <p className="text-gray-700 dark:text-gray-300">
        フォーム、データベース、アプリケーションのテスト用にランダムな文字列を生成するには、当社のツールを使用してください。さまざまな長さと文字の組み合わせを作成して、異なるシナリオとエッジケースをテストできます。
      </p>
    ),
  },
  {
    question: 'このランダム文字ジェネレーターは安全ですか？',
    answer: (
      <p className="text-gray-700 dark:text-gray-300">
        はい、当社のジェネレーターは暗号学的に安全な乱数生成を使用しています。すべての生成はブラウザで行われ、データはサーバーに送信されないため、プライバシーとセキュリティが保証されます。
      </p>
    ),
  },
];

function t(key: string): string {
  return (ja as Record<string, string>)[key] || key;
}

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-8">
      <div className="max-w-4xl mx-auto md:px-4 px-2">
        <h1 className="text-4xl font-bold text-center mb-4 text-gray-900 dark:text-white">
          {t('siteTitle')}
        </h1>
        <p className="text-center text-lg text-gray-600 dark:text-gray-300 mb-8">
          {t('siteSubtitle')}
        </p>
        <RandomLetterGenerator currentLanguage="ja" />
        <section className="mt-6 p-6">
          <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">{t('howToUseTitle')}</h2>
          <ol className="list-decimal list-inside text-gray-700 dark:text-gray-300 space-y-2">
            <li>{t('howToUseStep1')}</li>
            <li dangerouslySetInnerHTML={{__html: t('howToUseStep2')}} />
            <li>{t('howToUseStep3')}</li>
          </ol>
        </section>
        <section className="mt-6 p-6">
          <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">{t('featuresTitle')}</h2>
          <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
            <li>{t('features1')}</li>
            <li>{t('features2')}</li>
            <li>{t('features3')}</li>
            <li>{t('features4')}</li>
            <li>{t('features5')}</li>
          </ul>
        </section>
        <section className="mt-6 p-6">
          <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">FAQ</h2>
          <FAQAccordion items={faqItems} />
        </section>
      </div>
      <Footer currentLanguage="ja" />
    </main>
  );
} 