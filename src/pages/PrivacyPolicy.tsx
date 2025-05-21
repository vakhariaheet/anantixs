import React, { useEffect } from 'react';
import Container from '../components/ui/Container';

const PrivacyPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="pt-28 pb-16 min-h-screen bg-gray-50">
      <Container>
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">Privacy Policy</h1>
          
          <div className="prose prose-lg max-w-none text-gray-600">
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Information We Collect</h2>
              <p className="mb-4">
                We collect information that you provide directly to us, including:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>Personal identification information</li>
                <li>Financial information</li>
                <li>Business information</li>
                <li>Communication records</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. How We Use Your Information</h2>
              <p className="mb-4">
                We use the collected information to:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>Provide our professional services</li>
                <li>Communicate with you</li>
                <li>Comply with legal obligations</li>
                <li>Improve our services</li>
                <li>Process payments</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Information Sharing</h2>
              <p className="mb-4">
                We do not sell or rent your personal information. We may share your information with:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>Service providers who assist in our operations</li>
                <li>Legal and regulatory authorities when required</li>
                <li>Professional advisors and consultants</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Data Security</h2>
              <p className="mb-4">
                We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Your Rights</h2>
              <p className="mb-4">
                You have the right to:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>Access your personal information</li>
                <li>Correct inaccurate information</li>
                <li>Request deletion of your information</li>
                <li>Object to processing of your information</li>
                <li>Receive a copy of your information</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Cookies and Tracking</h2>
              <p className="mb-4">
                Our website uses cookies and similar tracking technologies to improve user experience and analyze website traffic.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Changes to Privacy Policy</h2>
              <p className="mb-4">
                We may update this privacy policy from time to time. We will notify you of any changes by posting the new policy on this page.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Contact Us</h2>
              <p className="mb-4">
                If you have questions about this privacy policy, please contact us at:
              </p>
              <address className="not-italic">
                <p>Anantix Accounting</p>
                <p>123 Financial Street</p>
                <p>New York, NY 10001</p>
                <p>Email: privacy@anantixaccounting.com</p>
              </address>
            </section>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default PrivacyPolicy;