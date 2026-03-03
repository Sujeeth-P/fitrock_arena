import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import PageHero from '../../components/PageHero/PageHero';
import './About.css';

gsap.registerPlugin(ScrollTrigger);

const VALUES = [
    {
        icon: '🎯',
        title: 'Our Mission',
        desc: 'To make world-class climbing accessible to everyone, inspiring a new generation of climbers through premium facilities, expert coaching, and an inclusive community.',
    },
    {
        icon: '🔭',
        title: 'Our Vision',
        desc: 'To be India\'s leading climbing destination and wall construction brand — setting the standard for safety, innovation, and the climbing experience.',
    },
    {
        icon: '💎',
        title: 'Our Values',
        desc: 'Safety first, always. We believe in pushing limits responsibly, fostering community, and delivering uncompromising quality in every wall we build and every route we set.',
    },
];

const MILESTONES = [
    { year: '2016', title: 'Founded', desc: 'FitRock Arena was established with a vision to bring international-standard climbing to India.' },
    { year: '2018', title: 'First Major Build', desc: 'Completed our first commercial climbing wall project for a major sports complex.' },
    { year: '2020', title: 'Arena Expansion', desc: 'Expanded our flagship facility to 15,000 sq. ft. with 50+ routes.' },
    { year: '2022', title: '100+ Walls Built', desc: 'Crossed the milestone of 100 climbing wall installations across India.' },
    { year: '2024', title: 'National Recognition', desc: 'Recognized as India\'s top climbing wall builder by the Indian Mountaineering Foundation.' },
];

export default function About() {
    useEffect(() => {
        const ctx = gsap.context(() => {
            // Story section
            gsap.fromTo('.about-story__image',
                { opacity: 0, x: -80, scale: 0.95 },
                {
                    opacity: 1, x: 0, scale: 1, duration: 1, ease: 'power3.out',
                    scrollTrigger: { trigger: '.about-story', start: 'top 80%' }
                }
            );
            gsap.fromTo('.about-story__content > *',
                { opacity: 0, y: 40 },
                {
                    opacity: 1, y: 0, duration: 0.7, stagger: 0.1, ease: 'power3.out',
                    scrollTrigger: { trigger: '.about-story', start: 'top 75%' }
                }
            );

            // Values
            gsap.fromTo('.about-values__card',
                { opacity: 0, y: 60 },
                {
                    opacity: 1, y: 0, duration: 0.7, stagger: 0.15, ease: 'power3.out',
                    scrollTrigger: { trigger: '.about-values', start: 'top 80%' }
                }
            );

            // Timeline
            gsap.fromTo('.about-timeline__item',
                { opacity: 0, x: -40 },
                {
                    opacity: 1, x: 0, duration: 0.6, stagger: 0.15, ease: 'power3.out',
                    scrollTrigger: { trigger: '.about-timeline', start: 'top 80%' }
                }
            );

            // Team
            gsap.fromTo('.about-team__image',
                { opacity: 0, scale: 0.95 },
                {
                    opacity: 1, scale: 1, duration: 0.8, ease: 'power3.out',
                    scrollTrigger: { trigger: '.about-team', start: 'top 80%' }
                }
            );
            gsap.fromTo('.about-team__content > *',
                { opacity: 0, y: 30 },
                {
                    opacity: 1, y: 0, duration: 0.6, stagger: 0.1, ease: 'power3.out',
                    scrollTrigger: { trigger: '.about-team', start: 'top 75%' }
                }
            );
        });
        return () => ctx.revert();
    }, []);

    return (
        <>
            <PageHero
                title="ABOUT US"
                subtitle="The story behind India's premier climbing arena and wall construction company."
                backgroundImage="/fitrock_arena/images/about-bg.png"
                breadcrumb="About"
            />

            {/* Story Section */}
            <section className="about-story">
                <div className="about-story__inner container">
                    <div className="about-story__image">
                        <img src="/fitrock_arena/images/climbing-1.png" alt="FitRock Arena climbing wall" />
                    </div>
                    <div className="about-story__content">
                        <span className="section-label">Our Story</span>
                        <h2 className="section-title">BORN FROM <span>PASSION</span></h2>
                        <p>
                            FitRock Arena was founded in 2016 by a group of passionate climbers who saw a gap
                            in India's fitness landscape. What began as a small bouldering wall in a warehouse
                            has grown into the country's premier climbing destination.
                        </p>
                        <p>
                            Our journey from climbers to wall builders happened organically. As we perfected
                            our own facility, other gyms and institutions began asking us to build walls for
                            them. Today, we're equally proud of our climbing arena and our construction
                            division.
                        </p>
                        <p>
                            Every wall we build and every route we set carries our core belief: climbing is
                            for everyone. Whether you're 5 or 65, beginner or pro — the wall doesn't
                            discriminate. It simply challenges you to keep reaching higher.
                        </p>
                    </div>
                </div>
            </section>

            {/* Mission / Vision / Values */}
            <section className="about-values">
                <div className="about-values__inner container">
                    <div className="about-values__header">
                        <span className="section-label">What Drives Us</span>
                        <h2 className="section-title">MISSION & <span>VISION</span></h2>
                    </div>
                    <div className="about-values__grid">
                        {VALUES.map((v, i) => (
                            <div className="about-values__card" key={i}>
                                <div className="about-values__card-icon">{v.icon}</div>
                                <h3 className="about-values__card-title">{v.title}</h3>
                                <p className="about-values__card-desc">{v.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Timeline */}
            <section className="about-timeline">
                <div className="about-timeline__inner container">
                    <div className="about-timeline__header">
                        <span className="section-label">Our Journey</span>
                        <h2 className="section-title">KEY <span>MILESTONES</span></h2>
                    </div>
                    <div className="about-timeline__track">
                        {MILESTONES.map((m, i) => (
                            <div className="about-timeline__item" key={i}>
                                <div className="about-timeline__marker">
                                    <div className="about-timeline__dot"></div>
                                    {i < MILESTONES.length - 1 && <div className="about-timeline__line"></div>}
                                </div>
                                <div className="about-timeline__card">
                                    <span className="about-timeline__year">{m.year}</span>
                                    <h3 className="about-timeline__title">{m.title}</h3>
                                    <p className="about-timeline__desc">{m.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section className="about-team">
                <div className="about-team__inner container">
                    <div className="about-team__image">
                        <img src="/fitrock_arena/images/about-team.png" alt="FitRock Arena team" />
                    </div>
                    <div className="about-team__content">
                        <span className="section-label">Our Team</span>
                        <h2 className="section-title">THE PEOPLE <span>BEHIND THE WALLS</span></h2>
                        <p>
                            Our team brings together certified climbing instructors, structural engineers,
                            and passionate community builders. With decades of combined experience in
                            climbing and construction, we deliver excellence at every level.
                        </p>
                        <div className="about-team__stats">
                            <div className="about-team__stat">
                                <span className="about-team__stat-number">25+</span>
                                <span className="about-team__stat-label">Team Members</span>
                            </div>
                            <div className="about-team__stat">
                                <span className="about-team__stat-number">100+</span>
                                <span className="about-team__stat-label">Walls Built</span>
                            </div>
                            <div className="about-team__stat">
                                <span className="about-team__stat-number">8+</span>
                                <span className="about-team__stat-label">Years Experience</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
