import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Plus, Download, ExternalLink } from 'lucide-react';

const Certificates = () => {
  const [certificates, setCertificates] = useState([
    {
      id: 1,
      title: 'AOTFIESTA Winner',
      issuer: 'AOTFIESTA 2024',
      date: 'June 2024',
      description: 'Won the AOTFIESTA championship',
      image: '/certificates/aotfiesta.jpg',
      link: '#',
      category: 'competition'
    },
    {
      id: 2,
      title: 'Hackathon Finalist Badge',
      issuer: 'Multiple Hackathons',
      date: '2023-2024',
      description: '3× Hackathon Finalist, 1× Hackathon Winner',
      image: '/certificates/hackathon.jpg',
      link: '#',
      category: 'hackathon'
    },
    {
      id: 3,
      title: 'IoT & Embedded Systems',
      issuer: 'FOSET 2024',
      date: 'May 2024',
      description: '1st Prize in FOSET IoT competition',
      image: '/certificates/foset.jpg',
      link: '#',
      category: 'award'
    }
  ]);

  const categories = [
    { id: 'all', label: 'All Certificates' },
    { id: 'competition', label: 'Competitions' },
    { id: 'hackathon', label: 'Hackathons' },
    { id: 'award', label: 'Awards' },
    { id: 'course', label: 'Courses' }
  ];

  const [selectedCategory, setSelectedCategory] = useState('all');
  const [showAddForm, setShowAddForm] = useState(false);

  const filtered = selectedCategory === 'all'
    ? certificates
    : certificates.filter(c => c.category === selectedCategory);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
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
          className="mb-12 flex flex-col md:flex-row justify-between items-start md:items-center gap-6"
        >
          <div>
            <h1 className="text-5xl md:text-6xl font-bold mb-4">
              <span className="bg-gradient-to-r from-cyan-400 to-pink-500 bg-clip-text text-transparent">
                Certifications & Achievements
              </span>
            </h1>
            <p className="text-xl text-gray-400">
              My professional credentials, certifications, and competition achievements
            </p>
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setShowAddForm(!showAddForm)}
            className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-pink-500 text-white rounded-lg font-semibold flex items-center gap-2 hover:shadow-lg hover:shadow-cyan-500/50 transition-all"
          >
            <Plus size={20} />
            Add Certificate
          </motion.button>
        </motion.div>

        {/* Add Certificate Form */}
        {showAddForm && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="mb-12 p-8 rounded-xl bg-gradient-to-br from-slate-800 to-slate-900 border border-cyan-500/30"
          >
            <h2 className="text-2xl font-bold mb-6">Add New Certificate</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Certificate Title"
                className="px-4 py-2 bg-slate-900 border border-cyan-500/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500"
              />
              <input
                type="text"
                placeholder="Issuer Organization"
                className="px-4 py-2 bg-slate-900 border border-cyan-500/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500"
              />
              <input
                type="date"
                className="px-4 py-2 bg-slate-900 border border-cyan-500/30 rounded-lg text-white focus:outline-none focus:border-cyan-500"
              />
              <select className="px-4 py-2 bg-slate-900 border border-cyan-500/30 rounded-lg text-white focus:outline-none focus:border-cyan-500">
                <option value="">Select Category</option>
                <option value="competition">Competition</option>
                <option value="hackathon">Hackathon</option>
                <option value="award">Award</option>
                <option value="course">Course</option>
              </select>
            </div>
            <textarea
              placeholder="Description"
              className="w-full mt-4 px-4 py-2 bg-slate-900 border border-cyan-500/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500"
              rows="3"
            ></textarea>
            <div className="flex gap-4 mt-6">
              <button className="px-6 py-2 bg-cyan-500/20 hover:bg-cyan-500/30 border border-cyan-500/50 text-cyan-400 rounded-lg transition-all font-semibold">
                Submit
              </button>
              <button
                onClick={() => setShowAddForm(false)}
                className="px-6 py-2 bg-slate-700/50 hover:bg-slate-700 border border-gray-600 text-gray-300 rounded-lg transition-all"
              >
                Cancel
              </button>
            </div>
          </motion.div>
        )}

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

        {/* Certificates Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          key={selectedCategory}
        >
          {filtered.length > 0 ? (
            filtered.map((cert) => (
              <motion.div
                key={cert.id}
                variants={itemVariants}
                className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-slate-800 to-slate-900 border border-cyan-500/20 hover:border-cyan-500/50 transition-all duration-300 overflow-hidden"
              >
                {/* Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 to-pink-500/0 group-hover:from-cyan-500/10 group-hover:to-pink-500/10 transition-all duration-300"></div>

                {/* Image Placeholder */}
                <div className="relative h-48 bg-gradient-to-br from-cyan-500/20 to-pink-500/20 flex items-center justify-center overflow-hidden">
                  <div className="text-6xl opacity-20">📜</div>
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>
                </div>

                {/* Content */}
                <div className="relative z-10 p-6">
                  <span className="inline-block px-3 py-1 text-xs font-semibold text-cyan-400 bg-cyan-500/10 border border-cyan-500/30 rounded-full mb-3">
                    {cert.category.toUpperCase()}
                  </span>

                  <h3 className="text-xl font-bold text-white mb-2">{cert.title}</h3>
                  <p className="text-gray-400 text-sm mb-2">{cert.issuer}</p>
                  <p className="text-gray-500 text-xs mb-4">{cert.date}</p>
                  <p className="text-gray-400 text-sm mb-4">{cert.description}</p>

                  <div className="flex gap-3">
                    <a
                      href={cert.link}
                      className="flex items-center gap-2 px-4 py-2 bg-cyan-500/10 hover:bg-cyan-500/20 border border-cyan-500/50 text-cyan-400 rounded-lg transition-all text-sm font-semibold flex-1 justify-center"
                    >
                      <Download size={16} />
                      Download
                    </a>
                    <a
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-pink-500/10 hover:bg-pink-500/20 border border-pink-500/50 text-pink-400 rounded-lg transition-all text-sm font-semibold flex-1 justify-center"
                    >
                      <ExternalLink size={16} />
                      View
                    </a>
                  </div>
                </div>
              </motion.div>
            ))
          ) : (
            <motion.div
              variants={itemVariants}
              className="col-span-full text-center py-12"
            >
              <p className="text-gray-400 text-lg">No certificates in this category yet</p>
            </motion.div>
          )}
        </motion.div>

        {/* Info Box */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-16 p-8 rounded-xl bg-gradient-to-r from-cyan-500/10 via-pink-500/10 to-cyan-500/10 border border-cyan-500/30"
        >
          <h3 className="text-xl font-bold text-white mb-3">📈 Certificate Management</h3>
          <p className="text-gray-300 mb-4">
            This portfolio supports easy certificate management. You can add, edit, and showcase your professional credentials, certifications, and achievements. Upload images or links to your certificates to build a comprehensive professional profile.
          </p>
          <p className="text-cyan-400 text-sm">
            💡 Tip: Click "Add Certificate" to upload your own certifications from competitions, courses, and professional achievements.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Certificates;
