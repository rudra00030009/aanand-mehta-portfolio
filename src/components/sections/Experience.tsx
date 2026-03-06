"use client";

import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { getProfileData } from "@/lib/data/getProfileData";
import { Job } from "@/types";
import { cn } from "@/lib/utils";
import { Briefcase } from "lucide-react";

interface ExperienceCardProps {
    job: Job;
    index: number;
}

function ExperienceCard({ job, index }: ExperienceCardProps) {
    const isEven = index % 2 === 0;

    return (
        <div className={cn(
            "relative flex items-center justify-between mb-24 w-full",
            isEven ? "flex-row-reverse" : "flex-row"
        )}>
            {/* Timeline Dot */}
            <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 bg-primary rounded-full shadow-[0_0_15px_rgba(59,130,246,0.8)] z-20" />

            {/* Content Card */}
            <motion.div
                initial={{ opacity: 0, x: isEven ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className={cn(
                    "w-[45%] p-8 rounded-3xl glass-morphism relative group hover-glow",
                    "hover:scale-[1.02] transition-transform duration-500"
                )}
            >
                <div className="absolute top-0 left-0 w-full h-full bg-primary/5 rounded-3xl -z-10 group-hover:bg-primary/10 transition-colors" />

                <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                        <div className="p-2 rounded-lg bg-primary/10 text-primary">
                            <Briefcase className="w-5 h-5" />
                        </div>
                        <span className="text-sm font-bold text-primary tracking-widest uppercase">{job.period}</span>
                    </div>

                    {job.logo && (
                        <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-primary/20 bg-white p-1 shrink-0 shadow-sm">
                            <Image
                                src={job.logo}
                                alt={job.company}
                                fill
                                className="object-contain"
                            />
                        </div>
                    )}
                </div>

                <h3 className="text-2xl font-black mb-1 group-hover:text-primary transition-colors">{job.role}</h3>
                <p className="text-lg font-bold mb-4 opacity-80">{job.company}</p>

                <ul className="space-y-3">
                    {job.highlights.map((highlight, i) => (
                        <li key={i} className="flex gap-3 text-muted-foreground leading-relaxed">
                            <span className="mt-2 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                            <span>{highlight}</span>
                        </li>
                    ))}
                </ul>

                {/* Floating background shape */}
                <div className="absolute -top-4 -right-4 w-20 h-20 bg-primary/10 blur-2xl rounded-full -z-20 group-hover:bg-primary/20 transition-all duration-700" />
            </motion.div>

            {/* Empty space for the other side */}
            <div className="w-[45%]" />
        </div>
    );
}

export function Experience() {
    const profile = getProfileData();
    const { scrollYProgress } = useScroll();
    const scaleY = useTransform(scrollYProgress, [0.2, 0.8], [0, 1]);

    return (
        <section id="experience" className="py-24 px-6 relative">
            <div className="container mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-24"
                >
                    <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tighter">
                        The <span className="text-primary italic">Journey</span>
                    </h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                        Over 14 years of driving digital transformation and excellence across global enterprises.
                    </p>
                </motion.div>

                <div className="relative max-w-5xl mx-auto">
                    {/* Vertical Line */}
                    <motion.div
                        style={{ scaleY, originY: 0 }}
                        className="absolute left-1/2 -translate-x-1/2 top-0 w-0.5 h-full bg-gradient-to-b from-primary via-primary-foreground to-primary opacity-30 z-10"
                    />

                    <div className="flex flex-col">
                        {profile?.experience?.map((job, i) => (
                            <ExperienceCard key={`${job.company}-${i}`} job={job} index={i} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
