import { useEffect, useState } from "react";

export default function Home() {
  const [temperature, setTemperature] = useState("--");
  useEffect(() => {
    fetch("https://api.weatherapi.com/v1/current.json?q=65072", {
      method: "GET",
      headers: new Headers([["Key", "2e1823aca1674d9f885182308211607"]]),
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
