import './Trainers.css';

const TRAINERS = [
    {
        name: 'Vikram Singh',
        specialty: 'Strength & Powerlifting',
        initials: 'VS',
        color: '#ff4d00',
        socials: { instagram: '#', twitter: '#' },
    },
    {
        name: 'Ananya Reddy',
        specialty: 'Yoga & Flexibility',
        initials: 'AR',
        color: '#e81c1c',
        socials: { instagram: '#', twitter: '#' },
    },
    {
        name: 'Karthik Nair',
        specialty: 'CrossFit & HIIT',
        initials: 'KN',
        color: '#ff6a2f',
        socials: { instagram: '#', twitter: '#' },
    },
    {
        name: 'Meera Joshi',
        specialty: 'Nutrition & Weight Loss',
        initials: 'MJ',
        color: '#ff4d00',
        socials: { instagram: '#', twitter: '#' },
    },
];

function SocialIcon({ type }) {
    if (type === 'instagram') {
        return (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
            </svg>
        );
    }
    return (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
        </svg>
    );
}

export default function Trainers() {
    return (
        <section className="trainers" id="trainers">
            <div className="trainers__inner container">
                <div className="trainers__header reveal">
                    <span className="section-label">Meet The Team</span>
                    <h2 className="section-title">EXPERT TRAINERS</h2>
                    <p className="section-subtitle" style={{ margin: '0 auto' }}>
                        Our certified trainers bring years of experience and passion to help you achieve your goals.
                    </p>
                </div>

                <div className="trainers__grid stagger-children">
                    {TRAINERS.map((trainer, i) => (
                        <div className="trainers__card" key={i}>
                            <div className="trainers__card-image">
                                <div className="trainers__card-avatar" style={{ background: `linear-gradient(135deg, ${trainer.color}, ${trainer.color}88)` }}>
                                    <span className="trainers__card-initials">{trainer.initials}</span>
                                </div>
                                <div className="trainers__card-overlay">
                                    <div className="trainers__card-socials">
                                        {Object.entries(trainer.socials).map(([type, href]) => (
                                            <a key={type} href={href} className="trainers__card-social" aria-label={type}>
                                                <SocialIcon type={type} />
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <div className="trainers__card-info">
                                <h3 className="trainers__card-name">{trainer.name}</h3>
                                <p className="trainers__card-specialty">{trainer.specialty}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
