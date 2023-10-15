![iNaturaliTS](https://github.com/PencilFoxStudios/iNaturaliTS/blob/main/iNaturaliTSLogo.png?raw=true)
> A TypeScript module for interacting the the iNaturalist.org API.🌿

[![NPM Version](https://img.shields.io/npm/v/inaturalits.svg)](https://www.npmjs.com/package/inaturalits)
![GitHub Workflow Status (with event)](https://img.shields.io/github/actions/workflow/status/PencilFoxStudios/inaturaliTS/build.yml)
![Hotel? Trivago.](https://img.shields.io/badge/Hotel%3F-Trivago.-blue)
# Introduction
### 🗒️ Purpose
I am a full-time software engineering college student who took interest with iNaturalist.org's concept, and wanted to tinker around more with its API. This is why I am making this package to make things a little bit easier.

### ⭐ Contributing
I am pretty new to pull requests and open-source collaboration. If you want to implement more of the iNaturalist.org API, please feel free to send a pull request. Like I said above, I am a full time college student, so please be patient with me when waiting for an approval.



# Using this Module
It's pretty straight-forward at the moment, but we are hoping to add more functionality soon.
## Setup
You first want to install this module into your NodeJS project's directory.  
```
npm install inaturalits
```
Then, you can simply import it at the top of your file like so!
```ts
import { iNatClient } from "inaturalits";
// import { Types } from "inaturalits";
//      This is if you want to fool around with the different types that
//      the iNaturalist API commonly works with.
const iNaturalist = new iNatClient()
```
Note that if you want to enable safe mode, you can just pass ``true`` into the client constructor.
```ts
const iNaturalist = new iNatClient(true)
```

## Observations
#### Get(id)
> Returns observation info behind the given ID.
```ts
iNaturalist.Observations.Get("187447390").then(function (observationData:Types.Observations.ShowObservation|null) {
  console.log(observationData)
})
```
#### Search({...parameters})
> Searches for observations made under the given parameters. See [GET /observations](https://api.inaturalist.org/v1/docs/#!/Observations/get_observations) for a complete list.
```ts
iNaturalist.Observations.Search({
    taxon_id: ["42054"]
}).then((result:ObservationsShowResponse) => {
    console.log(result);
})
```
#### Random(taxonIDs)
> Fetches a "random" observation from the specified taxa.
```ts
console.log((await iNaturalist.Observations.Random(["42054"]))?.uri)
// Expected Output >>
// https://www.inaturalist.org/observations/XXXXXXXXX
```
### ObservationPoller
> Observes and periodically fetches new observations of specific taxa from iNaturalist.org's API. Also provides subscription and unsubscription mechanisms for managing polling events.
```ts
const Poller = new iNaturalist.Observations.ObservationPoller(
  // Taxa to watch
  ["42054"], 
  // Callback for when new observations are detected
  function (newObservations: ShowObservation[]){
    console.log(newObservations)
  }, 
  // Seconds between checks
  5 
);

// Start the polling
Poller.start();

// End the polling
Poller.stop();
```
## Taxa
#### Get(id)
> Returns taxa info behind the given ID.
```ts
const ID = "42054";
const FoxTaxon = await iNaturalist.Taxa.Get(ID);
if (FoxTaxon) {
  console.log(`Successfully retrieved ${FoxTaxa.name}!`);
} else {
  console.log(`Taxon with ID ${ID} does not appear to exist.`);
}
```
#### Search({...parameters})
> Searches for taxa through the specified parameters. See [GET /taxa](https://api.inaturalist.org/v1/docs/#!/Taxa/get_taxa) for a complete list.
```ts
iNaturalist.Taxa.Search({
    q: "Vulpes"
}).then((result:TaxaShowResponse) => {
    console.log(result);
})
```
#### Autocomplete({...parameters})
> Attempts to autocomplete from the given partial taxon name, as well as some optional parameters.
   **Mind the rate limits!**
```ts
iNaturalist.Taxa.Autocomplete({
    q: "Vulp"
}).then((result:TaxaAutocompleteResponse) => {
    console.log(result);
})
```
## Photos
#### GetFullRes(lowResURL)
> Returns the full resolution version of iNaturalist.org's ``square.jpg`` urls.
```ts
console.log(iNaturalist.Photos.GetFullRes("https://inaturalist-open-data.s3.amazonaws.com/photos/327789050/square.jpg"))
// Expected Output >>
// https://inaturalist-open-data.s3.amazonaws.com/photos/327789050/original.jpg
```

# 📚 Acknowledgements
This project is not affiliated with iNaturalist.org. The original iNaturalist logo is property of the iNaturalist non-profit organization.

<sub>© Pencil Fox Studios SP</sub>