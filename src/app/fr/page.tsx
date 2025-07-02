import { Metadata } from 'next';
import fr from '@/i18n/locales/fr.json';
import RandomLetterGenerator from '@/components/RandomLetterGenerator';
import FAQAccordion, { FAQItem } from '@/components/FAQAccordion';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Générateur de lettres aléatoires - Outil en ligne pour lettres aléatoires',
  description: 'Générez instantanément des lettres, chiffres et symboles aléatoires en ligne. Parfait pour les mots de passe, les jeux et plus encore. Prend en charge a-z, longueur personnalisée et options avancées.',
  keywords: ['générateur de lettres aléatoires', 'lettres aléatoires', 'générateur de mots de passe', 'caractères aléatoires'],
  alternates: {
    canonical: 'https://www.random-letter-generator.com/fr',
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
    question: 'Comment générer une lettre aléatoire en Python ?',
    answer: (
      <pre className="bg-gray-100 dark:bg-gray-800 rounded-xl p-4 text-sm overflow-x-auto">
        <code>{`import random\nimport string\nprint(random.choice(string.ascii_letters))`}</code>
      </pre>
    ),
  },
  {
    question: 'Comment générer une lettre aléatoire en Java ?',
    answer: (
      <pre className="bg-gray-100 dark:bg-gray-800 rounded-xl p-4 text-sm overflow-x-auto">
        <code>{`char randomChar = (char) ('a' + new java.util.Random().nextInt(26));`}</code>
      </pre>
    ),
  },
  {
    question: 'Comment générer un mot de 5 lettres aléatoires en Python ?',
    answer: (
      <pre className="bg-gray-100 dark:bg-gray-800 rounded-xl p-4 text-sm overflow-x-auto">
        <code>{`import random\nimport string\nprint(''.join(random.choices(string.ascii_lowercase, k=5)))`}</code>
      </pre>
    ),
  },
  {
    question: "Qu'est-ce qu'un générateur de lettres aléatoires ?",
    answer: (
      <p className="text-gray-700 dark:text-gray-300">
        Un générateur de lettres aléatoires est un outil en ligne qui crée des lettres, chiffres ou symboles aléatoires pour les mots de passe, les jeux, les tests, etc.
      </p>
    ),
  },
  {
    question: 'Comment créer des mots de passe forts avec des lettres aléatoires ?',
    answer: (
      <p className="text-gray-700 dark:text-gray-300">
        Utilisez notre générateur pour créer des mots de passe avec des majuscules, minuscules, chiffres et symboles. Choisissez une longueur d\'au moins 12 caractères et évitez les caractères similaires comme \'l\', \'1\', \'O\', \'0\' pour une meilleure sécurité.
      </p>
    ),
  },
  {
    question: 'Puis-je générer des lettres aléatoires pour les jeux et activités ?',
    answer: (
      <p className="text-gray-700 dark:text-gray-300">
        Oui ! Notre générateur de lettres aléatoires est parfait pour créer des codes de jeu, des jeux de mots, des activités éducatives et des incitations à l\'écriture créative. Vous pouvez personnaliser la longueur et les types de caractères selon vos besoins.
      </p>
    ),
  },
  {
    question: 'Comment générer des données de test aléatoires pour le développement ?',
    answer: (
      <p className="text-gray-700 dark:text-gray-300">
        Utilisez notre outil pour générer des chaînes aléatoires pour tester des formulaires, des bases de données et des applications. Vous pouvez créer diverses longueurs et combinaisons de caractères pour tester différents scénarios et cas limites.
      </p>
    ),
  },
  {
    question: 'Ce générateur de lettres aléatoires est-il sécurisé ?',
    answer: (
      <p className="text-gray-700 dark:text-gray-300">
        Oui, notre générateur utilise une génération de nombres aléatoires cryptographiquement sécurisée. Toute génération se fait dans votre navigateur, et aucune donnée n\'est envoyée à nos serveurs, garantissant votre vie privée et votre sécurité.
      </p>
    ),
  },
];

function t(key: string): string {
  return (fr as Record<string, string>)[key] || key;
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
        <RandomLetterGenerator currentLanguage="fr" />
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
      <Footer currentLanguage="fr" />
    </main>
  );
} 