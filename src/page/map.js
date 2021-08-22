import { useEffect, useState } from "react";
import { ReactBingmaps } from "react-bingmaps";

export default function Map() {
  const [coords, setCoords] = useState({}),
    { REACT_APP_BING_KEY } = process.env,
    geoFindMe = () => {
      if (!navigator.geolocation) {
        console.log("Geolocation is not supported by your browser");
        return;
      }
      function success(position) {
        const {
          coords: { latitude, longitude },
        } = position;
        console.dir(position);
        setCoords({ latitude, longitude });
      }
      function error() {
        console.log("Unable to retrieve your location");
      }
      navigator.geolocation.getCurrentPosition(success, error);
    },
    directions = {
      renderOptions: { itineraryContainer: "itineraryContainer" },
      requestOptions: { routeMode: "driving", maxRoutes: 2 },
      wayPoints: [
        {
          address: null,
          location: [coords.latitude, coords.longitude],
        },
        {
          address: null,
          location: [38.247629, -92.708766],
        },
      ],
    };

  useEffect(() => {
    geoFindMe();
  }, []);

  return (
    <div className="page_map">
      <div style={{ height: "50vh" }}>
        {coords.latitude ? (
          <ReactBingmaps
            directions={directions}
            zoom={11}
            center={[coords.latitude, coords.longitude]}
            bingmapKey={REACT_APP_BING_KEY}
          ></ReactBingmaps>
        ) : null}
      </div>
    </div>
  );
}
