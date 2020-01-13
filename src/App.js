import React from "react";
import "./App.css";
import Main from "./containers/Main";
import {BrowserRouter as Router, Route} from "react-router-dom";
import Resume from "./containers/resume/Resume";

function App() {
    return (
        <Router>
            <Route exact path="/">
                <Main/>
            </Route>
            <Route path="/resume">
                <Resume/>
            </Route>
        </Router>
    );
}

export default App;
