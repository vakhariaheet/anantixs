import React from 'react';
import Container from '../ui/Container';
import { Calculator, TrendingUp, FileBarChart, BarChartBig } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  features: string[];
  delay: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon, features, delay }) => {
  return (
    <div 
      className="group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden"
      data-aos="fade-up"
      data-aos-delay={delay}
    >
      <div className="p-8">
        <div className="w-14 h-14 bg-primary-100 rounded-2xl flex items-center justify-center mb-6 text-primary-600 group-hover:bg-primary-600 group-hover:text-white transition-all duration-300">
          {icon}
        </div>
        <h3 className="text-2xl font-bold mb-4 text-gray-900">{title}</h3>
        <p className="text-gray-600 mb-6 leading-relaxed">{description}</p>
        <ul className="space-y-3">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center text-gray-700">
              <span className="w-2 h-2 bg-primary-500 rounded-full mr-3" />
              {feature}
            </li>
          ))}
        </ul>
      </div>
      
    </div>
  );
};

const Services = () => {
  const services = [
    {
      title: "Tax Preparation",
      description: "Comprehensive tax preparation services ensuring maximum deductions while maintaining full compliance with current regulations.",
      icon: <Calculator size={28} />,
      features: [
        "Personal & Business Tax Returns",
        "Tax Planning Strategies",
        "Deduction Optimization",
        "Audit Support"
      ],
      delay: 100
    },
    {
      title: "Financial Planning",
      description: "Strategic financial planning to help you achieve your short and long-term goals through informed decision-making.",
      icon: <TrendingUp size={28} />,
      features: [
        "Investment Strategies",
        "Retirement Planning",
        "Risk Management",
        "Estate Planning"
      ],
      delay: 200
    },
    {
      title: "Bookkeeping",
      description: "Accurate and timely bookkeeping services to keep your financial records organized and up-to-date.",
      icon: <FileBarChart size={28} />,
      features: [
        "Monthly Reconciliation",
        "Financial Statements",
        "Payroll Processing",
        "Accounts Management"
      ],
      delay: 300
    },
    {
      title: "Business Advisory",
      description: "Expert business advisory services to help you optimize operations, improve profitability, and achieve sustainable growth.",
      icon: <BarChartBig size={28} />,
      features: [
        "Growth Strategies",
        "Cash Flow Management",
        "Business Valuation",
        "Merger & Acquisition"
      ],
      delay: 400
    }
  ];

  return (
    <section id="services" className="py-20 md:py-32 bg-gray-50">
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-16" data-aos="fade-up">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Our Services</h2>
          <p className="text-xl text-gray-600">
            Comprehensive financial solutions tailored to help your business thrive in today's dynamic market
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
              features={service.features}
              delay={service.delay}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Services;