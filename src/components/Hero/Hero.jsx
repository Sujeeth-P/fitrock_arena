import './Hero.css';

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

            <div className="hero__bg">
                <div className="hero__bg-gradient"></div>
            </div>

            <div className="hero__content container">
                {/* <div className="hero__badge">🔥 PREMIUM FITNESS EXPERIENCE</div> */}
                <h1 className="hero__title">
                    FORGE YOUR <br />
                    <span className="hero__title-accent">STRONGEST</span> SELF
                </h1>
                <p className="hero__subtitle">
                    Push beyond limits. Train with elite coaches. Transform your body and mind
                    at the most advanced fitness arena in the city.
                </p>
                <div className="hero__cta-group">
                    <a href="#contact" className="btn btn-primary btn-pulse hero__cta" onClick={(e) => handleScroll(e, '#contact')}>
                        <span>Join Now</span>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
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
