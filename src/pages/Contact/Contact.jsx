import { useState, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import PageHero from '../../components/PageHero/PageHero';
import './Contact.css';

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
    });
    const [submitted, setSubmitted] = useState(false);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo('.contact-form__wrapper',
                { opacity: 0, x: -60 },
                {
                    opacity: 1, x: 0, duration: 0.8, ease: 'power3.out',
                    scrollTrigger: { trigger: '.contact-section', start: 'top 80%' }
                }
            );

            gsap.fromTo('.contact-info',
                { opacity: 0, x: 60 },
                {
                    opacity: 1, x: 0, duration: 0.8, ease: 'power3.out',
                    scrollTrigger: { trigger: '.contact-section', start: 'top 80%' }
                }
            );

            gsap.fromTo('.contact-info__card',
                { opacity: 0, y: 30 },
                {
                    opacity: 1, y: 0, duration: 0.5, stagger: 0.1, ease: 'power3.out',
                    scrollTrigger: { trigger: '.contact-info', start: 'top 85%' }
                }
            );
        });
        return () => ctx.revert();
    }, []);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
        setTimeout(() => setSubmitted(false), 4000);
        setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
    };

    return (
        <>
            <PageHero
                title="CONTACT US"
                subtitle="Let's talk climbing walls. Reach out for gym visits, construction inquiries, or just to say hello."
                backgroundImage="/fitrock_arena/images/contact-bg.png"
                breadcrumb="Contact"
            />

            <section className="contact-section">
                <div className="contact-section__inner container">
                    {/* Form */}
                    <div className="contact-form__wrapper">
                        <div className="contact-form__header">
                            <span className="section-label">Send a Message</span>
                            <h2 className="section-title">GET IN <span>TOUCH</span></h2>
                            <p className="contact-form__desc">
                                Fill out the form below and we'll get back to you within 24 hours.
                            </p>
                        </div>

                        <form className="contact-form" onSubmit={handleSubmit}>
                            <div className="contact-form__row">
                                <div className="contact-form__field">
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
                                </div>
                                <div className="contact-form__field">
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
                                </div>
                            </div>

                            <div className="contact-form__row">
                                <div className="contact-form__field">
                                    <input
                                        type="tel"
                                        name="phone"
                                        id="contact-phone"
                                        placeholder="Phone Number"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        autoComplete="tel"
                                    />
                                </div>
                                <div className="contact-form__field">
                                    <select
                                        name="subject"
                                        id="contact-subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        required
                                    >
                                        <option value="" disabled>Select Subject</option>
                                        <option value="climbing">Climbing / Gym Visit</option>
                                        <option value="construction">Wall Construction</option>
                                        <option value="events">Events & Competitions</option>
                                        <option value="partnership">Partnership</option>
                                        <option value="other">Other</option>
                                    </select>
                                </div>
                            </div>

                            <div className="contact-form__field">
                                <textarea
                                    name="message"
                                    id="contact-message"
                                    placeholder="Your Message"
                                    rows="5"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className={`btn btn-primary contact-form__submit ${submitted ? 'contact-form__submit--success' : ''}`}
                            >
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

                    {/* Contact Info */}
                    <div className="contact-info">
                        <div className="contact-info__card">
                            <div className="contact-info__card-icon">
                                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                                    <circle cx="12" cy="10" r="3" />
                                </svg>
                            </div>
                            <div>
                                <h3>Visit Us</h3>
                                <p>FitRock Arena<br />123 Climbing Avenue<br />Chennai, Tamil Nadu 600017</p>
                            </div>
                        </div>

                        <div className="contact-info__card">
                            <div className="contact-info__card-icon">
                                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                                </svg>
                            </div>
                            <div>
                                <h3>Call Us</h3>
                                <p>+91 98765 43210<br />+91 87654 32109</p>
                            </div>
                        </div>

                        <div className="contact-info__card">
                            <div className="contact-info__card-icon">
                                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                                    <polyline points="22,6 12,13 2,6" />
                                </svg>
                            </div>
                            <div>
                                <h3>Email Us</h3>
                                <p>info@fitrockarena.com<br />construction@fitrockarena.com</p>
                            </div>
                        </div>

                        <div className="contact-info__card">
                            <div className="contact-info__card-icon">
                                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <circle cx="12" cy="12" r="10" />
                                    <polyline points="12 6 12 12 16 14" />
                                </svg>
                            </div>
                            <div>
                                <h3>Hours</h3>
                                <p>Mon – Sat: 6:00 AM – 10:00 PM<br />Sunday: 7:00 AM – 8:00 PM</p>
                            </div>
                        </div>

                        {/* Map */}
                        <div className="contact-info__map">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.4538429837613!2d80.2384!3d13.0827!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTPCsDA0JzU3LjciTiA4MMKwMTQnMTguMiJF!5e0!3m2!1sen!2sin!4v1!5m2!1sen!2sin"
                                width="100%"
                                height="220"
                                style={{ border: 0, borderRadius: 'var(--radius-md)' }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="FitRock Arena Location"
                            ></iframe>
                        </div>

                        {/* Socials */}
                        <div className="contact-info__socials">
                            <h3>Follow Us</h3>
                            <div className="contact-info__social-links">
                                {[
                                    { name: 'Instagram', letter: 'I' },
                                    { name: 'Facebook', letter: 'F' },
                                    { name: 'YouTube', letter: 'Y' },
                                    { name: 'Twitter', letter: 'X' },
                                ].map((s) => (
                                    <a key={s.name} href="#" className="contact-info__social" aria-label={s.name}>
                                        {s.letter}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
