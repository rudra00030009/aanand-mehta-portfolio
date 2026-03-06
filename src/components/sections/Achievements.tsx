"use client";

import React from "react";
import { motion } from "framer-motion";
import { getProfileData } from "@/lib/data/getProfileData";
import { cn } from "@/lib/utils";
import { Sparkles, CheckCircle2 } from "lucide-react";

export function Achievements() {
    const profile = getProfileData();

    return (
        <section id="achievements" className="py-24 px-6 relative bg-primary/5">
            <div className="container mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex flex-col items-center text-center mb-16"
                >
                    <div className="p-3 rounded-2xl bg-primary/10 text-primary mb-6 animate-float">
                        <Sparkles className="w-8 h-8" />
                    </div>
                    <h2 className="text-4xl md:text-5xl font-black mb-4 tracking-tighter">
                        2025 <span className="text-primary italic">Milestones</span>
                    </h2>
                    <p className="text-muted-foreground max-w-2xl text-lg leading-relaxed">
                        Strategic impact and key achievements defining the future of AI-driven FinOps.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {profile?.achievements2025?.map((achievement, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            whileHover={{
                                y: -10,
                                transition: { duration: 0.2 }
                            }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className={cn(
                                "group relative p-8 rounded-3xl bg-background border border-border/50",
                                "shadow-xl hover:shadow-primary/20 hover:border-primary/50 transition-all duration-500",
                                "flex flex-col gap-4 overflow-hidden"
                            )}
                        >
                            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 blur-3xl rounded-full translate-x-10 -translate-y-10 group-hover:bg-primary/10 transition-colors" />

                            <div className="relative z-10 flex items-start gap-4">
                                <div className="mt-1 p-1 rounded-full bg-primary/20 text-primary shrink-0 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                                    <CheckCircle2 className="w-5 h-5" />
                                </div>
                                <p className="text-xl font-bold leading-snug group-hover:text-primary transition-colors">
                                    {achievement}
                                </p>
                            </div>

                            <div className="mt-auto pt-4 border-t border-border/50">
                                <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground group-hover:text-primary transition-colors">
                                    Nasdaq • Senior specialist
                                </span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
