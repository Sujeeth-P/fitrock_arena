import './Services.css';

const PROGRAMS = [
    {
        icon: (
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M6 5v14M18 5v14M3 8h3M18 8h3M3 16h3M18 16h3M8 5h8v14H8z" />
            </svg>
        ),
        title: 'Strength Training',
        desc: 'Build raw power with progressive overload techniques and compound movements guided by certified trainers.',
        tag: 'Popular',
    },
    {
        icon: (
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
            </svg>
        ),
        title: 'Weight Loss',
        desc: 'Scientifically designed fat-burn programs combining HIIT, nutrition guidance, and metabolic conditioning.',
        tag: '',
    },
    {
        icon: (
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                <circle cx="12" cy="7" r="4" />
            </svg>
        ),
        title: 'Personal Training',
        desc: 'One-on-one sessions with elite coaches who customize every aspect of your training journey.',
        tag: 'Premium',
    },
    {
        icon: (
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
            </svg>
        ),
        title: 'Cardio Zone',
        desc: 'State-of-the-art cardio equipment with integrated heart rate monitoring and performance tracking.',
        tag: '',
    },
    {
        icon: (
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <path d="M12 6v6l4 2" />
            </svg>
        ),
        title: 'Functional Fitness',
        desc: 'Improve everyday movement patterns with mobility work, kettlebells, and bodyweight training.',
        tag: '',
    },
    {
        icon: (
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
        ),
        title: 'Transformation Program',
        desc: '12-week body transformation with dedicated coaching, meal plans, and progress tracking.',
        tag: 'New',
    },
];

export default function Services() {
    return (
        <section className="services" id="services">
            <div className="services__inner container">
                <div className="services__header reveal">
                    <span className="section-label">Our Programs</span>
                    <h2 className="section-title">TRAINING PROGRAMS</h2>
                    <p className="section-subtitle" style={{ margin: '0 auto' }}>
                        Choose from our elite range of fitness programs designed to deliver maximum results,
                        no matter your starting point.
                    </p>
                </div>

                <div className="services__grid stagger-children">
                    {PROGRAMS.map((program, i) => (
                        <div className="services__card" key={i}>
                            {program.tag && <span className="services__card-tag">{program.tag}</span>}
                            <div className="services__card-icon">{program.icon}</div>
                            <h3 className="services__card-title">{program.title}</h3>
                            <p className="services__card-desc">{program.desc}</p>
                            <div className="services__card-footer">
                                <span className="services__card-link">
                                    Learn More
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M5 12h14M12 5l7 7-7 7" />
                                    </svg>
                                </span>
                            </div>
                            <div className="services__card-glow"></div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
