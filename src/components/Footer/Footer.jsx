import { Link } from 'react-router-dom';
import './Footer.css';

const QUICK_LINKS = [
    { label: 'Home', to: '/' },
    { label: 'About', to: '/about' },
    { label: 'Climbing', to: '/climbing' },
    { label: 'Construction', to: '/construction' },
    { label: 'Contact', to: '/contact' },
];

const SERVICES = [
    'Indoor Climbing',
    'Bouldering',
    'Rope Climbing',
    'Wall Construction',
    'Wall Design',
    'Training Programs',
];

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer__inner container">
                <div className="footer__top">
                    <div className="footer__brand">
                        <Link to="/" className="footer__logo">
                            <span className="footer__logo-text">FITROCK</span>
                            <span className="footer__logo-sub">ARENA</span>
                        </Link>
                        <p className="footer__tagline">
                            Where passion meets the wall. India's premier destination for indoor climbing
                            and professional climbing wall construction.
                        </p>
                        <div className="footer__socials">
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="footer__social" aria-label="Instagram">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /></svg>
                            </a>
                            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="footer__social" aria-label="Facebook">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
                            </a>
                            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="footer__social" aria-label="YouTube">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19.13C5.12 19.56 12 19.56 12 19.56s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.43z" /><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" /></svg>
                            </a>
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="footer__social" aria-label="Twitter">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" /></svg>
                            </a>
                        </div>
                    </div>

                    <div className="footer__links-group">
                        <h4 className="footer__heading">Quick Links</h4>
                        <ul className="footer__links">
                            {QUICK_LINKS.map((link) => (
                                <li key={link.to}>
                                    <Link to={link.to}>{link.label}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="footer__links-group">
                        <h4 className="footer__heading">Services</h4>
                        <ul className="footer__links">
                            {SERVICES.map((s) => (
                                <li key={s}>
                                    <Link to="/climbing">{s}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="footer__links-group">
                        <h4 className="footer__heading">Contact Info</h4>
                        <ul className="footer__links footer__links--contact">
                            <li>
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>
                                Chennai, Tamil Nadu
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
