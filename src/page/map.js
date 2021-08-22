import { useEffect, useState } from "react";
import { ReactBingmaps } from "react-bingmaps";

export default function Map() {
  const [coords, setCoords] = useState({}),
    bingKey =
      "AjcjMCWb3tyK8nwyKarGpEsesEs3Q9SfSSBwR4ObjbGQAsS5U0qEp2oANeMrPXl1",
    geoFindMe = () => {
      if (!navigator.geolocation) {
        console.log("Geolocation is not supported by your browser");
        return;
      }
      function success(position) {
        const {
          coords: { latitude, longitude },
        } = position;
        console.log(`lat: ${latitude}, long: ${longitude}`);
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
          address: "Chennai, Tamilnadu",
        },
        {
          address: "Salem, Tamilnadu",
        },
      ],
    };

  useEffect(() => {
    geoFindMe();
  }, []);

  return (
    <div className="page_map">
      `lat: {coords.latitude}, long: {coords.longitude}`
      <div style={{ height: "50vh" }}>
        {coords.latitude ? (
          <ReactBingmaps
            directions={directions}
            zoom={15}
            center={[38.247742, -92.708771]}
            bingmapKey={bingKey}
          ></ReactBingmaps>
        ) : null}
      </div>
    </div>
  );
}
