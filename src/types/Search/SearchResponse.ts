import { GenericSearchResponse } from "../APIResponse/GenericSearchResponse";

export interface SearchResponse extends GenericSearchResponse {
    /**
     * An array of SOMETHING?
     * @TODO Figure out what that something is.
     */
    results: any[];
}