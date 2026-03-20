'use client';

import { useScroll, useTransform, motion } from 'framer-motion';
import { useRef } from 'react';

interface Image {
	src: string;
	alt?: string;
}

interface ZoomParallaxProps {
	/** Array of images to be displayed in the parallax effect — max 7 images */
	images: Image[];
}

/**
 * Image positions: each entry defines the inner <div> size and offset
 * relative to the centered parent. Using inline styles for reliability
 * across Tailwind versions.
 */
const IMAGE_CONFIGS = [
	// 0 — center hero (large)
	{ width: '25vw', height: '25vh', top: '0', left: '0' },
	// 1 — top-right
	{ width: '35vw', height: '30vh', top: '-30vh', left: '5vw' },
	// 2 — left column
	{ width: '20vw', height: '45vh', top: '-10vh', left: '-25vw' },
	// 3 — right column
	{ width: '25vw', height: '25vh', top: '0', left: '27.5vw' },
	// 4 — bottom-left
	{ width: '20vw', height: '25vh', top: '27.5vh', left: '5vw' },
	// 5 — bottom far-left
	{ width: '30vw', height: '25vh', top: '27.5vh', left: '-22.5vw' },
	// 6 — bottom-right (small)
	{ width: '15vw', height: '15vh', top: '22.5vh', left: '25vw' },
];

export function ZoomParallax({ images }: ZoomParallaxProps) {
	const container = useRef(null);
	const { scrollYProgress } = useScroll({
		target: container,
		offset: ['start start', 'end end'],
	});

	const scale4 = useTransform(scrollYProgress, [0, 1], [1, 4]);
	const scale5 = useTransform(scrollYProgress, [0, 1], [1, 5]);
	const scale6 = useTransform(scrollYProgress, [0, 1], [1, 6]);
	const scale8 = useTransform(scrollYProgress, [0, 1], [1, 8]);
	const scale9 = useTransform(scrollYProgress, [0, 1], [1, 9]);

	const scales = [scale4, scale5, scale6, scale5, scale6, scale8, scale9];

	return (
		<div ref={container} className="relative h-[300vh]">
			<div className="sticky top-0 h-screen overflow-hidden">
				{images.map(({ src, alt }, index) => {
					const scale = scales[index % scales.length];
					const config = IMAGE_CONFIGS[index] || IMAGE_CONFIGS[0];

					return (
						<motion.div
							key={index}
							style={{ scale }}
							className="absolute top-0 flex h-full w-full items-center justify-center"
						>
							<div
								className="relative overflow-hidden rounded-lg"
								style={{
									width: config.width,
									height: config.height,
									top: config.top,
									left: config.left,
								}}
							>
								<img
									src={src || '/placeholder.svg'}
									alt={alt || `Parallax image ${index + 1}`}
									className="h-full w-full object-cover"
								/>
							</div>
						</motion.div>
					);
				})}
			</div>
		</div>
	);
}
