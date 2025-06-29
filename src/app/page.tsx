import Link from 'next/link';
import RandomLetterGenerator from '@/components/RandomLetterGenerator';

export const metadata = {
  alternates: {
    canonical: "https://www.random-letter-generator.com/",
  },
};

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-8">
      <div className="max-w-4xl mx-auto md:px-4 px-2">
        <h1 className="text-4xl font-bold text-center mb-4 text-gray-900 dark:text-white">
          Random Letter Generator
        </h1>
        <p className="text-center text-lg text-gray-600 dark:text-gray-300 mb-8">
          Instantly generate random letters, numbers, and symbols online. Perfect for passwords, games, and more. Supports A-Z, custom length, and advanced options.
        </p>
        <RandomLetterGenerator />

        <section className="mt-6 p-6">
          <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">How to Use the Random Letter Generator</h2>
          <ol className="list-decimal list-inside text-gray-700 dark:text-gray-300 space-y-2">
            <li>Choose the length and character types (uppercase, lowercase, numbers, symbols).</li>
            <li>Click <b>Generate New</b> to get a random string.</li>
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
          <div className="space-y-8">
            <div>
              <h3 className="font-bold text-lg mb-2">How to generate a random letter in Python?</h3>
              <pre className="bg-gray-100 dark:bg-gray-800 rounded-xl p-4 text-sm overflow-x-auto">
                <code>
{`import random
import string
print(random.choice(string.ascii_letters))`}
                </code>
              </pre>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-2">How to generate a random letter in Java?</h3>
              <pre className="bg-gray-100 dark:bg-gray-800 rounded-xl p-4 text-sm overflow-x-auto">
                <code>
{`char randomChar = (char) ('a' + new java.util.Random().nextInt(26));`}
                </code>
              </pre>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-2">How to generate a random 5 letter word in Python?</h3>
              <pre className="bg-gray-100 dark:bg-gray-800 rounded-xl p-4 text-sm overflow-x-auto">
                <code>
{`import random
import string
print(''.join(random.choices(string.ascii_lowercase, k=5)))`}
                </code>
              </pre>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-2">What is a random letter generator?</h3>
              <p className="text-gray-700 dark:text-gray-300">
                A random letter generator is an online tool that creates random letters, numbers, or symbols for use in passwords, games, testing, and more.
              </p>
            </div>
          </div>
        </section>
      </div>
      <footer className="text-center py-6 text-sm text-gray-500 bg-gray-100 w-full h-16">
        <div className="flex  justify-center items-center gap-2">
          <Link href="/blog" className="mx-2 hover:underline">Blog</Link>
          <span className="hidden sm:inline">|</span>
          <Link href="/privacy-policy" className="mx-2 hover:underline">Privacy Policy</Link>
          <span className="hidden sm:inline">|</span>
          <Link href="/terms-of-service" className="mx-2 hover:underline">Terms of Service</Link>
        </div>
      </footer>
    </main>
  );
}
