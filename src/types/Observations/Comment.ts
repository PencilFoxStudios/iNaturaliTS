import { DateDetails } from "./DateDetails";
import { User } from "../Users";

export interface Comment {
    id?: number;
    created_at?: string;
    created_at_details?: DateDetails;
    user?: User;
}