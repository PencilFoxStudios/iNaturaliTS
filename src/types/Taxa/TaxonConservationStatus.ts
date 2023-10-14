import { CorePlace } from "./CorePlace";

export interface TaxonConservationStatus {
    source_id?: number;
    authority?: string;
    status?: string;
    status_name?: string;
    iucn?: number;
    geoprivacy?: string;
    place?: CorePlace;
}