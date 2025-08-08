import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12 text-secondary-900">
      <h1 className="text-3xl font-bold mb-4">Privacy Policy – Reksai Robotics</h1>

      <p className="mb-4"><strong>Effective Date:</strong> 08/08/2025</p>

      <p className="mb-4">
        At <strong>Reksai Robotics</strong>, we are committed to protecting your privacy. This policy
        explains how we handle the personal information you provide when using our website:{' '}
        <strong>www.reksai-robotics.com</strong>.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">1. Information We Collect</h2>
      <p className="mb-2">When you fill out our <strong>contact form</strong>, we collect the following personal data:</p>
      <ul className="list-disc list-inside mb-4">
        <li>Name</li>
        <li>Email address</li>
        <li>Company Name</li>
        <li>Type of industry</li>
      </ul>
      <p className="mb-4">
        We do <strong>not</strong> collect personal data through cookies, analytics, user accounts, or third-party login services.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">2. How We Use Your Information</h2>
      <p className="mb-2">
        The information you provide is used <strong>solely for communication purposes</strong>, such as:
      </p>
      <ul className="list-disc list-inside mb-4">
        <li>Responding to your inquiries</li>
        <li>Understanding your needs related to our products</li>
      </ul>
      <p className="mb-4">
        We do <strong>not</strong> use your information for marketing, advertising, or tracking purposes. We also do <strong>not</strong> share, sell, or rent your personal information to third parties.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">3. Data Storage</h2>
      <p className="mb-4">
        Your form submissions may be stored securely in our backend systems. Access to this data is restricted to authorized personnel only.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">4. Legal Compliance</h2>
      <p className="mb-2">
        As we operate globally, we aim to comply with relevant data protection laws, including:
      </p>
      <ul className="list-disc list-inside mb-4">
        <li><strong>GDPR</strong> (General Data Protection Regulation – Europe)</li>
        <li><strong>India’s DPDP Act</strong></li>
        <li><strong>Japan’s APPI</strong> (Act on the Protection of Personal Information)</li>
      </ul>
      <p className="mb-2">If you are located in any of these regions, you may have the right to:</p>
      <ul className="list-disc list-inside mb-4">
        <li>Request access to your personal data</li>
        <li>Request correction or deletion of your data</li>
        <li>Object to certain uses of your data</li>
      </ul>
      <p className="mb-4">You can exercise these rights by contacting us.</p>

      <h2 className="text-xl font-semibold mt-8 mb-2">5. Contact Us</h2>
      <p>
        For any privacy-related inquiries, you can reach us at:<br />
        📧 <strong>contact@reksai-robotics.com</strong>
      </p>
    </div>
  );
};

export default PrivacyPolicy;

