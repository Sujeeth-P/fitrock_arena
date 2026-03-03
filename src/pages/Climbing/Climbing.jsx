import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import PageHero from '../../components/PageHero/PageHero';
import './Climbing.css';

gsap.registerPlugin(ScrollTrigger);

const FACILITIES = [
    {
        title: 'Bouldering Zone',
        desc: 'Our expansive bouldering section features 40+ problems ranging from V0 to V10, reset monthly by professional route setters. Cushioned crash pads ensure safety.',
        icon: '🪨',
        image: '/fitrock_arena/images/climbing-1.png',
    },
    {
        title: 'Rope Climbing Walls',
        desc: 'Top-rope and lead climbing walls reaching 15 meters high. Routes graded from 5.5 to 5.13, suitable for beginners to advanced climbers.',
        icon: '🧗',
        image: '/fitrock_arena/images/climbing-2.png',
    },
    {
        title: 'Speed Wall',
        desc: 'Competition-standard 15m speed wall built to IFSC specifications. Train for competitive speed climbing and test your reflexes.',
        icon: '⚡',
        image: '/fitrock_arena/images/climbing-bg.png',
    },
];

const FEATURES = [
    { title: 'Professional Route Setting', desc: 'New problems and routes set every month by certified IFSC route setters.' },
    { title: 'Safety Certification', desc: 'All walls meet international safety standards with regular inspections.' },
    { title: 'Equipment Rental', desc: 'Full equipment available — shoes, harnesses, chalk bags, and belay devices.' },
    { title: 'Beginner Programs', desc: 'Introductory courses for first-time climbers with certified instructors.' },
    { title: 'Competition Training', desc: 'Structured training programs for competitive climbers and athletes.' },
    { title: 'Kids Climbing', desc: 'Dedicated kids zone with age-appropriate walls and trained childcare staff.' },
    { title: 'Yoga & Stretching', desc: 'Complementary yoga sessions to improve flexibility and prevent injuries.' },
    { title: 'Pro Shop', desc: 'On-site shop carrying premium climbing gear from top international brands.' },
];

export default function Climbing() {
    useEffect(() => {
        const ctx = gsap.context(() => {
            // Facility cards
            gsap.fromTo('.climbing-facility',
                { opacity: 0, y: 60 },
                {
                    opacity: 1, y: 0, duration: 0.8, stagger: 0.2, ease: 'power3.out',
                    scrollTrigger: { trigger: '.climbing-facilities', start: 'top 80%' }
                }
            );

            // Feature items
            gsap.fromTo('.climbing-features__item',
                { opacity: 0, y: 30, scale: 0.95 },
                {
                    opacity: 1, y: 0, scale: 1, duration: 0.5, stagger: 0.08, ease: 'power3.out',
                    scrollTrigger: { trigger: '.climbing-features', start: 'top 80%' }
                }
            );

            // Gallery images
            gsap.fromTo('.climbing-gallery__item',
                { opacity: 0, scale: 0.9 },
                {
                    opacity: 1, scale: 1, duration: 0.6, stagger: 0.1, ease: 'power3.out',
                    scrollTrigger: { trigger: '.climbing-gallery', start: 'top 80%' }
                }
            );
        });
        return () => ctx.revert();
    }, []);

    return (
        <>
            <PageHero
                title="CLIMBING"
                subtitle="From bouldering to lead climbing — discover world-class walls designed for every level."
                backgroundImage="/fitrock_arena/images/climbing-bg.png"
                breadcrumb="Climbing"
            />

            {/* Facilities */}
            <section className="climbing-facilities">
                <div className="climbing-facilities__inner container">
                    <div className="climbing-facilities__header">
                        <span className="section-label">Our Facilities</span>
                        <h2 className="section-title">CLIMB YOUR <span>WAY</span></h2>
                        <p className="section-subtitle">
                            Three distinct climbing zones, each designed to challenge and inspire.
                        </p>
                    </div>

                    <div className="climbing-facilities__grid">
                        {FACILITIES.map((f, i) => (
                            <div className="climbing-facility" key={i}>
                                <div className="climbing-facility__image">
                                    <img src={f.image} alt={f.title} />
                                    <div className="climbing-facility__overlay">
                                        <span className="climbing-facility__icon">{f.icon}</span>
                                    </div>
                                </div>
                                <div className="climbing-facility__content">
                                    <h3 className="climbing-facility__title">{f.title}</h3>
                                    <p className="climbing-facility__desc">{f.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Features */}
            <section className="climbing-features">
                <div className="climbing-features__inner container">
                    <div className="climbing-features__header">
                        <span className="section-label">What We Offer</span>
                        <h2 className="section-title">FEATURES & <span>AMENITIES</span></h2>
                    </div>

                    <div className="climbing-features__grid">
                        {FEATURES.map((f, i) => (
                            <div className="climbing-features__item" key={i}>
                                <div className="climbing-features__number">{String(i + 1).padStart(2, '0')}</div>
                                <div>
                                    <h3 className="climbing-features__title">{f.title}</h3>
                                    <p className="climbing-features__desc">{f.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Image Gallery */}
            <section className="climbing-gallery">
                <div className="climbing-gallery__inner container">
                    <div className="climbing-gallery__header">
                        <span className="section-label">Gallery</span>
                        <h2 className="section-title">INSIDE THE <span>ARENA</span></h2>
                    </div>

                    <div className="climbing-gallery__grid">
                        {[
                            { src: '/fitrock_arena/images/climbing-1.png', label: 'Bouldering Zone' },
                            { src: '/fitrock_arena/images/climbing-2.png', label: 'Training Area' },
                            { src: '/fitrock_arena/images/hero-bg.png', label: 'Main Arena' },
                            { src: '/fitrock_arena/images/about-bg.png', label: 'Facility Overview' },
                            { src: '/fitrock_arena/images/climbing-bg.png', label: 'Rope Climbing' },
                            { src: '/fitrock_arena/images/about-team.png', label: 'Our Team' },
                        ].map((item, i) => (
                            <div className={`climbing-gallery__item climbing-gallery__item--${i === 0 || i === 4 ? 'tall' : i === 3 ? 'wide' : 'normal'}`} key={i}>
                                <img src={item.src} alt={item.label} />
                                <div className="climbing-gallery__item-overlay">
                                    <span>{item.label}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="climbing-cta">
                <div className="climbing-cta__inner container">
                    <h2 className="climbing-cta__title">READY TO <span>CLIMB?</span></h2>
                    <p className="climbing-cta__desc">
                        Whether you're a first-timer or a seasoned climber, our doors are always open.
                        Come try a session and experience the thrill of the wall.
                    </p>
                    <div className="climbing-cta__buttons">
                        <Link to="/contact" className="btn btn-primary btn-pulse">
                            Book a Session
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                        </Link>
                        <Link to="/construction" className="btn btn-secondary">
                            Need a Wall Built?
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
}
