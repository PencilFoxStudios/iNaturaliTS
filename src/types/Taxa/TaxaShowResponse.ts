import { GenericSearchResponse } from "../APIResponse/GenericSearchResponse";
import { ShowTaxon } from "./ShowTaxon";

export interface TaxaShowResponse extends GenericSearchResponse {
  /**
   * An array of taxa.
   */
  results: ShowTaxon[];
}