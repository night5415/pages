import { useEffect, useState } from "react";

export default function Home() {
  const [temperature, setTemperature] = useState("--"),
    { REACT_APP_MAP_KEY } = process.env;
  useEffect(() => {
    fetch("https://api.weatherapi.com/v1/current.json?q=65072", {
      method: "GET",
      headers: new Headers([["Key", REACT_APP_MAP_KEY]]),
    })
      .then((response) => response.json())
      .then((result) => setTemperature(result.current.temp_f))
      .catch((error) => console.error("error", error));
  }, []);
  return (
    <div className="page_home">
      <span className="temp">
        <span id="temp">{temperature}</span>&deg;
      </span>
    </div>
  );
}
