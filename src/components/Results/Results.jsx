import { useState } from 'react';
import './Results.css';

const TESTIMONIALS = [
    {
        name: 'Arjun Mehta',
        role: 'Lost 22kg in 16 Weeks',
        text: "FitRock Arena completely changed my life. The trainers pushed me beyond what I thought was possible. I went from being unable to run 1km to completing a half marathon!",
        stars: 5,
    },
    {
        name: 'Priya Sharma',
        role: 'Strength Transformation',
        text: "The personalized training at FitRock is unlike anything I've experienced. My deadlift went from 40kg to 120kg in just 8 months. The coaching here is world-class.",
        stars: 5,
    },
    {
        name: 'Rahul Verma',
        role: 'Body Recomposition',
        text: "I've been to many gyms, but FitRock's attention to form and nutrition planning sets them apart. Lost fat, gained muscle, and feel 10 years younger.",
        stars: 5,
    },
];

export default function Results() {
    const [sliderPos, setSliderPos] = useState(50);
    const [activeTestimonial, setActiveTestimonial] = useState(0);

    const handleSliderChange = (e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const percent = Math.max(5, Math.min(95, (x / rect.width) * 100));
        setSliderPos(percent);
    };

    const handleTouchMove = (e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = e.touches[0].clientX - rect.left;
        const percent = Math.max(5, Math.min(95, (x / rect.width) * 100));
        setSliderPos(percent);
    };

    return (
        <section className="results" id="results">
            <div className="results__bg-pattern"></div>
            <div className="results__inner container">
                <div className="results__header reveal">
                    <span className="section-label">Real Results</span>
                    <h2 className="section-title">TRANSFORMATIONS THAT INSPIRE</h2>
                    <p className="section-subtitle" style={{ margin: '0 auto' }}>
                        See the incredible journeys of our members who transformed their bodies and lives.
                    </p>
                </div>

                <div className="results__content">
                    {/* Before/After Slider */}
                    <div className="results__slider reveal-left" onMouseMove={handleSliderChange} onTouchMove={handleTouchMove}>
                        <div className="results__slider-wrapper">
                            <div className="results__slider-before">
                                <div className="results__slider-placeholder results__slider-placeholder--before">
                                    <span>BEFORE</span>
                                    <div className="results__slider-silhouette results__slider-silhouette--before">
                                        <svg viewBox="0 0 120 200" fill="none">
                                            <ellipse cx="60" cy="30" rx="20" ry="25" fill="rgba(255,255,255,0.1)" />
                                            <ellipse cx="60" cy="110" rx="35" ry="60" fill="rgba(255,255,255,0.08)" />
                                            <rect x="40" y="160" width="15" height="40" rx="7" fill="rgba(255,255,255,0.08)" />
                                            <rect x="65" y="160" width="15" height="40" rx="7" fill="rgba(255,255,255,0.08)" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            <div className="results__slider-after" style={{ clipPath: `inset(0 0 0 ${sliderPos}%)` }}>
                                <div className="results__slider-placeholder results__slider-placeholder--after">
                                    <span>AFTER</span>
                                    <div className="results__slider-silhouette results__slider-silhouette--after">
                                        <svg viewBox="0 0 120 200" fill="none">
                                            <ellipse cx="60" cy="28" rx="18" ry="22" fill="rgba(255,77,0,0.15)" />
                                            <path d="M35 60 Q60 50 85 60 L80 140 Q60 145 40 140 Z" fill="rgba(255,77,0,0.1)" />
                                            <rect x="42" y="140" width="14" height="50" rx="7" fill="rgba(255,77,0,0.1)" />
                                            <rect x="64" y="140" width="14" height="50" rx="7" fill="rgba(255,77,0,0.1)" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            <div className="results__slider-handle" style={{ left: `${sliderPos}%` }}>
                                <div className="results__slider-handle-line"></div>
                                <div className="results__slider-handle-circle">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M18 8l-6-6-6 6M6 16l6 6 6-6" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <p className="results__slider-hint">← Drag to compare →</p>
                    </div>

                    {/* Testimonials */}
                    <div className="results__testimonials reveal-right">
                        <div className="results__testimonial-card">
                            <div className="results__stars">
                                {[...Array(TESTIMONIALS[activeTestimonial].stars)].map((_, i) => (
                                    <span key={i} className="results__star">★</span>
                                ))}
                            </div>
                            <blockquote className="results__quote">
                                "{TESTIMONIALS[activeTestimonial].text}"
                            </blockquote>
                            <div className="results__author">
                                <div className="results__author-avatar">
                                    {TESTIMONIALS[activeTestimonial].name.charAt(0)}
                                </div>
                                <div>
                                    <div className="results__author-name">{TESTIMONIALS[activeTestimonial].name}</div>
                                    <div className="results__author-role">{TESTIMONIALS[activeTestimonial].role}</div>
                                </div>
                            </div>
                        </div>

                        <div className="results__testimonial-nav">
                            {TESTIMONIALS.map((_, i) => (
                                <button
                                    key={i}
                                    className={`results__testimonial-dot ${i === activeTestimonial ? 'results__testimonial-dot--active' : ''}`}
                                    onClick={() => setActiveTestimonial(i)}
                                    aria-label={`Testimonial ${i + 1}`}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
