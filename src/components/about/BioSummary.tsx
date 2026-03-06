"use client";

import React from "react";
import { motion } from "framer-motion";

interface BioSummaryProps {
    summary: string;
}

export function BioSummary({ summary }: BioSummaryProps) {
    return (
        <motion.div
            className="relative"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
        >
            <div className="glass-morphism rounded-2xl p-8 md:p-12 relative overflow-hidden">
                {/* Decorative giant quote */}
                <span
                    className="absolute -top-2 -left-1 text-[9rem] font-black leading-none select-none pointer-events-none"
                    style={{ color: "rgba(18,52,88,0.08)" }}
                    aria-hidden
                >
                    &quot;
                </span>

                {/* Section label */}
                <p className="text-xs font-semibold tracking-widest uppercase text-primary mb-4 relative z-10">
                    About Me
                </p>

                <p className="text-base md:text-lg leading-relaxed text-foreground/80 relative z-10 max-w-3xl">
                    {summary}
                </p>

                {/* Bottom-right accent line */}
                <div className="absolute bottom-6 right-8 w-20 h-px bg-gradient-to-l from-primary/50 to-transparent" />
            </div>
        </motion.div>
    );
}
