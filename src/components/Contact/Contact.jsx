import { useState } from 'react';
import './Contact.css';

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        message: '',
    });
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
        setTimeout(() => setSubmitted(false), 4000);
        setFormData({ name: '', phone: '', email: '', message: '' });
    };

    return (
        <section className="contact" id="contact">
            <div className="contact__inner container">
                <div className="contact__header reveal">
                    <span className="section-label">Get In Touch</span>
                    <h2 className="section-title">CONTACT US</h2>
                    <p className="section-subtitle" style={{ margin: '0 auto' }}>
                        Ready to start your transformation? Reach out and we'll get back to you within 24 hours.
                    </p>
                </div>

                <div className="contact__content">
                    {/* Form */}
                    <div className="contact__form-wrapper reveal-left">
                        <form className="contact__form" onSubmit={handleSubmit}>
                            <div className="contact__field">
                                <input
                                    type="text"
                                    name="name"
                                    id="contact-name"
                                    placeholder="Your Name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    autoComplete="name"
                                />
                                <div className="contact__field-glow"></div>
                            </div>

                            <div className="contact__field">
                                <input
                                    type="tel"
                                    name="phone"
                                    id="contact-phone"
                                    placeholder="Phone Number"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    required
                                    autoComplete="tel"
                                />
                                <div className="contact__field-glow"></div>
                            </div>

                            <div className="contact__field">
                                <input
                                    type="email"
                                    name="email"
                                    id="contact-email"
                                    placeholder="Email Address"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    autoComplete="email"
                                />
                                <div className="contact__field-glow"></div>
                            </div>

                            <div className="contact__field">
                                <textarea
                                    name="message"
                                    id="contact-message"
                                    placeholder="Your Message"
                                    rows="4"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                ></textarea>
                                <div className="contact__field-glow"></div>
                            </div>

                            <button type="submit" className={`btn btn-primary contact__submit ${submitted ? 'contact__submit--success' : ''}`}>
                                {submitted ? (
                                    <>
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                            <polyline points="20 6 9 17 4 12" />
                                        </svg>
                                        Message Sent!
                                    </>
                                ) : (
                                    <>
                                        Send Message
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                            <line x1="22" y1="2" x2="11" y2="13" />
                                            <polygon points="22 2 15 22 11 13 2 9 22 2" />
                                        </svg>
                                    </>
                                )}
                            </button>
                        </form>
                    </div>

                    {/* Info side */}
                    <div className="contact__info reveal-right">
                        <div className="contact__map">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.4538429837613!2d80.2384!3d13.0827!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTPCsDA0JzU3LjciTiA4MMKwMTQnMTguMiJF!5e0!3m2!1sen!2sin!4v1!5m2!1sen!2sin"
                                width="100%"
                                height="250"
                                style={{ border: 0, borderRadius: 'var(--radius-md)' }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="FitRock Arena Location"
                            ></iframe>
                        </div>

                        <div className="contact__details">
                            <div className="contact__detail">
                                <div className="contact__detail-icon">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                                        <circle cx="12" cy="10" r="3" />
                                    </svg>
                                </div>
                                <div>
                                    <h4>Address</h4>
                                    <p>123 Fitness Avenue, T. Nagar<br />Chennai, Tamil Nadu 600017</p>
                                </div>
                            </div>

                            <div className="contact__detail">
                                <div className="contact__detail-icon">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                                    </svg>
                                </div>
                                <div>
                                    <h4>Phone</h4>
                                    <p>+91 98765 43210</p>
                                </div>
                            </div>

                            <div className="contact__detail">
                                <div className="contact__detail-icon">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <circle cx="12" cy="12" r="10" />
                                        <polyline points="12 6 12 12 16 14" />
                                    </svg>
                                </div>
                                <div>
                                    <h4>Hours</h4>
                                    <p>Mon - Sat: 5:00 AM - 11:00 PM<br />Sunday: 6:00 AM - 8:00 PM</p>
                                </div>
                            </div>
                        </div>

                        <div className="contact__socials">
                            {['Instagram', 'Facebook', 'YouTube', 'Twitter'].map((s) => (
                                <a key={s} href="#" className="contact__social" aria-label={s}>
                                    {s.charAt(0)}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
