import { useState, useEffect } from 'react';
import { useScrollReveal } from './hooks/useScrollReveal';
import { useScrollProgress } from './hooks/useScrollProgress';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Services from './components/Services/Services';
import Results from './components/Results/Results';
import Plans from './components/Plans/Plans';
import Trainers from './components/Trainers/Trainers';
import Gallery from './components/Gallery/Gallery';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import './App.css';

export default function App() {
  const [loading, setLoading] = useState(true);
  const scrollProgress = useScrollProgress();

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1800);
    return () => clearTimeout(timer);
  }, []);

  useScrollReveal();

  return (
    <>
      {/* Loading Screen */}
      <div className={`loading-screen ${!loading ? 'hidden' : ''}`}>
        <div className="loading-logo">FITROCK ARENA</div>
        <div className="loading-bar">
          <div className="loading-bar-inner"></div>
        </div>
      </div>

      {/* Scroll Progress Bar */}
      <div className="scroll-progress" style={{ width: `${scrollProgress}%` }}></div>

      {/* Navbar */}
      <Navbar />

      {/* Sections */}
      <main>
        <Hero />
        <About />
        <Services />
        <Results />
        <Plans />
        <Trainers />
        <Gallery />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Back to top button */}
      <BackToTop show={scrollProgress > 10} />
    </>
  );
}

function BackToTop({ show }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button
      className={`back-to-top ${show ? 'back-to-top--visible' : ''}`}
      onClick={scrollToTop}
      aria-label="Back to top"
    >
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="18 15 12 9 6 15" />
      </svg>
    </button>
  );
}
