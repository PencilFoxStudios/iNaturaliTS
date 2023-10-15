import { GenericSearchResponse } from "../../APIResponse/GenericSearchResponse";
import { ProjectMember } from "./ProjectMember";

/**
 * Represents a response containing project members from iNaturalist.org's API.
 */
export interface ProjectMembersResponse extends GenericSearchResponse {
    /**
     * An array of project members.
     */
    results: ProjectMember[];
}