"use client";

import React from "react";
import { motion } from "framer-motion";

interface FloatingElementProps {
    children?: React.ReactNode;
    duration?: number;
    delay?: number;
    yOffset?: number;
    xOffset?: number;
    className?: string;
}

export function FloatingElement({
    children,
    duration = 5,
    delay = 0,
    yOffset = 20,
    xOffset = 10,
    className = "",
}: FloatingElementProps) {
    return (
        <motion.div
            className={className}
            animate={{
                y: [0, -yOffset, 0],
                x: [0, xOffset, 0],
                rotate: [0, 2, -2, 0],
            }}
            transition={{
                duration,
                repeat: Infinity,
                delay,
                ease: "easeInOut",
            }}
        >
            {children}
        </motion.div>
    );
}
