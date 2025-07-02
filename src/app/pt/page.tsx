import { Metadata } from 'next';
import pt from '@/i18n/locales/pt.json';
import RandomLetterGenerator from '@/components/RandomLetterGenerator';
import FAQAccordion, { FAQItem } from '@/components/FAQAccordion';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Gerador de letras aleatórias - Ferramenta online para letras aleatórias',
  description: 'Gere instantaneamente letras, números e símbolos aleatórios online. Perfeito para senhas, jogos e muito mais. Suporta a-z, comprimento personalizado e opções avançadas.',
  keywords: ['gerador de letras aleatórias', 'letras aleatórias', 'gerador de senhas', 'caracteres aleatórios'],
  alternates: {
    canonical: 'https://www.random-letter-generator.com/pt',
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
    question: 'Como gerar uma letra aleatória em Python?',
    answer: (
      <pre className="bg-gray-100 dark:bg-gray-800 rounded-xl p-4 text-sm overflow-x-auto">
        <code>{`import random\nimport string\nprint(random.choice(string.ascii_letters))`}</code>
      </pre>
    ),
  },
  {
    question: 'Como gerar uma letra aleatória em Java?',
    answer: (
      <pre className="bg-gray-100 dark:bg-gray-800 rounded-xl p-4 text-sm overflow-x-auto">
        <code>{`char randomChar = (char) ('a' + new java.util.Random().nextInt(26));`}</code>
      </pre>
    ),
  },
  {
    question: 'Como gerar uma palavra de 5 letras aleatórias em Python?',
    answer: (
      <pre className="bg-gray-100 dark:bg-gray-800 rounded-xl p-4 text-sm overflow-x-auto">
        <code>{`import random\nimport string\nprint(''.join(random.choices(string.ascii_lowercase, k=5)))`}</code>
      </pre>
    ),
  },
  {
    question: 'O que é um gerador de letras aleatórias?',
    answer: (
      <p className="text-gray-700 dark:text-gray-300">
        Um gerador de letras aleatórias é uma ferramenta online que cria letras, números ou símbolos aleatórios para senhas, jogos, testes e muito mais.
      </p>
    ),
  },
  {
    question: 'Como criar senhas seguras com letras aleatórias?',
    answer: (
      <p className="text-gray-700 dark:text-gray-300">
        Use nosso gerador para criar senhas com letras maiúsculas, minúsculas, números e símbolos. Escolha um comprimento de pelo menos 12 caracteres e evite caracteres similares como \'l\', \'1\', \'O\', \'0\' para maior segurança.
      </p>
    ),
  },
  {
    question: 'Posso gerar letras aleatórias para jogos e atividades?',
    answer: (
      <p className="text-gray-700 dark:text-gray-300">
        Sim! Nosso gerador de letras aleatórias é perfeito para criar códigos de jogo, jogos de palavras, atividades educacionais e estímulos para escrita criativa. Você pode personalizar o comprimento e tipos de caracteres conforme suas necessidades.
      </p>
    ),
  },
  {
    question: 'Como gerar dados de teste aleatórios para desenvolvimento?',
    answer: (
      <p className="text-gray-700 dark:text-gray-300">
        Use nossa ferramenta para gerar strings aleatórias para testar formulários, bancos de dados e aplicações. Você pode criar vários comprimentos e combinações de caracteres para testar diferentes cenários e casos extremos.
      </p>
    ),
  },
  {
    question: 'Este gerador de letras aleatórias é seguro?',
    answer: (
      <p className="text-gray-700 dark:text-gray-300">
        Sim, nosso gerador usa geração de números aleatórios criptograficamente segura. Toda geração acontece no seu navegador e nenhum dado é enviado aos nossos servidores, garantindo sua privacidade e segurança.
      </p>
    ),
  },
];

function t(key: string): string {
  return (pt as Record<string, string>)[key] || key;
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
        <RandomLetterGenerator currentLanguage="pt" />
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
      <Footer currentLanguage="pt" />
    </main>
  );
} 