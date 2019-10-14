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

### Showing a map
Call `useMapbox` with a ref to a DOM element that will hold your map and your Mapbox access token. This will show a default map style and location that users can interact with.

```js
import React, { useRef } from "react";
import { useMapbox } from "use-mapbox";

function YourComponent() {
    const ref = useRef();
    useMapbox(ref, accessToken);

    return <div ref={ref} style={{ width: "640px", height: "480px" }}/>;
}
```

Note that you will need to style your div to give it a height. Mapbox maps get their size from their parent element, and by default divs get their height from their child content.

### Customizing and interacting with the map
Pass any constructor options for your map—like style, center, and zoom—in the optional third parameter of `useMapbox`. These options are used to configure the map when it is first constructed.

To allow you to update the map in response to user interaction, `useMapbox` returns the mapbox-gl instance, which can be used in your own `useEffect` calls. These can be used to do things like add layers when the map is loaded or move the map in response to user interface events.

```js
const options = {
    center: [-77.0305, 38.8868],
    style: 'mapbox://styles/mapbox/dark-v10',
    zoom: 12
    hash: true
};
const map = useMapbox(ref, accessToken, options);
// interact with the map in effect hooks
useEffect(function flyToClickedPointsOfInterest() {
    if (!map) {
        return;
    }
    map.on("click", "poi-label", function (e) {
        map.flyTo({center: e.features[0].geometry.coordinates});
    });
}, [map]);
```

For [examples](https://docs.mapbox.com/mapbox-gl-js/examples/) of what you can do with the Map and a [full API reference](https://docs.mapbox.com/mapbox-gl-js/api/), head over to the [Mapbox Docs](https://docs.mapbox.com/mapbox-gl-js/overview/).
