import { useEffect, useRef, useCallback } from 'react';
import gsap from 'gsap';
import './HeroTiles.css';

const ROWS = 6;
const COLS = 6;
const COOLDOWN = 1000;

export default function HeroTiles() {
    const boardRef = useRef(null);
    const isFlippedRef = useRef(false);
    const lastEnterTimes = useRef({});

    const animateTile = useCallback((tile, tiltY, isFlipped) => {
        gsap.timeline()
            .set(tile, { rotateX: isFlipped ? 180 : 0, rotateY: 0 })
            .to(tile, {
                rotateX: isFlipped ? 450 : 270,
                rotateY: tiltY,
                duration: 0.5,
                ease: 'power2.out',
            })
            .to(tile, {
                rotateX: isFlipped ? 540 : 360,
                rotateY: 0,
                duration: 0.5,
                ease: 'power2.out',
            }, '-=0.25');
    }, []);

    useEffect(() => {
        const board = boardRef.current;
        if (!board) return;

        const tiles = board.querySelectorAll('.hero-tiles__tile');

        const handleMouseEnter = (tile, index) => () => {
            const currentTime = Date.now();
            const lastTime = lastEnterTimes.current[index] || 0;

            if (currentTime - lastTime < COOLDOWN) return;
            lastEnterTimes.current[index] = currentTime;

            const tiltY = ((index % COLS) - 2.5) * 15;
            animateTile(tile, tiltY, isFlippedRef.current);
        };

        const handlers = [];
        tiles.forEach((tile, index) => {
            const handler = handleMouseEnter(tile, index);
            tile.addEventListener('mouseenter', handler);
            handlers.push({ tile, handler });
        });

        // Auto-flip every 6 seconds for visual interest
        const autoFlipInterval = setInterval(() => {
            isFlippedRef.current = !isFlippedRef.current;
            gsap.to(tiles, {
                rotateX: isFlippedRef.current ? 180 : 0,
                duration: 1,
                stagger: {
                    amount: 0.5,
                    from: 'center',
                },
                ease: 'power2.inOut',
            });
        }, 6000);

        return () => {
            handlers.forEach(({ tile, handler }) => {
                tile.removeEventListener('mouseenter', handler);
            });
            clearInterval(autoFlipInterval);
        };
    }, [animateTile]);

    return (
        <div className="hero-tiles" ref={boardRef}>
            {[...Array(ROWS)].map((_, i) => (
                <div className="hero-tiles__row" key={i}>
                    {[...Array(COLS)].map((_, j) => {
                        const bgPos = `${j * 20}% ${i * 20}%`;
                        return (
                            <div className="hero-tiles__tile" key={j}>
                                <div
                                    className="hero-tiles__face hero-tiles__front"
                                    style={{ backgroundPosition: bgPos }}
                                />
                                <div
                                    className="hero-tiles__face hero-tiles__back"
                                    style={{ backgroundPosition: bgPos }}
                                />
                            </div>
                        );
                    })}
                </div>
            ))}
        </div>
    );
}
