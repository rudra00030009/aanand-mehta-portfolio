export interface Job {
    company: string;
    role: string;
    period: string;
    highlights: string[];
    logo?: string;
}

export interface Certification {
    name: string;
    issuer: string;
    date: string;
}

export interface Profile {
    name: string;
    titles: string[];
    currentRole: string;
    summary: string;
    experience: Job[];
    certifications: Certification[];
    skills: Record<string, number>;
    achievements2025: string[];
    strategicPositioning?: string;
    passion?: string;
    specializations?: string[];
    photo?: string;
    stats?: {
        yearsExperience: number;
        certifications: number;
        enterprises: number;
    };
}
