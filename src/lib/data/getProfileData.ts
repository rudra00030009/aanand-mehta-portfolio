import profileData from "./profile.json";
import { Profile } from "@/types";

export function getProfileData(): Profile {
    return profileData as Profile;
}
