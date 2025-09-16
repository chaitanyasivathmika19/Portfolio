import React from 'react';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { fadeInUp, staggerContainer } from '../utils/animations';
import { ExternalLink, Github, Calendar, Users, Star } from 'lucide-react';

const Projects = () => {
  const { ref, controls } = useScrollAnimation();

  const projects = [
   {
    title: "Pet Adoption & Accessories Management System",
    description:
      "A full-stack MERN web application for pet adoption and accessories management. Implemented product listings, secure user authentication, order tracking, and a real-time inventory system to dynamically manage availability.",
    image:
      
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqgD9jFAFU074Sjii9iWW3FF6OXlQbs2erEsFaTWEj0g&s&ec=73068120",
      technologies: ["MongoDB", "Express.js", "React", "Node.js"],
    github: "https://github.com/chaitanyasivathmika19/petpaw-platform-",
    demo: "https://petadoption-team11.netlify.app/",
    status: "Completed",
    duration: "4 months",
    team: "Team of 3",
    featured: true,
  },
  {
    title: "Balancing Diets & Detecting Nutrient Deficits",
    description:
      "Java full-stack role-based application for personalized diet planning. Developed modules for dietitians to create nutrition plans, and for users to view them based on profiles. Built with JSP, Servlets, and MySQL using MVC architecture for scalability and secure authentication.",
    image:
    "https://c8.alamy.com/comp/E7MA9C/colorful-food-pyramid-chart-for-balanced-nutrition-and-healthy-eating-E7MA9C.jpg",
      technologies: ["Java", "JSP", "Servlets", "MySQL"],
    github: "https://github.com/chaitanyasivathmika19/NutrientDiet-JavaFullStackProject",
    demo: "https://github.com/chaitanyasivathmika19/NutrientDiet-JavaFullStackProject", // keeping GitHub link as demo
    status: "Completed",
    duration: "5 months",
    team: "Team of 3",
    featured: true,
  },
     {
    title: "Guess the Number Game",
    description: "A fun number guessing game with interactive UI built using JavaScript, HTML, and CSS.",
    technologies: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/chaitanyasivathmika19/Guess-the-Numb-Game",
    demo: "https://chaitanyasivathmika19.github.io/Guess-the-Numb-Game/",
    status: "Completed",
  },
  {
    title: "BattleXO – Man vs Machine",
    description: "Tic Tac Toe with AI opponent. Play against the computer with smart move predictions.",
    technologies: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/chaitanyasivathmika19/BattleXO-Man-vs-Machine-",
    demo: "https://chaitanyasivathmika19.github.io/BattleXO-Man-vs-Machine-/",
    status: "Completed",
  },
  {
    title: "Calculator",
    description: "A responsive calculator app supporting basic arithmetic operations.",
    technologies: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/chaitanyasivathmika19/Calculator",
    demo: "https://chaitanyasivathmika19.github.io/Calculator/",
    status: "Completed",
  },
  {
    title: "Tic Tac Toe",
    description: "Classic two-player Tic Tac Toe game with interactive design.",
    technologies: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/chaitanyasivathmika19/Tic-Tac-Toe",
    demo: "https://chaitanyasivathmika19.github.io/Tic-Tac-Toe/",
    status: "Completed",
  },
  {
    title: "Currency Converter",
    description: "Convert between different currencies using real-time exchange rate APIs.",
    technologies: ["HTML", "CSS", "JavaScript", "API"],
    github: "https://github.com/chaitanyasivathmika19/CurrencyConvertor",
    demo: "https://chaitanyasivathmika19.github.io/CurrencyConvertor/",
    status: "Completed",
  },
  {
    title: "Rock Paper Scissors",
    description: "A fun rock-paper-scissors game to play against the computer.",
    technologies: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/chaitanyasivathmika19/Rock-Paper-scissors-",
    demo: "https://chaitanyasivathmika19.github.io/Rock-Paper-scissors-/",
    status: "Completed",
  },
  {
    title: "Set & Guess",
    description: "Two-player number guessing game where one sets the number and another guesses it.",
    technologies: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/chaitanyasivathmika19/Set-And-Guess",
    demo: "https://chaitanyasivathmika19.github.io/Set-And-Guess/",
    status: "Completed",
  }
  ];

  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={fadeInUp}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Featured <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Showcase of my technical projects demonstrating problem-solving skills and technical expertise
          </p>
        </motion.div>

        {/* Featured Projects */}
        <motion.div
          initial="hidden"
          animate={controls}
          variants={staggerContainer}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16"
        >
          {featuredProjects.map((project, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow overflow-hidden"
            >
              <div className="relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 right-4">
                  <Star className="w-6 h-6 text-yellow-400 fill-current" />
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-bold text-gray-900">{project.title}</h3>
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                    project.status === 'Completed' 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-blue-100 text-blue-800'
                  }`}>
                    {project.status}
                  </span>
                </div>
                
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center text-sm text-gray-500 mb-4 space-x-4">
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-1" />
                    {project.duration}
                  </div>
                  <div className="flex items-center">
                    <Users className="w-4 h-4 mr-1" />
                    {project.team}
                  </div>
                </div>
                
                <div className="flex space-x-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors"
                  >
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Other Projects */}
        <motion.div
          initial="hidden"
          animate={controls}
          variants={fadeInUp}
          className="mb-8"
        >
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
            Other Notable Projects
          </h3>
        </motion.div>

        <motion.div
          initial="hidden"
          animate={controls}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {otherProjects.map((project, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-6"
            >
              <div className="flex items-center justify-between mb-3">
                <h4 className="text-lg font-semibold text-gray-900">{project.title}</h4>
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                  project.status === 'Completed' 
                    ? 'bg-green-100 text-green-800' 
                    : 'bg-blue-100 text-blue-800'
                }`}>
                  {project.status}
                </span>
              </div>
              
              <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-1 mb-4">
                {project.technologies.slice(0, 3).map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs"
                  >
                    {tech}
                  </span>
                ))}
                {project.technologies.length > 3 && (
                  <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs">
                    +{project.technologies.length - 3} more
                  </span>
                )}
              </div>
              
              <div className="flex space-x-3">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-gray-700 hover:text-gray-900 transition-colors"
                >
                  <Github className="w-4 h-4 mr-1" />
                  <span className="text-sm">Code</span>
                </a>
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-blue-600 hover:text-blue-700 transition-colors"
                >
                  <ExternalLink className="w-4 h-4 mr-1" />
                  <span className="text-sm">Demo</span>
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;