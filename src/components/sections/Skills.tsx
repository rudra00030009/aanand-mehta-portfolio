"use client";

import React from "react";
import { motion } from "framer-motion";
import { getProfileData } from "@/lib/data/getProfileData";
import { FloatingElement } from "../animations/FloatingElement";
import { cn } from "@/lib/utils";

export function Skills() {
    const profile = getProfileData();
    const skillsArray = profile?.skills ? Object.entries(profile.skills) : [];

    return (
        <section id="skills" className="py-24 px-6 relative overflow-hidden">
            <div className="container mx-auto">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="text-center mb-24"
                >
                    <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tighter">
                        Skill <span className="text-primary">Ecosystem</span>
                    </h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed">
                        A dynamic constellation of core competencies, ranging from Cloud Architecture to FinOps Leadership.
                    </p>
                </motion.div>

                <div className="relative min-h-[500px] flex items-center justify-center">
                    {/* Central Glow */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] bg-primary/5 blur-[150px] rounded-full animate-pulse-slow" />

                    <div className="relative w-full max-w-5xl h-full flex flex-wrap justify-center items-center gap-6 md:gap-12">
                        {skillsArray.map(([skill, level], i) => (
                            <FloatingElement
                                key={skill}
                                duration={4 + Math.random() * 4}
                                delay={i * 0.2}
                                yOffset={15}
                                xOffset={10}
                                className="z-10"
                            >
                                <motion.div
                                    initial={{ opacity: 0, scale: 0 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    whileHover={{ scale: 1.1, rotate: 2 }}
                                    viewport={{ once: true }}
                                    transition={{
                                        type: "spring",
                                        stiffness: 260,
                                        damping: 20,
                                        delay: i * 0.1
                                    }}
                                    className={cn(
                                        "px-8 py-4 rounded-full glass-morphism cursor-default border border-primary/20",
                                        "shadow-lg hover:shadow-primary/30 transition-shadow duration-500",
                                        "flex flex-col items-center justify-center text-center"
                                    )}
                                    style={{
                                        backgroundColor: `rgba(59, 130, 246, ${0.05 + (level / 10)})`,
                                    }}
                                >
                                    <span className="text-xl font-bold tracking-tight">{skill}</span>
                                    <div className="flex gap-1 mt-2">
                                        {Array.from({ length: 5 }).map((_, j) => (
                                            <div
                                                key={j}
                                                className={cn(
                                                    "w-1.5 h-1.5 rounded-full transition-colors",
                                                    j < level ? "bg-primary" : "bg-primary/20"
                                                )}
                                            />
                                        ))}
                                    </div>
                                </motion.div>
                            </FloatingElement>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
