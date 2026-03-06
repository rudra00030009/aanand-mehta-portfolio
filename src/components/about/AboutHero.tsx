"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { FloatingElement } from "@/components/animations/FloatingElement";
import { cn } from "@/lib/utils";

interface AboutHeroProps {
    name: string;
    titles: string[];
    currentRole: string;
    strategicPositioning: string;
    photo?: string;
}

export function AboutHero({ name, titles, currentRole, strategicPositioning, photo }: AboutHeroProps) {
    const [titleIndex, setTitleIndex] = useState(0);
    const [imgError, setImgError] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setTitleIndex((i) => (i + 1) % titles.length);
        }, 3000);
        return () => clearInterval(interval);
    }, [titles.length]);

    const nameWords = name.split(" ");

    return (
        <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center min-h-[70vh]">

            {/* ── Left: Text Content ── */}
            <motion.div
                className="flex flex-col gap-6 z-10"
                initial={{ opacity: 0, x: -40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.9, ease: "easeOut" }}
            >
                {/* Role badge */}
                <motion.span
                    className="inline-flex w-fit px-4 py-1.5 text-xs font-semibold tracking-widest uppercase rounded-full bg-primary/10 text-primary border border-primary/20"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                >
                    {currentRole}
                </motion.span>

                {/* Name */}
                <h1 className="text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-[0.88]">
                    {nameWords.map((word, i) => (
                        <motion.span
                            key={word}
                            className="inline-block mr-4 last:mr-0 bg-gradient-to-br from-[#123458] to-[#BED4CB] dark:from-[#3b82f6] dark:to-[#BED4CB] bg-clip-text text-transparent"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 + i * 0.12, duration: 0.7, ease: "easeOut" }}
                        >
                            {word}
                        </motion.span>
                    ))}
                </h1>

                {/* Cycling title */}
                <div className="h-8 overflow-hidden relative">
                    <AnimatePresence mode="wait">
                        <motion.p
                            key={titleIndex}
                            className="text-lg font-medium text-[#123458] dark:text-[#3b82f6] absolute"
                            initial={{ opacity: 0, y: 12 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -12 }}
                            transition={{ duration: 0.4 }}
                        >
                            {titles[titleIndex]}
                        </motion.p>
                    </AnimatePresence>
                </div>

                {/* Strategic positioning */}
                <motion.p
                    className="text-base text-foreground/70 max-w-lg leading-relaxed"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.7 }}
                >
                    {strategicPositioning}
                </motion.p>

                {/* Decorative line */}
                <motion.div
                    className="h-px bg-gradient-to-r from-primary/60 to-transparent max-w-xs"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    style={{ originX: 0 }}
                    transition={{ delay: 0.9, duration: 0.8 }}
                />
            </motion.div>

            {/* ── Right: Photo ── */}
            <motion.div
                className="relative flex justify-center lg:justify-end z-10"
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.9, ease: "easeOut", delay: 0.1 }}
            >
                {/* Pulsing ring */}
                <motion.div
                    className="absolute inset-0 m-auto rounded-[60%_40%_30%_70%/60%_30%_70%_40%] bg-primary/10 dark:bg-blue-500/10 blur-2xl w-72 h-72 lg:w-96 lg:h-96"
                    animate={{ scale: [1, 1.08, 1], opacity: [0.5, 0.8, 0.5] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                />

                <FloatingElement duration={7} yOffset={14} xOffset={6}>
                    <motion.div
                        className="relative w-64 h-72 lg:w-80 lg:h-96 cursor-pointer"
                        whileHover={{ scale: 1.04, filter: "drop-shadow(0 24px 48px rgba(18,52,88,0.35))" }}
                        transition={{ type: "spring", stiffness: 200, damping: 20 }}
                    >
                        {/* Blob clip wrapper */}
                        <div
                            className="w-full h-full overflow-hidden bg-muted"
                            style={{
                                borderRadius: "60% 40% 55% 45% / 55% 45% 55% 45%",
                                border: "2px solid",
                                borderColor: "rgba(18,52,88,0.25)",
                            }}
                        >
                            <Image
                                src={photo || "/aanand-mehta.jpg"}
                                alt={name}
                                fill
                                className={cn(
                                    "object-cover object-top transition-opacity duration-300",
                                    imgError ? "opacity-0" : "opacity-100"
                                )}
                                priority
                                onError={() => setImgError(true)}
                            />
                            {/* Initials placeholder shown when image is absent */}
                            {imgError && (
                                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-[#123458] to-[#BED4CB] dark:from-[#1e293b] dark:to-[#3b82f6]">
                                    <span className="text-6xl font-black text-white/80 select-none">AM</span>
                                </div>
                            )}
                        </div>

                        {/* Thin animated border overlay */}
                        <motion.div
                            className="absolute inset-0 pointer-events-none"
                            style={{
                                borderRadius: "60% 40% 55% 45% / 55% 45% 55% 45%",
                                border: "1.5px solid rgba(190,212,203,0.5)",
                            }}
                            animate={{ rotate: [0, 360] }}
                            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                        />
                    </motion.div>
                </FloatingElement>

                {/* Floating accent blobs */}
                <FloatingElement duration={6} delay={1} yOffset={18} xOffset={10} className="absolute -top-8 -right-4">
                    <div className="w-16 h-16 rounded-full bg-primary/20 blur-xl" />
                </FloatingElement>
                <FloatingElement duration={9} delay={2} yOffset={12} xOffset={8} className="absolute -bottom-6 left-4">
                    <div className="w-12 h-12 rounded-full bg-[#BED4CB]/30 blur-lg" />
                </FloatingElement>
            </motion.div>
        </div>
    );
}
