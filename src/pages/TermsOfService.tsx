import React, { useEffect } from 'react';
import Container from '../components/ui/Container';

const TermsOfService = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="pt-28 pb-16 min-h-screen bg-gray-50">
      <Container>
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">Terms of Service</h1>
          
          <div className="prose prose-lg max-w-none text-gray-600">
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Acceptance of Terms</h2>
              <p className="mb-4">
                By accessing and using the services provided by Anantix Accounting ("we," "our," or "us"), you agree to comply with and be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Services Description</h2>
              <p className="mb-4">
                Anantix Accounting provides professional accounting, tax preparation, financial planning, and business advisory services. The specific services provided will be outlined in separate engagement letters or agreements.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Client Responsibilities</h2>
              <p className="mb-4">
                Clients are responsible for:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>Providing accurate and complete information</li>
                <li>Meeting agreed-upon deadlines</li>
                <li>Reviewing and approving final documents</li>
                <li>Maintaining necessary records</li>
                <li>Paying agreed-upon fees</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Fees and Payment</h2>
              <p className="mb-4">
                Fees for services will be outlined in separate engagement letters or agreements. Payment terms and conditions will be specified in these documents.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Confidentiality</h2>
              <p className="mb-4">
                We maintain strict confidentiality of all client information in accordance with professional standards and applicable laws.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Limitation of Liability</h2>
              <p className="mb-4">
                Our liability is limited to the fees paid for the services provided. We are not responsible for consequential damages.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Termination</h2>
              <p className="mb-4">
                Either party may terminate services with written notice. Client remains responsible for fees for services provided prior to termination.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Governing Law</h2>
              <p className="mb-4">
                These terms are governed by the laws of the State of New York. Any disputes shall be resolved in the courts of New York.
              </p>
            </section>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default TermsOfService;