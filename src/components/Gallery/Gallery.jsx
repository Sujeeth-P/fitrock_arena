import { useState } from 'react';
import './Gallery.css';

const GALLERY_ITEMS = [
    { gradient: 'linear-gradient(135deg, #1a1a1a, #2a1a0a)', label: 'Weight Room', size: 'tall' },
    { gradient: 'linear-gradient(135deg, #0d0d0d, #1a0a0a)', label: 'Cardio Zone', size: 'normal' },
    { gradient: 'linear-gradient(135deg, #1a1a1a, #0a1a1a)', label: 'CrossFit Area', size: 'normal' },
    { gradient: 'linear-gradient(135deg, #2a1a0a, #1a1a1a)', label: 'Personal Training', size: 'wide' },
    { gradient: 'linear-gradient(135deg, #0a0a1a, #1a1a2a)', label: 'Group Classes', size: 'normal' },
    { gradient: 'linear-gradient(135deg, #1a0a0a, #2a0a0a)', label: 'Recovery Zone', size: 'normal' },
    { gradient: 'linear-gradient(135deg, #1a1a0a, #0a0a0a)', label: 'Outdoor Training', size: 'tall' },
    { gradient: 'linear-gradient(135deg, #0a1a0a, #1a2a1a)', label: 'Boxing Ring', size: 'normal' },
];

export default function Gallery() {
    const [lightbox, setLightbox] = useState(null);

    return (
        <section className="gallery" id="gallery">
            <div className="gallery__inner container">
                <div className="gallery__header reveal">
                    <span className="section-label">Our Space</span>
                    <h2 className="section-title">THE ARENA</h2>
                    <p className="section-subtitle" style={{ margin: '0 auto' }}>
                        Take a look inside our world-class fitness facility.
                    </p>
                </div>

                <div className="gallery__grid stagger-children">
                    {GALLERY_ITEMS.map((item, i) => (
                        <div
                            className={`gallery__item gallery__item--${item.size}`}
                            key={i}
                            onClick={() => setLightbox(i)}
                        >
                            <div className="gallery__item-bg" style={{ background: item.gradient }}>
                                <div className="gallery__item-icon">
                                    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" opacity="0.2">
                                        <rect x="3" y="3" width="18" height="18" rx="2" />
                                        <circle cx="8.5" cy="8.5" r="1.5" />
                                        <path d="M21 15l-5-5L5 21" />
                                    </svg>
                                </div>
                            </div>
                            <div className="gallery__item-overlay">
                                <span className="gallery__item-label">{item.label}</span>
                                <span className="gallery__item-plus">+</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Lightbox */}
            {lightbox !== null && (
                <div className="gallery__lightbox" onClick={() => setLightbox(null)}>
                    <div className="gallery__lightbox-content" onClick={(e) => e.stopPropagation()}>
                        <button className="gallery__lightbox-close" onClick={() => setLightbox(null)} aria-label="Close lightbox">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="18" y1="6" x2="6" y2="18" />
                                <line x1="6" y1="6" x2="18" y2="18" />
                            </svg>
                        </button>
                        <div className="gallery__lightbox-image" style={{ background: GALLERY_ITEMS[lightbox].gradient }}>
                            <div className="gallery__lightbox-label">{GALLERY_ITEMS[lightbox].label}</div>
                        </div>
                        <div className="gallery__lightbox-nav">
                            <button
                                onClick={() => setLightbox((lightbox - 1 + GALLERY_ITEMS.length) % GALLERY_ITEMS.length)}
                                aria-label="Previous"
                            >
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <polyline points="15 18 9 12 15 6" />
                                </svg>
                            </button>
                            <span>{lightbox + 1} / {GALLERY_ITEMS.length}</span>
                            <button
                                onClick={() => setLightbox((lightbox + 1) % GALLERY_ITEMS.length)}
                                aria-label="Next"
                            >
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <polyline points="9 18 15 12 9 6" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
}
