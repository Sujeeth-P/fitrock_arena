import './Hero.css';
import { AnimatedText } from '@/components/ui/animated-underline-text-one';
import { ArrowRight } from 'lucide-react';
export default function Hero() {
    const handleScroll = (e, target) => {
        e.preventDefault();
        const el = document.querySelector(target);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section className="hero" id="hero">
            {/* Animated background particles */}
            <div className="hero__particles">
                {[...Array(20)].map((_, i) => (
                    <div key={i} className="hero__particle" style={{
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                        animationDelay: `${Math.random() * 5}s`,
                        animationDuration: `${3 + Math.random() * 4}s`,
                        width: `${2 + Math.random() * 4}px`,
                        height: `${2 + Math.random() * 4}px`,
                    }} />
                ))}
            </div>

            <div className="hero__bg" style={{
                backgroundImage: 'url(https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=2070)',
                backgroundSize: 'cover',
                backgroundPosition: 'center'
            }}>
                <div className="hero__bg-gradient" style={{ width: '100%', height: '100%', background: 'linear-gradient(to right, rgba(0,0,0,0.9), rgba(0,0,0,0.4))' }}></div>
            </div>

            <div className="hero__content container">
                {/* <div className="hero__badge">🔥 PREMIUM FITNESS EXPERIENCE</div> */}
                <div className="hero__title" style={{ display: 'flex', justifyContent: 'center', marginBottom: '1rem' }}>
                    <AnimatedText
                        text="FORGE YOUR STRONGEST SELF"
                        textClassName="hero__title"
                        underlineClassName="text-accent"
                        underlinePath="M 0,10 Q 75,0 150,10 Q 225,20 300,10"
                        underlineHoverPath="M 0,10 Q 75,20 150,10 Q 225,0 300,10"
                        underlineDuration={1.5}
                    />
                </div>
                <p className="hero__subtitle">
                    Push beyond limits. Train with elite coaches. Transform your body and mind
                    at the most advanced fitness arena in the city.
                </p>
                <div className="hero__cta-group">
                    <a href="#contact" className="btn btn-primary btn-pulse hero__cta" onClick={(e) => handleScroll(e, '#contact')}>
                        <span>Join Now</span>
                        <ArrowRight size={16} strokeWidth={2.5} />
                    </a>
                    <a href="#services" className="btn btn-secondary hero__cta" onClick={(e) => handleScroll(e, '#services')}>
                        Explore Programs
                    </a>
                </div>

                {/* Stats bar */}
                <div className="hero__stats">
                    <div className="hero__stat">
                        <span className="hero__stat-number">500+</span>
                        <span className="hero__stat-label">Active Members</span>
                    </div>
                    <div className="hero__stat-divider"></div>
                    <div className="hero__stat">
                        <span className="hero__stat-number">15+</span>
                        <span className="hero__stat-label">Expert Trainers</span>
                    </div>
                    <div className="hero__stat-divider"></div>
                    <div className="hero__stat">
                        <span className="hero__stat-number">10K+</span>
                        <span className="hero__stat-label">Sq. Ft. Arena</span>
                    </div>
                </div>
            </div>

            {/* Scroll indicator */}
            {/* <div className="hero__scroll-indicator">
                <div className="hero__scroll-mouse">
                    <div className="hero__scroll-wheel"></div>
                </div>
                <span>Scroll Down</span>
            </div> */}
        </section>
    );
}
