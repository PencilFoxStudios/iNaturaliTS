import { ObservationTaxon } from "./ObservationTaxon";

export interface Identification {
    id?: number;
    observation_id?: number;
    body?: string;
    created_at?: string;
    updated_at?: string;
    current?: boolean;
    taxon?: ObservationTaxon;
}