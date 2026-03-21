"use client";

import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import {
    Hammer,
    Ruler,
    ShieldCheck,
    Layers,
    HardHat,
} from "lucide-react";

const tasks = [
    {
        title: "Custom Wall Design",
        subtitle: "Tailored to your space and needs",
        icon: <Ruler className="w-5 h-5" />,
    },
    {
        title: "Professional Engineering",
        subtitle: "Structural integrity guaranteed",
        icon: <Hammer className="w-5 h-5" />,
    },
    {
        title: "Safety Certified",
        subtitle: "International safety standards",
        icon: <ShieldCheck className="w-5 h-5" />,
    },
    {
        title: "Multi-Surface Builds",
        subtitle: "Bouldering, lead & speed walls",
        icon: <Layers className="w-5 h-5" />,
    },
    {
        title: "End-to-End Management",
        subtitle: "From concept to completion",
        icon: <HardHat className="w-5 h-5" />,
    },
];

const ITEM_HEIGHT = 64;
const LIST_HEIGHT = tasks.length * ITEM_HEIGHT;

/**
 * Inline scrolling feature list — designed to be placed
 * INSIDE another section's content (not as a standalone section).
 */
export default function FeatureSection() {
    return (
        <Card
            className="overflow-hidden shadow-xl"
            style={{
                maxWidth: '380px',
                border: '1px solid rgba(255,255,255,0.08)',
                background: 'rgba(255,255,255,0.03)',
                backdropFilter: 'blur(12px)',
                borderRadius: 'var(--radius-md)',
                marginTop: 'var(--space-lg)',
                marginBottom: 'var(--space-lg)',
                paddingLeft: '5%',
            }}
        >
            <CardContent
                className="relative p-0 overflow-hidden"
                style={{ height: `${ITEM_HEIGHT * 4}px` }}
            >
                <div className="relative h-full overflow-hidden">
                    {/* Scrolling list — 3 copies for seamless loop */}
                    <motion.div
                        animate={{ y: [0, -LIST_HEIGHT] }}
                        transition={{
                            duration: 12,
                            ease: "linear",
                            repeat: Infinity,
                            repeatType: "loop",
                        }}
                        style={{ willChange: 'transform' }}
                    >
                        {[...tasks, ...tasks, ...tasks].map((task, i) => (
                            <div
                                key={i}
                                className="flex items-center gap-4"
                                style={{
                                    padding: '12px 16px',
                                    borderBottom: '1px solid rgba(255,255,255,0.06)',
                                    height: `${ITEM_HEIGHT}px`,
                                }}
                            >
                                <div
                                    className="shrink-0 flex items-center justify-center"
                                    style={{
                                        width: 40,
                                        height: 40,
                                        borderRadius: 'var(--radius-sm)',
                                        background: 'rgba(255, 77, 0, 0.12)',
                                        color: 'var(--clr-accent)',
                                    }}
                                >
                                    {task.icon}
                                </div>
                                <div>
                                    <p
                                        className="text-sm font-semibold text-white"
                                        style={{ fontFamily: 'var(--ff-body)', lineHeight: 1.3 }}
                                    >
                                        {task.title}
                                    </p>
                                    <p
                                        className="text-xs"
                                        style={{
                                            color: 'var(--clr-light-gray)',
                                            fontFamily: 'var(--ff-body)',
                                            lineHeight: 1.4,
                                        }}
                                    >
                                        {task.subtitle}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </motion.div>

                    {/* Fade edges */}
                    <div
                        className="absolute top-0 left-0 w-full pointer-events-none"
                        style={{
                            height: 40,
                            background: 'linear-gradient(to bottom, rgba(17,17,17,1), transparent)',
                            zIndex: 2,
                        }}
                    />
                    <div
                        className="absolute bottom-0 left-0 w-full pointer-events-none"
                        style={{
                            height: 40,
                            background: 'linear-gradient(to top, rgba(17,17,17,1), transparent)',
                            zIndex: 2,
                        }}
                    />
                </div>
            </CardContent>
        </Card>
    );
}
