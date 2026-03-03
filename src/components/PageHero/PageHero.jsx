import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import './PageHero.css';

export default function PageHero({ title, subtitle, backgroundImage, breadcrumb }) {
    const heroRef = useRef(null);
    const contentRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline();

            tl.fromTo('.page-hero__overlay',
                { opacity: 0 },
                { opacity: 1, duration: 0.8, ease: 'power2.out' }
            );

            tl.fromTo('.page-hero__breadcrumb',
                { opacity: 0, y: 20 },
                { opacity: 1, y: 0, duration: 0.5, ease: 'power3.out' },
                '-=0.3'
            );

            tl.fromTo('.page-hero__title',
                { opacity: 0, y: 50 },
                { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out' },
                '-=0.3'
            );

            tl.fromTo('.page-hero__subtitle',
                { opacity: 0, y: 30 },
                { opacity: 1, y: 0, duration: 0.5, ease: 'power3.out' },
                '-=0.3'
            );

            tl.fromTo('.page-hero__line',
                { width: 0 },
                { width: '80px', duration: 0.6, ease: 'power2.out' },
                '-=0.2'
            );
        }, heroRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            className="page-hero"
            ref={heroRef}
            style={{ backgroundImage: `url(${backgroundImage})` }}
        >
            <div className="page-hero__overlay"></div>
            <div className="page-hero__content container" ref={contentRef}>
                <div className="page-hero__breadcrumb">
                    <Link to="/">Home</Link>
                    <span className="page-hero__breadcrumb-sep">/</span>
                    <span>{breadcrumb || title}</span>
                </div>
                <div className="page-hero__line"></div>
                <h1 className="page-hero__title">{title}</h1>
                {subtitle && <p className="page-hero__subtitle">{subtitle}</p>}
            </div>
        </section>
    );
}
