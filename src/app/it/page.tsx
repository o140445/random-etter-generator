import { Metadata } from 'next';
import it from '@/i18n/locales/it.json';
import RandomLetterGenerator from '@/components/RandomLetterGenerator';
import FAQAccordion, { FAQItem } from '@/components/FAQAccordion';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Generatore di lettere casuali - Strumento online per lettere casuali',
  description: 'Genera istantaneamente lettere, numeri e simboli casuali online. Perfetto per password, giochi e altro. Supporta a-z, lunghezza personalizzata e opzioni avanzate.',
  keywords: ['generatore di lettere casuali', 'lettere casuali', 'generatore di password', 'caratteri casuali'],
  alternates: {
    canonical: 'https://www.random-letter-generator.com/it',
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
    question: 'Come generare una lettera casuale in Python?',
    answer: (
      <pre className="bg-gray-100 dark:bg-gray-800 rounded-xl p-4 text-sm overflow-x-auto">
        <code>{`import random\nimport string\nprint(random.choice(string.ascii_letters))`}</code>
      </pre>
    ),
  },
  {
    question: 'Come generare una lettera casuale in Java?',
    answer: (
      <pre className="bg-gray-100 dark:bg-gray-800 rounded-xl p-4 text-sm overflow-x-auto">
        <code>{`char randomChar = (char) ('a' + new java.util.Random().nextInt(26));`}</code>
      </pre>
    ),
  },
  {
    question: 'Come generare una parola di 5 lettere casuali in Python?',
    answer: (
      <pre className="bg-gray-100 dark:bg-gray-800 rounded-xl p-4 text-sm overflow-x-auto">
        <code>{`import random\nimport string\nprint(''.join(random.choices(string.ascii_lowercase, k=5)))`}</code>
      </pre>
    ),
  },
  {
    question: 'Cos\'è un generatore di lettere casuali?',
    answer: (
      <p className="text-gray-700 dark:text-gray-300">
        Un generatore di lettere casuali è uno strumento online che crea lettere, numeri o simboli casuali per password, giochi, test e altro.
      </p>
    ),
  },
  {
    question: 'Come creare password sicure con lettere casuali?',
    answer: (
      <p className="text-gray-700 dark:text-gray-300">
        Usa il nostro generatore per creare password con lettere maiuscole, minuscole, numeri e simboli. Scegli una lunghezza di almeno 12 caratteri ed evita caratteri simili come \'l\', \'1\', \'O\', \'0\' per una maggiore sicurezza.
      </p>
    ),
  },
  {
    question: 'Posso generare lettere casuali per giochi e attività?',
    answer: (
      <p className="text-gray-700 dark:text-gray-300">
        Sì! Il nostro generatore di lettere casuali è perfetto per creare codici di gioco, giochi di parole, attività educative e stimoli per la scrittura creativa. Puoi personalizzare la lunghezza e i tipi di caratteri in base alle tue esigenze.
      </p>
    ),
  },
  {
    question: 'Come generare dati di test casuali per lo sviluppo?',
    answer: (
      <p className="text-gray-700 dark:text-gray-300">
        Usa il nostro strumento per generare stringhe casuali per testare moduli, database e applicazioni. Puoi creare varie lunghezze e combinazioni di caratteri per testare diversi scenari e casi limite.
      </p>
    ),
  },
  {
    question: 'Questo generatore di lettere casuali è sicuro?',
    answer: (
      <p className="text-gray-700 dark:text-gray-300">
        Sì, il nostro generatore utilizza una generazione di numeri casuali crittograficamente sicura. Tutta la generazione avviene nel tuo browser e nessun dato viene inviato ai nostri server, garantendo la tua privacy e sicurezza.
      </p>
    ),
  },
];

function t(key: string): string {
  return (it as Record<string, string>)[key] || key;
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
        <RandomLetterGenerator currentLanguage="it" />
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
      <Footer currentLanguage="it" />
    </main>
  );
} 