export interface ObservationQueryParameters {
    /**
     * Whether or not positional accuracy / coordinate uncertainty has been specified
     * @query boolean
     */
    acc?: boolean;

    /**
     * Captive or cultivated observations
     * @query boolean
     */
    captive?: boolean;

    /**
     * Observations whose taxa are endemic to their location
     * @query boolean
     */
    endemic?: boolean;

    /**
     * Observations that are georeferenced
     * @query boolean
     */
    geo?: boolean;

    /**
     * Observations with the deprecated ID, Please! flag. Note that this will return observations, but that this attribute is no longer used.
     * @query boolean
     * @deprecated
     */
    id_please?: boolean;

    /**
     * Observations that have community identifications
     * @query boolean
     */
    identified?: boolean;

    /**
     * Observations whose taxa are introduced in their location
     * @query boolean
     */
    introduced?: boolean;

    /**
     * Observations that show on map tiles
     * @query boolean
     */
    mappable?: boolean;

    /**
     * Observations whose taxa are native to their location
     * @query boolean
     */
    native?: boolean;

    /**
     * Observations whose taxa are outside their known ranges
     * @query boolean
     */
    out_of_range?: boolean;

    /**
     * Observations identified by the curator of a project. If the project_id parameter is also specified, this will only consider observations identified by curators of the specified project(s)
     * @query boolean
     */
    pcid?: boolean;

    /**
     * Observations with photos
     * @query boolean
     */
    photos?: boolean;

    /**
     * Observations that have been favorited by at least one user
     * @query boolean
     */
    popular?: boolean;

    /**
     * Observations with sounds
     * @query boolean
     */
    sounds?: boolean;

    /**
     * Observations of active taxon concepts
     * @query boolean
     */
    taxon_is_active?: boolean;

    /**
     * Observations whose taxa are threatened in their location
     * @query boolean
     */
    threatened?: boolean;

    /**
     * Observations with a quality_grade of either needs_id or research. Equivalent to quality_grade=needs_id,research
     * @query boolean
     */
    verifiable?: boolean;

    /**
     * License attribute of an observation must not be null
     * @query boolean
     */
    licensed?: boolean;

    /**
     * License attribute of at least one photo of an observation must not be null
     * @query boolean
     */
    photo_licensed?: boolean;

    /**
     * Must have this ID
     * @query string[]
     */
    id?: string[];

    /**
     * Must not have this ID
     * @query string[]
     */
    not_id?: string[];

    /**
     * Observation must have this license
     * @query string[]
     */
    license?: string[];

    // ... (previously defined parameters)

    /**
     * Must have an observation field value with this datatype
     * @query string[]
     */
    ofv_datatype?: string[];

    /**
     * Must have at least one photo with this license
     * @query string[]
     */
    photo_license?: string[];

    /**
     * Must be observed within the place with this ID
     * @query number[]
     */
    place_id?: number[];

    /**
     * Must be added to the project with this ID or slug
     * @query string[]
     */
    project_id?: string[];

    /**
     * Taxon must have this rank
     * @query string[]
     */
    rank?: string[];

    /**
     * Must be affiliated with the iNaturalist network website with this ID
     * @query string[]
     */
    site_id?: string[];

    /**
     * Must have at least one sound with this license
     * @query string[]
     */
    sound_license?: string[];

    /**
     * Only show observations of these taxa and their descendants
     * @query string[]
     */
    taxon_id?: string[];

    /**
     * Exclude observations of these taxa and their descendants
     * @query string[]
     */
    without_taxon_id?: string[];

    /**
     * Taxon must have a scientific or common name matching this string
     * @query string[]
     */
    taxon_name?: string[];

    /**
     * User must have this ID or login
     * @query string[]
     */
    user_id?: string[];

    /**
     * User must have this login
     * @query string[]
     */
    user_login?: string[];

    /**
     * Observations identified by a particular user
     * @query number
     */
    ident_user_id?: number;

    /**
     * Must be observed within this day of the month
     * @query string[]
     */
    day?: string[];

    /**
     * Must be observed within this month
     * @query string[]
     */
    month?: string[];

    /**
     * Must be observed within this year
     * @query string[]
     */
    year?: string[];

    /**
     * Must have an annotation using this controlled term ID
     * @query number[]
     */
    term_id?: number[];

    /**
     * Must have an annotation using this controlled value ID. Must be combined with the term_id parameter
     * @query number[]
     */
    term_value_id?: number[];

    /**
     * Exclude observations with annotations using this controlled value ID.
     * @query number
     */
    without_term_id?: number;

    /**
     * Exclude observations with annotations using this controlled value ID. Must be combined with the term_id parameter
     * @query number[]
     */
    without_term_value_id?: number[];

    /**
     * Must have a positional accuracy above this value (meters)
     * @query string
     */
    acc_above?: string;

    /**
     * Must have a positional accuracy below this value (meters)
     * @query string
     */
    acc_below?: string;

    /**
     * Positional accuracy must be below this value (in meters) or be unknown
     * @query string
     */
    acc_below_or_unknown?: string;

    /**
     * Must be observed on or after this date
     * @query date
     */
    d1?: string;

    /**
     * Must be observed on or before this date
     * @query date
     */
    d2?: string;

    /**
     * Must be created at or after this time
     * @query date-time
     */
    created_d1?: string;

    /**
     * Must be created at or before this time
     * @query date-time
     */
    created_d2?: string;

    /**
     * Must be created on this date
     * @query date
     */
    created_on?: string;

    /**
     * Must be observed on this date
     * @query date
     */
    observed_on?: string;

    /**
     * Must not be of a taxon previously observed by this user
     * @query number
     */
    unobserved_by_user_id?: number;

    /**
     * Must match the rules of the project with this ID or slug
     * @query string
     */
    apply_project_rules_for?: string;

    /**
     * Taxon must have this conservation status code. If the place_id parameter is also specified, this will only consider statuses specific to that place
     * @query string
     */
    cs?: string;

    /**
     * Taxon must have a conservation status from this authority. If the place_id parameter is also specified, this will only consider statuses specific to that place
     * @query string
     */
    csa?: string;

    /**
     * Taxon must have this IUCN conservation status. If the place_id parameter is also specified, this will only consider statuses specific to that place
     * @query string[]
     */
    csi?: string[];

    /**
     * Must have this geoprivacy setting
     * @query string[]
     */
    geoprivacy?: string[];

    /**
     * Filter observations by the most conservative geoprivacy applied by a conservation status associated with one of the taxa proposed in the current identifications.
     * @query string[]
     */
    taxon_geoprivacy?: string[];

    /**
     * Taxon must have this rank or lower
     * @query string
     */
    hrank?: string;

    /**
     * Taxon must have this rank or higher
     * @query string
     */
    lrank?: string;

    /**
     * Taxon must by within this iconic taxon
     * @query string[]
     */
    iconic_taxa?: string[];

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
     * Identifications must meet these criteria
     * @query string
     */
    identifications?: string;

    /**
     * Must be within a {radius} kilometer circle around this lat/lng (lat, lng, radius)
     * @query number
     */
    lat?: number;

    /**
     * Must be within a {radius} kilometer circle around this lat/lng (lat, lng, radius)
     * @query number
     */
    lng?: number;

    /**
     * Must be within a {radius} kilometer circle around this lat/lng (lat, lng, radius)
     * @query string
     */
    radius?: string;

    /**
     * Must be within this bounding box (nelat, nelng, swlat, swlng)
     * @query number
     */
    nelat?: number;

    /**
     * Must be within this bounding box (nelat, nelng, swlat, swlng)
     * @query number
     */
    nelng?: number;

    /**
     * Must be within this bounding box (nelat, nelng, swlat, swlng)
     * @query number
     */
    swlat?: number;

    /**
     * Must be within this bounding box (nelat, nelng, swlat, swlng)
     * @query number
     */
    swlng?: number;

    /**
     * Taxon must be in the list with this ID
     * @query number
     */
    list_id?: number;

    /**
     * Must not be in the project with this ID or slug
     * @query string
     */
    not_in_project?: string;

    /**
     * Must not match the rules of the project with this ID or slug
     * @query string
     */
    not_matching_project_rules_for?: string;

    /**
     * Search observation properties. Can be combined with search_on
     * @query string
     */
    q?: string;

    /**
     * Properties to search on, when combined with q. Searches across all properties by default
     * @query string
     */
    search_on?: string;

    /**
     * Must have this quality grade
     * @query string
     */
    quality_grade?: string;

    /**
     * Must be updated since this time
     * @query string
     */
    updated_since?: string;

    /**
     * See reviewed
     * @query string
     */
    viewer_id?: string;

    /**
     * Observations have been reviewed by the user with ID equal to the value of the viewer_id parameter
     * @query boolean
     */
    reviewed?: boolean;

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
     * Set the Cache-Control HTTP header with this value as max-age, in seconds. This means subsequent identical requests will be cached on iNaturalist servers, and commonly within web browsers
     * @query string
     */
    ttl?: string;

    /**
     * Pagination page number
     * @query string
     */
    page?: string;

    /**
     * Number of results to return in a page. The maximum value is generally 200 unless otherwise noted
     * @query string
     */
    per_page?: string;

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

    /**
     * Return only the record IDs
     * @query boolean
     */
    only_id?: boolean;


}
