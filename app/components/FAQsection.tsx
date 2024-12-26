import React from 'react';
import { ChevronDown, HelpCircle, Settings, CreditCard, Smartphone, Shield, BarChart, MessagesSquare } from 'lucide-react';

const FAQSection = () => {
  const [openSection, setOpenSection] = React.useState('');
  const [openItem, setOpenItem] = React.useState('');

  const faqData = {
    general: {
      icon: <HelpCircle />,
      title: 'General FAQs',
      items: [
        {
          q: 'What services does Learnify offer?',
          a: 'Learnify provides comprehensive web solutions for educational institutions, including custom website development, content management systems, and digital learning platforms.'
        },
        {
          q: "Why should I choose Learnify for my institution's website?",
          a: 'We specialize in education-focused web development with years of experience serving schools and institutions.'
        },
        {
          q: 'Do you offer free consultations?',
          a: 'Yes, we provide complimentary initial consultations to discuss your needs and requirements.'
        }
      ]
    },
    technical: {
      icon: <Settings />,
      title: 'Technical FAQs',
      items: [
        {
          q: 'Will my website be mobile-friendly?',
          a: 'Yes, all our websites are fully responsive and optimized for all devices.'
        },
        {
          q: "Can you integrate our school's existing database into the new website?",
          a: 'Yes, we can integrate existing databases and systems into your new website.'
        },
        {
          q: 'Will the website be accessible for users with disabilities?',
          a: 'Yes, we follow WCAG guidelines to ensure accessibility for all users.'
        }
      ]
    },
    pricing: {
      icon: <CreditCard />,
      title: 'Pricing and Packages FAQs',
      items: [
        {
          q: 'How much does it cost to build a website with Learnify?',
          a: 'Pricing varies based on your specific needs and requirements. Contact us for a custom quote.'
        },
        {
          q: 'Do you offer payment plans?',
          a: 'Yes, we offer flexible payment plans to accommodate different budgets.'
        }
      ]
    },
    features: {
      icon: <Smartphone />,
      title: 'Features and Customization FAQs',
      items: [
        {
          q: 'Can we include features like online enrollment or parent portals?',
          a: 'Yes, we can implement various features including enrollment systems and parent portals.'
        },
        {
          q: 'Can we add or edit website content after the launch?',
          a: 'Yes, we provide a user-friendly content management system for easy updates.'
        }
      ]
    },
    security: {
      icon: <Shield />,
      title: 'Security FAQs',
      items: [
        {
          q: 'How secure will our website be?',
          a: 'We implement industry-standard security measures and regular updates to protect your data.'
        },
        {
          q: 'Can you recover our data in case of a loss?',
          a: 'Yes, we maintain regular backups and have disaster recovery procedures in place.'
        }
      ]
    },
    scaling: {
      icon: <BarChart />,
      title: 'Scaling and Support FAQs',
      items: [
        {
          q: 'Can we add more features to the website in the future?',
          a: 'Yes, our websites are built to be scalable and can accommodate future additions.'
        },
        {
          q: 'Do you offer support after the website is launched?',
          a: 'Yes, we provide ongoing support and maintenance services.'
        }
      ]
    },
    other: {
      icon: <MessagesSquare />,
      title: 'Other FAQs',
      items: [
        {
          q: 'Can Learnify redesign our existing website?',
          a: 'Yes, we offer website redesign services to modernize existing sites.'
        },
        {
          q: 'How can I get started?',
          a: 'Contact us through our website or call us to schedule a consultation.'
        }
      ]
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4">
      <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
      
      <div className="space-y-6">
        {Object.entries(faqData).map(([key, section]) => (
          <div key={key} className="border rounded-lg overflow-hidden">
            <button
              onClick={() => setOpenSection(openSection === key ? '' : key)}
              className={`w-full p-4 flex items-center justify-between text-left bg-white hover:bg-gray-50 transition-colors duration-200 ${
                openSection === key ? 'border-b' : ''
              }`}
            >
              <div className="flex items-center space-x-3">
                <span className="text-blue-600">{section.icon}</span>
                <span className="font-semibold">{section.title}</span>
              </div>
              <ChevronDown className={`transform transition-transform duration-200 ${
                openSection === key ? 'rotate-180' : ''
              }`} />
            </button>
            
            <div className={`transition-all duration-300 ease-in-out ${
              openSection === key ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
            }`}>
              <div className="p-4 bg-gray-50 space-y-4">
                {section.items.map((item, index) => (
                  <div key={index} className="border rounded-lg bg-white overflow-hidden">
                    <button
                      onClick={() => setOpenItem(openItem === `${key}-${index}` ? '' : `${key}-${index}`)}
                      className="w-full p-4 flex items-center justify-between text-left hover:bg-gray-50 transition-colors duration-200"
                    >
                      <span className="font-medium">{item.q}</span>
                      <ChevronDown className={`transform transition-transform duration-200 ${
                        openItem === `${key}-${index}` ? 'rotate-180' : ''
                      }`} />
                    </button>
                    <div className={`transition-all duration-200 ${
                      openItem === `${key}-${index}` ? 'max-h-40' : 'max-h-0 overflow-hidden'
                    }`}>
                      <p className="p-4 text-gray-600 border-t">{item.a}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQSection;