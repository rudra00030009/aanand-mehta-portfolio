export function Footer() {
    return (
        <footer className="py-12 px-6 border-t border-border/50 bg-background/50 backdrop-blur-lg">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
                <p className="text-muted-foreground text-sm">
                    © {new Date().getFullYear()} Aanand Mehta. Built with Next.js & Antigravity principles.
                </p>
                <div className="flex gap-4">
                    {/* Social links placeholder */}
                </div>
            </div>
        </footer>
    );
}
