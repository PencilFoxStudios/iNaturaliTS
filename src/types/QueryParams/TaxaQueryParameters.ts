export interface TaxaQueryParameters {
    /**
     * Name must begin with this value
     * @query string
     */
    q: string;

    /**
     * Taxon is active
     * @query boolean
     */
    is_active?: boolean;

    /**
     * Only show taxa with this ID, or its descendants
     * @query string[]
     */
    taxon_id?: string[];

    /**
     * Taxon's parent must have this ID
     * @query number
     */
    parent_id?: number;

    /**
     * Taxon must have this rank
     * @query string[]
     */
    rank?: string[];

    /**
     * Taxon must have this rank level. Some example values are 70 (kingdom), 60 (phylum), 50 (class), 40 (order), 30 (family), 20 (genus), 10 (species), 5 (subspecies)
     * @query number
     */
    rank_level?: number;

    /**
     * Must have an ID above this value
     * @query string
     */
    id_above?: string;

    /**
     * Must have an ID below this value
     * @query string
     */
    id_below?: string;

    /**
     * Number of results to return in a page. The maximum value is generally 200 unless otherwise noted
     * @query string
     */
    per_page?: string;

    /**
     * Locale preference for taxon common names
     * @query string
     */
    locale?: string;

    /**
     * Place preference for regional taxon common names
     * @query number
     */
    preferred_place_id?: number;

    /**
     * Return only the record IDs
     * @query boolean
     */
    only_id?: boolean;

    /**
     * Include all taxon names in the response
     * @query boolean
     */
    all_names?: boolean;

    /**
     * Sort order
     * @query string
     */
    order?: string;

    /**
     * Sort field
     * @query string
     */
    order_by?: string;

}