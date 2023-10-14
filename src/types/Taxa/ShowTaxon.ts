import { Color } from "./Color";
import { ConservationStatus } from "./ConservationStatus";
import { EstablishmentMeans } from "./EstablishmentMeans";
import { TaxonConservationStatus } from "./TaxonConservationStatus";
import { TaxonPhoto } from "./TaxonPhoto";

export interface ShowTaxon {
    id?: number;
    iconic_taxon_id?: number;
    iconic_taxon_name?: string;
    is_active?: boolean;
    name?: string;
    preferred_common_name?: string;
    rank?: string;
    rank_level?: number;
    ancestor_ids?: number[];
    colors?: Color[];
    conservation_status?: ConservationStatus;
    conservation_statuses?: TaxonConservationStatus[];
    default_photo?: TaxonPhoto;
    establishment_means?: EstablishmentMeans;
    observations_count?: number;
    preferred_establishment_means?: string;
  }