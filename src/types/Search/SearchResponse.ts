import { GenericSearchResponse } from "../APIResponse/GenericSearchResponse";
import { SearchResult } from "./SearchResult";

export interface SearchResponse extends GenericSearchResponse {
    /**
     * An array of SearchResult. That took a bit to implement...
     * @TODO Check my work
     */
    results: SearchResult[];
}