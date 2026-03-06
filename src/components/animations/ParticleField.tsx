"use client";

import React, { useMemo } from "react";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";


export function ParticleField({ count = 50 }: { count?: number }) {
    const { resolvedTheme } = useTheme();

    const particles = useMemo(() => {
        return Array.from({ length: count }).map((_, i) => ({
            id: i,
            x: Math.random() * 100,
            y: Math.random() * 100,
            size: Math.random() * 4 + 2,
            duration: Math.random() * 20 + 10,
            delay: Math.random() * -20,
            opacity: Math.random() * 0.5 + 0.1,
        }));
    }, [count]);

    return (
        <div className="fixed inset-0 pointer-events-none overflow-hidden z-[-1]">
            {particles.map((particle) => (
                <motion.div
                    key={particle.id}
                    className={cn(
                        "absolute rounded-full blur-[1px]",
                        resolvedTheme === "dark"
                            ? "bg-blue-400/30 shadow-[0_0_8px_rgba(96,165,250,0.3)]"
                            : "bg-blue-600/50 shadow-[0_0_10px_rgba(37,99,235,0.4)]"
                    )}
                    style={{
                        left: `${particle.x}%`,
                        top: `${particle.y}%`,
                        width: particle.size,
                        height: particle.size,
                        opacity: particle.opacity,
                    }}
                    animate={{
                        y: [0, -40, 0],
                        x: [0, 10, 0],
                        scale: [1, 1.2, 1],
                        opacity: [particle.opacity, particle.opacity * 1.5, particle.opacity],
                    }}
                    transition={{
                        duration: particle.duration,
                        repeat: Infinity,
                        delay: particle.delay,
                        ease: "linear",
                    }}
                />
            ))}
        </div>
    );
}
