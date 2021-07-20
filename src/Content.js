import "./style/content.css";
import { Switch, Route } from "react-router-dom";
import Home from "./page/home";
import Map from "./page/map";
import Contact from "./page/contact";
export default function Content() {
  return (
    <div className="content">
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/map" component={Map}></Route>
        <Route exact path="/contact" component={Contact}></Route>
      </Switch>
    </div>
  );
}
