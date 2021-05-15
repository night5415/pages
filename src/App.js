import { useEffect } from "react";
import "./App.css";
import Content from "./Content";
import Nav from "./nav";
function App() {
  useEffect(() => {
    console.log("ready");
  }, []);

  return (
    <div className="App">
      <div className="video-shade"></div>
      <div className="fullscreen-bg">
        <video id="myVideo" loop muted autoPlay src="/video/lake.mp4"></video>
      </div>
      <Nav />
      <Content />
    </div>
  );
}

export default App;
