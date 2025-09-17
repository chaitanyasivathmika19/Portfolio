import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <About />
      <Education />
      <Skills />
      <Projects />
      <Certifications />
      <Contact />
      
      {/* Footer */}
      {/* <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-gray-300">
              © 2024 Yalamandala Chaitanya Sivathmika. Built with React, JavaScript, and Tailwind CSS.
            </p>
            <p className="text-gray-400 text-sm mt-2">
              Designed and developed with ❤️ for showcasing my journey as a BTech student.
            </p>
          </div>
        </div>
      </footer> */}

      {/* Footer */}
<footer className="bg-[#0a0a3a] text-white pt-12">
  <div className="max-w-7xl mx-auto px-6 lg:px-12">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
      
      {/* Column 1: Portfolio */}
      <div>
        <h2 className="text-2xl font-bold mb-4">Sivathmika's Portfolio</h2>
        <p className="text-gray-300">
          Thank you for visiting my personal portfolio website. Connect with me over socials.
        </p>
        <p className="text-gray-300 mt-4">
          Keep Rising 🚀. Connect with me over live chat!
        </p>
      </div>

      {/* Column 2: Quick Links */}
      <div>
        <h2 className="text-2xl font-bold mb-4">Quick Links</h2>
        <ul className="space-y-2 text-gray-300">
          <li><a href="#home" className="hover:text-yellow-400">➤ Home</a></li>
          <li><a href="#about" className="hover:text-yellow-400">➤ About</a></li>
           <li><a href="#education" className="hover:text-yellow-400">➤ Education</a></li>
          <li><a href="#skills" className="hover:text-yellow-400">➤ Skills</a></li>
         
          <li><a href="#projects" className="hover:text-yellow-400">➤ Projects</a></li>
          <li><a href="#certifications" className="hover:text-yellow-400">➤ Certifications</a></li>
          <li><a href="#contact" className="hover:text-yellow-400">➤ Contact</a></li>
        </ul>
      </div>

      {/* Column 3: Contact Info */}
      <div>
        <h2 className="text-2xl font-bold mb-4">Contact Info</h2>
        <p className="flex items-center gap-2 text-gray-300">
          📞 +91 9988187444
        </p>
        <p className="flex items-center gap-2 text-gray-300 mt-2">
          📧 2200032192cseh@gmail.com
        </p>
        <p className="flex items-center gap-2 text-gray-300 mt-2">
          📍 Guntur AP, India - 522004
        </p>

        {/* Social Icons */}
        <div className="flex gap-4 mt-4">
          <a href="https://www.linkedin.com/in/chaitanya-sivathmika-y-0b985124b/" target="_blank" rel="noopener noreferrer"
            className="bg-white text-blue-600 p-2 rounded-full hover:bg-blue-600 hover:text-white transition">
            <i className="fab fa-linkedin-in"></i>
          </a>
          <a href="mailto:2200032192cseh@gmail.com" target="_blank"
            className="bg-white text-red-600 p-2 rounded-full hover:bg-red-600 hover:text-white transition">
            <i className="fas fa-envelope"></i>
          </a>
          <a href="https://github.com/chaitanyasivathmika19" target="_blank" rel="noopener noreferrer"
            className="bg-white text-black p-2 rounded-full hover:bg-gray-800 hover:text-white transition">
            <i className="fab fa-github"></i>
          </a>
          <a
  href="https://www.instagram.com/sivathmikaaa21/"
  target="_blank"
  rel="noopener noreferrer"
  className="bg-white text-pink-500 p-2 rounded-full hover:bg-pink-500 hover:text-white transition"
>
  <i className="fab fa-instagram"></i>
</a>

        </div>
      </div>
    </div>

    {/* Divider */}
    <hr className="border-gray-700 my-6" />

    {/* Bottom bar */}
    <div className="text-center pb-4">
      {/* <p className="text-gray-400">
        Designed With <span className="text-red-500">❤️</span> By <span className="text-yellow-400 font-semibold">Sivanthmika</span>
      </p> */}
      <p className="text-gray-300">
              © 2025 Yalamandala Chaitanya Sivathmika. Built with React, JavaScript, and Tailwind CSS.
            </p>
            <p className="text-gray-400 text-sm mt-2">
              Designed and developed with ❤️ for showcasing my journey as a BTech student.
            </p>
    </div>
  </div>
</footer>

    </div>
  );
}

export default App;