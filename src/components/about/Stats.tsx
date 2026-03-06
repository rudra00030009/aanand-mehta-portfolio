"use client";

import React, { useRef } from "react";
import { motion, useInView, useMotionValue, useSpring, useTransform } from "framer-motion";

interface StatsProps {
    stats: {
        yearsExperience: number;
        certifications: number;
        enterprises: number;
    };
}

function AnimatedNumber({ target, suffix = "+" }: { target: number; suffix?: string }) {
    const ref = useRef<HTMLSpanElement>(null);
    const inView = useInView(ref, { once: true });
    const motionVal = useMotionValue(0);
    const spring = useSpring(motionVal, { stiffness: 60, damping: 20 });
    const display = useTransform(spring, (v) => Math.round(v).toString());

    React.useEffect(() => {
        if (inView) motionVal.set(target);
    }, [inView, target, motionVal]);

    return (
        <span ref={ref} className="inline-flex items-baseline gap-0.5 tabular-nums">
            <motion.span>{display}</motion.span>
            <span>{suffix}</span>
        </span>
    );
}

export function Stats({ stats }: StatsProps) {
    const items = [
        { value: stats.yearsExperience, label: "Years Experience", suffix: "+" },
        { value: stats.certifications, label: "Active Certifications", suffix: "+" },
        { value: stats.enterprises, label: "Global Enterprises", suffix: "" },
    ];

    return (
        <motion.div
            className="glass-morphism rounded-2xl px-6 py-8 md:px-12 md:py-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
        >
            <div className="grid grid-cols-3 divide-x divide-border/50">
                {items.map((item, i) => (
                    <div key={i} className="flex flex-col items-center text-center px-4 md:px-8 gap-1">
                        <span className="text-4xl md:text-5xl font-black text-primary tracking-tighter">
                            <AnimatedNumber target={item.value} suffix={item.suffix} />
                        </span>
                        <span className="text-xs md:text-sm text-foreground/60 font-medium leading-tight">
                            {item.label}
                        </span>
                    </div>
                ))}
            </div>
        </motion.div>
    );
}
