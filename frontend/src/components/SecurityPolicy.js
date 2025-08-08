import React from "react";

const SecurityPolicy = () => {
  return (
    <div className="max-w-3xl mx-auto px-4 py-8 text-left">
      <h1 className="text-2xl font-bold mb-4">Security Policy – Reksai Robotics</h1>

      <p className="mb-4">
        <strong>Effective Date:</strong> 09/08/2025
      </p>

      <p className="mb-4">
        At <strong>Reksai Robotics</strong>, we take the security of your data seriously. While our website is primarily informational and does not host user accounts or transactions, we still implement safeguards to protect your data.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">1. Secure Data Transmission</h2>
      <p className="mb-4">
        Our website uses <strong>HTTPS encryption (SSL)</strong> to protect all information submitted via forms during transmission.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">2. Data Protection</h2>
      <ul className="list-disc list-inside mb-4">
        <li>Contact form data is stored in secure backend systems</li>
        <li>Access to data is limited to authorized staff only</li>
        <li>No sensitive financial or identity information is collected or stored</li>
      </ul>

      <h2 className="text-xl font-semibold mt-6 mb-2">3. No Use of Cookies or Trackers</h2>
      <p className="mb-4">
        We do <strong>not</strong> use cookies, session tracking, or third-party analytics tools.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">4. Incident Response</h2>
      <p className="mb-4">
        While we take all reasonable precautions, no system is immune to risk. In the unlikely event of a data breach, we will act promptly to identify and mitigate the issue and notify affected users as required by law.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">5. Contact</h2>
      <p>
        For any questions or concerns regarding security, you can contact us at:<br />
        📧 <strong>contact@reksai-robotics.com</strong>
      </p>
    </div>
  );
};

export default SecurityPolicy;

