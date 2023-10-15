import { GenericSearchResponse } from "../APIResponse/GenericSearchResponse";
import { Project } from "./Project";

export interface ProjectsResponse extends GenericSearchResponse {
    /**
     * An array of projects.
     */
    results: Project[];
}