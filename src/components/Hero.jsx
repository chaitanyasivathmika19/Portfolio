import React from 'react';
import { motion } from 'framer-motion';
import { ReactTyped } from "react-typed";
import { MapPin } from 'lucide-react';
// import profilePic from '../assets/IMG_3733.jpg';
import profilePic from '../assets/IMG_3733-removebg-preview.png';
import { Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center bg-gradient-to-br from-blue-50 via-white to-purple-50"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full flex flex-col md:flex-row items-center justify-between py-20">

        {/* Left Content */}
        <div className="text-left md:w-1/2 space-y-6">
          <motion.h1
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-bold text-gray-900"
          >
            Chaitanya Sivathmika{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Yalamandala
            </span>

          </motion.h1>
          <div className="flex flex-col ml-10 text-gray-500 mt-2 space-y-1 text-base md:text-lg">
            <span className="font-medium">Final Year Computer Science Student</span>
            <span className="flex items-center space-x-1">
              <MapPin className="w-5 h-5 text-gray-500" />
              <span>Andhra Pradesh, India</span>
            </span>
          </div>
          {/* Typing Animation */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            
            className="text-2xl md:text-3xl font-semibold text-blue-600"
          >

  <span className="text-black mr-2">I am</span>
            <ReactTyped
              strings={[
                "Front-End Developer",
                "Java Enthusiast",
                "Cloud Learner",
              ]}
              typeSpeed={60}
              backSpeed={40}
              loop
            />

          </motion.div>

          {/* Short Description */}
          <motion.p
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg text-gray-700 leading-relaxed max-w-xl"
          >
            Passionate Computer Science student and aspiring Front-End Developer with strong skills in
            React.js, JavaScript, HTML, CSS, and Tailwind CSS. Exploring Spring Boot & Cloud Computing
            to grow as a versatile developer.
          </motion.p>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex space-x-6"
          >
            <a
              href="https://github.com/chaitanyasivathmika19"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition hover:scale-105"
            >
              <Github className="w-6 h-6 text-gray-700" />
            </a>
            <a
              href="https://www.linkedin.com/in/chaitanya-sivathmika-y-0b985124b/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition hover:scale-105"
            >
              <Linkedin className="w-6 h-6 text-blue-600" />
            </a>
            <a
              href="mailto:2200032192cseh@gmail.com"
              className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition hover:scale-105"
            >
              <Mail className="w-6 h-6 text-green-600" />
            </a>
          </motion.div>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex gap-4"
          >
            <button
              onClick={() =>
                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
              }
              className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full shadow-lg hover:from-blue-700 hover:to-purple-700 transition hover:scale-105"
            >
              Get In Touch
            </button>
            <button
              onClick={() =>
                document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })
              }
              className="px-8 py-3 border-2 border-blue-600 text-blue-600 rounded-full hover:bg-blue-600 hover:text-white transition hover:scale-105"
            >
              View My Work
            </button>
          </motion.div>
        </div>

        {/* Right Side Image */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="md:w-1/2 flex justify-center mt-12 md:mt-0"
        >
          {/* <img
            src={profilePic}
            alt="Profile"
            className="w-72 h-72 object-cover rounded-full shadow-2xl ring-4 ring-white"
          /> */}

          <img
            src={profilePic}
            alt="Profile Picture"
            className="w-150 h-150 object-cover mx-auto "
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
