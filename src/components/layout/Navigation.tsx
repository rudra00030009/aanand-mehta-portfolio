import Link from "next/link";
import { ThemeToggle } from "@/components/ui/ThemeToggle";

export function Navigation() {
    return (
        <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 bg-background/50 backdrop-blur-lg border-b border-border/50">
            <Link href="/" className="text-xl font-bold tracking-tighter hover:scale-105 transition-transform">
                AM<span className="text-primary">.</span>
            </Link>

            <div className="flex items-center gap-6">
                <Link href="#experience" className="text-sm font-medium hover:text-primary transition-colors">Experience</Link>
                <Link href="#certifications" className="text-sm font-medium hover:text-primary transition-colors">Certifications</Link>
                <Link href="#skills" className="text-sm font-medium hover:text-primary transition-colors">Skills</Link>
                <ThemeToggle />
            </div>
        </nav>
    );
}
