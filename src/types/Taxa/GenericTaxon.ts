import { TaxonPhoto } from "./TaxonPhoto";

export interface GenericTaxon {
    id?: number;
    iconic_taxon_id?: number;
    iconic_taxon_name?: string;
    is_active?: boolean;
    name?: string;
    preferred_common_name?: string;
    rank?: string;
    rank_level?: number;
    default_photo?: TaxonPhoto;
    observations_count?: number;
  }