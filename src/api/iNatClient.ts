import axios, { AxiosInstance } from "axios";
import rateLimit from 'axios-rate-limit';
import { ObservationsShowResponse } from "../types/Observations/ObservationsShowResponse";
import { ObservationQueryParameters } from "../types/QueryParams/ObservationQueryParameters";
import { Observations } from "./Observations";
import { Photos } from "./Photos";
import { Taxa } from "./Taxa";
import { APIResponse } from "../types";
import { iNatError } from "../types/APIResponse/Error";

/**
 * ### iNatClient
 * A class holding many helpful methods for communicating
 * with iNaturalist.org's API.
 *
 * @author Pencil Fox Studios
 */
export class iNatClient {
    private httpClient: AxiosInstance = rateLimit(axios.create({
        baseURL: "https://api.inaturalist.org/v1/",
    }), { maxRPS: 1 });
    private safeMode: boolean = true;
    // Maximum 60 requests per minute. Obey their rate limits!
    /**
     * Initializes a new iNaturaliTS client.
     *
     * @param safeMode Only include observations in which the animal is annotated as alive, and the evidence of presence is not one of Scat, Molt, or Bone. 
     * This also excludes any unannotated "Alive or Dead" observations. Please note that turning this off may expose more graphic observations that certain audiences
     * may find upsetting, such as corpses, feces, or bones.
     */
    constructor(safeMode:boolean = false) {
        this.safeMode = safeMode;
        this.httpClient.interceptors.response.use(function (response) {
          // Any status code that lie within the range of 2xx cause this function to trigger
          // Do something with response data
          return response;
        }, function (error:APIResponse.Error) {
          // Any status codes that falls outside the range of 2xx cause this function to trigger
          throw new iNatError(error.code, error.message)
        });
        this.Observations = Observations(this.httpClient, this.safeMode)
    }
    /**
    * Methods that pertain to observations on iNaturalist.org's API.
    */
    Observations = Observations(this.httpClient, this.safeMode)
    /**
    * Methods that pertain to Photo objects on iNaturalist.org's API.
    */
    Photos = Photos(this.httpClient);
    /**
    * Methods that pertain to Taxa on iNaturalist.org's API.
    */
    Taxa = Taxa(this.httpClient);
}
