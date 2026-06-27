import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Code2, Zap } from 'lucide-react';

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'Smart Medicine Box',
      description: 'Intelligent automated medicine dispenser with real-time web monitoring, 5-state machine, ultrasonic detection, and NTP time sync.',
      category: 'hardware',
      tags: ['ESP32', 'Node.js', 'WebSocket', 'ST7735 TFT', 'IoT'],
      image: '💊',
      highlights: [
        'ESP32 firmware with state machine',
        'Real-time web dashboard',
        'WebSocket communication',
        'TFT display with live updates',
        'Event logging system'
      ],
      github: 'https://github.com/gourab354',
      demo: '#'
    },
    {
      id: 2,
      title: 'Home Automation System',
      description: 'Complete smart home solution with Arduino, relay modules, and mobile app control for IoT devices.',
      category: 'hardware',
      tags: ['Arduino', 'Home Assistant', 'Python', 'MQTT', 'IoT'],
      image: '🏠',
      highlights: [
        'Multiple sensor integration',
        'Mobile app control',
        'Automated schedules',
        'Energy monitoring',
        'Voice integration ready'
      ],
      github: 'https://github.com/gourab354',
      demo: '#'
    },
    {
      id: 3,
      title: 'Real-time Weather Station',
      description: 'IoT weather monitoring system with multiple sensors and cloud data logging for environmental tracking.',
      category: 'hardware',
      tags: ['ESP32', 'Sensors', 'Google Cloud', 'Python', 'Data Analytics'],
      image: '🌤️',
      highlights: [
        'Multiple sensor integration',
        'Real-time cloud sync',
        'Data visualization',
        'Historical analysis',
        'API integration'
      ],
      github: 'https://github.com/gourab354',
      demo: '#'
    },
    {
      id: 4,
      title: 'Portfolio Website',
      description: 'Modern, interactive portfolio with Framer Motion animations, Tailwind CSS, and certificate management system.',
      category: 'web',
      tags: ['React', 'Framer Motion', 'Tailwind CSS', 'Vite', 'Responsive Design'],
      image: '🎨',
      highlights: [
        'Smooth animations',
        'Responsive design',
        'Certificate gallery',
        'Project showcase',
        'Contact form'
      ],
      github: 'https://github.com/gourab354/gourab-portfolio',
      demo: '#'
    },
    {
      id: 5,
      title: 'ML-Based Anomaly Detection',
      description: 'Machine learning model for detecting anomalies in IoT sensor data using TensorFlow and real-time analysis.',
      category: 'ml',
      tags: ['TensorFlow', 'Python', 'NumPy', 'Pandas', 'Data Science'],
      image: '🤖',
      highlights: [
        'TensorFlow LSTM model',
        'Real-time inference',
        'Data preprocessing',
        'Model optimization',
        'Visualization dashboard'
      ],
      github: 'https://github.com/gourab354',
      demo: '#'
    },
    {
      id: 6,
      title: 'REST API for IoT Gateway',
      description: 'Scalable Node.js REST API with WebSocket support for managing multiple IoT devices and real-time communication.',
      category: 'backend',
      tags: ['Node.js', 'Express', 'WebSocket', 'MongoDB', 'REST API'],
      image: '⚙️',
      highlights: [
        'RESTful architecture',
        'Real-time WebSocket',
        'Database integration',
        'Authentication',
        'Error handling'
      ],
      github: 'https://github.com/gourab354',
      demo: '#'
    }
  ];

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'hardware', label: 'Hardware/IoT' },
    { id: 'web', label: 'Web Development' },
    { id: 'ml', label: 'Machine Learning' },
    { id: 'backend', label: 'Backend' }
  ];

  const filtered = selectedCategory === 'all' 
    ? projects 
    : projects.filter(p => p.category === selectedCategory);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <div className="pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-pink-500 bg-clip-text text-transparent">
              Projects & Innovations
            </span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            A collection of my IoT hardware projects, web applications, and machine learning solutions
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
                selectedCategory === cat.id
                  ? 'bg-cyan-500 text-white shadow-lg shadow-cyan-500/50'
                  : 'bg-slate-800 text-gray-300 hover:bg-slate-700 border border-cyan-500/30'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          key={selectedCategory}
        >
          {filtered.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-slate-800 to-slate-900 border border-cyan-500/20 hover:border-cyan-500/50 transition-all duration-300"
            >
              {/* Background Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 to-pink-500/0 group-hover:from-cyan-500/10 group-hover:to-pink-500/10 transition-all duration-300"></div>

              {/* Content */}
              <div className="relative z-10 p-6 h-full flex flex-col">
                {/* Icon & Title */}
                <div className="mb-4">
                  <div className="text-5xl mb-3">{project.image}</div>
                  <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{project.description}</p>
                </div>

                {/* Highlights */}
                <div className="mb-4 flex-grow">
                  <div className="text-xs text-cyan-400 font-semibold mb-2 uppercase tracking-wider">Key Features</div>
                  <ul className="space-y-1">
                    {project.highlights.slice(0, 3).map((highlight, idx) => (
                      <li key={idx} className="text-xs text-gray-400 flex items-start gap-2">
                        <span className="text-cyan-400 mt-1">•</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tags */}
                <div className="mb-4 flex flex-wrap gap-2">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 text-xs bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-cyan-500/10 hover:bg-cyan-500/20 border border-cyan-500/50 text-cyan-400 rounded-lg transition-all text-sm font-semibold"
                  >
                    <Github size={16} />
                    Code
                  </a>
                  <a
                    href={project.demo}
                    className="flex items-center gap-2 px-4 py-2 bg-pink-500/10 hover:bg-pink-500/20 border border-pink-500/50 text-pink-400 rounded-lg transition-all text-sm font-semibold"
                  >
                    <ExternalLink size={16} />
                    Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;
