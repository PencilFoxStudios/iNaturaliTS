import { ShowObservation } from "./ShowObservation";

export interface ObservationsShowResponse {
    total_results?: number;
    page?: number;
    per_page?: number;
    results: ShowObservation[];
  }