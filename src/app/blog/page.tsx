import Link from 'next/link';

export const metadata = {
  title: 'Blog | Random Letter Generator',
  description: 'Read articles about random letter generation, password security, and more. Stay updated with our latest blog posts.',
  alternates: {
    canonical: "https://www.random-letter-generator.com/blog",
  },
};

export default function BlogHome() {
  return (
    <main className="max-w-3xl mx-auto py-12 px-4">
      <div className="mb-6">
        <Link href="/" className="text-blue-600 hover:underline">&larr; Back to Home</Link>
      </div>
      <h1 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">Blog</h1>
      <p className="mb-8 text-gray-700 dark:text-gray-300">Latest articles about random letter generation, password security, and online tools.</p>
      <ul className="space-y-6">
        <li>
          <Link href="/blog/why-use-a-random-letter-generator" className="text-xl font-semibold text-blue-600 hover:underline">Why Use a Random Letter Generator?</Link>
          <p className="text-gray-600 dark:text-gray-400">Discover the benefits and use cases of random letter generators for passwords, games, and more.</p>
        </li>
        <li>
          <Link href="/blog/how-to-generate-random-letters-in-python" className="text-xl font-semibold text-blue-600 hover:underline">How to Generate Random Letters in Python</Link>
          <p className="text-gray-600 dark:text-gray-400">A step-by-step guide with code examples for generating random letters in Python.</p>
        </li>
        <li>
          <Link href="/blog/random-letters-vs-random-words" className="text-xl font-semibold text-blue-600 hover:underline">Random Letters vs. Random Words: Which to Use?</Link>
          <p className="text-gray-600 dark:text-gray-400">Learn the difference between random letters and random words, and when to use each.</p>
        </li>
      </ul>
    </main>
  );
} 