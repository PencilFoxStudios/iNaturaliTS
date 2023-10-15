/**
 * Represents the query parameters used to filter project members in the request to the iNaturalist.org API.
 */
export interface ProjectMembersQueryParameters {
    /**
     * ID of the record (required).
     */
    id: number;

    /**
     * Membership role.
     */
    role?: string;

    /**
     * Pagination page number.
     */
    page?: string;

    /**
     * Number of results to return in a page. The maximum value is generally 200 unless otherwise noted.
     */
    per_page?: string;
}
