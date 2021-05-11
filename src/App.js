import "./App.css";

function App() {
  return (
    <div className="App">
      <div class="video-shade"></div>
      <div className="fullscreen-bg">
        <video id="myVideo" loop muted autoPlay src="/video/lake.mp4"></video>
      </div>
    </div>
  );
}

export default App;
