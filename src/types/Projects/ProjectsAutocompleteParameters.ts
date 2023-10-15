/**
 * Represents the query parameters used to autocomplete projects in the request to the iNaturalist.org API.
 */
export interface ProjectsAutocompleteParameters {
    /**
     * Name must begin with this value (required).
     */
    q: string;

    /**
     * Must have this ID.
     */
    id?: string[];

    /**
     * Must not have this ID.
     */
    not_id?: string[];

    /**
     * Must be within a {radius} kilometer circle around this lat/lng (lat, lng, radius).
     */
    lat?: number;

    /**
     * Must be within a {radius} kilometer circle around this lat/lng (lat, lng, radius).
     */
    lng?: number;

    /**
     * Must be associated with this place.
     */
    place_id?: string[];

    /**
     * Must be within a {radius} kilometer circle around this lat/lng (lat, lng, radius). Defaults to 500km.
     */
    radius?: string;

    /**
     * Must be marked featured for the relevant site.
     */
    featured?: string;

    /**
     * Must be marked noteworthy for the relevant site.
     */
    noteworthy?: string;

    /**
     * Site ID that applies to featured and noteworthy. Defaults to the site of the authenticated user, or to the main iNaturalist site https://www.inaturalist.org.
     */
    site_id?: number;

    /**
     * Return more information about project rules, for example, return a full taxon object instead of simply an ID.
     */
    rule_details?: string;

    /**
     * Projects must be of this type.
     */
    type?: string[];

    /**
     * Project must have a member with this user ID.
     */
    member_id?: number;

    /**
     * Must have search parameter requirements.
     */
    has_params?: boolean;

    /**
     * Must have posts.
     */
    has_posts?: boolean;

    /**
     * Number of results to return in a page. The maximum value is generally 200 unless otherwise noted.
     */
    per_page?: string;
}
