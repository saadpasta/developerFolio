import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import "./App.css";
import Main from "./containers/Main";

function Main() {
  return (
    <div>
      <Main />
    </div>
  );
}

function App() {
  return (
  <Router>
    <RouteToComponents />
    <Switch>
      <Route exact path="/" component={Main} />
      <Route path="/legalNotice.html" component={AnyComponent} />
    </Switch>
    </Router>
  );
}

export default App;
