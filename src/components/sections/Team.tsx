import React from 'react';
import Container from '../ui/Container';
import { Linkedin, Twitter } from 'lucide-react';

interface TeamMember {
  name: string;
  position: string;
  bio: string;
  image: string;
  specializations: string[];
  credentials: string[];
  social: {
    linkedin?: string;
    twitter?: string;
  };
}

const Team = () => {
  const teamMembers: TeamMember[] = [
    {
      name: "Sarah Anderson, CPA",
      position: "Managing Director",
      bio: "With over 15 years of experience in public accounting, Sarah leads our team with expertise in strategic financial planning and tax optimization. Her innovative approach helps clients navigate complex financial landscapes while maximizing growth opportunities.",
      image: "https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg?auto=compress&cs=tinysrgb&w=400",
      specializations: ["Strategic Planning", "Tax Strategy", "Business Advisory"],
      credentials: ["Certified Public Accountant", "MBA in Finance"],
      social: {
        linkedin: "https://linkedin.com",
        twitter: "https://twitter.com"
      }
    },
    {
      name: "Michael Chen, MBA",
      position: "Tax Director",
      bio: "Michael brings a decade of specialized experience in corporate taxation and international tax planning. His detailed understanding of tax legislation helps clients optimize their tax positions while ensuring full compliance.",
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400",
      specializations: ["Corporate Taxation", "International Tax", "Tax Planning"],
      credentials: ["MBA", "Certified Tax Specialist"],
      social: {
        linkedin: "https://linkedin.com"
      }
    },
    {
      name: "Emily Rodriguez, CPA",
      position: "Audit Manager",
      bio: "Emily excels in audit and assurance services with particular expertise in nonprofit and healthcare sectors. Her methodical approach ensures thorough financial oversight while identifying opportunities for operational improvement.",
      image: "https://images.pexels.com/photos/2381068/pexels-photo-2381068.jpeg?auto=compress&cs=tinysrgb&w=400",
      specializations: ["Audit & Assurance", "Nonprofit Accounting", "Healthcare"],
      credentials: ["Certified Public Accountant", "Certified Internal Auditor"],
      social: {
        linkedin: "https://linkedin.com",
        twitter: "https://twitter.com"
      }
    },
    {
      name: "David Thompson",
      position: "Advisory Services Lead",
      bio: "David specializes in business advisory and financial consulting, helping companies optimize their operations and achieve sustainable growth. His strategic insights have helped numerous businesses transform challenges into opportunities.",
      image: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=400",
      specializations: ["Business Advisory", "Financial Consulting", "Risk Management"],
      credentials: ["Certified Financial Analyst", "Business Advisory Specialist"],
      social: {
        linkedin: "https://linkedin.com"
      }
    }
  ];

  return (
    <section id="team" className="py-16 md:py-24 bg-gray-50">
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-12" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Team</h2>
          <p className="text-lg text-gray-600">
            Meet our dedicated team of financial experts committed to your success
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={member.name}
              className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:-translate-y-2"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-1">{member.name}</h3>
                <p className="text-primary-600 font-medium mb-3">{member.position}</p>
                <p className="text-gray-600 text-sm mb-4">{member.bio}</p>
                
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-900 mb-2">Specializations</h4>
                  <div className="flex flex-wrap gap-2">
                    {member.specializations.map((spec) => (
                      <span
                        key={spec}
                        className="text-xs bg-primary-50 text-primary-700 px-2 py-1 rounded-full"
                      >
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-900 mb-2">Credentials</h4>
                  <ul className="text-sm text-gray-600">
                    {member.credentials.map((credential) => (
                      <li key={credential} className="mb-1">• {credential}</li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex space-x-3">
                  {member.social.linkedin && (
                    <a
                      href={member.social.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-primary-600 transition-colors"
                      aria-label={`${member.name}'s LinkedIn profile`}
                    >
                      <Linkedin size={20} />
                    </a>
                  )}
                  {member.social.twitter && (
                    <a
                      href={member.social.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-primary-600 transition-colors"
                      aria-label={`${member.name}'s Twitter profile`}
                    >
                      <Twitter size={20} />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Team;