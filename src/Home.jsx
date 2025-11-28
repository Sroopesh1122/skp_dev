import React, { useState } from 'react';

// Import icons (you'll need to install these or use your own)
// For demo purposes, I'm using placeholder image URLs. Replace with actual icons.
const icons = {
  java: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
  spring: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg",
  react: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  nodejs: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  mongodb: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  reactnative: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  flutter: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg",
  aws: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg",
  docker: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
  tailwind: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
  typescript: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  python: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  express: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
  kubernetes: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg",
  github: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
  azure: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg",
  googlecloud: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg"
};

const serviceIcons = {
  fullstack: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
  mern: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  mobile: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/reactnative/reactnative-original.svg",
  design: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
  cloud: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg",
  devops: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg"
};

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white/50 backdrop-blur-2xl shadow-lg sticky top-0 z-50 border-b border-gray-200/60">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gray-900 rounded-lg flex items-center justify-center backdrop-blur-sm">
              <span className="text-white font-bold text-lg">SKP</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">SKP Developers</h1>
              <p className="text-xs text-gray-500">Software Solutions</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#services" className="text-gray-700 hover:text-gray-900 font-medium transition-colors">
              Services
            </a>
            <a href="#technologies" className="text-gray-700 hover:text-gray-900 font-medium transition-colors">
              Technologies
            </a>
            <a href="#expertise" className="text-gray-700 hover:text-gray-900 font-medium transition-colors">
              Expertise
            </a>
            <a href="#contact" className="text-gray-700 hover:text-gray-900 font-medium transition-colors">
              Contact
            </a>
            
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className="w-6 h-6 flex flex-col justify-center space-y-1">
              <span className={`block h-0.5 w-6 bg-gray-900 transition-all ${isMenuOpen ? 'rotate-45 translate-y-1' : ''}`}></span>
              <span className={`block h-0.5 w-6 bg-gray-900 transition-all ${isMenuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`block h-0.5 w-6 bg-gray-900 transition-all ${isMenuOpen ? '-rotate-45 -translate-y-1' : ''}`}></span>
            </div>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200/60 bg-white/80 backdrop-blur-md">
            <div className="flex flex-col space-y-4">
              <a href="#services" className="text-gray-700 hover:text-gray-900 font-medium py-2">
                Services
              </a>
              <a href="#technologies" className="text-gray-700 hover:text-gray-900 font-medium py-2">
                Technologies
              </a>
              <a href="#expertise" className="text-gray-700 hover:text-gray-900 font-medium py-2">
                Expertise
              </a>
              <a href="#contact" className="text-gray-700 hover:text-gray-900 font-medium py-2">
                Contact
              </a>
              
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

const Footer = () => {
  return (
    <footer className="bg-gray-900/95 backdrop-blur-lg text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center border border-white/20">
                <span className="text-white font-bold text-lg">SKP</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">SKP Developers</h3>
              </div>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              Professional software development services delivering robust, scalable, and innovative solutions 
              for modern businesses worldwide.
            </p>
            <div className="flex space-x-4">
              {['📱', '💼', '🔗'].map((icon, index) => (
                <div 
                  key={index}
                  className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center hover:bg-white/20 transition-all duration-300 cursor-pointer border border-white/20 hover:border-white/30"
                >
                  <span className="text-white">{icon}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Services</h4>
            <ul className="space-y-3">
              {['Full Stack Java', 'MERN Stack', 'Mobile Apps', 'UI/UX Design', 'Cloud Deployment'].map((service, index) => (
                <li key={index}>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact</h4>
            <div className="space-y-4">
              {[
                { icon: '📍', text: 'Development Studio' },
                { icon: '📞', text: '+1 (555) 123-4567' },
                { icon: '✉️', text: 'hello@skpdevelopers.com' }
              ].map((item, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center border border-white/20">
                    <span className="text-sm">{item.icon}</span>
                  </div>
                  <span className="text-gray-400">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800/60">
        <div className="container mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © 2024 <span className="text-white font-semibold">SKP Developers</span>. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              {['Privacy Policy', 'Terms of Service', 'Cookies'].map((item, index) => (
                <a key={index} href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

const Home = () => {
  const services = [
    {
      title: "Full Stack Java",
      description: "Enterprise-grade applications using Java Spring Boot, Microservices, and modern frameworks",
      icon: serviceIcons.fullstack,
      features: ["Spring Boot", "Microservices", "REST APIs", "Database Design"]
    },
    {
      title: "MERN Stack",
      description: "Modern web applications with MongoDB, Express.js, React, and Node.js",
      icon: serviceIcons.mern,
      features: ["React.js", "Node.js", "MongoDB", "Real-time Features"]
    },
    {
      title: "Mobile Applications",
      description: "Cross-platform mobile apps for iOS and Android using React Native and Flutter",
      icon: serviceIcons.mobile,
      features: ["React Native", "Flutter", "iOS & Android", "App Store Deployment"]
    },
    {
      title: "UI/UX Design",
      description: "Beautiful, intuitive user interfaces with exceptional user experiences",
      icon: serviceIcons.design,
      features: ["User Research", "Wireframing", "Prototyping", "Design Systems"]
    },
    {
      title: "Cloud Deployment",
      description: "Scalable deployment on AWS, Azure, and Google Cloud platforms",
      icon: serviceIcons.cloud,
      features: ["AWS", "Azure", "Google Cloud", "Serverless"]
    },
    {
      title: "DevOps & CI/CD",
      description: "Automated deployment pipelines and infrastructure management",
      icon: serviceIcons.devops,
      features: ["Docker", "Kubernetes", "GitHub Actions", "Monitoring"]
    }
  ];

  const technologies = [
    { name: "Java", icon: icons.java, category: "Backend" },
    { name: "Spring Boot", icon: icons.spring, category: "Backend" },
    { name: "React", icon: icons.react, category: "Frontend" },
    { name: "Node.js", icon: icons.nodejs, category: "Backend" },
    { name: "Express.js", icon: icons.express, category: "Backend" },
    { name: "MongoDB", icon: icons.mongodb, category: "Database" },
    { name: "React Native", icon: icons.reactnative, category: "Mobile" },
    { name: "Flutter", icon: icons.flutter, category: "Mobile" },
    { name: "AWS", icon: icons.aws, category: "Cloud" },
    { name: "Azure", icon: icons.azure, category: "Cloud" },
    { name: "Google Cloud", icon: icons.googlecloud, category: "Cloud" },
    { name: "Docker", icon: icons.docker, category: "DevOps" },
    { name: "Kubernetes", icon: icons.kubernetes, category: "DevOps" },
    { name: "Tailwind CSS", icon: icons.tailwind, category: "Frontend" },
    { name: "TypeScript", icon: icons.typescript, category: "Frontend" },
    { name: "Python", icon: icons.python, category: "Backend" },
    { name: "GitHub", icon: icons.github, category: "DevOps" }
  ];

  const projects = [
    {
      category: "Java Full Stack",
      examples: "Enterprise Systems • E-commerce Platforms • Banking Applications",
      icon: icons.java
    },
    {
      category: "MERN Stack", 
      examples: "Social Media Apps • CRM Systems • Real-time Dashboards",
      icon: icons.react
    },
    {
      category: "Mobile Apps",
      examples: "E-commerce Apps • Fitness Trackers • Business Tools",
      icon: icons.reactnative
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50/80 via-white/60 to-gray-100/80 backdrop-blur-sm"></div>
        <div className="relative container mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto">
            {/* Professional Badge */}
            <div className="inline-flex items-center gap-3 bg-white/70 backdrop-blur-md border border-gray-200/60 text-gray-700 px-6 py-3 rounded-full text-base font-semibold mb-8 shadow-lg">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              Professional Software Development
            </div>

            {/* Main Heading */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              SKP
              <span className="block text-gray-800 mt-2">Developers</span>
            </h1>

            {/* Subheading */}
            <p className="text-xl md:text-2xl text-gray-600 mb-12 leading-relaxed max-w-3xl mx-auto">
              We build <span className="font-semibold text-gray-800">scalable full-stack applications</span> 
              {' '}with cutting-edge technologies and modern development practices
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-2xl mx-auto mb-16">
              {[
                { number: '50+', label: 'Projects Delivered' },
                { number: '5+', label: 'Years Experience' },
                { number: '100%', label: 'Client Satisfaction' },
                { number: '24/7', label: 'Support' }
              ].map((stat, index) => (
                <div 
                  key={index} 
                  className="text-center p-6 bg-white/70 backdrop-blur-md rounded-2xl shadow-lg border border-gray-200/60 hover:shadow-xl transition-all duration-300 hover:bg-white/90"
                >
                  <div className="text-2xl font-bold text-gray-900 mb-2">{stat.number}</div>
                  <div className="text-gray-600 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="bg-gray-900 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-800 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center gap-3 group backdrop-blur-sm">
                <span>Start Your Project</span>
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </button>
              <button className="bg-white/70 backdrop-blur-md text-gray-700 px-8 py-4 rounded-xl font-semibold text-lg border-2 border-gray-300/60 hover:border-gray-800 hover:text-gray-900 transition-all duration-300 flex items-center gap-3 shadow-lg hover:shadow-xl">
                <span>View Our Work</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-white to-gray-50/50"></div>
        <div className="relative container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive software development solutions tailored to your business needs
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={index}
                className="bg-white/70 backdrop-blur-md border border-gray-200/60 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:border-gray-300/80 group hover:bg-white/90"
              >
                <div className="w-16 h-16 mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <img 
                    src={service.icon} 
                    alt={service.title}
                    className="w-12 h-12 object-contain transition-all duration-300"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  {service.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {service.features.map((feature, idx) => (
                    <span 
                      key={idx} 
                      className="bg-gray-100/70 backdrop-blur-sm text-gray-700 px-3 py-1 rounded-full text-sm border border-gray-200/60"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section id="technologies" className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-50/50 to-white/50"></div>
        <div className="relative container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Technology Stack
            </h2>
            <p className="text-lg text-gray-600">
              Leveraging modern technologies to build robust and scalable solutions
            </p>
          </div>
          
          {/* Technology Categories */}
          <div className="max-w-6xl mx-auto">
            {['Frontend', 'Backend', 'Mobile', 'Database', 'Cloud', 'DevOps'].map(category => (
              <div key={category} className="mb-12">
                <h3 className="text-2xl font-semibold text-gray-800 mb-6">{category}</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
                  {technologies
                    .filter(tech => tech.category === category)
                    .map((tech, index) => (
                      <div 
                        key={index}
                        className="bg-white/70 backdrop-blur-md rounded-xl p-4 text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-gray-200/60 group hover:bg-white/90"
                      >
                        <div className="w-12 h-12 mx-auto mb-3 flex items-center justify-center group-hover:scale-110 transition-transform">
                          <img 
                            src={tech.icon} 
                            alt={tech.name}
                            className="w-10 h-10 object-contain  transition-all duration-300"
                          />
                        </div>
                        <span className="text-gray-800 font-semibold text-sm">
                          {tech.name}
                        </span>
                      </div>
                    ))
                  }
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Types */}
      <section id="expertise" className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-white to-gray-50/50"></div>
        <div className="relative container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Expertise
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Specialized solutions across various domains and industries
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {projects.map((project, index) => (
              <div 
                key={index}
                className="bg-gradient-to-br from-gray-900/90 to-gray-800/90 backdrop-blur-md rounded-2xl p-8 text-white shadow-2xl hover:shadow-3xl transition-all duration-300 group border border-gray-700/50"
              >
                <div className="w-16 h-16 mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <img 
                    src={project.icon} 
                    alt={project.category}
                    className="w-12 h-12 object-contain filter brightness-0 invert"
                  />
                </div>
                <h3 className="text-xl font-bold mb-4">
                  {project.category}
                </h3>
                <p className="text-gray-300 leading-relaxed mb-6">
                  {project.examples}
                </p>
                <div className="mt-6">
                  <span className="bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-lg text-sm font-semibold inline-block hover:bg-white/30 transition-all duration-300 cursor-pointer border border-white/20">
                    Learn More
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/95 to-gray-800/95 backdrop-blur-lg"></div>
        <div className="relative container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
            Let's discuss how we can help bring your ideas to life with our technical expertise and innovative solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <button className="bg-white/20 backdrop-blur-md text-white px-10 py-4 rounded-xl font-semibold text-lg hover:bg-white/30 transition-all duration-300 shadow-lg hover:shadow-xl border border-white/20">
              Get Started Today
            </button>
            <button className="bg-transparent border-2 border-white/60 text-white px-10 py-4 rounded-xl font-semibold text-lg hover:bg-white hover:text-gray-900 transition-all duration-300 backdrop-blur-sm">
              Schedule Consultation
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-white max-w-4xl mx-auto">
            {[
              { icon: "⚡", title: "Fast Delivery", desc: "Efficient agile development process" },
              { icon: "🛡️", title: "Quality Code", desc: "Clean, tested, and maintainable" },
              { icon: "📱", title: "Multi-Platform", desc: "Web, mobile, and cloud solutions" }
            ].map((feature, index) => (
              <div 
                key={index} 
                className="text-center p-6 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 hover:bg-white/15 transition-all duration-300"
              >
                <div className="text-3xl mb-4">{feature.icon}</div>
                <div className="font-semibold text-lg mb-2">{feature.title}</div>
                <div className="text-gray-300">{feature.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;