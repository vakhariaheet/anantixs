import React, { useState } from 'react';
import Container from '../ui/Container';
import Button from '../ui/Button';
import { Building2, Users2, Laptop, Coffee, Heart, Trophy } from 'lucide-react';
import toast from 'react-hot-toast';

interface BenefitCard {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const Careers = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    position: '',
    experience: '',
    resume: null as File | null,
    coverLetter: ''
  });

  const benefits: BenefitCard[] = [
    {
      icon: <Building2 className="w-6 h-6 text-primary-600" />,
      title: "Modern Office Space",
      description: "Work in our state-of-the-art office with ergonomic workstations and collaborative spaces."
    },
    {
      icon: <Users2 className="w-6 h-6 text-primary-600" />,
      title: "Great Team Culture",
      description: "Join a diverse and inclusive team that values collaboration and mutual growth."
    },
    {
      icon: <Laptop className="w-6 h-6 text-primary-600" />,
      title: "Flexible Work",
      description: "Enjoy hybrid work options and flexible hours to maintain work-life balance."
    },
    {
      icon: <Coffee className="w-6 h-6 text-primary-600" />,
      title: "Learning & Development",
      description: "Access continuous learning opportunities and professional development programs."
    },
    {
      icon: <Heart className="w-6 h-6 text-primary-600" />,
      title: "Health Benefits",
      description: "Comprehensive health insurance and wellness programs for you and your family."
    },
    {
      icon: <Trophy className="w-6 h-6 text-primary-600" />,
      title: "Growth Opportunities",
      description: "Clear career progression paths and opportunities for advancement."
    }
  ];

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData(prev => ({ ...prev, [e.target.name]: e.target.files![0] }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      // Show loading toast
      const loadingToast = toast.loading('Submitting your application...');
      
      // Here you would typically handle the form submission to your backend
      console.log('Application submitted:', formData);
      
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Success toast
      toast.success('Thank you for your application! We will review it and get back to you soon.', {
        duration: 5000,
        id: loadingToast
      });
      
      setFormData({
        name: '',
        email: '',
        phone: '',
        position: '',
        experience: '',
        resume: null,
        coverLetter: ''
      });
    } catch (error) {
      // Error toast
      toast.error('Failed to submit application. Please try again later.', {
        duration: 5000
      });
    }
  };

  return (
    <section className="py-16 md:py-24 bg-white">
      <Container>
        {/* Hero Section */}
        <div className="text-center max-w-3xl mx-auto mb-16" data-aos="fade-up">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Join Our Team
          </h1>
          <p className="text-xl text-gray-600">
            Be part of a dynamic team that's shaping the future of accounting services.
          </p>
        </div>

        {/* Benefits Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Why Work With Us?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="p-6 bg-white rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="bg-primary-50 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {benefit.title}
                </h3>
                <p className="text-gray-600">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Application Form */}
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
            Apply Now
          </h2>
          <form onSubmit={handleSubmit} className="space-y-6 bg-gray-50 p-8 rounded-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
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
              <div>
                <label htmlFor="position" className="block text-gray-700 font-medium mb-2">
                  Position of Interest
                </label>
                <select
                  id="position"
                  name="position"
                  value={formData.position}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                >
                  <option value="">Select a position</option>
                  <option value="accountant">Accountant</option>
                  <option value="tax-specialist">Tax Specialist</option>
                  <option value="financial-analyst">Financial Analyst</option>
                  <option value="bookkeeper">Bookkeeper</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>

            <div>
              <label htmlFor="experience" className="block text-gray-700 font-medium mb-2">
                Years of Experience
              </label>
              <select
                id="experience"
                name="experience"
                value={formData.experience}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
              >
                <option value="">Select experience level</option>
                <option value="0-2">0-2 years</option>
                <option value="3-5">3-5 years</option>
                <option value="5-10">5-10 years</option>
                <option value="10+">10+ years</option>
              </select>
            </div>

            <div>
              <label htmlFor="resume" className="block text-gray-700 font-medium mb-2">
                Resume/CV
              </label>
              <input
                type="file"
                id="resume"
                name="resume"
                onChange={handleFileChange}
                accept=".pdf,.doc,.docx"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
              />
              <p className="text-sm text-gray-500 mt-1">
                Accepted formats: PDF, DOC, DOCX (Max 5MB)
              </p>
            </div>

            <div>
              <label htmlFor="coverLetter" className="block text-gray-700 font-medium mb-2">
                Cover Letter
              </label>
              <textarea
                id="coverLetter"
                name="coverLetter"
                value={formData.coverLetter}
                onChange={handleChange}
                rows={5}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                placeholder="Tell us why you'd be a great fit..."
              ></textarea>
            </div>

            <Button variant="primary" size="lg" className="w-full">
              Submit Application
            </Button>
          </form>
        </div>
      </Container>
    </section>
  );
};

export default Careers; 