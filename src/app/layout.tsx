import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { AntigravityBackground } from "@/components/layout/AntigravityBackground";
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { cn } from "@/lib/utils";




const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Aanand Mehta | Antigravity Portfolio",
  description: "Portfolio of Aanand Mehta - AWS Community Builder, FinOps AI Specialist, and Enterprise Architect.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn(inter.className, "antialiased overflow-x-hidden")}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <AntigravityBackground />
          <Navigation />
          <main className="relative z-10 min-h-screen">
            {children}
          </main>
          <Footer />

        </ThemeProvider>


      </body>
    </html>
  );
}
