import { DateDetails } from "./DateDetails";
import { Fave } from "./Fave";
import { FieldValue } from "./FieldValue";
import { Identification } from "./Identification";
import { NonOwnerIdentification } from "./NonOwnerIdentification";
import { ObservationTaxon } from "./ObservationTaxon";
import { Photo } from "./Photo";
import { PointGeoJson } from "./PointGeoJson";
import { Sound } from "./Sound";
import { User } from "./User";
import { Comment } from "./Comment"
export interface ShowObservation {
    id?: number;
    cached_votes_total?: number;
    captive?: boolean;
    comments?: Comment[];
    comments_count?: number;
    created_at?: string;
    created_at_details?: DateDetails;
    created_time_zone?: string;
    description?: string;
    faves_count?: number;
    geojson?: PointGeoJson;
    geoprivacy?: string;
    taxon_geoprivacy?: string;
    id_please?: boolean;
    identifications_count?: number;
    identifications_most_agree?: boolean;
    identifications_most_disagree?: boolean;
    identifications_some_agree?: boolean;
    license_code?: string;
    location?: string; // Format "lat,lng"
    mappable?: boolean;
    non_owner_ids?: NonOwnerIdentification[];
    num_identification_agreements?: number;
    num_identification_disagreements?: number;
    obscured?: boolean;
    observed_on?: string;
    observed_on_details?: DateDetails;
    observed_on_string?: string;
    observed_time_zone?: string;
    ofvs?: FieldValue[];
    out_of_range?: boolean;
    photos?: Photo[];
    place_guess?: string;
    place_ids?: number[];
    project_ids?: number[];
    project_ids_with_curator_id?: number[];
    project_ids_without_curator_id?: number[];
    quality_grade?: string;
    reviewed_by?: number[];
    site_id?: number;
    sounds?: Sound[];
    species_guess?: string;
    tags?: string[];
    taxon?: ObservationTaxon;
    time_observed_at?: string;
    time_zone_offset?: string;
    updated_at?: string;
    uri?: string;
    user?: User;
    verifiable?: boolean;
    identifications?: Identification[];
    faves?: Fave[];
  }
  

  