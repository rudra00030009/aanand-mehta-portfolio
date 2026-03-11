"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function Navigation() {
    const pathname = usePathname();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
    const closeMenu = () => setIsMobileMenuOpen(false);

    const navLink = (href: string, label: string, onClick?: () => void) => (
        <Link
            href={href}
            onClick={onClick}
            className={cn(
                "text-sm md:text-base font-medium transition-colors hover:text-primary",
                pathname === href ? "text-primary" : "text-foreground/70"
            )}
        >
            {label}
        </Link>
    );

    return (
        <header>
            <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 bg-background/50 backdrop-blur-lg border-b border-border/50">
                <Link href="/" className="text-xl font-bold tracking-tighter hover:scale-105 transition-transform" onClick={closeMenu}>
                    AM<span className="text-primary">.</span>
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-6">
                    {navLink("/about", "About")}
                    {navLink("/#experience", "Experience")}
                    {navLink("/#certifications", "Certifications")}
                    {navLink("/#skills", "Skills")}
                    <ThemeToggle />
                </div>

                {/* Mobile Menu Toggle & Theme */}
                <div className="flex items-center gap-4 md:hidden">
                    <ThemeToggle />
                    <button 
                        onClick={toggleMenu} 
                        className="p-2 -mr-2 text-foreground/70 hover:text-primary transition-colors focus:outline-none" 
                        aria-label="Toggle Menu"
                    >
                        {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>
            </nav>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div 
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.2 }}
                        className="fixed inset-0 z-40 bg-background/95 backdrop-blur-md flex flex-col items-center justify-center md:hidden"
                    >
                        <div className="flex flex-col items-center gap-8 text-2xl">
                            {navLink("/about", "About", closeMenu)}
                            {navLink("/#experience", "Experience", closeMenu)}
                            {navLink("/#certifications", "Certifications", closeMenu)}
                            {navLink("/#skills", "Skills", closeMenu)}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
