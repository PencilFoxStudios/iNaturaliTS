import { UserSearchReturn } from "../../Users/UserSearchReturn";
import { ProjectMemberRole } from "./ProjectMemberRole";

/**
 * Represents a project member from iNaturalist.org.
 */
export interface ProjectMember {
    /**
     * The unique identifier for the project member.
     */
    id?: number;

    /**
     * The ID of the project to which the member belongs.
     */
    project_id?: number;

    /**
     * The date and time when the project member was created.
     */
    created_at?: string;

    /**
     * The date and time when the project member was last updated.
     */
    updated_at?: string;

    /**
     * The role of the project member, which can be 'curator' or 'manager'.
     */
    role?: ProjectMemberRole;

    /**
     * The number of observations made by the project member, if available.
     */
    observations_count?: number;

    /**
     * The number of taxa observed by the project member, if available.
     */
    taxa_count?: number;

    /**
     * Information about the user who is a project member.
     */
    user?: UserSearchReturn;
}