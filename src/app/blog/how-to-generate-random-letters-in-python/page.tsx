export const metadata = {
  title: 'How to Generate Random Letters in Python | Blog | Random Letter Generator',
  description: 'A step-by-step guide with code examples for generating random letters in Python.'
};

export default function HowToGenerateRandomLettersInPython() {
  return (
    <main className="max-w-3xl mx-auto py-12 px-4">
      <div className="mb-6">
        <a href="/blog" className="text-blue-600 hover:underline">&larr; Back to Blog</a>
      </div>
      <h1 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">How to Generate Random Letters in Python</h1>
      <p className="mb-4 text-gray-700 dark:text-gray-300">
        Python makes it easy to generate random letters for passwords, games, or data testing. Here's a quick guide using the built-in <code>random</code> and <code>string</code> modules.
      </p>
      <h2 className="text-xl font-semibold mt-8 mb-2">1. Generate a Single Random Letter</h2>
      <pre className="bg-gray-100 dark:bg-gray-800 rounded p-2 text-sm overflow-x-auto mb-4"><code>import random
import string
print(random.choice(string.ascii_letters))  # a-z, A-Z</code></pre>
      <h2 className="text-xl font-semibold mt-8 mb-2">2. Generate a Random Lowercase Letter</h2>
      <pre className="bg-gray-100 dark:bg-gray-800 rounded p-2 text-sm overflow-x-auto mb-4"><code>print(random.choice(string.ascii_lowercase))  # a-z</code></pre>
      <h2 className="text-xl font-semibold mt-8 mb-2">3. Generate a Random Uppercase Letter</h2>
      <pre className="bg-gray-100 dark:bg-gray-800 rounded p-2 text-sm overflow-x-auto mb-4"><code>print(random.choice(string.ascii_uppercase))  # A-Z</code></pre>
      <h2 className="text-xl font-semibold mt-8 mb-2">4. Generate a Random String of Letters</h2>
      <pre className="bg-gray-100 dark:bg-gray-800 rounded p-2 text-sm overflow-x-auto mb-4"><code>print(''.join(random.choices(string.ascii_letters, k=8)))  # 8 random letters</code></pre>
      <h2 className="text-xl font-semibold mt-8 mb-2">5. Use Cases</h2>
      <ul className="list-disc list-inside mb-4 text-gray-700 dark:text-gray-300">
        <li>Password generation</li>
        <li>Random data for testing</li>
        <li>Games and classroom activities</li>
      </ul>
      <h2 className="text-xl font-semibold mt-8 mb-2">Conclusion</h2>
      <p className="mb-4 text-gray-700 dark:text-gray-300">
        With just a few lines of code, you can generate random letters in Python for any purpose. Try it out, or use our <a href="/" className="text-blue-600 hover:underline">online random letter generator</a> for instant results!
      </p>
    </main>
  );
} 