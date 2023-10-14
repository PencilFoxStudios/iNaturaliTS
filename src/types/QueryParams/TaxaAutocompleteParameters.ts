/**
 * Parameters for the Taxa Autocomplete endpoint.
 */
export interface TaxaAutocompleteParameters {
    /**
     * Name must begin with this value.
     */
    q: string;
  
    /**
     * Taxon is active.
     */
    is_active?: boolean;
  
    /**
     * Only show taxa with this ID, or its descendants.
     */
    taxon_id?: string[];
  
    /**
     * Taxon must have this rank.
     */
    rank?: string[];
  
    /**
     * Taxon must have this rank level. Some example values are 70 (kingdom), 60 (phylum), 50 (class), 40 (order), 30 (family), 20 (genus), 10 (species), 5 (subspecies).
     */
    rank_level?: number[];
  
    /**
     * Number of results to return in a page. The maximum value is 30 for this endpoint.
     */
    per_page?: string;
  
    /**
     * Locale preference for taxon common names.
     */
    locale?: string;
  
    /**
     * Place preference for regional taxon common names.
     */
    preferred_place_id?: number;
  
    /**
     * Include all taxon names in the response.
     */
    all_names?: boolean;
  }
  