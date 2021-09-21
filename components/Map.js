import { getCenter } from "geolib";
import { useState } from "react";
import ReactMapGL, { Marker, Popup } from "react-map-gl";

function Map({ searchResults }) {
  const [selectedPos, SetSelectedPos] = useState({});
  //Transform Search REsult to GL objects
  const coordinates = searchResults.map((result) => ({
    longitude: result.long,
    latitude: result.lat,
  }));

  //center the map to contain all markers
  const center = getCenter(coordinates);
  const [viewport, setViewport] = useState({
    latitude: center.latitude,
    longitude: center.longitude,
    zoom: 11,
    width: "100%",
    height: "100%",
  });
  return (
    <ReactMapGL
      mapboxApiAccessToken={process.env.mapbox_key}
      mapStyle="mapbox://styles/ahmedlight/ckttqr0yg0l1u17m6ni93s1nu"
      {...viewport}
      onViewportChange={(viewport) => setViewport(viewport)}
    >
      {searchResults.map((item) => (
        <div key={item.long}>
          <Marker
            longitude={item.long}
            latitude={item.lat}
            offsetLeft={-20}
            offsetTop={-10}
          >
            <p
              role="img"
              onClick={() => SetSelectedPos(item)}
              className="cursor-pointer text-2xl animate-bounce"
              aria-label="push-pin"
            >
              📌
            </p>
          </Marker>

          {/* this is the popup for marker */}
          {selectedPos.long === item.long ? (
            <Popup
              latitude={item.lat}
              longitude={item.long}
              closeOnClick={true}
              onClose={() => SetSelectedPos({})}
            >
              {item.title}
            </Popup>
          ) : (
            false
          )}
        </div>
      ))}
    </ReactMapGL>
  );
}

export default Map;
