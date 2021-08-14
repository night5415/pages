import "./style/content.css";
import { Switch, Route } from "react-router-dom";
import Home from "./page/home";
import Map from "./page/map";
import Contact from "./page/contact";
import { RightNavigation, LeftNavigation } from "./component/navigation";
export default function Content() {
  return (
    <div className="content">
      <RightNavigation {...{ path: "/map", title: "map" }} />
      <LeftNavigation {...{ path: "/", title: "home" }} />
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/map" component={Map}></Route>
        <Route exact path="/contact" component={Contact}></Route>
      </Switch>
    </div>
  );
}
