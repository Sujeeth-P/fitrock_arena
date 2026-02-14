import './About.css';

const FEATURES = [
    {
        icon: '🏋️',
        title: 'World-Class Equipment',
        desc: 'Over 200+ pieces of premium fitness equipment from leading international brands.',
    },
    {
        icon: '🎯',
        title: 'Goal-Oriented Training',
        desc: 'Every program is designed around your personal fitness goals and timeline.',
    },
    {
        icon: '⚡',
        title: 'High-Energy Environment',
        desc: 'An electric atmosphere that fuels your motivation and pushes you further.',
    },
];

export default function About() {
    return (
        <section className="about" id="about">
            <div className="about__inner container">
                <div className="about__image reveal-left">
                    <div className="about__image-wrapper">
                        {/* Decorative gradient image placeholder */}
                        <div className="about__image-placeholder">
                            <div className="about__image-icon">
                                <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M6.5 6.5h11v11h-11z" />
                                    <path d="M3 3h4v4H3zM17 3h4v4h-4zM3 17h4v4H3zM17 17h4v4h-4z" />
                                    <circle cx="12" cy="12" r="3" />
                                </svg>
                            </div>
                        </div>
                        <div className="about__image-accent"></div>
                    </div>
                    {/* Experience badge */}
                    <div className="about__exp-badge">
                        <span className="about__exp-number">8+</span>
                        <span className="about__exp-text">Years of<br />Excellence</span>
                    </div>
                </div>

                <div className="about__content reveal-right">
                    <span className="section-label">Why FitRock Arena</span>
                    <h2 className="section-title">MORE THAN JUST A GYM</h2>
                    <p className="about__desc">
                        FitRock Arena isn't just a place to work out — it's where transformation happens.
                        Our state-of-the-art facility combines cutting-edge technology with expert guidance
                        to deliver results that speak for themselves.
                    </p>

                    <div className="about__features">
                        {FEATURES.map((f, i) => (
                            <div className="about__feature" key={i}>
                                <div className="about__feature-icon">{f.icon}</div>
                                <div className="about__feature-text">
                                    <h3>{f.title}</h3>
                                    <p>{f.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <a href="#services" className="btn btn-primary about__cta" onClick={(e) => {
                        e.preventDefault();
                        document.querySelector('#services')?.scrollIntoView({ behavior: 'smooth' });
                    }}>
                        Discover Programs
                    </a>
                </div>
            </div>
        </section>
    );
}
