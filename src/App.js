import "./App.css";
import LegalNotice from "./components/legalNotice/LegalNotice";
import Main from "./containers/Main";
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

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
      <Switch>
        <Route exact path="/" component={Portfolio} />
        <Route path="/legalNotice.html" component={LegalNotice} />
      </Switch>
    </Router>
  );
}

export default App;
