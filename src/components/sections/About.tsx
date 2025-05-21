import React from 'react';
import Container from '../ui/Container';
import { CheckCircle } from 'lucide-react';
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
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">CA Ashish Lodha</h3>
                <p className="text-lg text-gray-600 mb-4">
                  A dynamic and results-driven Chartered Accountant with over a decade of experience in Finance, Accounting, and Global Operations. Currently serving as Head of Operations at Prudent ProSource, CA Ashish Lodha brings a strong track record in optimizing workflows, leading high-performing teams, and driving strategic financial initiatives across international markets.
                </p>
              </div>
            </div>
            
            <div className="space-y-4 text-gray-600">
              <p>
                With specialized expertise in onboarding & transition, migrations, controllership, and CFO-level functions, Ashish excels in streamlining finance functions, implementing advanced reporting systems, and enabling data-driven decision-making for business growth. His hands-on leadership style, deep understanding of global accounting standards (US GAAP, IFRS, Indian AS), and proven success in scaling white-label services make him a trusted partner for CPAs, entrepreneurs, and global firms.
              </p>
              <p>
                Ashish is also known for his strong client-centric approach, excellence in managing cross-cultural teams, and ability to deliver measurable business impact through operational innovation and financial foresight.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default About;