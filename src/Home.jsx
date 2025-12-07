// import React, { useState, useEffect, useRef } from 'react';
// import { motion } from "motion/react";
// import logo from "./assets/tech_images/logo.png"

// // Import icons
// const icons = {
//   java: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
//   spring: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg",
//   react: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
//   nodejs: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
//   mongodb: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
//   reactnative: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
//   flutter: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg",
//   aws: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg",
//   docker: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
//   tailwind: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
//   typescript: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
//   python: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
//   express: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
//   kubernetes: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg",
//   github: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
//   azure: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg",
//   googlecloud: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg"
// };

// const serviceIcons = {
//   fullstack: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
//   mern: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
//   mobile: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/reactnative/reactnative-original.svg",
//   design: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
//   cloud: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg",
//   devops: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg"
// };

// // Custom useInView hook
// const useInView = (ref, options = {}) => {
//   const [isInView, setIsInView] = useState(false);
  
//   useEffect(() => {
//     const observer = new IntersectionObserver(([entry]) => {
//       setIsInView(entry.isIntersecting);
//     }, {
//       threshold: 0.3,
//       ...options
//     });
    
//     if (ref.current) {
//       observer.observe(ref.current);
//     }
    
//     return () => observer.disconnect();
//   }, [ref, options]);
  
//   return isInView;
// };

// // Custom hook for scroll progress
// const useScrollProgress = () => {
//   const [progress, setProgress] = useState(0);
//   const ref = useRef(null);

//   useEffect(() => {
//     const element = ref.current;
//     if (!element) return;

//     const calculateProgress = () => {
//       const rect = element.getBoundingClientRect();
//       const windowHeight = window.innerHeight;
//       const elementHeight = element.offsetHeight;

//       // Calculate how much of the element is visible
//       const visibleHeight = Math.min(rect.bottom, windowHeight) - Math.max(rect.top, 0);
//       const progress = Math.max(0, Math.min(1, visibleHeight / elementHeight));
      
//       setProgress(progress);
//     };

//     const handleScroll = () => {
//       calculateProgress();
//     };

//     // Initial calculation
//     calculateProgress();

//     window.addEventListener('scroll', handleScroll, { passive: true });
//     window.addEventListener('resize', handleScroll, { passive: true });

//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//       window.removeEventListener('resize', handleScroll);
//     };
//   }, []);

//   return { progress, ref };
// };

// // Animated Path Component
// const AnimatedPath = () => {
//   const pathRef = useRef(null);
//   const isInView = useInView(pathRef, { once: true, margin: "-100px" });

//   return (
//     <div className="w-full max-w-4xl mx-auto py-12" ref={pathRef}>
//       <svg 
//         viewBox="0 0 800 200" 
//         className="w-full h-auto"
//         fill="none"
//         xmlns="http://www.w3.org/2000/svg"
//       >
//         <motion.path
//           d="M 50,100 Q 200,50 350,100 Q 500,150 650,100 Q 800,50 750,150"
//           stroke="url(#gradient)"
//           strokeWidth="4"
//           strokeLinecap="round"
//           fill="none"
//           initial={{ pathLength: 0, opacity: 0 }}
//           animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
//           transition={{ duration: 2, ease: "easeInOut" }}
//         />
        
//         <motion.path
//           d="M 50,100 Q 200,50 350,100 Q 500,150 650,100 Q 800,50 750,150"
//           stroke="url(#fillGradient)"
//           strokeWidth="6"
//           strokeLinecap="round"
//           fill="none"
//           initial={{ pathLength: 0, opacity: 0 }}
//           animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
//           transition={{ duration: 1.5, delay: 0.5, ease: "easeInOut" }}
//         />
        
//         {[
//           { x: 50, y: 100, label: "Start", step: "1" },
//           { x: 200, y: 50, label: "Design", step: "2" },
//           { x: 350, y: 100, label: "Develop", step: "3" },
//           { x: 500, y: 150, label: "Test", step: "4" },
//           { x: 650, y: 100, label: "Deploy", step: "5" },
//           { x: 750, y: 150, label: "Launch", step: "6" }
//         ].map((point, index) => (
//           <motion.g
//             key={index}
//             initial={{ scale: 0, opacity: 0 }}
//             animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
//             transition={{ delay: index * 0.3, duration: 0.5, type: "spring", stiffness: 100 }}
//             whileHover={{ scale: 1.2 }}
//           >
//             <circle
//               cx={point.x}
//               cy={point.y}
//               r="8"
//               fill="url(#pointGradient)"
//               stroke="white"
//               strokeWidth="2"
//             />
//             <text
//               x={point.x}
//               y={point.y - 15}
//               textAnchor="middle"
//               fill="white"
//               fontSize="12"
//               fontWeight="bold"
//               className="drop-shadow-lg"
//             >
//               {point.step}
//             </text>
//             <text
//               x={point.x}
//               y={point.y + 30}
//               textAnchor="middle"
//               fill="#6B7280"
//               fontSize="10"
//               fontWeight="semibold"
//             >
//               {point.label}
//             </text>
//           </motion.g>
//         ))}
        
//         <defs>
//           <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
//             <stop offset="0%" stopColor="#3B82F6" />
//             <stop offset="25%" stopColor="#8B5CF6" />
//             <stop offset="50%" stopColor="#EC4899" />
//             <stop offset="75%" stopColor="#F59E0B" />
//             <stop offset="100%" stopColor="#10B981" />
//           </linearGradient>
          
//           <linearGradient id="fillGradient" x1="0%" y1="0%" x2="100%" y2="0%">
//             <stop offset="0%" stopColor="#60A5FA" />
//             <stop offset="100%" stopColor="#34D399" />
//           </linearGradient>
          
//           <linearGradient id="pointGradient" x1="0%" y1="0%" x2="100%" y2="0%">
//             <stop offset="0%" stopColor="#6366F1" />
//             <stop offset="100%" stopColor="#EC4899" />
//           </linearGradient>
//         </defs>
//       </svg>
//     </div>
//   );
// };

// // Timeline Item Component
// const TimelineItem = ({ item, index, isActive }) => {
//   const itemRef = useRef(null);
//   const isInView = useInView(itemRef, { margin: "-100px 0px -100px 0px" });
//   const isEven = index % 2 === 0;

//   return (
//     <motion.div
//       ref={itemRef}
//       className={`flex flex-col lg:flex-row items-center mb-16 lg:mb-24 ${
//         isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'
//       }`}
//       initial={{ opacity: 0, x: isEven ? -100 : 100, y: 50 }}
//       animate={isInView ? { opacity: 1, x: 0, y: 0 } : {}}
//       transition={{ duration: 0.8, delay: index * 0.1 }}
//     >
//       {/* Content */}
//       <div className="w-full lg:w-5/12 mb-4 lg:mb-0">
//         <motion.div
//           className={`bg-white/80 backdrop-blur-md rounded-2xl p-8 shadow-xl border-2 transition-all duration-500 ${
//             isActive 
//               ? 'border-blue-500/50 shadow-2xl scale-105' 
//               : 'border-gray-200/60 scale-100'
//           }`}
//           whileHover={{ scale: 1.02, y: -5 }}
//         >
//           {/* Step Badge */}
//           <div className={`flex items-center gap-3 mb-4 ${isEven ? 'justify-start' : 'justify-end'}`}>
//             {isEven ? (
//               <>
//                 <motion.div 
//                   className={`w-3 h-3 rounded-full ${item.gradient} shadow-lg`}
//                   animate={isActive ? { scale: [1, 1.5, 1] } : { scale: 1 }}
//                   transition={{ duration: 2, repeat: Infinity }}
//                 />
//                 <span className="text-sm font-semibold text-gray-500">Step {item.step}</span>
//               </>
//             ) : (
//               <>
//                 <span className="text-sm font-semibold text-gray-500">Step {item.step}</span>
//                 <motion.div 
//                   className={`w-3 h-3 rounded-full ${item.gradient} shadow-lg`}
//                   animate={isActive ? { scale: [1, 1.5, 1] } : { scale: 1 }}
//                   transition={{ duration: 2, repeat: Infinity }}
//                 />
//               </>
//             )}
//           </div>

//           {/* Icon and Title */}
//           <div className={`flex items-center gap-4 mb-4 ${isEven ? 'justify-start' : 'justify-end'}`}>
//             {isEven && (
//               <motion.div 
//                 className="text-3xl"
//                 animate={isActive ? { rotate: [0, 10, -10, 0] } : {}}
//                 transition={{ duration: 0.5 }}
//               >
//                 {item.icon}
//               </motion.div>
//             )}
//             <motion.h3 
//               className="text-2xl font-bold text-gray-900"
//               animate={isActive ? { color: "#3B82F6" } : { color: "#1F2937" }}
//             >
//               {item.title}
//             </motion.h3>
//             {!isEven && (
//               <motion.div 
//                 className="text-3xl"
//                 animate={isActive ? { rotate: [0, -10, 10, 0] } : {}}
//                 transition={{ duration: 0.5 }}
//               >
//                 {item.icon}
//               </motion.div>
//             )}
//           </div>

//           {/* Description */}
//           <motion.p 
//             className="text-gray-600 mb-6 leading-relaxed"
//             animate={isActive ? { color: "#374151" } : {}}
//           >
//             {item.description}
//           </motion.p>

//           {/* Services */}
//           <div className={`flex flex-wrap gap-2 ${isEven ? 'justify-start' : 'justify-end'}`}>
//             {item.services.map((service, serviceIndex) => (
//               <motion.span
//                 key={serviceIndex}
//                 className="bg-gray-100/80 backdrop-blur-sm text-gray-700 px-3 py-1 rounded-full text-sm border border-gray-200/60"
//                 whileHover={{ scale: 1.05 }}
//                 animate={isActive ? { 
//                   backgroundColor: "rgba(255, 255, 255, 1)",
//                   borderColor: "rgba(59, 130, 246, 0.5)"
//                 } : {}}
//               >
//                 {service}
//               </motion.span>
//             ))}
//           </div>
//         </motion.div>
//       </div>

//       {/* Center Dot */}
//       <div className="hidden lg:flex w-2/12 justify-center relative z-10">
//         <motion.div 
//           className={`w-8 h-8 rounded-full border-4 border-white shadow-lg flex items-center justify-center ${
//             isActive ? item.gradient : 'bg-gray-300'
//           }`}
//           animate={isActive ? { 
//             scale: [1, 1.2, 1],
//           } : { scale: 1 }}
//           transition={{ duration: 2, repeat: Infinity }}
//         >
//           <div className="text-white text-xs font-bold">
//             {item.step}
//           </div>
//         </motion.div>
//       </div>

//       {/* Empty space for alternating layout */}
//       <div className="hidden lg:block w-5/12"></div>

//       {/* Mobile Dot */}
//       <div className="lg:hidden w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center text-white font-bold mt-4 shadow-lg">
//         {item.step}
//       </div>
//     </motion.div>
//   );
// };

// // Timeline Section with Scroll Progress
// const TimelineSection = () => {
//   const { progress, ref } = useScrollProgress();
//   const [activeStep, setActiveStep] = useState(0);

//   useEffect(() => {
//     // Calculate active step based on scroll progress
//     const step = Math.min(5, Math.floor(progress * 6));
//     setActiveStep(step);
//   }, [progress]);

//   const timelineData = [
//     {
//       step: "01",
//       title: "Discovery & Planning",
//       description: "We begin by understanding your business needs, goals, and technical requirements through detailed discussions and analysis.",
//       icon: "🔍",
//       services: ["Requirement Analysis", "Technical Planning", "Project Scope", "Timeline Estimation"],
//       gradient: "bg-gradient-to-r from-blue-500 to-cyan-500"
//     },
//     {
//       step: "02",
//       title: "UI/UX Design",
//       description: "Creating intuitive and engaging user interfaces with focus on user experience and modern design principles.",
//       icon: "🎨",
//       services: ["Wireframing", "Prototyping", "User Research", "Design Systems"],
//       gradient: "bg-gradient-to-r from-purple-500 to-pink-500"
//     },
//     {
//       step: "03",
//       title: "Development Phase",
//       description: "Agile development process with regular updates and iterations using modern technologies and best practices.",
//       icon: "💻",
//       services: ["Frontend Development", "Backend Development", "API Integration", "Code Reviews"],
//       gradient: "bg-gradient-to-r from-green-500 to-emerald-500"
//     },
//     {
//       step: "04",
//       title: "Testing & Quality",
//       description: "Comprehensive testing including unit tests, integration tests, and user acceptance testing to ensure quality.",
//       icon: "🧪",
//       services: ["Automated Testing", "Manual Testing", "Performance Testing", "Security Audits"],
//       gradient: "bg-gradient-to-r from-orange-500 to-red-500"
//     },
//     {
//       step: "05",
//       title: "Deployment",
//       description: "Seamless deployment to production environment with zero downtime and proper monitoring setup.",
//       icon: "🚀",
//       services: ["CI/CD Pipeline", "Cloud Deployment", "Database Migration", "SSL Configuration"],
//       gradient: "bg-gradient-to-r from-indigo-500 to-blue-500"
//     },
//     {
//       step: "06",
//       title: "Support & Maintenance",
//       description: "Ongoing support, maintenance, and feature updates to keep your application running smoothly.",
//       icon: "🔧",
//       services: ["24/7 Monitoring", "Regular Updates", "Performance Optimization", "Security Patches"],
//       gradient: "bg-gradient-to-r from-gray-600 to-gray-800"
//     }
//   ];

//   return (
//     <section id="process" className="py-20 relative overflow-hidden">
//       <div className="absolute inset-0 bg-gradient-to-br from-gray-50/80 via-white/60 to-blue-50/80 backdrop-blur-sm"></div>
//       <div className="relative container mx-auto px-6">
//         <div className="text-center mb-16">
//           <motion.h2 
//             className="text-4xl font-bold text-gray-900 mb-4"
//             initial={{ opacity: 0, y: 50 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//           >
//             Our Development Process
//           </motion.h2>
//           <motion.p 
//             className="text-lg text-gray-600 max-w-2xl mx-auto"
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: 0.2 }}
//           >
//             A structured approach to delivering high-quality software solutions
//           </motion.p>
//         </div>

//         {/* Animated Path Section */}
//         <motion.div 
//           className="mb-20"
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           transition={{ duration: 0.8 }}
//         >
//           <AnimatedPath />
//         </motion.div>

//         <div ref={ref} className="max-w-6xl mx-auto relative">
//           {/* Vertical Timeline Line Container */}
//           <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gray-200/60 rounded-full overflow-hidden">
//             {/* Animated Progress Line */}
//             <motion.div 
//               className="w-full bg-gradient-to-b from-blue-500 via-purple-500 to-green-500 rounded-full"
//               style={{ 
//                 scaleY: progress,
//                 transformOrigin: "top"
//               }}
//               transition={{ type: "spring", damping: 30, stiffness: 100 }}
//             />
//           </div>

//           {/* Timeline Items */}
//           <div className="relative">
//             {timelineData.map((item, index) => (
//               <TimelineItem 
//                 key={index} 
//                 item={item} 
//                 index={index} 
//                 isActive={index <= activeStep}
//               />
//             ))}
//           </div>
//         </div>

//         {/* CTA Section */}
//         <motion.div 
//           className="text-center mt-16"
//           initial={{ opacity: 0, y: 50 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6, delay: 0.4 }}
//         >
//           <motion.div 
//             className="bg-white/80 backdrop-blur-md rounded-2xl p-8 shadow-xl border border-gray-200/60 max-w-2xl mx-auto"
//             whileHover={{ scale: 1.02, y: -5 }}
//           >
//             <h3 className="text-2xl font-bold text-gray-900 mb-4">
//               Ready to Start Your Journey?
//             </h3>
//             <p className="text-gray-600 mb-6">
//               Let's follow this proven process to bring your idea to life
//             </p>
//             <motion.button 
//               className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-xl font-semibold shadow-lg"
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//             >
//               Start Your Project
//             </motion.button>
//           </motion.div>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// // Header Component
// const Header = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   return (
//     <motion.header 
//       className="bg-white/50 backdrop-blur-2xl shadow-lg sticky top-0 z-50 border-b border-gray-200/60"
//       initial={{ y: -100 }}
//       animate={{ y: 0 }}
//       transition={{ duration: 0.6, ease: "easeOut" }}
//     >
//       <div className="container mx-auto px-6">
//         <div className="flex items-center justify-between h-20">
//           {/* Logo */}
//           <motion.div 
//             className="flex items-center space-x-3"
//             whileHover={{ scale: 1.05 }}
//           >
//             <img className='w-10 h-10 rounded-xs' src={logo} alt="logo" />
//             <div>
//               <h1 className="text-xl font-bold text-gray-900">SKP Developers</h1>
//             </div>
//           </motion.div>

//           {/* Desktop Navigation */}
//           <nav className="hidden md:flex items-center space-x-8">
//             {['Services', 'Process', 'Technologies', 'Expertise', 'Contact'].map((item, index) => (
//               <motion.a
//                 key={item}
//                 href={`#${item.toLowerCase()}`}
//                 className="text-gray-700 hover:text-gray-900 font-medium transition-colors"
//                 whileHover={{ y: -2 }}
//                 whileTap={{ y: 0 }}
//                 initial={{ opacity: 0, y: -20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.5, delay: index * 0.1 }}
//               >
//                 {item}
//               </motion.a>
//             ))}
//           </nav>

//           {/* Mobile Menu Button */}
//           <motion.button 
//             className="md:hidden p-2"
//             onClick={() => setIsMenuOpen(!isMenuOpen)}
//             whileTap={{ scale: 0.95 }}
//           >
//             <div className="w-6 h-6 flex flex-col justify-center space-y-1">
//               <motion.span 
//                 className="block h-0.5 w-6 bg-gray-900"
//                 animate={{ rotate: isMenuOpen ? 45 : 0, y: isMenuOpen ? 6 : 0 }}
//               ></motion.span>
//               <motion.span 
//                 className="block h-0.5 w-6 bg-gray-900"
//                 animate={{ opacity: isMenuOpen ? 0 : 1 }}
//               ></motion.span>
//               <motion.span 
//                 className="block h-0.5 w-6 bg-gray-900"
//                 animate={{ rotate: isMenuOpen ? -45 : 0, y: isMenuOpen ? -6 : 0 }}
//               ></motion.span>
//             </div>
//           </motion.button>
//         </div>

//         {/* Mobile Navigation */}
//         {isMenuOpen && (
//           <motion.div 
//             className="md:hidden py-4 border-t border-gray-200/60 bg-white/80 backdrop-blur-md"
//             initial={{ opacity: 0, height: 0 }}
//             animate={{ opacity: 1, height: "auto" }}
//             exit={{ opacity: 0, height: 0 }}
//             transition={{ duration: 0.3 }}
//           >
//             <div className="flex flex-col space-y-4">
//               {['Services', 'Process', 'Technologies', 'Expertise', 'Contact'].map((item, index) => (
//                 <motion.a
//                   key={item}
//                   href={`#${item.toLowerCase()}`}
//                   className="text-gray-700 hover:text-gray-900 font-medium py-2"
//                   initial={{ opacity: 0, x: -20 }}
//                   animate={{ opacity: 1, x: 0 }}
//                   transition={{ duration: 0.3, delay: index * 0.1 }}
//                   onClick={() => setIsMenuOpen(false)}
//                 >
//                   {item}
//                 </motion.a>
//               ))}
//             </div>
//           </motion.div>
//         )}
//       </div>
//     </motion.header>
//   );
// };

// // Footer Component
// const Footer = () => {
//   return (
//     <motion.footer 
//       className="bg-gray-900/95 backdrop-blur-lg text-white"
//       initial={{ opacity: 0 }}
//       whileInView={{ opacity: 1 }}
//       transition={{ duration: 0.8 }}
//     >
//       {/* Main Footer Content */}
//       <div className="container mx-auto px-6 py-16">
//         <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
//           {/* Company Info */}
//           <div className="md:col-span-2">
//             <motion.div 
//               className="flex items-center space-x-3 mb-6"
//               whileHover={{ scale: 1.02 }}
//             >
//               <img className='w-10 h-10 rounded-xs' src={logo} alt="logo" />
//               <div>
//                 <h3 className="text-2xl font-bold text-white">SKP Developers</h3>
//               </div>
//             </motion.div>
//             <motion.p 
//               className="text-gray-400 mb-6 max-w-md"
//               whileHover={{ color: "#D1D5DB" }}
//             >
//               Professional software development services delivering robust, scalable, and innovative solutions 
//               for modern businesses worldwide.
//             </motion.p>
//             <div className="flex space-x-4">
//               {['📱', '💼', '🔗'].map((icon, index) => (
//                 <motion.div 
//                   key={index}
//                   className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center hover:bg-white/20 transition-all duration-300 cursor-pointer border border-white/20 hover:border-white/30"
//                   whileHover={{ scale: 1.1, rotate: 5 }}
//                   whileTap={{ scale: 0.9 }}
//                 >
//                   <span className="text-white">{icon}</span>
//                 </motion.div>
//               ))}
//             </div>
//           </div>

//           {/* Services */}
//           <div>
//             <h4 className="text-lg font-semibold mb-6">Services</h4>
//             <ul className="space-y-3">
//               {['Full Stack Java', 'MERN Stack', 'Mobile Apps', 'UI/UX Design', 'Cloud Deployment'].map((service, index) => (
//                 <motion.li key={index} whileHover={{ x: 5 }}>
//                   <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
//                     {service}
//                   </a>
//                 </motion.li>
//               ))}
//             </ul>
//           </div>

//           {/* Contact Info */}
//           <div>
//             <h4 className="text-lg font-semibold mb-6">Contact</h4>
//             <div className="space-y-4">
//               {[
//                 { icon: '📍', text: 'Development Studio' },
//                 { icon: '📞', text: '+1 (555) 123-4567' },
//                 { icon: '✉️', text: 'hello@skpdevelopers.com' }
//               ].map((item, index) => (
//                 <motion.div 
//                   key={index} 
//                   className="flex items-center space-x-3"
//                   whileHover={{ x: 5 }}
//                 >
//                   <div className="w-8 h-8 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center border border-white/20">
//                     <span className="text-sm">{item.icon}</span>
//                   </div>
//                   <span className="text-gray-400">{item.text}</span>
//                 </motion.div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Bottom Bar */}
//       <div className="border-t border-gray-800/60">
//         <div className="container mx-auto px-6 py-6">
//           <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
//             <p className="text-gray-400 text-sm">
//               © 2024 <span className="text-white font-semibold">SKP Developers</span>. All rights reserved.
//             </p>
//             <div className="flex space-x-6 text-sm">
//               {['Privacy Policy', 'Terms of Service', 'Cookies'].map((item, index) => (
//                 <motion.a 
//                   key={index} 
//                   href="#" 
//                   className="text-gray-400 hover:text-white transition-colors duration-300"
//                   whileHover={{ y: -2 }}
//                 >
//                   {item}
//                 </motion.a>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </motion.footer>
//   );
// };

// // Home Component
// const Home = () => {
//   const services = [
//     {
//       title: "Full Stack Java",
//       description: "Enterprise-grade applications using Java Spring Boot, Microservices, and modern frameworks",
//       icon: serviceIcons.fullstack,
//       features: ["Spring Boot", "Microservices", "REST APIs", "Database Design"]
//     },
//     {
//       title: "MERN Stack",
//       description: "Modern web applications with MongoDB, Express.js, React, and Node.js",
//       icon: serviceIcons.mern,
//       features: ["React.js", "Node.js", "MongoDB", "Real-time Features"]
//     },
//     {
//       title: "Mobile Applications",
//       description: "Cross-platform mobile apps for iOS and Android using React Native and Flutter",
//       icon: serviceIcons.mobile,
//       features: ["React Native", "Flutter", "iOS & Android", "App Store Deployment"]
//     },
//     {
//       title: "UI/UX Design",
//       description: "Beautiful, intuitive user interfaces with exceptional user experiences",
//       icon: serviceIcons.design,
//       features: ["User Research", "Wireframing", "Prototyping", "Design Systems"]
//     },
//     {
//       title: "Cloud Deployment",
//       description: "Scalable deployment on AWS, Azure, and Google Cloud platforms",
//       icon: serviceIcons.cloud,
//       features: ["AWS", "Azure", "Google Cloud", "Serverless"]
//     },
//     {
//       title: "DevOps & CI/CD",
//       description: "Automated deployment pipelines and infrastructure management",
//       icon: serviceIcons.devops,
//       features: ["Docker", "Kubernetes", "GitHub Actions", "Monitoring"]
//     }
//   ];

//   const technologies = [
//     { name: "Java", icon: icons.java, category: "Backend" },
//     { name: "Spring Boot", icon: icons.spring, category: "Backend" },
//     { name: "React", icon: icons.react, category: "Frontend" },
//     { name: "Node.js", icon: icons.nodejs, category: "Backend" },
//     { name: "Express.js", icon: icons.express, category: "Backend" },
//     { name: "MongoDB", icon: icons.mongodb, category: "Database" },
//     { name: "React Native", icon: icons.reactnative, category: "Mobile" },
//     { name: "Flutter", icon: icons.flutter, category: "Mobile" },
//     { name: "AWS", icon: icons.aws, category: "Cloud" },
//     { name: "Azure", icon: icons.azure, category: "Cloud" },
//     { name: "Google Cloud", icon: icons.googlecloud, category: "Cloud" },
//     { name: "Docker", icon: icons.docker, category: "DevOps" },
//     { name: "Kubernetes", icon: icons.kubernetes, category: "DevOps" },
//     { name: "Tailwind CSS", icon: icons.tailwind, category: "Frontend" },
//     { name: "TypeScript", icon: icons.typescript, category: "Frontend" },
//     { name: "Python", icon: icons.python, category: "Backend" },
//     { name: "GitHub", icon: icons.github, category: "DevOps" }
//   ];

//   const projects = [
//     {
//       category: "Java Full Stack",
//       examples: "Enterprise Systems • E-commerce Platforms • Banking Applications",
//       icon: icons.java
//     },
//     {
//       category: "MERN Stack", 
//       examples: "Social Media Apps • CRM Systems • Real-time Dashboards",
//       icon: icons.react
//     },
//     {
//       category: "Mobile Apps",
//       examples: "E-commerce Apps • Fitness Trackers • Business Tools",
//       icon: icons.reactnative
//     }
//   ];

//   return (
//     <div className="min-h-screen bg-white">
//       <Header />
      
//       {/* Hero Section */}
//       <section className="relative py-20 lg:py-32 overflow-hidden">
//         <div className="absolute inset-0 bg-gradient-to-br from-gray-50/80 via-white/60 to-gray-100/80 backdrop-blur-sm"></div>
//         <div className="relative container mx-auto px-6">
//           <div className="text-center max-w-4xl mx-auto">
//             {/* Professional Badge */}
//             <motion.div 
//               className="inline-flex items-center gap-3 bg-white/70 backdrop-blur-md border border-gray-200/60 text-gray-700 px-6 py-3 rounded-full text-base font-semibold mb-8 shadow-lg"
//               initial={{ opacity: 0, y: 30 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6 }}
//             >
//               <motion.div 
//                 className="w-2 h-2 bg-green-500 rounded-full"
//                 animate={{ scale: [1, 1.5, 1] }}
//                 transition={{ duration: 2, repeat: Infinity }}
//               ></motion.div>
//               Professional Software Development
//             </motion.div>

//             {/* Main Heading */}
//             <motion.h1 
//               className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight"
//               initial={{ opacity: 0, y: 50 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8, delay: 0.2 }}
//             >
//               SKP
//               <motion.span 
//                 className="block text-gray-800 mt-2"
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 transition={{ duration: 0.8, delay: 0.4 }}
//               >
//                 Developers
//               </motion.span>
//             </motion.h1>

//             {/* Subheading */}
//             <motion.p 
//               className="text-xl md:text-2xl text-gray-600 mb-12 leading-relaxed max-w-3xl mx-auto"
//               initial={{ opacity: 0, y: 30 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8, delay: 0.6 }}
//             >
//               We build <span className="font-semibold text-gray-800">scalable full-stack applications</span> 
//               {' '}with cutting-edge technologies and modern development practices
//             </motion.p>

//             {/* Stats */}
//             <motion.div 
//               className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-2xl mx-auto mb-16"
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ duration: 0.8, delay: 0.8 }}
//             >
//               {[
//                 { number: '50+', label: 'Projects Delivered' },
//                 { number: '5+', label: 'Years Experience' },
//                 { number: '100%', label: 'Client Satisfaction' },
//                 { number: '24/7', label: 'Support' }
//               ].map((stat, index) => (
//                 <motion.div 
//                   key={index} 
//                   className="text-center p-6 bg-white/70 backdrop-blur-md rounded-2xl shadow-lg border border-gray-200/60 hover:shadow-xl transition-all duration-300 hover:bg-white/90"
//                   whileHover={{ y: -5, scale: 1.05 }}
//                   whileTap={{ scale: 0.95 }}
//                   initial={{ opacity: 0, y: 30 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
//                 >
//                   <div className="text-2xl font-bold text-gray-900 mb-2">{stat.number}</div>
//                   <div className="text-gray-600 text-sm">{stat.label}</div>
//                 </motion.div>
//               ))}
//             </motion.div>

//             {/* CTA Buttons */}
//             <motion.div 
//               className="flex flex-col sm:flex-row gap-4 justify-center items-center"
//               initial={{ opacity: 0, y: 30 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8, delay: 1.2 }}
//             >
//               <motion.button 
//                 className="bg-gray-900 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-800 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center gap-3 group backdrop-blur-sm"
//                 whileHover={{ scale: 1.05, y: -2 }}
//                 whileTap={{ scale: 0.95 }}
//               >
//                 <span>Start Your Project</span>
//                 <motion.span 
//                   className="group-hover:translate-x-1 transition-transform"
//                   animate={{ x: [0, 5, 0] }}
//                   transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse" }}
//                 >
//                   →
//                 </motion.span>
//               </motion.button>
//               <motion.button 
//                 className="bg-white/70 backdrop-blur-md text-gray-700 px-8 py-4 rounded-xl font-semibold text-lg border-2 border-gray-300/60 hover:border-gray-800 hover:text-gray-900 transition-all duration-300 flex items-center gap-3 shadow-lg hover:shadow-xl"
//                 whileHover={{ scale: 1.05, y: -2 }}
//                 whileTap={{ scale: 0.95 }}
//               >
//                 <span>View Our Work</span>
//               </motion.button>
//             </motion.div>
//           </div>
//         </div>
//       </section>

//       {/* Services Section */}
//       <section id="services" className="py-20 relative">
//         <div className="absolute inset-0 bg-gradient-to-b from-white to-gray-50/50"></div>
//         <div className="relative container mx-auto px-6">
//           <div className="text-center mb-16">
//             <motion.h2 
//               className="text-4xl font-bold text-gray-900 mb-4"
//               initial={{ opacity: 0, y: 50 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6 }}
//             >
//               Our Services
//             </motion.h2>
//             <motion.p 
//               className="text-lg text-gray-600 max-w-2xl mx-auto"
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6, delay: 0.2 }}
//             >
//               Comprehensive software development solutions tailored to your business needs
//             </motion.p>
//           </div>
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {services.map((service, index) => (
//               <motion.div 
//                 key={index}
//                 className="bg-white/70 backdrop-blur-md border border-gray-200/60 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:border-gray-300/80 group hover:bg-white/90"
//                 initial={{ opacity: 0, y: 50 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.6, delay: index * 0.1 }}
//                 whileHover={{ y: -10, scale: 1.02 }}
//               >
//                 <motion.div 
//                   className="w-16 h-16 mb-6 flex items-center justify-center"
//                   whileHover={{ scale: 1.2, rotate: 5 }}
//                 >
//                   <img 
//                     src={service.icon} 
//                     alt={service.title}
//                     className="w-12 h-12 object-contain transition-all duration-300"
//                   />
//                 </motion.div>
//                 <h3 className="text-xl font-bold text-gray-900 mb-4">
//                   {service.title}
//                 </h3>
//                 <p className="text-gray-600 leading-relaxed mb-6">
//                   {service.description}
//                 </p>
//                 <div className="flex flex-wrap gap-2">
//                   {service.features.map((feature, idx) => (
//                     <motion.span 
//                       key={idx} 
//                       className="bg-gray-100/70 backdrop-blur-sm text-gray-700 px-3 py-1 rounded-full text-sm border border-gray-200/60"
//                       whileHover={{ scale: 1.05 }}
//                       whileTap={{ scale: 0.95 }}
//                     >
//                       {feature}
//                     </motion.span>
//                   ))}
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Timeline Section */}
//       <TimelineSection />

//       {/* Technology Stack */}
//       <section id="technologies" className="py-20 relative">
//         <div className="absolute inset-0 bg-gradient-to-b from-gray-50/50 to-white/50"></div>
//         <div className="relative container mx-auto px-6">
//           <div className="text-center mb-16">
//             <motion.h2 
//               className="text-4xl font-bold text-gray-900 mb-4"
//               initial={{ opacity: 0, y: 50 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6 }}
//             >
//               Technology Stack
//             </motion.h2>
//             <motion.p 
//               className="text-lg text-gray-600"
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6, delay: 0.2 }}
//             >
//               Leveraging modern technologies to build robust and scalable solutions
//             </motion.p>
//           </div>
          
//           {/* Technology Categories */}
//           <div className="max-w-6xl mx-auto">
//             {['Frontend', 'Backend', 'Mobile', 'Database', 'Cloud', 'DevOps'].map((category, catIndex) => (
//               <motion.div 
//                 key={category} 
//                 className="mb-12"
//                 initial={{ opacity: 0 }}
//                 whileInView={{ opacity: 1 }}
//                 transition={{ duration: 0.6, delay: catIndex * 0.1 }}
//               >
//                 <h3 className="text-2xl font-semibold text-gray-800 mb-6">{category}</h3>
//                 <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
//                   {technologies
//                     .filter(tech => tech.category === category)
//                     .map((tech, index) => (
//                       <motion.div 
//                         key={index}
//                         className="bg-white/70 backdrop-blur-md rounded-xl p-4 text-center shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200/60 group hover:bg-white/90"
//                         whileHover={{ scale: 1.05, y: -5 }}
//                         whileTap={{ scale: 0.95 }}
//                         initial={{ opacity: 0, scale: 0.8 }}
//                         whileInView={{ opacity: 1, scale: 1 }}
//                         transition={{ duration: 0.4, delay: index * 0.05 }}
//                       >
//                         <motion.div 
//                           className="w-12 h-12 mx-auto mb-3 flex items-center justify-center"
//                           whileHover={{ scale: 1.2, rotate: 5 }}
//                         >
//                           <img 
//                             src={tech.icon} 
//                             alt={tech.name}
//                             className="w-10 h-10 object-contain transition-all duration-300"
//                           />
//                         </motion.div>
//                         <span className="text-gray-800 font-semibold text-sm">
//                           {tech.name}
//                         </span>
//                       </motion.div>
//                     ))
//                   }
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Project Types */}
//       <section id="expertise" className="py-20 relative">
//         <div className="absolute inset-0 bg-gradient-to-b from-white to-gray-50/50"></div>
//         <div className="relative container mx-auto px-6">
//           <div className="text-center mb-16">
//             <motion.h2 
//               className="text-4xl font-bold text-gray-900 mb-4"
//               initial={{ opacity: 0, y: 50 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6 }}
//             >
//               Our Expertise
//             </motion.h2>
//             <motion.p 
//               className="text-lg text-gray-600 max-w-2xl mx-auto"
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6, delay: 0.2 }}
//             >
//               Specialized solutions across various domains and industries
//             </motion.p>
//           </div>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
//             {projects.map((project, index) => (
//               <motion.div 
//                 key={index}
//                 className="bg-gradient-to-br from-gray-900/90 to-gray-800/90 backdrop-blur-md rounded-2xl p-8 text-white shadow-2xl hover:shadow-3xl transition-all duration-300 group border border-gray-700/50"
//                 initial={{ opacity: 0, y: 50 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.6, delay: index * 0.1 }}
//                 whileHover={{ y: -10, scale: 1.02 }}
//               >
//                 <motion.div 
//                   className="w-16 h-16 mb-4 flex items-center justify-center"
//                   whileHover={{ scale: 1.2, rotate: 5 }}
//                 >
//                   <img 
//                     src={project.icon} 
//                     alt={project.category}
//                     className="w-12 h-12 object-contain filter brightness-0 invert"
//                   />
//                 </motion.div>
//                 <h3 className="text-xl font-bold mb-4">
//                   {project.category}
//                 </h3>
//                 <p className="text-gray-300 leading-relaxed mb-6">
//                   {project.examples}
//                 </p>
//                 <div className="mt-6">
//                   <motion.span 
//                     className="bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-lg text-sm font-semibold inline-block hover:bg-white/30 transition-all duration-300 cursor-pointer border border-white/20"
//                     whileHover={{ scale: 1.05 }}
//                     whileTap={{ scale: 0.95 }}
//                   >
//                     Learn More
//                   </motion.span>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* CTA Section */}
//       <section id="contact" className="py-20 relative">
//         <div className="absolute inset-0 bg-gradient-to-br from-gray-900/95 to-gray-800/95 backdrop-blur-lg"></div>
//         <div className="relative container mx-auto px-6 text-center">
//           <motion.h2 
//             className="text-4xl md:text-5xl font-bold text-white mb-6"
//             initial={{ opacity: 0, y: 50 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//           >
//             Ready to Start Your Project?
//           </motion.h2>
//           <motion.p 
//             className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed"
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 0.2 }}
//           >
//             Let's discuss how we can help bring your ideas to life with our technical expertise and innovative solutions.
//           </motion.p>
//           <motion.div 
//             className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 0.4 }}
//           >
//             <motion.button 
//               className="bg-white/20 backdrop-blur-md text-white px-10 py-4 rounded-xl font-semibold text-lg hover:bg-white/30 transition-all duration-300 shadow-lg hover:shadow-xl border border-white/20"
//               whileHover={{ scale: 1.05, y: -2 }}
//               whileTap={{ scale: 0.95 }}
//             >
//               Get Started Today
//             </motion.button>
//             <motion.button 
//               className="bg-transparent border-2 border-white/60 text-white px-10 py-4 rounded-xl font-semibold text-lg hover:bg-white hover:text-gray-900 transition-all duration-300 backdrop-blur-sm"
//               whileHover={{ scale: 1.05, y: -2 }}
//               whileTap={{ scale: 0.95 }}
//             >
//               Schedule Consultation
//             </motion.button>
//           </motion.div>
          
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-white max-w-4xl mx-auto">
//             {[
//               { icon: "⚡", title: "Fast Delivery", desc: "Efficient agile development process" },
//               { icon: "🛡️", title: "Quality Code", desc: "Clean, tested, and maintainable" },
//               { icon: "📱", title: "Multi-Platform", desc: "Web, mobile, and cloud solutions" }
//             ].map((feature, index) => (
//               <motion.div 
//                 key={index} 
//                 className="text-center p-6 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 hover:bg-white/15 transition-all duration-300"
//                 whileHover={{ y: -5, scale: 1.02 }}
//               >
//                 <div className="text-3xl mb-4">{feature.icon}</div>
//                 <div className="font-semibold text-lg mb-2">{feature.title}</div>
//                 <div className="text-gray-300">{feature.desc}</div>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       <Footer />
//     </div>
//   );
// };

// export default Home;