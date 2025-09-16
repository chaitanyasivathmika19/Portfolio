// import React, { useState } from 'react';
// import { motion } from 'framer-motion';
// import { useScrollAnimation } from '../hooks/useScrollAnimation';
// import { fadeInUp, staggerContainer } from '../utils/animations';
// import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter, Download } from 'lucide-react';

// const Contact = () => {
//   const { ref, controls } = useScrollAnimation();
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     subject: '',
//     message: ''
//   });

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({
//       ...prev,
//       [name]: value
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Handle form submission here
//     console.log('Form submitted:', formData);
//     alert('Thank you for your message! I\'ll get back to you soon.');
//     setFormData({ name: '', email: '', subject: '', message: '' });
//   };

//   const contactInfo = [
//     {
//       icon: <Mail className="w-6 h-6" />,
//       title: "Email",
//       value: "john.doe@email.com",
//       link: "mailto:john.doe@email.com"
//     },
//     {
//       icon: <Phone className="w-6 h-6" />,
//       title: "Phone",
//       value: "+91 9876543210",
//       link: "tel:+919876543210"
//     },
//     {
//       icon: <MapPin className="w-6 h-6" />,
//       title: "Location",
//       value: "Bangalore, India",
//       link: "https://maps.google.com"
//     }
//   ];

//   const socialLinks = [
//     {
//       icon: <Github className="w-6 h-6" />,
//       name: "GitHub",
//       url: "https://github.com/johndoe",
//       color: "hover:text-gray-900"
//     },
//     {
//       icon: <Linkedin className="w-6 h-6" />,
//       name: "LinkedIn",
//       url: "https://linkedin.com/in/johndoe",
//       color: "hover:text-blue-600"
//     },
//     {
//       icon: <Twitter className="w-6 h-6" />,
//       name: "Twitter",
//       url: "https://twitter.com/johndoe",
//       color: "hover:text-blue-400"
//     }
//   ];

//   return (
//     <section id="contact" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <motion.div
//           ref={ref}
//           initial="hidden"
//           animate={controls}
//           variants={fadeInUp}
//           className="text-center mb-16"
//         >
//           <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
//             Let's Get In <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Touch</span>
//           </h2>
//           <p className="text-lg text-gray-600 max-w-3xl mx-auto">
//             I'm always open to discussing new opportunities, interesting projects, or just having a chat about technology
//           </p>
//         </motion.div>

//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
//           {/* Contact Information */}
//           <motion.div
//             initial="hidden"
//             animate={controls}
//             variants={staggerContainer}
//             className="space-y-8"
//           >
//             <motion.div variants={fadeInUp}>
//               <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h3>
//               <div className="space-y-6">
//                 {contactInfo.map((info, index) => (
//                   <a
//                     key={index}
//                     href={info.link}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="flex items-center p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
//                   >
//                     <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center text-white mr-4">
//                       {info.icon}
//                     </div>
//                     <div>
//                       <h4 className="text-lg font-semibold text-gray-900">{info.title}</h4>
//                       <p className="text-gray-600">{info.value}</p>
//                     </div>
//                   </a>
//                 ))}
//               </div>
//             </motion.div>

//             <motion.div variants={fadeInUp}>
//               <h3 className="text-2xl font-bold text-gray-900 mb-6">Follow Me</h3>
//               <div className="flex space-x-4">
//                 {socialLinks.map((social, index) => (
//                   <a
//                     key={index}
//                     href={social.url}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className={`p-3 bg-white rounded-lg shadow-md hover:shadow-lg transition-all transform hover:scale-105 text-gray-700 ${social.color}`}
//                   >
//                     {social.icon}
//                   </a>
//                 ))}
//               </div>
//             </motion.div>

//             <motion.div variants={fadeInUp}>
//               <h3 className="text-2xl font-bold text-gray-900 mb-6">Quick Actions</h3>
//               <div className="space-y-4">
//                 <button
//                   onClick={() => {
//                     const link = document.createElement('a');
//                     link.href = '/resume.pdf';
//                     link.download = 'John_Doe_Resume.pdf';
//                     link.click();
//                   }}
//                   className="w-full flex items-center justify-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all transform hover:scale-105 shadow-lg"
//                 >
//                   <Download className="w-5 h-5 mr-2" />
//                   Download Resume
//                 </button>
//                 <button
//                   onClick={() => window.open('https://calendly.com/johndoe', '_blank')}
//                   className="w-full flex items-center justify-center px-6 py-3 border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-600 hover:text-white transition-all transform hover:scale-105"
//                 >
//                   Schedule a Call
//                 </button>
//               </div>
//             </motion.div>
//           </motion.div>

//           {/* Contact Form */}
//           <motion.div
//             initial="hidden"
//             animate={controls}
//             variants={fadeInUp}
//             className="bg-white rounded-xl shadow-lg p-8"
//           >
//             <h3 className="text-2xl font-bold text-gray-900 mb-6">Send a Message</h3>
            
//             <form onSubmit={handleSubmit} className="space-y-6">
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                 <div>
//                   <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
//                     Full Name
//                   </label>
//                   <input
//                     type="text"
//                     id="name"
//                     name="name"
//                     value={formData.name}
//                     onChange={handleInputChange}
//                     required
//                     className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
//                     placeholder="Your name"
//                   />
//                 </div>
                
//                 <div>
//                   <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
//                     Email Address
//                   </label>
//                   <input
//                     type="email"
//                     id="email"
//                     name="email"
//                     value={formData.email}
//                     onChange={handleInputChange}
//                     required
//                     className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
//                     placeholder="your.email@example.com"
//                   />
//                 </div>
//               </div>
              
//               <div>
//                 <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
//                   Subject
//                 </label>
//                 <input
//                   type="text"
//                   id="subject"
//                   name="subject"
//                   value={formData.subject}
//                   onChange={handleInputChange}
//                   required
//                   className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
//                   placeholder="What's this about?"
//                 />
//               </div>
              
//               <div>
//                 <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
//                   Message
//                 </label>
//                 <textarea
//                   id="message"
//                   name="message"
//                   value={formData.message}
//                   onChange={handleInputChange}
//                   required
//                   rows={6}
//                   className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all resize-vertical"
//                   placeholder="Your message here..."
//                 />
//               </div>
              
//               <button
//                 type="submit"
//                 className="w-full flex items-center justify-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all transform hover:scale-105 shadow-lg"
//               >
//                 <Send className="w-5 h-5 mr-2" />
//                 Send Message
//               </button>
//             </form>
//           </motion.div>
//         </div>

//         <motion.div
//           initial="hidden"
//           animate={controls}
//           variants={fadeInUp}
//           className="mt-16 text-center"
//         >
//           <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-8 text-white">
//             <h3 className="text-2xl font-bold mb-4">Open to Opportunities</h3>
//             <p className="text-lg opacity-90 max-w-3xl mx-auto">
//               I'm actively seeking full-time opportunities in software development, particularly in web development, 
//               cloud computing, and machine learning. Let's connect and discuss how we can work together!
//             </p>
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default Contact;

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { fadeInUp, staggerContainer } from '../utils/animations';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Download } from 'lucide-react';

const Contact = () => {
  const { ref, controls } = useScrollAnimation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Thank you for your message! I\'ll get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      value: "2200032192cseh@gmail.com",
      link: "mailto:2200032192cseh@gmail.com"
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Alternative Email",
      value: "sivathmikayalamandala33@gmail.com",
      link: "mailto:sivathmikayalamandala33@gmail.com"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone",
      value: "+91 99881 87444",
      link: "tel:+919988187444"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Location",
      value: "Guntur, Andhra Pradesh, India",
      link: "https://maps.google.com"
    }
  ];

  const socialLinks = [
    // {
    //   icon: <Github className="w-6 h-6" />,
    //   name: "GitHub (Old)",
    //   url: "https://github.com/chaitanyasivathmika",
    //   color: "hover:text-gray-900"
    // },
    {
      icon: <Github className="w-6 h-6" />,
      name: "GitHub (New)",
      url: "https://github.com/chaitanyasivathmika19",
      color: "hover:text-gray-900"
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/chaitanya-sivathmika-y-0b985124b/",
      color: "hover:text-blue-600"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={fadeInUp}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Let's Get In <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Touch</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            I'm always open to discussing new opportunities, interesting projects, or just having a chat about technology
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial="hidden"
            animate={controls}
            variants={staggerContainer}
            className="space-y-8"
          >
            <motion.div variants={fadeInUp}>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
                  >
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center text-white mr-4">
                      {info.icon}
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900">{info.title}</h4>
                      <p className="text-gray-600">{info.value}</p>
                    </div>
                  </a>
                ))}
              </div>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Follow Me</h3>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-3 bg-white rounded-lg shadow-md hover:shadow-lg transition-all transform hover:scale-105 text-gray-700 ${social.color}`}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </motion.div>

            {/* <motion.div variants={fadeInUp}>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Quick Actions</h3>
              <div className="space-y-4">
                <button
                  onClick={() => {
                    const link = document.createElement('a');
                    link.href = '/resume.pdf';
                    link.download = 'Y_Chaitanya_Sivathmika_Resume.pdf';
                    link.click();
                  }}
                  className="w-full flex items-center justify-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all transform hover:scale-105 shadow-lg"
                >
                  <Download className="w-5 h-5 mr-2" />
                  Download Resume
                </button>
                <button
                  onClick={() => window.open('https://calendly.com/', '_blank')}
                  className="w-full flex items-center justify-center px-6 py-3 border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-600 hover:text-white transition-all transform hover:scale-105"
                >
                  Schedule a Call
                </button>
              </div>
            </motion.div> */}
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial="hidden"
            animate={controls}
            variants={fadeInUp}
            className="bg-white rounded-xl shadow-lg p-8"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Send a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                    placeholder="Your name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                  placeholder="What's this about?"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all resize-vertical"
                  placeholder="Your message here..."
                />
              </div>
              
              <button
                type="submit"
                className="w-full flex items-center justify-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all transform hover:scale-105 shadow-lg"
              >
                <Send className="w-5 h-5 mr-2" />
                Send Message
              </button>
            </form>
          </motion.div>
        </div>

        <motion.div
          initial="hidden"
          animate={controls}
          variants={fadeInUp}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Open to Opportunities</h3>
            <p className="text-lg opacity-90 max-w-3xl mx-auto">
               I'm actively seeking opportunities in software development particularly in web development, cloud computing. Open to internships and entry-level roles where I can 
  contribute, learn, and apply my knowledge to real-world projects. Let's connect and collaborate 
  on impactful solutions!
                          </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
