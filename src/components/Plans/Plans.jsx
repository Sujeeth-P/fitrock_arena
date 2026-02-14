import './Plans.css';

const PLANS = [
    {
        name: 'Starter',
        price: '1,499',
        period: '/month',
        features: [
            'Full gym access',
            'Locker facility',
            'Basic fitness assessment',
            'Access to cardio zone',
            'Free parking',
        ],
        highlighted: false,
        cta: 'Get Started',
    },
    {
        name: 'Pro',
        price: '2,999',
        period: '/month',
        features: [
            'Everything in Starter',
            'Personal trainer (2x/week)',
            'Nutrition consultation',
            'Group classes access',
            'Body composition analysis',
            'Supplement guidance',
        ],
        highlighted: true,
        cta: 'Go Pro',
        badge: 'Most Popular',
    },
    {
        name: 'Elite',
        price: '4,999',
        period: '/month',
        features: [
            'Everything in Pro',
            'Unlimited personal training',
            'Custom meal plans',
            'Recovery & spa access',
            'Priority scheduling',
            'Monthly progress photoshoot',
            '24/7 trainer support',
        ],
        highlighted: false,
        cta: 'Go Elite',
    },
];

export default function Plans() {
    return (
        <section className="plans" id="plans">
            <div className="plans__inner container">
                <div className="plans__header reveal">
                    <span className="section-label">Membership</span>
                    <h2 className="section-title">CHOOSE YOUR PLAN</h2>
                    <p className="section-subtitle" style={{ margin: '0 auto' }}>
                        Flexible plans designed to fit your goals and budget. No hidden fees, no long-term contracts.
                    </p>
                </div>

                <div className="plans__grid stagger-children">
                    {PLANS.map((plan, i) => (
                        <div className={`plans__card ${plan.highlighted ? 'plans__card--highlighted' : ''}`} key={i}>
                            {plan.badge && <div className="plans__card-badge">{plan.badge}</div>}
                            <div className="plans__card-header">
                                <h3 className="plans__card-name">{plan.name}</h3>
                                <div className="plans__card-price">
                                    <span className="plans__card-currency">₹</span>
                                    <span className="plans__card-amount">{plan.price}</span>
                                    <span className="plans__card-period">{plan.period}</span>
                                </div>
                            </div>

                            <ul className="plans__card-features">
                                {plan.features.map((feat, j) => (
                                    <li key={j}>
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                            <polyline points="20 6 9 17 4 12" />
                                        </svg>
                                        {feat}
                                    </li>
                                ))}
                            </ul>

                            <a
                                href="#contact"
                                className={`btn ${plan.highlighted ? 'btn-primary' : 'btn-secondary'} plans__card-cta`}
                                onClick={(e) => {
                                    e.preventDefault();
                                    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
                                }}
                            >
                                {plan.cta}
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
