import { Source } from "../Search";

export interface SearchQueryParameters {
    q?: string;
    sources?: Source[];
    place_id?: string[];
    per_page?: string;
    locale?: string;
    preferred_place_id?: number;
  }