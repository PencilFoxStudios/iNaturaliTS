import { GenericSearchResponse } from "../APIResponse/GenericSearchResponse";
import { UserSearchReturn } from "./UserSearchReturn";

export interface UsersResponse extends GenericSearchResponse {
    /**
     * An array of resulting users.
     */
    results: UserSearchReturn[];
}