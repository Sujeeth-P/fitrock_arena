'use client';

import { useScroll, useTransform, motion, AnimatePresence } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';

interface Image {
	src: string;
	alt?: string;
}

interface ZoomParallaxProps {
	/** Array of images to be displayed in the parallax effect */
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

	const numSlots = 7;
	const [slotImageIndexes, setSlotImageIndexes] = useState(
		Array.from({ length: numSlots }, (_, i) => i % Math.max(images.length, 1))
	);

	useEffect(() => {
		if (images.length <= 1) return;

		const interval = setInterval(() => {
			setSlotImageIndexes(() => {
				const available = images.map((_, i) => i);

				// Shuffle available indices to get a random completely new set
				for (let i = available.length - 1; i > 0; i--) {
					const j = Math.floor(Math.random() * (i + 1));
					const temp = available[i];
					available[i] = available[j];
					available[j] = temp;
				}

				// Pick the first \`numSlots\` from the shuffled array
				// (if there are fewer images than slots, it will wrap around but that is fine)
				return Array.from(
					{ length: numSlots },
					(_, i) => available[i % available.length]
				);
			});
		}, 2800); // Change all images every 3.5 seconds

		return () => clearInterval(interval);
	}, [images, numSlots]);

	return (
		<div ref={container} className="relative h-[300vh]">
			<div className="sticky top-0 h-screen overflow-hidden">
				{Array.from({ length: numSlots }).map((_, index) => {
					const scale = scales[index % scales.length];
					const config = IMAGE_CONFIGS[index] || IMAGE_CONFIGS[0];
					const imageIndex = slotImageIndexes[index];
					const currentImage = images[imageIndex];

					if (!currentImage) return null;

					return (
						<motion.div
							key={index}
							style={{ scale }}
							className="absolute top-0 flex h-full w-full items-center justify-center"
						>
							<div
								className="relative overflow-hidden rounded-lg bg-black/10"
								style={{
									width: config.width,
									height: config.height,
									top: config.top,
									left: config.left,
								}}
							>
								<AnimatePresence>
									<motion.img
										key={currentImage.src}
										src={currentImage.src || '/placeholder.svg'}
										alt={currentImage.alt || `Parallax image ${index + 1}`}
										className="absolute inset-0 h-full w-full object-cover"
										initial={{ opacity: 0 }}
										animate={{ opacity: 1 }}
										exit={{ opacity: 0 }}
										transition={{ duration: 1 }}
									/>
								</AnimatePresence>
							</div>
						</motion.div>
					);
				})}
			</div>
		</div>
	);
}
