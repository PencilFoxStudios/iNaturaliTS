import { UserSearchReturn } from "../../Users/UserSearchReturn";

/**
 * Represents a project administrator.
 */
export interface ProjectAdmin {
    /**
     * The unique ID of the administrator.
     */
    id: number;

    /**
     * The user ID of the administrator.
     */
    user_id: number;

    /**
     * The project ID associated with the administrator.
     */
    project_id: number;

    /**
     * The role of the administrator (e.g., "manager").
     */
    role: string;

    /**
     * Information about the user who is an administrator.
     */
    user: UserSearchReturn;
}