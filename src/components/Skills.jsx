import React from 'react';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { fadeInUp, staggerContainer } from '../utils/animations';
import { Code, Database, Cloud, Palette, Brain, GitBranch } from 'lucide-react';

const Skills = () => {
  const { ref, controls } = useScrollAnimation();

  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <Code className="w-6 h-6" />,
      skills: [
        { name: "JavaScript", level: 90 },
        { name: "C", level: 85 },
        { name: "Java", level: 85 }

      
      ]
    },
    {
      title: "Web Development",
      icon: <Palette className="w-6 h-6" />,
      skills: [
        { name: "React.js", level: 90 },
        { name: "Node.js", level: 70 },
        { name: "HTML/CSS", level: 95 },
        { name: "Tailwind CSS", level: 95 },
        { name: "SpringBoot", level: 70 },
      ]
    },
    {
      title: "Database",
      icon: <Database className="w-6 h-6" />,
      skills: [
        { name: "MySQL", level: 90 },
        { name: "MongoDB", level: 70 },
        { name: "PostgreSQL", level: 85 }
        // { name: "Express.js", level: 85 },
        // { name: "REST APIs", level: 90 }
      ]
    },
    {
      title: "Cloud",
      icon: <Cloud className="w-6 h-6" />,
      skills: [
        { name: "AWS", level: 75 },
        { name: "Git & GitHub", level: 90 }
        
      ]
    },
   
    {
      title: "Tools & Others",
      icon: <GitBranch className="w-6 h-6" />,
      skills: [
        { name: "VS Code", level: 95 },
        { name: "Eclipse", level: 85 },
         { name: "MySQL Workbench", level: 95 },
        { name: "Figma", level: 90 },
        
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={fadeInUp}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Technical <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Skills</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Comprehensive skill set acquired through academic projects and continuous learning
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          animate={controls}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-xl p-6 hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center mb-6">
                <div className="p-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg text-white mr-4">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900">{category.title}</h3>
              </div>
              
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-800 font-medium">{skill.name}</span>
                      <span className="text-sm text-gray-600">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: skillIndex * 0.1 }}
                        className="bg-gradient-to-r from-blue-600 to-purple-600 h-2 rounded-full"
                      />
                    </div>
                  </div>
                ))}
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
            <h3 className="text-2xl font-bold mb-4">Always Learning</h3>
            <p className="text-lg opacity-90 max-w-3xl mx-auto">
              I'm constantly expanding my skill set through online courses, personal projects, and staying up-to-date 
              with the latest technologies and industry trends. Currently exploring Web Techonolgy , exploring Java Full Stack development with Spring Boot.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;