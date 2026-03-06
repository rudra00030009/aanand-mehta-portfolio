import type { Metadata } from "next";
import { getProfileData } from "@/lib/data/getProfileData";
import { AboutHero } from "@/components/about/AboutHero";
import { BioSummary } from "@/components/about/BioSummary";
import { AchievementsGrid } from "@/components/about/AchievementsGrid";
import { SpecializationsList } from "@/components/about/SpecializationsList";
import { Stats } from "@/components/about/Stats";

export const metadata: Metadata = {
    title: "About Aanand Mehta | FinOps Leader & AWS Community Builder",
    description:
        "Learn about Aanand Mehta — Senior Specialist FinOps at Nasdaq, AWS Community Builder, and Enterprise Cloud Architect with 14+ years shaping the intersection of finance and cloud.",
};

export default function AboutPage() {
    const profile = getProfileData();

    return (
        <div className="relative min-h-screen pt-24 pb-24 px-6">
            <div className="container mx-auto max-w-6xl flex flex-col gap-24">

                {/* Hero: photo + name + cycling title */}
                <AboutHero
                    name={profile.name}
                    titles={profile.titles}
                    currentRole={profile.currentRole}
                    strategicPositioning={profile.strategicPositioning ?? ""}
                    photo={profile.photo}
                />

                {/* Quick stats */}
                <Stats stats={profile.stats ?? { yearsExperience: 14, certifications: 9, enterprises: 5 }} />

                {/* Bio summary */}
                <BioSummary summary={profile.summary} />

                {/* Achievements grid */}
                <AchievementsGrid achievements={profile.achievements2025} />

                {/* Specializations */}
                <SpecializationsList
                    passion={profile.passion ?? "Driving change & positive impact"}
                    specializations={profile.specializations ?? []}
                />

            </div>
        </div>
    );
}
