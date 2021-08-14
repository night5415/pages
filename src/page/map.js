export default function Map() {
  const geoFindMe = () => {
    if (!navigator.geolocation) {
      console.log("Geolocation is not supported by your browser");
      return;
    }
    function success(position) {
      const {
        coords: { latitude, longitude },
      } = position;
      console.log(`lat: ${latitude}, long: ${longitude}`);
    }
    function error() {
      console.log("Unable to retrieve your location");
    }
    navigator.geolocation.getCurrentPosition(success, error);
  };
  geoFindMe();
  return <div className="page_map">Map</div>;
}
