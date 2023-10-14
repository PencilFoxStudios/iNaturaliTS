import { ShowTaxon } from "./ShowTaxon";

export interface TaxaShowResponse {
    total_results?: number;
    page?: number;
    per_page?: number;
    results: ShowTaxon[];
  }