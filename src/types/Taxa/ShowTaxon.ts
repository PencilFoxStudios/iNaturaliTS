import { Color } from "./Color";
import { ConservationStatus } from "./ConservationStatus";
import { EstablishmentMeans } from "./EstablishmentMeans";
import { GenericTaxon } from "./GenericTaxon";
import { TaxonConservationStatus } from "./TaxonConservationStatus";

export interface ShowTaxon extends GenericTaxon {
    ancestor_ids?: number[];
    colors?: Color[];
    conservation_status?: ConservationStatus;
    conservation_statuses?: TaxonConservationStatus[];
    establishment_means?: EstablishmentMeans;
    preferred_establishment_means?: string;
}

