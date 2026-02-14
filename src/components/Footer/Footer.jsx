import './Footer.css';

const QUICK_LINKS = [
    { label: 'Home', href: '#hero' },
    { label: 'About', href: '#about' },
    { label: 'Programs', href: '#services' },
    { label: 'Plans', href: '#plans' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Contact', href: '#contact' },
];

const PROGRAMS = [
    'Strength Training',
    'Weight Loss',
    'Personal Training',
    'CrossFit',
    'Yoga & Flexibility',
    'Transformation',
];

export default function Footer() {
    const handleClick = (e, href) => {
        e.preventDefault();
        document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <footer className="footer">
            <div className="footer__inner container">
                <div className="footer__top">
                    <div className="footer__brand">
                        <a href="#hero" className="footer__logo" onClick={(e) => handleClick(e, '#hero')}>
                            <span className="footer__logo-icon">⚡</span>
                            <span className="footer__logo-text">FITROCK</span>
                            <span className="footer__logo-sub">ARENA</span>
                        </a>
                        <p className="footer__tagline">
                            Transform your body. Elevate your mind. Unleash your potential at the city's most
                            advanced fitness arena.
                        </p>
                        <div className="footer__socials">
                            {['I', 'F', 'Y', 'T'].map((letter, i) => (
                                <a key={i} href="#" className="footer__social" aria-label={`Social ${i + 1}`}>
                                    {letter}
                                </a>
                            ))}
                        </div>
                    </div>

                    <div className="footer__links-group">
                        <h4 className="footer__heading">Quick Links</h4>
                        <ul className="footer__links">
                            {QUICK_LINKS.map((link) => (
                                <li key={link.href}>
                                    <a href={link.href} onClick={(e) => handleClick(e, link.href)}>{link.label}</a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="footer__links-group">
                        <h4 className="footer__heading">Programs</h4>
                        <ul className="footer__links">
                            {PROGRAMS.map((p) => (
                                <li key={p}>
                                    <a href="#services" onClick={(e) => handleClick(e, '#services')}>{p}</a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="footer__links-group">
                        <h4 className="footer__heading">Contact Info</h4>
                        <ul className="footer__links footer__links--contact">
                            <li>
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>
                                123 Fitness Avenue, Chennai
                            </li>
                            <li>
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
                                +91 98765 43210
                            </li>
                            <li>
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>
                                info@fitrockarena.com
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="footer__bottom">
                    <p>&copy; {new Date().getFullYear()} FitRock Arena. All rights reserved.</p>
                    <div className="footer__bottom-links">
                        <a href="#">Privacy Policy</a>
                        <a href="#">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
