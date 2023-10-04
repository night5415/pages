import "./App.css";
import Content from "./Content";
import { BrowserRouter as Router } from "react-router-dom";
// import { createClient } from "@supabase/supabase-js";

// const supabaseUrl = "https://ayvtgfpxgjifxlcatbwv.supabase.co";
// const supabaseKey =
//   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYyMTYxMTIyNywiZXhwIjoxOTM3MTg3MjI3fQ.uzkiL7FFH_es35yNAKwchO4GNeEsqhyzA_wpvKDavZU";
// const supabase = createClient(supabaseUrl, supabaseKey);

function App() {
  return (
    <div className="App">
      <div className="video-shade"></div>
      <div className="fullscreen-bg">
        <video id="myVideo" loop muted autoPlay src="/video/lake.mp4"></video>
      </div>

      <Router>
        <Content />
      </Router>
    </div>
  );
}

export default App;
