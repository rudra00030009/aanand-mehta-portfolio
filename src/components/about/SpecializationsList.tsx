"use client";

import React from "react";
import { motion } from "framer-motion";
import { Layers, TrendingUp, Zap } from "lucide-react";

interface SpecializationsListProps {
    passion: string;
    specializations: string[];
}

const ICONS = [Layers, TrendingUp, Zap];

const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.15 } },
};

const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export function SpecializationsList({ passion, specializations }: SpecializationsListProps) {
    return (
        <div>
            <motion.div
                className="mb-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                <p className="text-xs font-semibold tracking-widest uppercase text-primary mb-1">
                    Passion
                </p>
                <h2 className="text-3xl md:text-4xl font-black tracking-tight text-foreground">
                    {passion}
                </h2>
            </motion.div>

            <motion.div
                className="grid grid-cols-1 md:grid-cols-3 gap-5"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-60px" }}
            >
                {specializations.map((spec, i) => {
                    const Icon = ICONS[i];
                    return (
                        <motion.div key={i} variants={itemVariants}>
                            <motion.div
                                className="group glass-morphism rounded-xl p-6 flex flex-col gap-4 h-full cursor-default"
                                whileHover={{ y: -5, transition: { type: "spring", stiffness: 280, damping: 20 } }}
                            >
                                {/* Icon */}
                                <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
                                    <Icon
                                        className="w-5 h-5 text-primary/60 group-hover:text-primary transition-colors duration-300"
                                        strokeWidth={1.5}
                                    />
                                </div>

                                <p className="text-sm md:text-base text-foreground/80 leading-relaxed">
                                    {spec}
                                </p>

                                {/* Bottom accent */}
                                <div className="h-px bg-gradient-to-r from-primary/30 to-transparent mt-auto group-hover:from-primary/60 transition-all duration-300" />
                            </motion.div>
                        </motion.div>
                    );
                })}
            </motion.div>
        </div>
    );
}
