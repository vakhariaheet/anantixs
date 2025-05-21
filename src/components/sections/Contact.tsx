import React, { useState } from 'react';
import Container from '../ui/Container';
import Button from '../ui/Button';
import { Mail, Phone, MapPin } from 'lucide-react';

interface ContactInfo {
  icon: React.ReactNode;
  title: string;
  details: string;
}

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would handle form submission here
    console.log('Form data submitted:', formData);
    alert('Thanks for contacting us! We will get back to you soon.');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const contactInfo: ContactInfo[] = [
    {
      icon: <Mail className="text-primary-600" size={24} />,
      title: "Email Us",
      details: "info@anantixaccounting.com"
    },
    {
      icon: <Phone className="text-primary-600" size={24} />,
      title: "Call Us",
      details: "+1 551 4304 455"
    },
    {
      icon: <MapPin className="text-primary-600" size={24} />,
      title: "Visit Us",
      details: "100 Business Park Ln, Milton, DE 19968, US"
    }
  ];

  return (
    <section id="contact" className="py-16 md:py-24 bg-white">
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-12" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Contact Us</h2>
          <p className="text-lg text-gray-600">
            Have questions or ready to get started? Reach out to our team today.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div data-aos="fade-right" data-aos-duration="800">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">Get in Touch</h3>
            
            <div className="space-y-6 mb-8">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-start">
                  <div className="bg-primary-100 p-3 rounded-lg mr-4">
                    {info.icon}
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-gray-900">{info.title}</h4>
                    <p className="text-gray-600">{info.details}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-8">
              <h4 className="text-lg font-medium text-gray-900 mb-4">Business Hours</h4>
              <table className="w-full text-gray-600">
                <tbody>
                  <tr>
                    <td className="py-2">Monday - Friday:</td>
                    <td className="py-2">9:00 AM - 5:00 PM</td>
                  </tr>
                  <tr>
                    <td className="py-2">Saturday:</td>
                    <td className="py-2">10:00 AM - 2:00 PM</td>
                  </tr>
                  <tr>
                    <td className="py-2">Sunday:</td>
                    <td className="py-2">Closed</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          
          <div data-aos="fade-left" data-aos-duration="800">
            <form onSubmit={handleSubmit} className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  />
                </div>
              </div>
              
              <div className="mb-4">
                <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                  How can we help?
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                ></textarea>
              </div>
              
              <Button variant="primary" size="lg" className="w-full">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Contact;