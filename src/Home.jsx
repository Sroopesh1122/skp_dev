import React from 'react';

const Home = () => {
  const teamName = import.meta.env.VITE_NAME || "SKP Developers";

  const services = [
    {
      title: "Full Stack Java",
      description: "Enterprise-grade applications using Java Spring Boot, Microservices, and modern frameworks",
      icon: "☕"
    },
    {
      title: "MERN Stack",
      description: "Modern web applications with MongoDB, Express.js, React, and Node.js",
      icon: "⚛️"
    },
    {
      title: "Mobile Applications",
      description: "Cross-platform mobile apps for iOS and Android using React Native and Flutter",
      icon: "📱"
    },
    {
      title: "UI/UX Design",
      description: "Beautiful, intuitive user interfaces with exceptional user experiences",
      icon: "🎨"
    },
    {
      title: "Cloud Deployment",
      description: "Scalable deployment on AWS, Azure, and Google Cloud platforms",
      icon: "☁️"
    },
    {
      title: "DevOps & CI/CD",
      description: "Automated deployment pipelines and infrastructure management",
      icon: "⚙️"
    }
  ];

  const technologies = [
    { name: "Java", icon: "☕" },
    { name: "Spring Boot", icon: "🌱" },
    { name: "React", icon: "⚛️" },
    { name: "Node.js", icon: "🟢" },
    { name: "MongoDB", icon: "🍃" },
    { name: "React Native", icon: "📱" },
    { name: "Flutter", icon: "💙" },
    { name: "AWS", icon: "☁️" },
    { name: "Docker", icon: "🐳" },
    { name: "Tailwind CSS", icon: "🎨" },
    { name: "TypeScript", icon: "🔷" },
    { name: "Python", icon: "🐍" }
  ];

  const projects = [
    {
      category: "Java Full Stack",
      examples: "Enterprise Systems • E-commerce Platforms • Banking Applications"
    },
    {
      category: "MERN Stack", 
      examples: "Social Media Apps • CRM Systems • Real-time Dashboards"
    },
    {
      category: "Mobile Apps",
      examples: "E-commerce Apps • Fitness Trackers • Business Tools"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-white py-20 border-b border-gray-100">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto">
            {/* Professional Badge */}
            {/* <div className="inline-flex items-center gap-2 bg-orange-50 text-orange-600 px-4 py-2 rounded-full text-sm font-semibold mb-8 border border-orange-200">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              Professional Software Development
            </div> */}

            {/* Main Heading */}
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              SKP
              <span className="block text-orange-600">Developers</span>
            </h1>

            {/* Subheading */}
            <p className="text-xl md:text-2xl text-gray-600 mb-10 leading-relaxed">
              We build <span className="font-semibold text-orange-600">scalable full-stack applications</span> 
              {' '}with Java, MERN stack, and mobile solutions
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto mb-12">
              {[
                { number: '50+', label: 'Projects Delivered' },
                { number: '5+', label: 'Years Experience' },
                { number: '100%', label: 'Client Satisfaction' },
                { number: '24/7', label: 'Support' }
              ].map((stat, index) => (
                <div key={index} className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="text-2xl font-bold text-gray-900 mb-1">{stat.number}</div>
                  <div className="text-gray-600 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="bg-orange-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-orange-700 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center gap-3">
                <span>Start Your Project</span>
                <span>→</span>
              </button>
              <button className="bg-white text-gray-700 px-8 py-4 rounded-xl font-semibold text-lg border-2 border-gray-300 hover:border-orange-500 hover:text-orange-600 transition-all duration-300 flex items-center gap-3">
                <span>View Our Work</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
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
                className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 hover:border-orange-300 group"
              >
                <div className="text-5xl mb-6 text-orange-600 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Technology Stack
            </h2>
            <p className="text-lg text-gray-600">
              Leveraging modern technologies to build robust and scalable solutions
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 max-w-6xl mx-auto">
            {technologies.map((tech, index) => (
              <div 
                key={index}
                className="bg-white rounded-lg p-6 text-center shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105 border border-gray-200"
              >
                <div className="text-3xl mb-3 text-gray-700">
                  {tech.icon}
                </div>
                <span className="text-gray-800 font-semibold">
                  {tech.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Types */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Expertise
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {projects.map((project, index) => (
              <div 
                key={index}
                className="bg-orange-600 rounded-2xl p-8 text-white shadow-lg"
              >
                <h3 className="text-xl font-bold mb-4">
                  {project.category}
                </h3>
                <p className="text-orange-100 leading-relaxed">
                  {project.examples}
                </p>
                <div className="mt-6">
                  <span className="bg-white text-orange-600 px-4 py-2 rounded-lg text-sm font-semibold inline-block">
                    Learn More
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
            Let's discuss how we can help bring your ideas to life with our technical expertise
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="bg-orange-600 text-white px-10 py-4 rounded-xl font-semibold text-lg hover:bg-orange-700 transition-all duration-300 shadow-lg hover:shadow-xl">
              Get Started Today
            </button>
            <button className="bg-transparent border-2 border-white text-white px-10 py-4 rounded-xl font-semibold text-lg hover:bg-white hover:text-gray-900 transition-all duration-300">
              Schedule Consultation
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-white max-w-4xl mx-auto mt-16">
            {[
              { icon: "⚡", title: "Fast Delivery", desc: "Efficient development process" },
              { icon: "🛡️", title: "Quality Code", desc: "Clean and maintainable" },
              { icon: "📱", title: "Multi-Platform", desc: "Web and mobile solutions" }
            ].map((feature, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl mb-4">{feature.icon}</div>
                <div className="font-semibold text-lg mb-2">{feature.title}</div>
                <div className="text-gray-400">{feature.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-orange-400 mb-4">
              SKP Developers
            </h3>
            <p className="text-gray-300 mb-6 max-w-xl mx-auto">
              Professional software development services for modern businesses
            </p>
            <div className="flex flex-wrap justify-center gap-8 text-gray-400 mb-6">
              <div className="text-center">
                <div className="font-medium mb-1">Location</div>
                <div>Development Studio</div>
              </div>
              <div className="text-center">
                <div className="font-medium mb-1">Phone</div>
                <div>+1 (555) 123-4567</div>
              </div>
              <div className="text-center">
                <div className="font-medium mb-1">Email</div>
                <div>hello@skpdevelopers.com</div>
              </div>
            </div>
            <div className="border-t border-gray-700 pt-6">
              <p className="text-gray-400">
                © 2024 <span className="text-orange-400 font-semibold">SKP Developers</span>. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;