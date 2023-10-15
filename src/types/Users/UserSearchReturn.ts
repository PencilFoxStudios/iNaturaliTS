import { User } from "./User";
import { UserRole } from "./UserRole";
export interface UserSearchReturn extends User {
    spam: boolean;
    suspended: boolean;
    created_at: string;
    login_autocomplete: string;
    login_exact: string;
    name_autocomplete: string;
    orcid: string | null;
    observations_count: number;
    identifications_count: number;
    journal_posts_count: number;
    activity_count: number;
    species_count: number;
    universal_search_rank: number;
    roles: UserRole[];
    site_id: number;
}