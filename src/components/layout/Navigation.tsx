"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { cn } from "@/lib/utils";

export function Navigation() {
    const pathname = usePathname();

    const navLink = (href: string, label: string) => (
        <Link
            href={href}
            className={cn(
                "text-sm font-medium transition-colors hover:text-primary",
                pathname === href ? "text-primary" : "text-foreground/70"
            )}
        >
            {label}
        </Link>
    );

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 bg-background/50 backdrop-blur-lg border-b border-border/50">
            <Link href="/" className="text-xl font-bold tracking-tighter hover:scale-105 transition-transform">
                AM<span className="text-primary">.</span>
            </Link>

            <div className="flex items-center gap-6">
                {navLink("/about", "About")}
                {navLink("/#experience", "Experience")}
                {navLink("/#certifications", "Certifications")}
                {navLink("/#skills", "Skills")}
                <ThemeToggle />
            </div>
        </nav>
    );
}
