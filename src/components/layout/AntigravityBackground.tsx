"use client";

import React from "react";
import { ParticleField } from "../animations/ParticleField";

export function AntigravityBackground() {
    return (
        <div className="fixed inset-0 w-full h-full -z-10 bg-background transition-colors duration-700">
            <ParticleField count={60} />

            {/* Decorative radial gradients for depth */}
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.05),transparent_70%)]" />
            <div className="absolute top-[20%] right-[10%] w-[40%] h-[40%] rounded-full bg-primary/5 blur-[120px] animate-pulse-slow" />
            <div className="absolute bottom-[10%] left-[5%] w-[30%] h-[30%] rounded-full bg-blue-500/5 blur-[100px] animate-float-slow" />
        </div>
    );
}
