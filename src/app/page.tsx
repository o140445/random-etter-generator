import RandomLetterGenerator from '@/components/RandomLetterGenerator';
import FAQAccordion, { FAQItem } from '@/components/FAQAccordion';
import Footer from '@/components/Footer';

const faqItems: FAQItem[] = [
  {
    question: 'How to generate a random letter in Python?',
    answer: (
      <pre className="bg-gray-100 dark:bg-gray-800 rounded-xl p-4 text-sm overflow-x-auto">
        <code>{`import random\nimport string\nprint(random.choice(string.ascii_letters))`}</code>
      </pre>
    ),
  },
  {
    question: 'How to generate a random letter in Java?',
    answer: (
      <pre className="bg-gray-100 dark:bg-gray-800 rounded-xl p-4 text-sm overflow-x-auto">
        <code>{`char randomChar = (char) ('a' + new java.util.Random().nextInt(26));`}</code>
      </pre>
    ),
  },
  {
    question: 'How to generate a random 5 letter word in Python?',
    answer: (
      <pre className="bg-gray-100 dark:bg-gray-800 rounded-xl p-4 text-sm overflow-x-auto">
        <code>{`import random\nimport string\nprint(''.join(random.choices(string.ascii_lowercase, k=5)))`}</code>
      </pre>
    ),
  },
  {
    question: 'What is a random letter generator?',
    answer: (
      <p className="text-gray-700 dark:text-gray-300">
        A random letter generator is an online tool that creates random letters, numbers, or symbols for use in passwords, games, testing, and more.
      </p>
    ),
  },
  {
    question: 'How to create strong passwords with random letters?',
    answer: (
      <p className="text-gray-700 dark:text-gray-300">
        Use our generator to create passwords with uppercase letters, lowercase letters, numbers, and symbols. Choose a length of at least 12 characters and avoid similar characters like 'l', '1', 'O', '0' for better security.
      </p>
    ),
  },
  {
    question: 'Can I generate random letters for games and activities?',
    answer: (
      <p className="text-gray-700 dark:text-gray-300">
        Yes! Our random letter generator is perfect for creating game codes, word games, educational activities, and creative writing prompts. You can customize the length and character types to suit your needs.
      </p>
    ),
  },
  {
    question: 'How to generate random test data for development?',
    answer: (
      <p className="text-gray-700 dark:text-gray-300">
        Use our tool to generate random strings for testing forms, databases, and applications. You can create various lengths and character combinations to test different scenarios and edge cases.
      </p>
    ),
  },
  {
    question: 'Is this random letter generator secure?',
    answer: (
      <p className="text-gray-700 dark:text-gray-300">
        Yes, our generator uses cryptographically secure random number generation. All generation happens in your browser, and no data is sent to our servers, ensuring your privacy and security.
      </p>
    ),
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-8">
      <div className="max-w-4xl mx-auto md:px-4 px-2">
        <h1 className="text-4xl font-bold text-center mb-4 text-gray-900 dark:text-white">
          Random Letter Generator
        </h1>
        <p className="text-center text-lg text-gray-600 dark:text-gray-300 mb-8 px-4">
          Instantly generate random letters, numbers, and symbols online. Perfect for passwords, games, and more. Supports a-z, custom length, and advanced options.
        </p>
        <RandomLetterGenerator currentLanguage="en" />

        <section className="mt-6 p-6">
          <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">How to Use the Random Letter Generator</h2>
          <ol className="list-decimal list-inside text-gray-700 dark:text-gray-300 space-y-2">
            <li>Choose the length and character types (uppercase, lowercase, numbers, symbols).</li>
            <li dangerouslySetInnerHTML={{__html: "Click <b>Generate New</b> to get a random string."}} />
            <li>Copy the result for use in passwords, games, or testing.</li>
          </ol>
        </section>

        <section className="mt-6 p-6">
          <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">Features</h2>
          <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
            <li>Supports random letter generation A-Z</li>
            <li>Random letter and number generator</li>
            <li>Customizable length (1-100)</li>
            <li>Exclude similar or ambiguous characters</li>
            <li>Mobile-friendly and fast</li>
          </ul>
        </section>

        <section className="mt-6 p-6">
          <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">FAQ</h2>
          <FAQAccordion items={faqItems} />
        </section>
      </div>
      <Footer currentLanguage="en" />
    </main>
  );
}
