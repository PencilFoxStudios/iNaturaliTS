import { ProjectType } from "../Projects";
import { ProjectAdmin } from "../Projects/Members";

/**
 * Represents the response data for a user's projects.
 */
export interface UserProjectReturn {
    /**
     * The unique ID of the project.
     */
    id: number;

    /**
     * The title of the project.
     */
    title: string;

    /**
     * Flag indicating whether to hide the project title.
     */
    hide_title: boolean;

    /**
     * The description of the project.
     */
    description: string;

    /**
     * The project's unique slug.
     */
    slug: string;

    /**
     * The type of the project (e.g., "collection").
     */
    project_type: ProjectType;

    /**
     * The banner color of the project.
     */
    banner_color: string;

    /**
     * The place associated with the project.
     */
    place_id: number | null;

    /**
     * The user ID associated with the project.
     */
    user_id: number;

    /**
     * An array of administrators (admins) for the project.
     */
    admins: ProjectAdmin[];
}