import React from 'react';
import Container from '../ui/Container';
import { Users, BarChart, Calculator, FileText } from 'lucide-react';
import Sarah from '../../assets/sarah.jpg';
import Emily from '../../assets/Emily.jpg';
import Lisa from '../../assets/lisa.jpg';
import Robert from '../../assets/robert.jpg';
import Michael from '../../assets/michael.jpg';
import David from '../../assets/david.jpg';
import James from '../../assets/james.jpg';
interface Division {
  name: string;
  description: string;
  icon: React.ReactNode;
  team: TeamMember[];
}

interface TeamMember {
  name: string;
  position: string;
  image: string;
  specializations: string[];
}

const Team = () => {
  const divisions: Division[] = [
    {
      name: "Controller Division",
      description: "Overseeing financial operations and ensuring regulatory compliance across all business activities.",
      icon: <Users size={24} className="text-primary-600" />,
      team: [
        {
          name: "Jennifer Martinez",
          position: "Head Controller",
          image: "https://img.freepik.com/free-photo/young-businesswoman-holding-digital-tablet-mobile-phone_329181-11723.jpg?semt=ais_hybrid&w=400",
          specializations: ["Financial Control", "Risk Management", "Compliance"]
        },
        {
          name: "Robert Chen",
          position: "Assistant Controller",
          image: Robert,
          specializations: ["Internal Controls", "Financial Reporting", "Audit"]
        }
      ]
    },
    {
      name: "CFO Division",
      description: "Strategic financial planning and analysis to drive business growth and optimization.",
      icon: <BarChart size={24} className="text-primary-600" />,
      team: [
        {
          name: "Sarah Anderson",
          position: "Chief Financial Officer",
          image: Sarah,
          specializations: ["Strategic Planning", "Financial Strategy", "Risk Management"]
        },
        {
          name: "Michael Thompson",
          position: "Financial Analyst",
          image: Michael,
          specializations: ["Financial Analysis", "Forecasting", "Budgeting"]
        }
      ]
    },
    {
      name: "Accounting Division",
      description: "Maintaining accurate financial records and providing comprehensive accounting services.",
      icon: <Calculator size={24} className="text-primary-600" />,
      team: [
        {
          name: "Emily Rodriguez",
          position: "Senior Accountant",
          image: Emily,
          specializations: ["Bookkeeping", "Financial Statements", "Reconciliation"]
        },
        {
          name: "David Lee",
          position: "Staff Accountant",
          image: David,
          specializations: ["Accounts Payable", "Accounts Receivable", "Payroll"]
        }
      ]
    },
    {
      name: "Tax Division",
      description: "Expert tax planning and compliance services for businesses and individuals.",
      icon: <FileText size={24} className="text-primary-600" />,
      team: [
        {
          name: "James Wilson",
          position: "Tax Director",
          image: James,
          specializations: ["Tax Planning", "International Tax", "Compliance"]
        },
        {
          name: "Lisa Chang",
          position: "Tax Specialist",
          image: Lisa,
          specializations: ["Individual Tax", "Corporate Tax", "Tax Research"]
        }
      ]
    }
  ];

  return (
    <section id="team" className="py-16 md:py-24 bg-gray-50">
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-12" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Team</h2>
          <p className="text-lg text-gray-600">
            Meet our dedicated divisions and the professionals who make excellence possible
          </p>
        </div>

        <div className="space-y-16">
          {divisions.map((division, index) => (
            <div 
              key={division.name}
              className="bg-white rounded-xl shadow-lg overflow-hidden"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="p-6 md:p-8 border-b border-gray-100">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-primary-50 rounded-lg">
                    {division.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">{division.name}</h3>
                </div>
                <p className="text-gray-600">{division.description}</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 md:p-8">
                {division.team.map((member) => (
                  <div key={member.name} className="flex gap-4 items-start">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-20 h-20 rounded-lg object-cover"
                    />
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900">{member.name}</h4>
                      <p className="text-primary-600 mb-2">{member.position}</p>
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
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Team;