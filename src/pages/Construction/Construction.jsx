import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import PageHero from '../../components/PageHero/PageHero';
import './Construction.css';

gsap.registerPlugin(ScrollTrigger);

const SERVICES = [
    {
        title: 'Custom Wall Design',
        desc: 'Bespoke climbing wall designs tailored to your space, budget, and vision. From concept sketches to detailed engineering drawings.',
        icon: '✏️',
    },
    {
        title: 'Structural Engineering',
        desc: 'Full structural analysis and engineering to ensure every wall meets international safety standards and load requirements.',
        icon: '📐',
    },
    {
        title: 'Fabrication & Installation',
        desc: 'In-house fabrication of steel frameworks and wall panels, with professional installation by our trained crew.',
        icon: '🔨',
    },
    {
        title: 'Route Setting',
        desc: 'Professional route setting by certified IFSC setters who design challenging, creative, and safe climbing routes.',
        icon: '🧗',
    },
    {
        title: 'Maintenance & Support',
        desc: 'Ongoing maintenance packages including hold replacement, safety inspections, and route refreshes.',
        icon: '🔧',
    },
    {
        title: 'Consultation',
        desc: 'Expert consultation for new climbing gym startups, schools, corporate spaces, and event organizers.',
        icon: '💡',
    },
];

const PROCESS_STEPS = [
    {
        step: '01',
        title: 'Consultation & Site Survey',
        desc: 'We visit your site, understand your requirements, assess structural feasibility, and discuss your vision.',
    },
    {
        step: '02',
        title: 'Design & Engineering',
        desc: 'Our team creates custom wall designs with detailed 3D renders, structural calculations, and material specifications.',
    },
    {
        step: '03',
        title: 'Fabrication',
        desc: 'Steel frameworks and climbing panels are fabricated in our workshop to exact specifications using premium materials.',
    },
    {
        step: '04',
        title: 'Installation',
        desc: 'Our professional installation crew assembles and installs the wall at your site with minimal disruption.',
    },
    {
        step: '05',
        title: 'Route Setting & Testing',
        desc: 'Certified route setters design climbing routes followed by thorough safety testing and certification.',
    },
    {
        step: '06',
        title: 'Handover & Support',
        desc: 'Complete handover with documentation, staff training, and ongoing maintenance support.',
    },
];

export default function Construction() {
    useEffect(() => {
        const ctx = gsap.context(() => {
            // Intro section
            gsap.fromTo('.construction-intro__image',
                { opacity: 0, x: 80 },
                {
                    opacity: 1, x: 0, duration: 0.9, ease: 'power3.out',
                    scrollTrigger: { trigger: '.construction-intro', start: 'top 80%' }
                }
            );
            gsap.fromTo('.construction-intro__content > *',
                { opacity: 0, y: 40 },
                {
                    opacity: 1, y: 0, duration: 0.7, stagger: 0.1, ease: 'power3.out',
                    scrollTrigger: { trigger: '.construction-intro', start: 'top 75%' }
                }
            );

            // Service cards
            gsap.fromTo('.construction-services__card',
                { opacity: 0, y: 50, scale: 0.95 },
                {
                    opacity: 1, y: 0, scale: 1, duration: 0.6, stagger: 0.1, ease: 'power3.out',
                    scrollTrigger: { trigger: '.construction-services', start: 'top 80%' }
                }
            );

            // Process timeline - animated step by step
            const processItems = document.querySelectorAll('.construction-process__item');
            processItems.forEach((item, i) => {
                gsap.fromTo(item,
                    { opacity: 0, x: i % 2 === 0 ? -60 : 60 },
                    {
                        opacity: 1, x: 0, duration: 0.7, ease: 'power3.out',
                        scrollTrigger: { trigger: item, start: 'top 85%' }
                    }
                );
            });

            // Parallax on process section background
            gsap.to('.construction-process', {
                backgroundPositionY: '30%',
                ease: 'none',
                scrollTrigger: {
                    trigger: '.construction-process',
                    start: 'top bottom',
                    end: 'bottom top',
                    scrub: true,
                }
            });
        });
        return () => ctx.revert();
    }, []);

    return (
        <>
            <PageHero
                title="CONSTRUCTION"
                subtitle="Professional climbing wall design, engineering, and installation across India."
                backgroundImage="/fitrock_arena/images/construction-bg.png"
                breadcrumb="Construction"
            />

            {/* Intro Section */}
            <section className="construction-intro">
                <div className="construction-intro__inner container">
                    <div className="construction-intro__content">
                        <span className="section-label">Wall Construction</span>
                        <h2 className="section-title">WE BUILD <span>WORLD-CLASS WALLS</span></h2>
                        <p>
                            FitRock Arena's construction division is India's leading climbing wall builder.
                            From small bouldering walls to full-scale commercial climbing gyms, we handle
                            every aspect of the project — design, engineering, fabrication, and installation.
                        </p>
                        <p>
                            Our walls are built to international safety standards using premium materials
                            and innovative construction techniques. Every project is backed by our team of
                            structural engineers, certified route setters, and experienced installers.
                        </p>
                        <div className="construction-intro__stats">
                            <div className="construction-intro__stat">
                                <span className="construction-intro__stat-number">100+</span>
                                <span className="construction-intro__stat-label">Walls Built</span>
                            </div>
                            <div className="construction-intro__stat">
                                <span className="construction-intro__stat-number">50+</span>
                                <span className="construction-intro__stat-label">Cities</span>
                            </div>
                            <div className="construction-intro__stat">
                                <span className="construction-intro__stat-number">0</span>
                                <span className="construction-intro__stat-label">Safety Incidents</span>
                            </div>
                        </div>
                    </div>
                    <div className="construction-intro__image">
                        <img src="/fitrock_arena/images/construction-process.png" alt="Climbing wall construction process" />
                    </div>
                </div>
            </section>

            {/* Services */}
            <section className="construction-services">
                <div className="construction-services__inner container">
                    <div className="construction-services__header">
                        <span className="section-label">What We Do</span>
                        <h2 className="section-title">OUR <span>SERVICES</span></h2>
                        <p className="section-subtitle" style={{ margin: '0 auto' }}>
                            End-to-end climbing wall solutions for every type of project.
                        </p>
                    </div>

                    <div className="construction-services__grid">
                        {SERVICES.map((s, i) => (
                            <div className="construction-services__card" key={i}>
                                <div className="construction-services__card-icon">{s.icon}</div>
                                <h3 className="construction-services__card-title">{s.title}</h3>
                                <p className="construction-services__card-desc">{s.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Process Steps */}
            <section className="construction-process">
                <div className="construction-process__inner container">
                    <div className="construction-process__header">
                        <span className="section-label">How It Works</span>
                        <h2 className="section-title">OUR <span>PROCESS</span></h2>
                        <p className="section-subtitle" style={{ margin: '0 auto' }}>
                            A proven 6-step process that delivers exceptional results, on time and on budget.
                        </p>
                    </div>

                    <div className="construction-process__timeline">
                        {PROCESS_STEPS.map((p, i) => (
                            <div className="construction-process__item" key={i}>
                                <div className="construction-process__step-number">{p.step}</div>
                                <div className="construction-process__step-content">
                                    <h3>{p.title}</h3>
                                    <p>{p.desc}</p>
                                </div>
                                {i < PROCESS_STEPS.length - 1 && (
                                    <div className="construction-process__connector"></div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="construction-cta">
                <div className="construction-cta__inner container">
                    <h2 className="construction-cta__title">READY TO BUILD <span>YOUR WALL?</span></h2>
                    <p className="construction-cta__desc">
                        Let's discuss your project. Our team will work with you to create the perfect
                        climbing wall for your space.
                    </p>
                    <Link to="/contact" className="btn btn-primary btn-pulse">
                        Get a Free Quote
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                    </Link>
                </div>
            </section>
        </>
    );
}
