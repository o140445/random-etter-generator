import { Metadata } from 'next';
import ko from '@/i18n/locales/ko.json';
import RandomLetterGenerator from '@/components/RandomLetterGenerator';
import FAQAccordion, { FAQItem } from '@/components/FAQAccordion';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: '랜덤 문자 생성기 - 랜덤 문자를 위한 온라인 도구',
  description: '랜덤 문자, 숫자, 기호를 즉시 온라인에서 생성하세요. 비밀번호, 게임 등에 적합합니다. a-z, 사용자 지정 길이, 고급 옵션 지원.',
  keywords: ['랜덤 문자 생성기', '랜덤 문자', '비밀번호 생성기', '랜덤 문자 도구'],
  alternates: {
    canonical: 'https://www.random-letter-generator.com/ko',
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
    question: 'Python에서 랜덤 문자를 생성하는 방법은?',
    answer: (
      <pre className="bg-gray-100 dark:bg-gray-800 rounded-xl p-4 text-sm overflow-x-auto">
        <code>{`import random\nimport string\nprint(random.choice(string.ascii_letters))`}</code>
      </pre>
    ),
  },
  {
    question: 'Java에서 랜덤 문자를 생성하는 방법은?',
    answer: (
      <pre className="bg-gray-100 dark:bg-gray-800 rounded-xl p-4 text-sm overflow-x-auto">
        <code>{`char randomChar = (char) ('a' + new java.util.Random().nextInt(26));`}</code>
      </pre>
    ),
  },
  {
    question: 'Python에서 5글자 랜덤 단어를 생성하는 방법은?',
    answer: (
      <pre className="bg-gray-100 dark:bg-gray-800 rounded-xl p-4 text-sm overflow-x-auto">
        <code>{`import random\nimport string\nprint(''.join(random.choices(string.ascii_lowercase, k=5)))`}</code>
      </pre>
    ),
  },
  {
    question: '랜덤 문자 생성기란?',
    answer: (
      <p className="text-gray-700 dark:text-gray-300">
        랜덤 문자 생성기는 비밀번호, 게임, 테스트 등에 사용할 랜덤한 문자, 숫자, 기호를 생성하는 온라인 도구입니다.
      </p>
    ),
  },
  {
    question: '랜덤 문자로 안전한 비밀번호를 만드는 방법은?',
    answer: (
      <p className="text-gray-700 dark:text-gray-300">
        대문자, 소문자, 숫자, 기호를 포함한 비밀번호를 만들려면 저희 생성기를 사용하세요. 최소 12자 길이를 선택하고 \'l\', \'1\', \'O\', \'0\'과 같은 유사한 문자를 피해 보안을 향상시키세요.
      </p>
    ),
  },
  {
    question: '게임과 활동용으로 랜덤 문자를 생성할 수 있나요?',
    answer: (
      <p className="text-gray-700 dark:text-gray-300">
        네! 저희 랜덤 문자 생성기는 게임 코드, 단어 게임, 교육 활동, 창의적 글쓰기 자극을 만드는 데 완벽합니다. 길이와 문자 유형을 필요에 맞게 맞춤 설정할 수 있습니다.
      </p>
    ),
  },
  {
    question: '개발용 랜덤 테스트 데이터를 생성하는 방법은?',
    answer: (
      <p className="text-gray-700 dark:text-gray-300">
        폼, 데이터베이스, 애플리케이션 테스트용 랜덤 문자열을 생성하려면 저희 도구를 사용하세요. 다양한 길이와 문자 조합을 만들어 다양한 시나리오와 엣지 케이스를 테스트할 수 있습니다.
      </p>
    ),
  },
  {
    question: '이 랜덤 문자 생성기는 안전한가요?',
    answer: (
      <p className="text-gray-700 dark:text-gray-300">
        네, 저희 생성기는 암호학적으로 안전한 난수 생성을 사용합니다. 모든 생성은 브라우저에서 이루어지며 데이터가 서버로 전송되지 않아 개인정보와 보안이 보장됩니다.
      </p>
    ),
  },
];

function t(key: string): string {
  return (ko as Record<string, string>)[key] || key;
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
        <RandomLetterGenerator currentLanguage="ko" />
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
      <Footer currentLanguage="ko" />
    </main>
  );
} 