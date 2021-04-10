import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import "./App.css";
import Main from "./containers/Main";
import LegalNotice from "./components/legalNotice/LegalNotice";

function Portfolio() {
  return (
    <div>
      <Main />
    </div>
  );
}

function App() {
  return (
  <Router>
    {/* <{RouteToComponents} /> */}
    <Switch>
      <Route exact path="/" component={Portfolio} />
      <Route path="/legalNotice.html" component={LegalNotice} />
    </Switch>
    </Router>
  );
}

export default App;
