import Link from 'next/link';

export const metadata = {
  title: 'Terms of Service | Random Letter Generator',
  description: 'Read our terms of service to understand your rights and responsibilities when using Random Letter Generator.',
  alternates: {
    canonical: "https://random-letter-generator.com/terms-of-service",
  },
};

export default function TermsOfService() {
  return (
    <main className="max-w-3xl mx-auto py-12 px-4">
      <div className="mb-6">
        <Link href="/" className="text-blue-600 hover:underline">&larr; Back to Home</Link>
      </div>
      <h1 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">Terms of Service</h1>
      <p className="mb-4 text-gray-700 dark:text-gray-300">Last updated: June 2025</p>
      <h2 className="text-xl font-semibold mt-8 mb-2">1. Acceptance of Terms</h2>
      <p className="mb-4 text-gray-700 dark:text-gray-300">By using Random Letter Generator, you agree to these Terms of Service. If you do not agree, please do not use our website.</p>
      <h2 className="text-xl font-semibold mt-8 mb-2">2. Use of Service</h2>
      <ul className="list-disc list-inside mb-4 text-gray-700 dark:text-gray-300">
        <li>You may use this website for personal or educational purposes only.</li>
        <li>You may not use this website for any unlawful or harmful activities.</li>
        <li>We reserve the right to restrict or terminate access at any time.</li>
      </ul>
      <h2 className="text-xl font-semibold mt-8 mb-2">3. Intellectual Property</h2>
      <p className="mb-4 text-gray-700 dark:text-gray-300">All content on this website is the property of Random Letter Generator or its licensors. You may not copy, reproduce, or distribute any content without permission.</p>
      <h2 className="text-xl font-semibold mt-8 mb-2">4. Disclaimer</h2>
      <p className="mb-4 text-gray-700 dark:text-gray-300">This website is provided "as is" without warranties of any kind. We do not guarantee the accuracy or reliability of the generated content.</p>
      <h2 className="text-xl font-semibold mt-8 mb-2">5. Limitation of Liability</h2>
      <p className="mb-4 text-gray-700 dark:text-gray-300">We are not liable for any damages arising from the use or inability to use this website.</p>
      <h2 className="text-xl font-semibold mt-8 mb-2">6. Changes to Terms</h2>
      <p className="mb-4 text-gray-700 dark:text-gray-300">We may update these Terms of Service at any time. Continued use of the website constitutes acceptance of the new terms.</p>
      <h2 className="text-xl font-semibold mt-8 mb-2">7. Contact</h2>
      <p className="mb-4 text-gray-700 dark:text-gray-300">If you have any questions about these Terms, please contact us. <a href="mailto:support@random-letter-generator.com" className="text-blue-600 hover:underline">support@random-letter-generator.com</a></p>
    </main>
  );
} 