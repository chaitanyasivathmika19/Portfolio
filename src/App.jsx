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
      <footer className="bg-gray-900 text-white py-8">
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
      </footer>
    </div>
  );
}

export default App;