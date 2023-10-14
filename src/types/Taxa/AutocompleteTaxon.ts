import { TaxonPhoto } from "./TaxonPhoto";

export interface AutocompleteTaxon {
    id?: number;
    iconic_taxon_id?: number;
    iconic_taxon_name?: string;
    is_active?: boolean;
    name?: string;
    preferred_common_name?: string;
    rank?: string;
    rank_level?: number;
    default_photo?: TaxonPhoto;
    matched_term?: string;
    observations_count?: number;
  }