export const metadata = {
    title: 'Privacy Policy | Random Letter Generator',
    description: 'Read our privacy policy to learn how we collect, use, and protect your information on Random Letter Generator.',
    alternates: {
      canonical: "https://random-letter-generator.com/privacy-policy",
    },
  };
  
  export default function PrivacyPolicy() {
    return (
      <main className="max-w-3xl mx-auto py-12 px-4">
        <div className="mb-6">
          <a href="/" className="text-blue-600 hover:underline">&larr; Back to Home</a>
        </div>
        <h1 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">Privacy Policy</h1>
        <p className="mb-4 text-gray-700 dark:text-gray-300">Last updated: June 2025</p>
        <p className="mb-4 text-gray-700 dark:text-gray-300">
          This Privacy Policy describes how Random Letter Generator ("we", "us", or "our") collects, uses, and protects your information when you use our website.
        </p>
        <h2 className="text-xl font-semibold mt-8 mb-2">Information We Collect</h2>
        <ul className="list-disc list-inside mb-4 text-gray-700 dark:text-gray-300">
          <li>We do not collect any personal information from users.</li>
          <li>We may use cookies or similar technologies for analytics and improving user experience.</li>
        </ul>
        <h2 className="text-xl font-semibold mt-8 mb-2">How We Use Information</h2>
        <ul className="list-disc list-inside mb-4 text-gray-700 dark:text-gray-300">
          <li>To provide and maintain our service.</li>
          <li>To analyze usage and improve our website.</li>
          <li>To display relevant ads (if applicable).</li>
        </ul>
        <h2 className="text-xl font-semibold mt-8 mb-2">Third-Party Services</h2>
        <p className="mb-4 text-gray-700 dark:text-gray-300">
          We may use third-party services such as Google Analytics or Google Adsense. These services may collect information in accordance with their own privacy policies.
        </p>
        <h2 className="text-xl font-semibold mt-8 mb-2">Your Rights</h2>
        <p className="mb-4 text-gray-700 dark:text-gray-300">
          You may disable cookies in your browser settings. If you have any questions about this Privacy Policy, please contact us.
        </p>
        <h2 className="text-xl font-semibold mt-8 mb-2">Changes to This Policy</h2>
        <p className="mb-4 text-gray-700 dark:text-gray-300">
          We may update this Privacy Policy from time to time. Any changes will be posted on this page.
        </p>
      </main>
    );
  }
  