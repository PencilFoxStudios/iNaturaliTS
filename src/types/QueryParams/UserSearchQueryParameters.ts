/**
 * Query parameters for searching users.
 */
export interface UserSearchQueryParameters {
    /**
     * Name to filter users by. Must begin with this value (required).
     */
    q: string;
    
    /**
     * ID of the project to filter users by. Only show users with memberships to this project.
     */
    project_id?: number;

    /**
     * Number of results to return in a page. The maximum value is generally 200 unless otherwise noted.
     */
    per_page?: string;
}
