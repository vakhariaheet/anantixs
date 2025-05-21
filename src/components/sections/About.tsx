import React from 'react';
import Container from '../ui/Container';
import { CheckCircle } from 'lucide-react';

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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
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
            
            <p className="text-lg text-gray-600">
              Partner with us to transform your financial challenges into opportunities for growth and success.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default About;