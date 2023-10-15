import { DateDetails } from "./DateDetails";
import { User } from "../Users";

export interface NonOwnerIdentification {
    id?: number;
    body?: string;
    created_at?: string;
    created_at_details?: DateDetails;
    user?: User;
}