import { User } from "../Users";

export interface Fave {
    id?: number;
    votable_id?: number;
    created_at?: string;
    user?: User;
}