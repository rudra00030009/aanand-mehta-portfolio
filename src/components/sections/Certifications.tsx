"use client";

import React from "react";
import { motion } from "framer-motion";
import { getProfileData } from "@/lib/data/getProfileData";
import { CertCard } from "../ui/CertCard";

export function Certifications() {
    const profile = getProfileData();

    return (
        <section id="certifications" className="py-24 px-6 relative overflow-hidden">
            <div className="container mx-auto">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-black mb-4 tracking-tighter">
                        Credentials <span className="text-primary">&</span> Badges
                    </h2>
                    <div className="h-1.5 w-24 bg-primary rounded-full animate-drift" />
                    <p className="mt-6 text-muted-foreground max-w-2xl text-lg">
                        A comprehensive list of professional certifications showcasing expertise in Cloud, FinOps, and AI.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {profile?.certifications?.map((cert, i) => (
                        <CertCard key={cert.name} certification={cert} index={i} />
                    ))}
                </div>
            </div>

            {/* Background decoration */}
            <div className="absolute top-[30%] -right-[10%] w-[30%] h-[30%] rounded-full bg-blue-500/5 blur-[120px] -z-10" />
        </section>
    );
}
