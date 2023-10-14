import { CorePlace } from "./CorePlace";

export interface ConservationStatus {
    place_id?: number;
    place?: CorePlace;
    status?: string;
}