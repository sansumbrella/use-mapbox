# use-mapbox

Minimal React hook for displaying a Mapbox map.

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

Call `useMapbox` with a ref to a DOM element that will hold your map and your Mapbox access token. Pass any constructor options for your map—like style, center, and zoom—in the optional third parameter of `useMapbox`. `useMapbox` returns the mapbox-gl instance, which can be used in further `useEffect` calls to do things like add layers and event handlers.

```js
import React, { useRef } from "react";
import { useMapbox } from "use-mapbox";

function YourComponent() {
    const ref = useRef();
    const map = useMapbox(ref, accessToken);

    return <div ref={ref}/>;
}
```
