import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/**
 * Custom hook for GSAP scroll-triggered animations.
 * Returns a ref to attach to the container element.
 *
 * @param {Function} animationFn - receives (gsap, container, ScrollTrigger) to define animations
 * @param {Array} deps - dependency array for useEffect
 */
export function useGsapAnimation(animationFn, deps = []) {
    const containerRef = useRef(null);

    useEffect(() => {
        if (!containerRef.current) return;

        const ctx = gsap.context(() => {
            animationFn(gsap, containerRef.current, ScrollTrigger);
        }, containerRef);

        return () => ctx.revert();
    }, deps);

    return containerRef;
}

/**
 * Helper: animate multiple elements with stagger on scroll
 */
export function animateOnScroll(container, selector, options = {}) {
    const {
        y = 50,
        opacity = 0,
        duration = 0.8,
        stagger = 0.15,
        ease = 'power3.out',
        start = 'top 85%',
        scale = 1,
    } = options;

    const elements = container.querySelectorAll(selector);
    if (!elements.length) return;

    gsap.fromTo(elements,
        { y, opacity, scale: scale !== 1 ? 0.95 : 1 },
        {
            y: 0,
            opacity: 1,
            scale: 1,
            duration,
            stagger,
            ease,
            scrollTrigger: {
                trigger: elements[0].closest('section') || elements[0],
                start,
                toggleActions: 'play none none none',
            },
        }
    );
}
