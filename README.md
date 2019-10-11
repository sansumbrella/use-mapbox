# use-mapbox

Minimal React hook for displaying a Mapbox map. Adds the required CSS and sets a default style.

## Install

Install the useMapbox hook:
```sh
npm install --save use-mapbox
```

Also be sure to install peer dependencies so it can use mapbox-gl:
```sh
npm install --save mapbox-gl
```

## Usage

Get an [access token](https://account.mapbox.com/access-tokens/) from your Mapbox account.

```js
import { useMapbox } from "use-mapbox";
…
function YourComponent() {
    const map = useMapbox(ref, accessToken, {style: "mapbox://styles/mapbox/streets-v11"});
}
```
