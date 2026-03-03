import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Home.css';

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
    const heroRef = useRef(null);
    const aboutRef = useRef(null);
    const climbingRef = useRef(null);
    const constructionRef = useRef(null);
    const ctaRef = useRef(null);

    /* ---- Hero Animation ---- */
    useEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({ delay: 0.3 });

            tl.fromTo('.home-hero__title',
                { opacity: 0, y: 80 },
                { opacity: 1, y: 0, duration: 1, ease: 'power3.out' }
            );
            tl.fromTo('.home-hero__subtitle',
                { opacity: 0, y: 40 },
                { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out' },
                '-=0.5'
            );
            tl.fromTo('.home-hero__cta-group',
                { opacity: 0, y: 30 },
                { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' },
                '-=0.3'
            );
            tl.fromTo('.home-hero__stats',
                { opacity: 0, y: 30 },
                { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' },
                '-=0.2'
            );
            tl.fromTo('.home-hero__scroll',
                { opacity: 0 },
                { opacity: 1, duration: 0.5 },
                '-=0.1'
            );
        }, heroRef);
        return () => ctx.revert();
    }, []);

    /* ---- Scroll Animations ---- */
    useEffect(() => {
        const ctx = gsap.context(() => {
            // About preview
            gsap.fromTo('.home-about__image',
                { opacity: 0, x: -80 },
                {
                    opacity: 1, x: 0, duration: 0.9, ease: 'power3.out',
                    scrollTrigger: { trigger: '.home-about', start: 'top 80%' }
                }
            );
            gsap.fromTo('.home-about__content > *',
                { opacity: 0, y: 40 },
                {
                    opacity: 1, y: 0, duration: 0.7, stagger: 0.12, ease: 'power3.out',
                    scrollTrigger: { trigger: '.home-about', start: 'top 75%' }
                }
            );

            // Climbing preview
            gsap.fromTo('.home-climbing__card',
                { opacity: 0, y: 60, scale: 0.95 },
                {
                    opacity: 1, y: 0, scale: 1, duration: 0.7, stagger: 0.15, ease: 'power3.out',
                    scrollTrigger: { trigger: '.home-climbing', start: 'top 80%' }
                }
            );

            // Construction preview
            gsap.fromTo('.home-construction__image',
                { opacity: 0, x: 80 },
                {
                    opacity: 1, x: 0, duration: 0.9, ease: 'power3.out',
                    scrollTrigger: { trigger: '.home-construction', start: 'top 80%' }
                }
            );
            gsap.fromTo('.home-construction__content > *',
                { opacity: 0, y: 40 },
                {
                    opacity: 1, y: 0, duration: 0.7, stagger: 0.12, ease: 'power3.out',
                    scrollTrigger: { trigger: '.home-construction', start: 'top 75%' }
                }
            );

            // CTA Section
            gsap.fromTo('.home-cta__content > *',
                { opacity: 0, y: 40 },
                {
                    opacity: 1, y: 0, duration: 0.7, stagger: 0.12, ease: 'power3.out',
                    scrollTrigger: { trigger: '.home-cta', start: 'top 80%' }
                }
            );

            // Parallax effects
            gsap.to('.home-hero__bg img', {
                yPercent: 20,
                ease: 'none',
                scrollTrigger: {
                    trigger: '.home-hero',
                    start: 'top top',
                    end: 'bottom top',
                    scrub: true,
                }
            });
        });
        return () => ctx.revert();
    }, []);

    return (
        <>
            {/* ===== HERO ===== */}
            <section className="home-hero" ref={heroRef}>
                <div className="home-hero__bg">
                    <img src="/fitrock_arena/images/hero-bg.png" alt="" aria-hidden="true" />
                    <div className="home-hero__overlay"></div>
                </div>

                <div className="home-hero__particles">
                    {[...Array(15)].map((_, i) => (
                        <div key={i} className="home-hero__particle" style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            animationDelay: `${Math.random() * 5}s`,
                            animationDuration: `${3 + Math.random() * 4}s`,
                            width: `${2 + Math.random() * 3}px`,
                            height: `${2 + Math.random() * 3}px`,
                        }} />
                    ))}
                </div>

                <div className="home-hero__content container">
                    <h1 className="home-hero__title">
                        SCALE NEW <br />
                        <span className="home-hero__title-accent">HEIGHTS</span>
                    </h1>
                    <p className="home-hero__subtitle">
                        India's premier indoor climbing arena and professional wall construction.
                        Push your limits. Conquer the wall.
                    </p>
                    <div className="home-hero__cta-group">
                        <Link to="/climbing" className="btn btn-primary btn-pulse home-hero__cta">
                            <span>Explore Climbing</span>
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M5 12h14M12 5l7 7-7 7" />
                            </svg>
                        </Link>
                        <Link to="/about" className="btn btn-secondary home-hero__cta">
                            Learn More
                        </Link>
                    </div>

                    <div className="home-hero__stats">
                        <div className="home-hero__stat">
                            <span className="home-hero__stat-number">500+</span>
                            <span className="home-hero__stat-label">Active Climbers</span>
                        </div>
                        <div className="home-hero__stat-divider"></div>
                        <div className="home-hero__stat">
                            <span className="home-hero__stat-number">50+</span>
                            <span className="home-hero__stat-label">Climbing Routes</span>
                        </div>
                        <div className="home-hero__stat-divider"></div>
                        <div className="home-hero__stat">
                            <span className="home-hero__stat-number">15K</span>
                            <span className="home-hero__stat-label">Sq. Ft. Arena</span>
                        </div>
                    </div>
                </div>

                <div className="home-hero__scroll">
                    <div className="home-hero__scroll-mouse">
                        <div className="home-hero__scroll-wheel"></div>
                    </div>
                    <span>Scroll Down</span>
                </div>
            </section>

            {/* ===== ABOUT PREVIEW ===== */}
            <section className="home-about" ref={aboutRef}>
                <div className="home-about__inner container">
                    <div className="home-about__image">
                        <img src="/fitrock_arena/images/about-bg.png" alt="FitRock Arena climbing facility" />
                        <div className="home-about__badge">
                            <span className="home-about__badge-number">8+</span>
                            <span className="home-about__badge-text">Years of<br />Excellence</span>
                        </div>
                    </div>
                    <div className="home-about__content">
                        <span className="section-label">Who We Are</span>
                        <h2 className="section-title">MORE THAN JUST <span>A GYM</span></h2>
                        <p className="home-about__desc">
                            FitRock Arena is where passion meets the wall. Our world-class indoor climbing
                            facility combines cutting-edge wall designs, expert coaching, and an electric
                            community atmosphere to deliver an experience unlike any other.
                        </p>
                        <div className="home-about__features">
                            <div className="home-about__feature">
                                <div className="home-about__feature-icon">🧗</div>
                                <div>
                                    <h3>World-Class Walls</h3>
                                    <p>Over 50 routes across all difficulty levels, designed by international route setters.</p>
                                </div>
                            </div>
                            <div className="home-about__feature">
                                <div className="home-about__feature-icon">🎯</div>
                                <div>
                                    <h3>Expert Coaching</h3>
                                    <p>Certified climbing instructors to guide beginners and challenge advanced climbers.</p>
                                </div>
                            </div>
                            <div className="home-about__feature">
                                <div className="home-about__feature-icon">⚡</div>
                                <div>
                                    <h3>Electric Atmosphere</h3>
                                    <p>A vibrant community of climbers who push each other to reach new heights.</p>
                                </div>
                            </div>
                        </div>
                        <Link to="/about" className="btn btn-primary">
                            Discover Our Story
                        </Link>
                    </div>
                </div>
            </section>

            {/* ===== CLIMBING PREVIEW ===== */}
            <section className="home-climbing" ref={climbingRef}>
                <div className="home-climbing__inner container">
                    <div className="home-climbing__header">
                        <span className="section-label">Our Facilities</span>
                        <h2 className="section-title">CLIMB YOUR <span>WAY</span></h2>
                        <p className="section-subtitle" style={{ margin: '0 auto' }}>
                            From bouldering to lead climbing, our arena has something for every climber.
                        </p>
                    </div>

                    <div className="home-climbing__grid">
                        {[
                            {
                                title: 'Bouldering',
                                desc: 'Low-height climbing without ropes. Perfect for building strength and technique on our custom-designed walls.',
                                icon: '🪨',
                            },
                            {
                                title: 'Rope Climbing',
                                desc: 'Top-rope and lead climbing walls reaching up to 15 meters. Conquer vertical challenges safely.',
                                icon: '🧗',
                            },
                            {
                                title: 'Speed Climbing',
                                desc: 'Official competition-standard speed wall. Race against the clock and set personal records.',
                                icon: '⚡',
                            },
                        ].map((item, i) => (
                            <div className="home-climbing__card" key={i}>
                                <div className="home-climbing__card-icon">{item.icon}</div>
                                <h3 className="home-climbing__card-title">{item.title}</h3>
                                <p className="home-climbing__card-desc">{item.desc}</p>
                                <Link to="/climbing" className="home-climbing__card-link">
                                    Learn More
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M5 12h14M12 5l7 7-7 7" />
                                    </svg>
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ===== CONSTRUCTION PREVIEW ===== */}
            <section className="home-construction" ref={constructionRef}>
                <div className="home-construction__inner container">
                    <div className="home-construction__content">
                        <span className="section-label">Wall Construction</span>
                        <h2 className="section-title">WE BUILD <span>WALLS</span></h2>
                        <p className="home-construction__desc">
                            Beyond being a climbing gym, FitRock Arena is also a leading climbing wall
                            construction company. We design, engineer, and build professional-grade climbing
                            walls for gyms, schools, and events across India.
                        </p>
                        <ul className="home-construction__list">
                            <li>
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12" /></svg>
                                Custom wall design & engineering
                            </li>
                            <li>
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12" /></svg>
                                Commercial & residential installations
                            </li>
                            <li>
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12" /></svg>
                                International safety standards
                            </li>
                            <li>
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12" /></svg>
                                End-to-end project management
                            </li>
                        </ul>
                        <Link to="/construction" className="btn btn-primary">
                            Explore Construction
                        </Link>
                    </div>
                    <div className="home-construction__image">
                        <img src="/fitrock_arena/images/construction-bg.png" alt="Climbing wall construction" />
                    </div>
                </div>
            </section>

            {/* ===== CTA SECTION ===== */}
            <section className="home-cta" ref={ctaRef}>
                <div className="home-cta__bg">
                    <img src="/fitrock_arena/images/climbing-2.png" alt="" aria-hidden="true" />
                    <div className="home-cta__overlay"></div>
                </div>
                <div className="home-cta__content container">
                    <span className="section-label">Ready to Climb?</span>
                    <h2 className="home-cta__title">START YOUR <span>JOURNEY</span> TODAY</h2>
                    <p className="home-cta__subtitle">
                        Whether you're a first-time climber or a seasoned pro, FitRock Arena has
                        something for you. Get in touch to schedule a visit or book a session.
                    </p>
                    <div className="home-cta__buttons">
                        <Link to="/contact" className="btn btn-primary btn-pulse">
                            Contact Us
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M5 12h14M12 5l7 7-7 7" />
                            </svg>
                        </Link>
                        <Link to="/climbing" className="btn btn-secondary">
                            View Facilities
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
}
