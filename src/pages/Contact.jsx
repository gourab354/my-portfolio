import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, Instagram, Zap } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log(formData);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const contactMethods = [
    {
      icon: Mail,
      label: 'Email',
      value: 'gourabd911@gmail.com',
      link: 'mailto:gourabd911@gmail.com'
    },
    {
      icon: Github,
      label: 'GitHub',
      value: '@gourab354',
      link: 'https://github.com/gourab354'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: '@gourab354',
      link: 'https://linkedin.com/in/gourab354'
    },
    {
      icon: Instagram,
      label: 'Instagram',
      value: '@user_cooked98',
      link: 'https://instagram.com/user_cooked98'
    }
  ];

  return (
    <div className="pt-24 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-pink-500 bg-clip-text text-transparent">
              Let's Connect
            </span>
          </h1>
          <p className="text-xl text-gray-400">
            Have a project in mind? Let's collaborate and build something amazing together!
          </p>
        </motion.div>

        {/* Contact Methods */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12"
        >
          {contactMethods.map((method) => {
            const Icon = method.icon;
            return (
              <a
                key={method.label}
                href={method.link}
                target="_blank"
                rel="noopener noreferrer"
                className="p-6 rounded-xl bg-gradient-to-br from-slate-800 to-slate-900 border border-cyan-500/20 hover:border-cyan-500/50 transition-all duration-300 group"
              >
                <div className="flex items-center gap-4">
                  <Icon className="w-8 h-8 text-cyan-400 group-hover:text-cyan-300 transition-colors" />
                  <div>
                    <div className="text-sm text-gray-500 uppercase tracking-wider">{method.label}</div>
                    <div className="text-white font-semibold group-hover:text-cyan-400 transition-colors">{method.value}</div>
                  </div>
                </div>
              </a>
            );
          })}
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="p-8 rounded-xl bg-gradient-to-br from-slate-800 to-slate-900 border border-cyan-500/20"
        >
          <h2 className="text-2xl font-bold mb-6 text-white">Send me a message</h2>

          {submitted && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-6 p-4 rounded-lg bg-green-500/10 border border-green-500/50 text-green-400"
            >
              ✓ Thank you! Your message has been sent. I'll get back to you soon!
            </motion.div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold text-gray-300 mb-2">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 bg-slate-900 border border-cyan-500/30 text-white rounded-lg focus:outline-none focus:border-cyan-500 transition-colors placeholder-gray-600"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-300 mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 bg-slate-900 border border-cyan-500/30 text-white rounded-lg focus:outline-none focus:border-cyan-500 transition-colors placeholder-gray-600"
                  placeholder="your.email@example.com"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-300 mb-2">Subject</label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 bg-slate-900 border border-cyan-500/30 text-white rounded-lg focus:outline-none focus:border-cyan-500 transition-colors placeholder-gray-600"
                placeholder="What's this about?"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-300 mb-2">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="6"
                className="w-full px-4 py-2 bg-slate-900 border border-cyan-500/30 text-white rounded-lg focus:outline-none focus:border-cyan-500 transition-colors placeholder-gray-600 resize-none"
                placeholder="Tell me about your project or idea..."
              ></textarea>
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="w-full py-3 bg-gradient-to-r from-cyan-500 to-pink-500 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-all flex items-center justify-center gap-2"
            >
              <Zap size={20} />
              Send Message
            </motion.button>
          </form>
        </motion.div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-12 p-8 rounded-xl bg-gradient-to-r from-cyan-500/10 via-pink-500/10 to-cyan-500/10 border border-cyan-500/30 text-center"
        >
          <h3 className="text-xl font-bold text-white mb-3">Interested in collaborating?</h3>
          <p className="text-gray-300 mb-4">
            I'm always excited to work on IoT projects, hardware innovations, and web applications. 
            Whether you have an idea or need expertise, let's connect and create something impactful together!
          </p>
          <p className="text-cyan-400 font-semibold">
            💡 Looking for: IoT developers, hackathon partners, open-source contributors
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
