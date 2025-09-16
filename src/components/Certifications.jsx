import React from 'react';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { fadeInUp, staggerContainer } from '../utils/animations';
import { Award, ExternalLink, Calendar, CheckCircle } from 'lucide-react';

const Certifications = () => {
  const { ref, controls } = useScrollAnimation();

  const certifications = [
    {
      title: "AWS Certified Cloud Practitioner",
      issuer: "Amazon Web Services",
      date: "May 2024",
      credentialId: "d1d0efbdda9b4a8a9cecb20ce2469cfe",
      description: "Foundational understanding of AWS Cloud services, security, and pricing models",
      skills: ["AWS", "Cloud Computing", "Security", "Pricing"],
      verify: "https://aws.amazon.com/verification",
      logo: "https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop"
    },
// {
//   title: "Salesforce Certified AI Associate",
//   issuer: "Salesforce",
//   date: "October 2024",
//   credentialId: "5075747",
//   description: "Validated knowledge of AI concepts, ethical use, and practical applications of AI in Salesforce products.",
//   skills: ["Salesforce", "AI Concepts", "Ethical AI", "CRM"],
//   verify: "https://sforce.co/verifycerts"
// },
 {
    title: "NPTEL Certification – Database Management Systems (DBMS)",
    issuer: "Indian Institute of Technology Kharagpur",
    date: "2023",
    credentialId: "NPTEL23CS79S34081206",
    description: "Completed NPTEL DBMS course covering relational models, SQL, transactions, and database design.",
    skills: ["SQL", "DBMS", "Database Design", "Transactions"],
    verify: "https://nptel.ac.in/noc",
  },
    {
      title: "Microsoft Azure AI Fundamentals (AI-900)",
      issuer: "Microsoft",
      date: "June 2024",
      credentialId: "EB5DOD6A4DEF2B7D",
      description: "Core Azure services, solutions, and management tools fundamentals",
      skills: ["Azure", "Cloud Services", "DevOps", "Security"],
      verify: "https://microsoft.com/verify",
      logo: "https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop"
     },
     {
    title: "Red Hat Certified Enterprise Application Developer",
    issuer: "Red Hat",
    date: "September 2024",
    credentialId: "240-192-633",
    description: "Demonstrated expertise in Linux system administration and Red Hat enterprise technologies.",
    skills: ["Linux", "Red Hat", "System Administration"],
    verify: "//www.credly.com/go/xA2fLycm",
  }
  ];

  return (
    <section id="certifications" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={fadeInUp}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Certifications & <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Achievements</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Professional certifications and achievements that validate my technical expertise
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          animate={controls}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-xl shadow-lg hover:shadow-xl transition-shadow p-6 border border-gray-100"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center mr-3">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex items-center text-green-600">
                    <CheckCircle className="w-5 h-5 mr-1" />
                    <span className="text-sm font-medium">Verified</span>
                  </div>
                </div>
              </div>
              
              <h3 className="text-lg font-bold text-gray-900 mb-2 leading-tight">
                {cert.title}
              </h3>
              
              <div className="flex items-center text-blue-600 font-semibold mb-2">
                <span>{cert.issuer}</span>
              </div>
              
              <div className="flex items-center text-gray-500 text-sm mb-4">
                <Calendar className="w-4 h-4 mr-2" />
                <span>{cert.date}</span>
              </div>
              
              <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                {cert.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {cert.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
              
              <div className="border-t pt-4">
                <div className="flex items-center justify-between text-xs text-gray-500 mb-3">
                  <span>Credential ID:</span>
                  <span className="font-mono">{cert.credentialId}</span>
                </div>
                
                <a
                  href={cert.verify}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-full px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all text-sm font-medium"
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Verify Certificate
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial="hidden"
          animate={controls}
          variants={fadeInUp}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Continuous Learning</h3>
            <p className="text-lg opacity-90 max-w-3xl mx-auto mb-6">
  I'm committed to continuous learning and professional development. Currently preparing for 
  <span className="font-semibold"> ServiceNow Certified System Administrator (CSA) </span> 
  and <span className="font-semibold">AWS Certified Developer – Associate</span>, 
  while strengthening my expertise in cloud computing, backend development, and scalable web solutions.
</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <div className="flex items-center bg-white/10 rounded-lg px-4 py-2">
                <Award className="w-5 h-5 mr-2" />
                <span>5+ Certifications</span>
              </div>
              <div className="flex items-center bg-white/10 rounded-lg px-4 py-2">
                <CheckCircle className="w-5 h-5 mr-2" />
                <span>All Verified</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;