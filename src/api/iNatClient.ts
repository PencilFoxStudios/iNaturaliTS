import axios, { AxiosInstance } from "axios";
import { ObservationsShowResponse } from "../types/Observations/ObservationsShowResponse";
import { ObservationQueryParameters } from "../types/QueryParams/ObservationQueryParameters";

/**
 * ### iNatClient
 * A class holding many helpful methods for communicating
 * with iNaturalist.org's API.
 *
 * @author Pencil Fox Studios
 */
export class iNatClient {
    private httpClient: AxiosInstance;

    constructor() {
        this.httpClient = axios.create({
            baseURL: "https://api.inaturalist.org/v1/",
        });
    }
    /**
     * Methods that pertain to observations on iNaturalist.org's API.
     */
    Observations = {
        /**
         * Retrieves an observation under the specific ID.
         *
         * @param id - The ID associated with the observation.
         * @returns The resulting observation, if any.
         */
        Get: async (id: string): Promise<ObservationsShowResponse> => {
            try {
                const response = await this.httpClient.get(`/observations/${id}`);
                return response.data;
            } catch (error) {
                // Handle the error
                console.error(error);
                throw error; // Optionally re-throw the error for the caller to handle
            }
        },
        /**
         * Searches iNaturalist.org's database for taxon observations according
         * to the given query parameters. See [GET /observations](https://api.inaturalist.org/v1/docs/#!/Observations/get_observations)
         * for more information.
         *
         * @param queryParameters - Search parameters
         * @returns The resulting observations, if any.
         */
        Search: async (queryParameters: ObservationQueryParameters): Promise<ObservationsShowResponse> => {
            try {
                const response = await this.httpClient.get('/observations', {
                    params: queryParameters,
                });
                return response.data;
            } catch (error) {
                // Handle the error
                console.error(error);
                throw error; // Optionally re-throw the error for the caller to handle
            }
        }
    };
    /**
     * Methods that pertain to Photo objects on iNaturalist.org's API.
     */
    Photos = {
        /**
         * Returns the full resolution version of iNaturalist.org's square.jpg urls.
         * Yes, it's a basic replace. It appears to work fine.
         *
         * @param squareURL - The square.jpg link from iNaturalist.
         * @returns A link to the full resolution image.
         */
        GetFullRes: (squareURL: string): string => {
            return squareURL.replace("square.jpg", "original.jpg");
        }
    };

}
