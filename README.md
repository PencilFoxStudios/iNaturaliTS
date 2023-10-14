![iNaturaliTS](https://github.com/PencilFoxStudios/iNaturaliTS/blob/main/iNaturaliTSLogo.png?raw=true)
> A very-new TypeScript module for interacting the the iNaturalist.org API.🌿

# Introduction
### 🗒️ Purpose
I am a full-time software engineering college student who took interest with iNaturalist.org's concept, and wanted to tinker around more with its API. This is why I am making this package.

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
import { API } from "inaturalits";
// import { Types } from "inaturalits";
//      This is if you want to fool around with the different types that
//      the iNaturalist API commonly works with.
const iNaturalist = new API.iNatClient()
```

## Observations
#### Get(id)
> Returns observation info behind the given ID.
```ts
iNaturalist.Observations.Get("187447390").then(function (observationData) {
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
## Photos
#### Search({...parameters})
> Returns the full resolution version of iNaturalist.org's ``square.jpg`` urls.
```ts
console.log(iNaturalist.Photos.GetFullRes("https://inaturalist-open-data.s3.amazonaws.com/photos/327789050/square.jpg"))
// Expected Output >>
// https://inaturalist-open-data.s3.amazonaws.com/photos/327789050/original.jpg
```

# 📚 Acknowledgements
This project is not affiliated with iNaturalist.org. The original iNaturalist logo is property of the iNaturalist non-profit organization.

<sub>© Pencil Fox Studios SP</sub>