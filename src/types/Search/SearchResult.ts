import { PointGeoJson } from "../Observations";
import { PolygonGeoJson, ShowPlace } from "../Places";
import { GeometryGeoJson } from "../Places/GeometryGeoJson";
import { UserProjectReturn } from "../Users/UserProjectReturn";
import { Flag } from "../Flags/Flag";
import { SearchResultType } from "./SearchResultType";
import { SearchParameterFields } from "./SearchParameterFields";
import { ObservationRule } from "../Projects/ObservationRule";
import { RulePreference } from "./RulePreference";
import { ProjectObservationField } from "../Projects/ProjectObservationField";
import { ShowTaxon } from "../Taxa/ShowTaxon";
import { TaxonPhoto } from "../Taxa/TaxonPhoto";
import { UserSearchReturn } from "../Users/UserSearchReturn";
export interface TaxonSearchResultPhoto extends TaxonPhoto {
    original_dimensions?: {
        height: number;
        width: number;
    };
    /**
     * @TODO Figure out what this is!
     */
    flags?: any[]; 
    native_page_url?: string;
    native_photo_id?: string;
    type?: string;
    small_url?: string;
    large_url?: string;
    original_url?: string;
}
export interface TaxonSearchResult extends ShowTaxon {
    atlas_id?: number;
    complete_species_count?: number;
    wikipedia_url?: string;
    complete_rank?: string;
    matched_term?: string;
    iconic_taxon_name?: string;
    preferred_common_name?: string;
    taxon_photos?: ({ taxon_id:number, photo: TaxonSearchResultPhoto})[]; 
    flag_counts?: {
        resolved: number;
        unresolved: number;
    };
    current_synonymous_taxon_ids?: number[];
    taxon_schemes_count?: number;
    taxon_changes_count?: number;
    photos_locked?: boolean;
}

export interface ProjectSearchResult extends UserProjectReturn {
    title_autocomplete: string,
    title_exact: string,
    ancestor_place_ids?: number[],
    place_ids?: number[],
    rule_place_ids: number[],
    associated_place_ids: number[],
    user_ids: number[],
    location?: string,
    geojson?: string,
    icon: string,
    icon_file_name?: string,
    header_image_url?: string,
    header_image_file_name?: string,
    header_image_contain: boolean,
    project_observation_fields: {
        id: number,
        required: boolean,
        observation_field: ProjectObservationField,
        position: number
    }[], 
    terms?: string,
    search_parameters: {
        field: keyof SearchParameterFields,
        value: any,
        value_keyword?: string[] ,
        value_bool?: boolean,
        value_number?: number[],
    }[],
    search_parameter_fields: SearchParameterFields,
    subproject_ids: number[], 
    project_observation_rules: ObservationRule[],
    rule_preferences: RulePreference[],
    created_at: string,
    updated_at: string,
    last_post_at?: string,
    observations_count: number,
    universal_search_rank: number,
    spam: boolean,
    flags: Flag[],
    /**
     * @TODO Figure out what this is!
     */
    site_features: any[],
    umbrella_project_ids: number[],
    prefers_user_trust: boolean,
    observation_requirements_updated_at: string,
    matched_term: string,
    is_umbrella: boolean,
}
export interface PlaceSearchResult extends ShowPlace {
    uuid: string,
    slug: string,
    display_name_autocomplete: string,
    user: {
        id: number,
        login: string,
        spam: boolean,
        suspended: boolean,
        created_at: string,
    },
    bounding_box_geojson: PolygonGeoJson,
    point_geojson: PointGeoJson,
    without_check_list: boolean,
    observations_count: number,
    universal_search_rank: number,
    names: string[],
}

export interface SearchResult {
    score: number,
    type: SearchResultType,
    record: PlaceSearchResult | ProjectSearchResult | TaxonSearchResult | UserSearchReturn
}