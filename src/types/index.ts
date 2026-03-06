export interface Job {
    company: string;
    role: string;
    period: string;
    highlights: string[];
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
}
