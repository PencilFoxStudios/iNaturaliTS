/**
 * Represents a generic search response from iNaturalist.org's API.
 */
export interface GenericSearchResponse {
    /**
     * The total number of results, if available.
     */
    total_results?: number;

    /**
     * The page number, if available.
     */
    page?: number;

    /**
     * The number of results per page, if available.
     */
    per_page?: number;

    /**
     * An array of results.
     */
    results: any[];
}