import { QualityGrade } from "./QualityGrade";

export interface SearchParameterFields {
    members_only?: boolean,
    quality_grade?: QualityGrade[],
    photos?: boolean,
    taxon_id?: number[],
    place_id?: number[],
    project_id?: number[],
    not_user_id?: number[]
}