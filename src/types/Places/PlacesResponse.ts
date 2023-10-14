import { ShowPlace } from "./ShowPlace";

export interface PlacesResponse {
    total_results?: number;
    page?: number;
    per_page?: number;
    results: ShowPlace[];
  }
  