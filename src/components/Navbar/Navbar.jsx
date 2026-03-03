import { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import './Navbar.css';

const NAV_LINKS = [
    { label: 'Home', to: '/' },
    { label: 'About', to: '/about' },
    { label: 'Climbing', to: '/climbing' },
    { label: 'Construction', to: '/construction' },
    { label: 'Contact', to: '/contact' },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll();
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close mobile menu on route change
    useEffect(() => {
        setMobileOpen(false);
    }, [location.pathname]);

    // Prevent body scroll when mobile menu is open
    useEffect(() => {
        document.body.style.overflow = mobileOpen ? 'hidden' : '';
        return () => { document.body.style.overflow = ''; };
    }, [mobileOpen]);

    return (
        <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`} id="navbar">
            <div className="navbar__inner container">
                <Link to="/" className="navbar__logo">
                    <span className="navbar__logo-text">FITROCK</span>
                    <span className="navbar__logo-sub">ARENA</span>
                </Link>

                {/* Desktop + Mobile links */}
                <ul className={`navbar__links ${mobileOpen ? 'navbar__links--open' : ''}`}>
                    {NAV_LINKS.map((link) => (
                        <li key={link.to}>
                            <NavLink
                                to={link.to}
                                className={({ isActive }) =>
                                    `navbar__link ${isActive ? 'navbar__link--active' : ''}`
                                }
                                end={link.to === '/'}
                            >
                                {link.label}
                            </NavLink>
                        </li>
                    ))}
                    <li className="navbar__cta-mobile">
                        <Link to="/contact" className="btn btn-primary">
                            Get in Touch
                        </Link>
                    </li>
                </ul>

                <Link to="/contact" className="btn btn-primary navbar__cta-desktop">
                    Get in Touch
                </Link>

                <button
                    className={`navbar__hamburger ${mobileOpen ? 'navbar__hamburger--open' : ''}`}
                    onClick={() => setMobileOpen(!mobileOpen)}
                    aria-label="Toggle navigation menu"
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>
        </nav>
    );
}
