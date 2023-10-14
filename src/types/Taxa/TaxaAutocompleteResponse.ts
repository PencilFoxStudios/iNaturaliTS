import { AutocompleteTaxon } from "./AutocompleteTaxon";

export interface TaxaAutocompleteResponse {
    total_results?: number;
    page?: number;
    per_page?: number;
    results?: AutocompleteTaxon[];
}