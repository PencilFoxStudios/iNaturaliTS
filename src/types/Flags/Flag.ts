/**
 * Represents a Flag.
 */
export interface Flag {
    id: number;
    flag: string;
    comment: string;
    user_id: number;
    resolver_id: number;
    resolved: boolean;
    created_at: string;
    updated_at: string;
}
