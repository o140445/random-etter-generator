import { Metadata } from 'next';
import es from '@/i18n/locales/es.json';
import RandomLetterGenerator from '@/components/RandomLetterGenerator';
import FAQAccordion, { FAQItem } from '@/components/FAQAccordion';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Generador de letras aleatorias - Herramienta en línea para letras aleatorias',
  description: 'Genera instantáneamente letras, números y símbolos aleatorios en línea. Perfecto para contraseñas, juegos y más. Soporta a-z, longitud personalizada y opciones avanzadas.',
  keywords: ['generador de letras aleatorias', 'letras aleatorias', 'generador de contraseñas', 'caracteres aleatorios'],
  alternates: {
    canonical: 'https://www.random-letter-generator.com/es',
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
    question: '¿Cómo generar una letra aleatoria en Python?',
    answer: (
      <pre className="bg-gray-100 dark:bg-gray-800 rounded-xl p-4 text-sm overflow-x-auto">
        <code>{`import random\nimport string\nprint(random.choice(string.ascii_letters))`}</code>
      </pre>
    ),
  },
  {
    question: '¿Cómo generar una letra aleatoria en Java?',
    answer: (
      <pre className="bg-gray-100 dark:bg-gray-800 rounded-xl p-4 text-sm overflow-x-auto">
        <code>{`char randomChar = (char) ('a' + new java.util.Random().nextInt(26));`}</code>
      </pre>
    ),
  },
  {
    question: '¿Cómo generar una palabra de 5 letras aleatorias en Python?',
    answer: (
      <pre className="bg-gray-100 dark:bg-gray-800 rounded-xl p-4 text-sm overflow-x-auto">
        <code>{`import random\nimport string\nprint(''.join(random.choices(string.ascii_lowercase, k=5)))`}</code>
      </pre>
    ),
  },
  {
    question: '¿Qué es un generador de letras aleatorias?',
    answer: (
      <p className="text-gray-700 dark:text-gray-300">
        Un generador de letras aleatorias es una herramienta en línea que crea letras, números o símbolos aleatorios para contraseñas, juegos, pruebas y más.
      </p>
    ),
  },
  {
    question: '¿Cómo crear contraseñas seguras con letras aleatorias?',
    answer: (
      <p className="text-gray-700 dark:text-gray-300">
        Usa nuestro generador para crear contraseñas con letras mayúsculas, minúsculas, números y símbolos. Elige una longitud de al menos 12 caracteres y evita caracteres similares como \'l\', \'1\', \'O\', \'0\' para mayor seguridad.
      </p>
    ),
  },
  {
    question: '¿Puedo generar letras aleatorias para juegos y actividades?',
    answer: (
      <p className="text-gray-700 dark:text-gray-300">
        ¡Sí! Nuestro generador de letras aleatorias es perfecto para crear códigos de juego, juegos de palabras, actividades educativas y estímulos para la escritura creativa. Puedes personalizar la longitud y tipos de caracteres según tus necesidades.
      </p>
    ),
  },
  {
    question: '¿Cómo generar datos de prueba aleatorios para desarrollo?',
    answer: (
      <p className="text-gray-700 dark:text-gray-300">
        Usa nuestra herramienta para generar cadenas aleatorias para probar formularios, bases de datos y aplicaciones. Puedes crear varias longitudes y combinaciones de caracteres para probar diferentes escenarios y casos límite.
      </p>
    ),
  },
  {
    question: '¿Es seguro este generador de letras aleatorias?',
    answer: (
      <p className="text-gray-700 dark:text-gray-300">
        Sí, nuestro generador utiliza generación de números aleatorios criptográficamente segura. Toda la generación ocurre en tu navegador y ningún dato se envía a nuestros servidores, garantizando tu privacidad y seguridad.
      </p>
    ),
  },
];

function t(key: string): string {
  return (es as Record<string, string>)[key] || key;
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
        <RandomLetterGenerator currentLanguage="es" />
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
      <Footer currentLanguage="es" />
    </main>
  );
} 