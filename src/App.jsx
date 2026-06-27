import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Certificates from './pages/Certificates';
import About from './pages/About';
import Contact from './pages/Contact';
import Ferrofluid from './components/Ferrofluid';
import './App.css';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-slate-950 text-white overflow-x-hidden">
        {/* Background Ferrofluid Animation */}
        <div className="fixed inset-0 -z-10 bg-slate-950">
          <div className="absolute inset-0 opacity-25">
            <Ferrofluid
              colors={["#ffffff","#ffffff","#ffffff"]}
              speed={0.5}
              scale={1.6}
              turbulence={1}
              fluidity={0.1}
              rimWidth={0.2}
              sharpness={2.5}
              shimmer={1.5}
              glow={2}
              flowDirection="down"
              opacity={1}
              mouseInteraction
              mouseStrength={1}
              mouseRadius={0.35}
            />
          </div>
        </div>

        <Navigation />
        
        <main className="relative z-10">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/certificates" element={<Certificates />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
