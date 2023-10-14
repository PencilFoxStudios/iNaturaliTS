import { AxiosInstance } from "axios";
import { ObservationsShowResponse, ShowObservation } from "../types/Observations";
import { ObservationQueryParameters } from "../types/QueryParams";


export function Observations(httpClient: AxiosInstance, safeMode: boolean) {
    // This is defined up here so that it can be within scope of ObservationPoller.
    async function Search(queryParameters: ObservationQueryParameters): Promise<ObservationsShowResponse> {
        try {
            if (safeMode) {
                // Observations must declare the following...
                queryParameters.term_id = [
                    17, // Alive or Dead
                    22 // Evidence of Presence
                ];
                // Only include these
                queryParameters.term_value_id = [
                    18 // Alive
                ]
                // Don't include them if they have one of these!
                queryParameters.without_term_value_id = [
                    19, // Dead
                    20, // Cannot Be Determined
                    25, // Scat
                    26, // Track
                    29, // Gall
                    27, // Bone
                    28  // Molt
                ];
            }
            const response = await httpClient.get('/observations', {
                params: queryParameters,
            });
            return response.data;
        } catch (error) {
            // Handle the error
            console.error(error);
            throw error; // Optionally re-throw the error for the caller to handle
        }
    }

    class ObservationPoller {
        public taxaIDs: string[];
        public callback: (newObservations: ShowObservation[]) => void;
        public intervalInSeconds: number;
        public seenObservations: Set<number>;
        public intervalId: NodeJS.Timeout | null;
        /**
         * Initializes a new observation poller for the specified taxa.
         *
         * @param taxaIDs An array of taxon IDs to watch for new observations.
         * @param callback A callback function to be called when new observations are made.
         * @param intervalInSeconds The polling interval in seconds.
         */
        constructor(taxaIDs: string[], callback: (newObservations: ShowObservation[]) => void, intervalInSeconds = 5) {
            this.taxaIDs = taxaIDs;
            this.callback = callback;
            this.intervalInSeconds = intervalInSeconds;
            this.seenObservations = new Set();
            this.intervalId = null;

            // // Start the polling when the instance is created
            // this.start();
        }

        /**
         * Starts periodic polling for new observations.
         */
        start() {
            this.intervalId = setInterval(async () => {
                try {
                    // Make an API request to fetch new observations of specific taxa
                    const queryParameters = {
                        taxon_id: this.taxaIDs,
                        order: "created_at",
                        per_page: "50",
                    };

                    const response = await Search(queryParameters);
                    const newObservations = response.results.filter(
                        (observation) => !this.seenObservations.has(observation.id!)
                    );

                    if (newObservations.length > 0) {
                        // Notify subscribers with new observations
                        this.callback(newObservations);

                        // Update the set of seen observations
                        newObservations.forEach((observation) =>
                            this.seenObservations.add(observation.id!)
                        );
                    }
                } catch (error) {
                    console.error("[iNaturaliTS] Error while fetching new observations:", error);
                }
            }, this.intervalInSeconds * 1000);
        }
        /**
         * Ends the observation polling, unsubscribing from further updates.
         */
        end() {
            // Stop the polling interval
            if (this.intervalId) {
                clearInterval(this.intervalId);
                this.intervalId = null;
            }

        }
    }

    return {
        /**
        * Retrieves an observation under the specific ID.
        *
        * @param id The ID associated with the observation.
        * @returns The resulting observation, if any. Otherwise return null.
        */
        Get: async (id: string): Promise<ShowObservation | null> => {
            try {
                const response = await httpClient.get(`/observations/${id}`);
                if (response.data.results.length == 1) {
                    return response.data.results[0];
                }
                return null;
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
         * @param queryParameters Search parameters
         * @returns The resulting observations, if any.
         */
        Search: Search,
        /**
         * Observes and periodically fetches new observations of specific taxa from iNaturalist.org's API.
         * Provides subscription and unsubscription mechanisms for managing polling events.
         */
        ObservationPoller,
        /**
    `   * Fetches a random observation from the specified taxa.
        *
        * @param taxaIDs The taxon IDs to fetch random observations from.
        * @returns A random observation, or null if none are found.
        */
        Random: async (taxaIDs: string[]): Promise<ShowObservation | null> => {
            try {
                // Create query parameters to fetch observations of the specified taxa
                const queryParameters: ObservationQueryParameters = {
                    taxon_id: taxaIDs,
                    order_by: "created_at", // Order by creation date
                    per_page: "200",      // Fetch up to 50 observations
                };

                const response = await Search(queryParameters);

                if (response.results.length > 0) {
                    // Select a random observation from the results
                    const randomIndex = Math.floor(Math.random() * response.results.length);
                    return response.results[randomIndex];
                }

                return null;
            } catch (error) {
                // Handle the error
                console.error("[iNaturaliTS] Error while fetching a random observation:", error);
                throw error; // Optionally re-throw the error for the caller to handle
            }
        }

    }
};
