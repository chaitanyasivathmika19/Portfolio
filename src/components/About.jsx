import React from 'react';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { fadeInUp } from '../utils/animations';
import { Code, Laptop, Users, Target } from 'lucide-react';

const About = () => {
    const { ref, controls } = useScrollAnimation();

    const highlights = [
        {
            icon: <Code className="w-8 h-8" />,
            title: "Frontend Development",
            description:"Skilled in building responsive and modern web applications using HTML5, React.js, Tailwind CSS, and JavaScript"
        },
        {
            icon: <Laptop className="w-8 h-8" />,
            title: "Problem Solver",
            description: "Able to analyze challenges, break them into steps, and develop practical solutions in web development and software projects"    
        },
        {
            icon: <Users className="w-8 h-8" />,
            title: "Team Player",
            description: "Collaborating effectively in technical teams, contributing to projects, and improving through feedback."
        },
        {
            icon: <Target className="w-8 h-8" />,
            title: "Goal-Oriented",
            description: "Delivering high-quality solutions while constantly exploring new technologies like cloud computing and modern web frameworks to grow as a developer"
        }
    ];

    return (
        <section id="about" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-20">


                <motion.div
                    ref={ref}
                    initial="hidden"
                    animate={controls}
                    variants={fadeInUp}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        About <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Me</span>
                    </h2>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                        I'm a dedicated Computer Science student passionate about creating innovative solutions through technology
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={controls}
                        variants={fadeInUp}
                        className="space-y-6"
                    >
                        <h3 className="text-2xl font-bold text-gray-900 mb-6">My Journey</h3>
                        <p className="text-gray-700 leading-relaxed">
                            As a final-year B.Tech Computer Science student, I’ve focused on building strong expertise in frontend development
                             while exploring backend technologies and cloud platforms. What started as curiosity about websites and applications
                              quickly grew into a passion for creating interactive, user-friendly digital experiences.
                        </p>
                        <p className="text-gray-700 leading-relaxed">
                           Over the past few years, I’ve worked on personal and academic projects involving React, Tailwind CSS, Java, Spring Boot,
                            and cloud platforms like AWS and Azure. Alongside academics, I’ve also completed industry-recognized certifications 
                            that strengthened my knowledge in cloud computing and databases.
                        </p>
                        <p className="text-gray-700 leading-relaxed">
                           Currently, I’m expanding my skills in Spring Boot for backend development while sharpening my knowledge in Java and
                            cloud computing. My goal is to combine these skills to become a well-rounded developer capable of building scalable
                             and impactful applications.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={controls}
                        variants={fadeInUp}
                        className="grid grid-cols-1 sm:grid-cols-2 gap-6"
                    >
                        {highlights.map((highlight, index) => (
                            <div
                                key={index}
                                className="p-6 bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl hover:shadow-lg transition-shadow"
                            >
                                <div className="text-blue-600 mb-4">
                                    {highlight.icon}
                                </div>
                                <h4 className="text-lg font-semibold text-gray-900 mb-2">
                                    {highlight.title}
                                </h4>
                                <p className="text-gray-600 text-sm">
                                    {highlight.description}
                                </p>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;