"use client";

import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { Certification } from "@/types";
import { cn } from "@/lib/utils";
import { Award, Calendar, ExternalLink } from "lucide-react";

interface CertCardProps {
    certification: Certification;
    index: number;
}

export function CertCard({ certification, index }: CertCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
                duration: 0.6,
                delay: index * 0.1,
                ease: "easeOut"
            }}
        >
            <Tilt
                tiltMaxAngleX={15}
                tiltMaxAngleY={15}
                perspective={1000}
                scale={1.05}
                transitionSpeed={1500}
                gyroscope={true}
                className="h-full"
            >
                <div className={cn(
                    "group relative h-full p-6 rounded-2xl transition-all duration-500",
                    "bg-white/5 backdrop-blur-md border border-white/10 shadow-2xl hover:border-primary/50",
                    "flex flex-col justify-between overflow-hidden"
                )}>
                    {/* Background glow effect on hover */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    <div className="relative z-10">
                        <div className="flex justify-between items-start mb-4">
                            <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                                <Award className="w-6 h-6" />
                            </div>
                            <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-white opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 -translate-y-2 group-hover:translate-x-0 group-hover:translate-y-0" />
                        </div>

                        <h3 className="text-xl font-bold mb-2 leading-tight group-hover:text-primary transition-colors">
                            {certification.name}
                        </h3>
                        <p className="text-muted-foreground font-medium mb-4">
                            {certification.issuer}
                        </p>
                    </div>

                    <div className="relative z-10 flex items-center gap-2 text-sm text-muted-foreground">
                        <Calendar className="w-4 h-4" />
                        <span>{certification.date || "Active Certification"}</span>
                    </div>

                    {/* Floating detail on hover */}
                    <div className="absolute -bottom-2 -right-2 w-24 h-24 bg-primary/20 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
            </Tilt>
        </motion.div>
    );
}
