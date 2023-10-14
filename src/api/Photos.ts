import { AxiosInstance } from "axios";


export function Photos(httpClient:AxiosInstance) {
    return {
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
    }
};
