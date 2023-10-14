import { PolygonGeoJson } from "./PolygonGeoJson";

export interface ShowPlace {
    id?: number;
    name?: string;
    display_name?: string;
    admin_level?: number;
    ancestor_place_ids?: number[];
    bbox_area?: number;
    geometry_geojson?: PolygonGeoJson;
    location?: string; // Format "lat,lng"
    place_type?: number;
}