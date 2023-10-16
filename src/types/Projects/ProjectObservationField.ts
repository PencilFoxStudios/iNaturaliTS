/**
 * Represents a project's observation field.
 */
export interface ProjectObservationField {
    id: number;
    name: string;
    name_autocomplete: string;
    description: string;
    description_autocomplete: string;
    datatype: string;
    allowed_values: string;
    values_count: number;
    users_count: number;
}
