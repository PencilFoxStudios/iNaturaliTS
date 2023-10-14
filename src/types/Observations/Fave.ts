import { User } from "./User";

export interface Fave {
    id?: number;
    votable_id?: number;
    created_at?: string;
    user?: User;
}