import React from 'react';
import Container from '../ui/Container';
import { CheckCircle, Linkedin } from 'lucide-react';
import AshishPhoto from '../../assets/ashish.jpeg';

const About = () => {
  const values = [
    "Professional excellence in all we do",
    "Integrity and transparency in our work",
    "Client-focused approach to service",
    "Innovative solutions for complex problems"
  ];

  return (
    <section id="about-us" className="py-16 md:py-24 bg-gray-50">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div 
            className="order-2 lg:order-1"
            data-aos="fade-right"
            data-aos-duration="800"
          >
            <img 
              src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
              alt="Team of accounting professionals" 
              className="rounded-lg shadow-xl w-full h-auto"
            />
          </div>
          
          <div 
            className="order-1 lg:order-2"
            data-aos="fade-left"
            data-aos-duration="800"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">About Us</h2>
            <p className="text-lg text-gray-600 mb-6">
              At Anantix Accounting, we combine precision with possibility, offering expert financial guidance to help businesses and individuals achieve their goals. With years of experience and a dedicated team of professionals, we deliver accounting solutions that drive success.
            </p>
            
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Our Values</h3>
            <ul className="space-y-3 mb-8">
              {values.map((value, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle className="text-primary-600 mr-2 mt-1 flex-shrink-0" size={20} />
                  <span className="text-gray-700">{value}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-8 lg:p-12">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">About the Founder</h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center mb-8">
              <div className="lg:col-span-1">
                <img 
                  src={AshishPhoto} 
                  alt="CA Ashish Lodha" 
                  className="rounded-lg shadow-md w-full"
                />
              </div>
              <div className="lg:col-span-2">
                <div className="flex items-center gap-4 mb-4">
                  <h3 className="text-2xl font-semibold text-gray-900">CA Ashish Lodha</h3>
                  <a 
                    href="https://www.linkedin.com/in/ca-ashish-lodha-937b4a86/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 transition-colors"
                  >
                    <Linkedin size={24} />
                  </a>
                </div>
                <p className="text-lg text-gray-600 mb-4">
                CA Ashish Lodha is a distinguished Chartered Accountant (equivalent to CPA) and a recognized authority in the global outsourcing industry, with over a decade of expertise spanning Finance, Accounting, and International Business Operations. With a proven record of optimizing complex workflows and leading high-performing, cross-functional teams, Ashish has been instrumental in driving transformation for businesses across the USA, UK, Canada, and Australia.
                </p>
              </div>
            </div>
            
            <div className="space-y-4 text-gray-600">
              <p>
              Renowned for his mastery in client onboarding and transitions, controllership services, and CFO-level advisory, Ashish blends deep technical knowledge with strategic foresight. His command over a wide spectrum of accounting platforms — including QuickBooks (Online & Desktop), Xero, NetSuite, Sage, Zoho Books, and various payroll, project management, and reporting tools — positions him as a go-to expert for CPA firms and growth-focused entrepreneurs.
              </p>
              <p>
              Ashish’s leadership is marked by a hands-on, client-first approach and a sharp ability to tailor scalable financial systems that align with business goals. His fluency in US GAAP, IFRS, and Indian Accounting Standards enables seamless global compliance and advisory support, making him a sought-after partner for white-label finance solutions and offshore accounting excellence.
              </p>
              <p>
              A visionary in outsourced finance transformation, Ashish continues to champion innovation, efficiency, and long-term client success across the global accounting landscape.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default About;