"use client";

import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Float, MeshDistortMaterial, Sphere } from "@react-three/drei";
import { motion } from "framer-motion";
import { getProfileData } from "@/lib/data/getProfileData";
import { Button } from "../ui/Button";
import { FloatingElement } from "../animations/FloatingElement";
import { ArrowRight } from "lucide-react";

function Hero3D() {
    return (
        <div className="absolute inset-0 z-0 opacity-40 md:opacity-100">
            <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
                <ambientLight intensity={0.5} />
                <pointLight position={[10, 10, 10]} intensity={1.5} />
                <Suspense fallback={null}>
                    <Float speed={2} rotationIntensity={1.5} floatIntensity={2}>
                        <Sphere args={[1, 100, 100]} scale={1.8}>
                            <MeshDistortMaterial
                                color="#3b82f6"
                                attach="material"
                                distort={0.4}
                                speed={2}
                                roughness={0}
                            />
                        </Sphere>
                    </Float>
                </Suspense>
            </Canvas>
        </div>
    );
}

export function Hero() {
    const profile = getProfileData();

    return (
        <section className="relative min-h-[90vh] flex items-center justify-center pt-20 px-6 overflow-hidden">
            <Hero3D />

            <div className="container relative z-10 mx-auto text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <motion.span
                        className="inline-block px-4 py-1.5 mb-6 text-sm font-medium tracking-wider uppercase bg-primary/10 text-primary border border-primary/20 rounded-full"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2 }}
                    >
                        {profile?.currentRole}
                    </motion.span>

                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 tracking-tighter leading-[0.9]">
                        {profile?.name?.split(" ").map((word, i) => (
                            <span key={i} className="inline-block mr-4 last:mr-0">
                                {word}
                            </span>
                        ))}
                    </h1>

                    <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 mb-10 max-w-3xl mx-auto">
                        {profile?.titles?.map((title, i) => (
                            <motion.span
                                key={i}
                                className="text-lg md:text-xl font-medium text-[#030303] dark:text-[#3b82f6]"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.4 + i * 0.1 }}
                            >
                                {title}
                                {i !== profile.titles.length - 1 && (
                                    <span className="ml-4 opacity-30">/</span>
                                )}
                            </motion.span>
                        ))}
                    </div>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Button size="lg" className="group rounded-full px-8 py-6 text-lg h-auto shadow-xl shadow-primary/20 transition-all hover:scale-105 active:scale-95 hover-glow">
                            Explore Experience
                            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Button>
                        <Button variant="outline" size="lg" className="rounded-full px-8 py-6 text-lg h-auto bg-background/50 backdrop-blur-sm shadow-xl transition-all hover:scale-105 active:scale-95 hover-glow">
                            Contact Me
                        </Button>
                    </div>
                </motion.div>
            </div>

            {/* Decorative floating shapes */}
            <FloatingElement className="absolute top-[15%] left-[10%] w-32 h-32 rounded-full bg-primary/20 blur-3xl" />
            <FloatingElement className="absolute bottom-[20%] right-[15%] w-48 h-48 rounded-full bg-blue-500/10 blur-3xl" delay={2} />
        </section>
    );
}
