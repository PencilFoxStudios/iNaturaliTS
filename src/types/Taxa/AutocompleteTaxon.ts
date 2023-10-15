import { GenericTaxon } from "./GenericTaxon";
export interface AutocompleteTaxon extends GenericTaxon {
    matched_term?: string;
}