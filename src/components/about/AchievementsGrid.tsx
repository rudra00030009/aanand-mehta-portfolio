"use client";

import React from "react";
import { motion } from "framer-motion";
import { FloatingElement } from "@/components/animations/FloatingElement";

interface AchievementsGridProps {
    achievements: string[];
}

// Short icon emoji for each achievement
const ICONS = ["🧠", "🏗️", "📊", "🤝", "🚀"];

// Float params per card so each moves independently
const FLOAT_PARAMS = [
    { duration: 6, delay: 0, yOffset: 12, xOffset: 5 },
    { duration: 7, delay: 0.4, yOffset: 18, xOffset: 8 },
    { duration: 5, delay: 0.8, yOffset: 10, xOffset: 6 },
    { duration: 8, delay: 0.2, yOffset: 16, xOffset: 4 },
    { duration: 6, delay: 1.0, yOffset: 14, xOffset: 7 },
];

const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.12 } },
};

const cardVariants = {
    hidden: { opacity: 0, y: 28 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export function AchievementsGrid({ achievements }: AchievementsGridProps) {
    return (
        <div>
            {/* Section heading */}
            <motion.div
                className="mb-10"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                <p className="text-xs font-semibold tracking-widest uppercase text-primary mb-1">
                    2025 Impact
                </p>
                <h2 className="text-3xl md:text-4xl font-black tracking-tight text-foreground">
                    Key Achievements
                </h2>
            </motion.div>

            <motion.div
                className="grid grid-cols-1 sm:grid-cols-2 gap-5"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-60px" }}
            >
                {achievements.map((achievement, i) => {
                    const fp = FLOAT_PARAMS[i];
                    const isAccent = i % 2 === 0;

                    return (
                        <motion.div key={i} variants={cardVariants}>
                            <FloatingElement
                                duration={fp.duration}
                                delay={fp.delay}
                                yOffset={fp.yOffset}
                                xOffset={fp.xOffset}
                            >
                                <motion.div
                                    className="group relative glass-morphism rounded-xl p-6 h-full cursor-default"
                                    style={{
                                        borderLeft: `3px solid ${isAccent ? "rgba(18,52,88,0.6)" : "rgba(190,212,203,0.7)"}`,
                                    }}
                                    whileHover={{
                                        y: -6,
                                        transition: { type: "spring", stiffness: 250, damping: 18 },
                                    }}
                                >
                                    {/* Hover gradient wash */}
                                    <div className="absolute inset-0 rounded-xl bg-primary/0 group-hover:bg-primary/5 transition-all duration-300" />

                                    <div className="relative z-10 flex items-start gap-4">
                                        {/* Number */}
                                        <span className="text-3xl font-black text-foreground/10 group-hover:text-primary/20 transition-colors leading-none select-none">
                                            {String(i + 1).padStart(2, "0")}
                                        </span>
                                        <div>
                                            <span className="text-xl mb-2 block">{ICONS[i]}</span>
                                            <p className="text-sm md:text-base font-semibold text-foreground leading-snug">
                                                {achievement}
                                            </p>
                                        </div>
                                    </div>
                                </motion.div>
                            </FloatingElement>
                        </motion.div>
                    );
                })}
            </motion.div>
        </div>
    );
}
