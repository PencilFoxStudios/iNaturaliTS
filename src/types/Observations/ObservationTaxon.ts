import { EstablishmentMeans } from "./EstablishmentMeans";
import { RawConservationStatus } from "./RawConservationStatus";

export interface ObservationTaxon {
    id?: number;
    iconic_taxon_id?: number;
    iconic_taxon_name?: string;
    is_active?: boolean;
    name?: string;
    preferred_common_name?: string;
    rank?: string;
    rank_level?: number;
    ancestor_ids?: number[];
    ancestry?: string;
    conservation_status?: RawConservationStatus;
    endemic?: boolean;
    establishment_means?: EstablishmentMeans;
    introduced?: boolean;
    native?: boolean;
    threatened?: boolean;
}