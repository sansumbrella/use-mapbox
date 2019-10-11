# use-mapbox

## Install

```sh
npm install --save use-mapbox
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
