import { AxiosInstance } from "axios";
import { ShowTaxon, TaxaAutocompleteResponse, TaxaShowResponse } from "../types/Taxa";
import { TaxaAutocompleteParameters, TaxaQueryParameters } from "../types/QueryParams";


export function Taxa(httpClient: AxiosInstance) {
    return {
        /**
        * Retrieves a taxon under the specific ID.
        *
        * @param id - The ID associated with the taxon.
        * @returns The resulting taxon, if any. Otherwise return null.
        */
        Get: async (id: string): Promise<ShowTaxon|null> => {
            try {
                const response = await httpClient.get(`/taxa/${id}`);
                if(response.data.results.length == 1){
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
        * Searches for taxa through the specified parameters. See [GET /taxa](https://api.inaturalist.org/v1/docs/#!/Taxa/get_taxa)
        * for more information.
        *
        * @param queryParameters - The query parameters to refine the search.
        * @returns The resulting taxa, if any.
        */
        Search: async (queryParameters: TaxaQueryParameters): Promise<TaxaShowResponse> => {
            try {
                const response = await httpClient.get(`/taxa`,
                    {
                        params: queryParameters,
                    }
                );
                return response.data;
            } catch (error) {
                // Handle the error
                console.error(error);
                throw error; // Optionally re-throw the error for the caller to handle
            }
        },
        /**
        * Attempts to autocomplete from the given partial taxon name, as well as some optional parameters.
        * **Mind the rate limits!**
        * @param queryParameters The query parameters to refine the autocomplete results.
        * @returns The resulting taxa, if any.
        */
        Autocomplete: async (queryParameters: TaxaAutocompleteParameters): Promise<TaxaAutocompleteResponse> => {
            try {
                const response = await httpClient.get(`/taxa/autocomplete`,
                    {
                        params: queryParameters,
                    }
                );
                return response.data;
            } catch (error) {
                // Handle the error
                console.error(error);
                throw error; // Optionally re-throw the error for the caller to handle
            }
        },
    }
};
