// import React from 'react';
// import { motion } from 'framer-motion';
// import { useScrollAnimation } from '../hooks/useScrollAnimation';
// import { fadeInUp, staggerContainer } from '../utils/animations';
// import { GraduationCap, Calendar, MapPin, Award } from 'lucide-react';

// const Education = () => {
//   const { ref, controls } = useScrollAnimation();

//   const education = [
//     {
//       degree: "Bachelor of Technology in Computer Science",
//       institution: "Koneru Lakshmaiah Education Foundation (KLEF)",
//       location: "Andhra Pradesh, India",
//       duration: "2022 - 2026",
//       grade: "CGPA: 9.4/10",
//      description: "Focused on core computer science and Front-end development with expertise in React, Spring Boot, and database systems. Experienced in building scalable web applications and cloud-integrated solutions. Strong foundation in problem-solving, software engineering principles, and modern web technologies.",
//       achievements: [
//         "Dean's List for 6 consecutive semesters",
//         "Head of Technical Club (2023-2024)",
//         "Best Project Award for AI-based Traffic Management System"
//       ]
//     },
//     {
//       degree: "Higher Secondary Education (12th Grade)",
//       institution: "NRI Junior College",
//       location: "Andhra Pradesh, India",
//       duration: "2020 - 2022",
//       grade: "91.6%",
//       description: "MPC Stream with focus on Mathematics, Physics, and Chemistry.",
//       achievements: [
//         "School Topper in Computer Science",
//         "State-level Science Olympiad Gold Medal",
//         "Captain of School Programming Team"
//       ]
//     }
//   ];

//   return (
//     <section id="education" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <motion.div
//           ref={ref}
//           initial="hidden"
//           animate={controls}
//           variants={fadeInUp}
//           className="text-center mb-16"
//         >
//           <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
//             My <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Education</span>
//           </h2>
//           <p className="text-lg text-gray-600 max-w-3xl mx-auto">
//             Academic foundation and continuous learning journey
//           </p>
//         </motion.div>

//         <motion.div
//           initial="hidden"
//           animate={controls}
//           variants={staggerContainer}
//           className="space-y-8"
//         >
//           {education.map((edu, index) => (
//             <motion.div
//               key={index}
//               variants={fadeInUp}
//               className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-8"
//             >
//               <div className="flex flex-col md:flex-row md:items-start gap-6">
//                 <div className="flex-shrink-0">
//                   <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
//                     <GraduationCap className="w-8 h-8 text-white" />
//                   </div>
//                 </div>
                
//                 <div className="flex-1">
//                   <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
//                     <div>
//                       <h3 className="text-xl font-bold text-gray-900 mb-2">
//                         {edu.degree}
//                       </h3>
//                       <p className="text-lg text-blue-600 font-semibold mb-2">
//                         {edu.institution}
//                       </p>
//                     </div>
//                     <div className="flex flex-col sm:flex-row sm:items-center gap-4 text-gray-600">
//                       <div className="flex items-center">
//                         <Calendar className="w-4 h-4 mr-2" />
//                         <span className="text-sm">{edu.duration}</span>
//                       </div>
//                       <div className="flex items-center">
//                         <MapPin className="w-4 h-4 mr-2" />
//                         <span className="text-sm">{edu.location}</span>
//                       </div>
//                     </div>
//                   </div>
                  
//                   <div className="mb-4">
//                     <span className="inline-block bg-green-100 text-green-800 text-sm font-semibold px-3 py-1 rounded-full">
//                       {edu.grade}
//                     </span>
//                   </div>
                  
//                   <p className="text-gray-700 mb-6 leading-relaxed">
//                     {edu.description}
//                   </p>
                  
//                   <div>
//                     <h4 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
//                       <Award className="w-5 h-5 mr-2 text-yellow-500" />
//                       Key Achievements
//                     </h4>
//                     <ul className="space-y-2">
//                       {edu.achievements.map((achievement, achievementIndex) => (
//                         <li key={achievementIndex} className="flex items-start">
//                           <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
//                           <span className="text-gray-700">{achievement}</span>
//                         </li>
//                       ))}
//                     </ul>
//                   </div>
//                 </div>
//               </div>
//             </motion.div>
//           ))}
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default Education;


import React from 'react';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { fadeInUp, staggerContainer } from '../utils/animations';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';

const Education = () => {
  const { ref, controls } = useScrollAnimation();

  const education = [
    {
      degree: "Bachelor of Technology in Computer Science",
      institution: "Koneru Lakshmaiah Education Foundation (KLEF)",
      location: "Andhra Pradesh, India",
      duration: "2022 - 2026",
      grade: "CGPA: 9.4/10",
      description:
        "Focused on core computer science and Front-end development with expertise in React, Spring Boot, and database systems. Experienced in building scalable web applications and cloud-integrated solutions. Strong foundation in problem-solving, software engineering principles, and modern web technologies."
    },
    {
      degree: "Higher Secondary Education (12th Grade)",
      institution: "NRI Junior College",
      location: "Andhra Pradesh, India",
      duration: "2020 - 2022",
      grade: "91.6%",
      description: "MPC Stream with focus on Mathematics, Physics, and Chemistry."
    }
  ];

  return (
    <section id="education" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={fadeInUp}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            My{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Education
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Academic foundation and continuous learning journey
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          animate={controls}
          variants={staggerContainer}
          className="space-y-8"
        >
          {education.map((edu, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-8"
            >
              <div className="flex flex-col md:flex-row md:items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
                    <GraduationCap className="w-8 h-8 text-white" />
                  </div>
                </div>

                <div className="flex-1">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        {edu.degree}
                      </h3>
                      <p className="text-lg text-blue-600 font-semibold mb-2">
                        {edu.institution}
                      </p>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-4 text-gray-600">
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-2" />
                        <span className="text-sm">{edu.duration}</span>
                      </div>
                      <div className="flex items-center">
                        <MapPin className="w-4 h-4 mr-2" />
                        <span className="text-sm">{edu.location}</span>
                      </div>
                    </div>
                  </div>

                  <div className="mb-4">
                    <span className="inline-block bg-green-100 text-green-800 text-sm font-semibold px-3 py-1 rounded-full">
                      {edu.grade}
                    </span>
                  </div>

                  <p className="text-gray-700 leading-relaxed">
                    {edu.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
