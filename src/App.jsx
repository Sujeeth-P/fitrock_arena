import { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Climbing from './pages/Climbing/Climbing';
import Construction from './pages/Construction/Construction';
import Contact from './pages/Contact/Contact';
import './App.css';

export default function App() {
  const [loading, setLoading] = useState(true);
  const [scrollProgress, setScrollProgress] = useState(0);
  const location = useLocation();

  /* Loading Screen */
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  /* Scroll Progress */
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(docHeight > 0 ? (scrollTop / docHeight) * 100 : 0);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname]);

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

      {/* Always-present Navbar */}
      <Navbar />
      <ScrollToTop />

      {/* Page Routes */}
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/climbing" element={<Climbing />} />
          <Route path="/construction" element={<Construction />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      {/* Footer */}
      <Footer />

      {/* Back to Top */}
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
