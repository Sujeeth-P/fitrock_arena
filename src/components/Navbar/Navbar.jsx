import { useState, useEffect } from 'react';
import './Navbar.css';

const NAV_LINKS = [
    { label: 'Home', href: '#hero' },
    { label: 'About', href: '#about' },
    { label: 'Programs', href: '#services' },
    { label: 'Results', href: '#results' },
    { label: 'Plans', href: '#plans' },
    { label: 'Trainers', href: '#trainers' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('hero');

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 60);
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Track active section based on scroll position
    useEffect(() => {
        const sectionIds = NAV_LINKS.map(l => l.href.replace('#', ''));

        const handleScrollActive = () => {
            const scrollY = window.scrollY + 120; // offset for navbar height
            let current = sectionIds[0];

            for (const id of sectionIds) {
                const el = document.getElementById(id);
                if (el && el.offsetTop <= scrollY) {
                    current = id;
                }
            }

            setActiveSection(current);
        };

        window.addEventListener('scroll', handleScrollActive, { passive: true });
        handleScrollActive(); // run once on mount

        return () => window.removeEventListener('scroll', handleScrollActive);
    }, []);

    const handleNavClick = (e, href) => {
        e.preventDefault();
        setMobileOpen(false);
        const el = document.querySelector(href);
        if (el) {
            el.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`} id="navbar">
            <div className="navbar__inner container">
                <a href="#hero" className="navbar__logo" onClick={(e) => handleNavClick(e, '#hero')}>
                    {/* <span className="navbar__logo-icon">⚡</span> */}
                    <span className="navbar__logo-text">FITROCK</span>
                    <span className="navbar__logo-sub">ARENA</span>
                </a>

                <ul className={`navbar__links ${mobileOpen ? 'navbar__links--open' : ''}`}>
                    {NAV_LINKS.map((link) => (
                        <li key={link.href}>
                            <a
                                href={link.href}
                                className={`navbar__link ${activeSection === link.href.replace('#', '') ? 'navbar__link--active' : ''}`}
                                onClick={(e) => handleNavClick(e, link.href)}
                            >
                                {link.label}
                            </a>
                        </li>
                    ))}
                    <li className="navbar__cta-mobile">
                        <a href="#contact" className="btn btn-primary" onClick={(e) => handleNavClick(e, '#contact')}>
                            Join Now
                        </a>
                    </li>
                </ul>

                <a href="#contact" className="btn btn-primary navbar__cta-desktop" onClick={(e) => handleNavClick(e, '#contact')}>
                    Join Now
                </a>

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
