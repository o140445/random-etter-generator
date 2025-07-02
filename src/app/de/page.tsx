import { Metadata } from 'next';
import de from '@/i18n/locales/de.json';
import RandomLetterGenerator from '@/components/RandomLetterGenerator';
import FAQAccordion, { FAQItem } from '@/components/FAQAccordion';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Zufallsbuchstaben-Generator - Online-Tool für zufällige Buchstaben',
  description: 'Generieren Sie sofort zufällige Buchstaben, Zahlen und Symbole online. Perfekt für Passwörter, Spiele und mehr. Unterstützt a-z, benutzerdefinierte Länge und erweiterte Optionen.',
  keywords: ['zufälliger buchstaben generator', 'zufällige buchstaben', 'passwort generator', 'zufällige zeichen'],
  alternates: {
    canonical: 'https://www.random-letter-generator.com/de',
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
    question: 'Wie generiere ich einen zufälligen Buchstaben in Python?',
    answer: (
      <pre className="bg-gray-100 dark:bg-gray-800 rounded-xl p-4 text-sm overflow-x-auto">
        <code>{`import random\nimport string\nprint(random.choice(string.ascii_letters))`}</code>
      </pre>
    ),
  },
  {
    question: 'Wie generiere ich einen zufälligen Buchstaben in Java?',
    answer: (
      <pre className="bg-gray-100 dark:bg-gray-800 rounded-xl p-4 text-sm overflow-x-auto">
        <code>{`char randomChar = (char) ('a' + new java.util.Random().nextInt(26));`}</code>
      </pre>
    ),
  },
  {
    question: 'Wie generiere ich ein zufälliges 5-Buchstaben-Wort in Python?',
    answer: (
      <pre className="bg-gray-100 dark:bg-gray-800 rounded-xl p-4 text-sm overflow-x-auto">
        <code>{`import random\nimport string\nprint(''.join(random.choices(string.ascii_lowercase, k=5)))`}</code>
      </pre>
    ),
  },
  {
    question: 'Was ist ein Zufallsbuchstaben-Generator?',
    answer: (
      <p className="text-gray-700 dark:text-gray-300">
        Ein Zufallsbuchstaben-Generator ist ein Online-Tool, das zufällige Buchstaben, Zahlen oder Symbole für die Verwendung in Passwörtern, Spielen, Tests und mehr erstellt.
      </p>
    ),
  },
  {
    question: 'Wie erstelle ich sichere Passwörter mit zufälligen Buchstaben?',
    answer: (
      <p className="text-gray-700 dark:text-gray-300">
        Verwenden Sie unseren Generator, um Passwörter mit Großbuchstaben, Kleinbuchstaben, Zahlen und Symbolen zu erstellen. Wählen Sie eine Länge von mindestens 12 Zeichen und vermeiden Sie ähnliche Zeichen wie 'l', '1', 'O', '0' für bessere Sicherheit.
      </p>
    ),
  },
  {
    question: 'Kann ich zufällige Buchstaben für Spiele und Aktivitäten generieren?',
    answer: (
      <p className="text-gray-700 dark:text-gray-300">
        Ja! Unser Zufallsbuchstaben-Generator ist perfekt für die Erstellung von Spielcodes, Wortspielen, Bildungsaktivitäten und kreative Schreibanregungen. Sie können die Länge und Zeichentypen an Ihre Bedürfnisse anpassen.
      </p>
    ),
  },
  {
    question: 'Wie generiere ich zufällige Testdaten für die Entwicklung?',
    answer: (
      <p className="text-gray-700 dark:text-gray-300">
        Verwenden Sie unser Tool, um zufällige Zeichenketten für das Testen von Formularen, Datenbanken und Anwendungen zu generieren. Sie können verschiedene Längen und Zeichenkombinationen erstellen, um verschiedene Szenarien und Edge Cases zu testen.
      </p>
    ),
  },
  {
    question: 'Ist dieser Zufallsbuchstaben-Generator sicher?',
    answer: (
      <p className="text-gray-700 dark:text-gray-300">
        Ja, unser Generator verwendet kryptographisch sichere Zufallszahlengenerierung. Alle Generierungen erfolgen in Ihrem Browser, und keine Daten werden an unsere Server gesendet, was Ihre Privatsphäre und Sicherheit gewährleistet.
      </p>
    ),
  },
];

function t(key: string): string {
  return (de as Record<string, string>)[key] || key;
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
        <RandomLetterGenerator currentLanguage="de" />
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
      <Footer currentLanguage="de" />
    </main>
  );
} 