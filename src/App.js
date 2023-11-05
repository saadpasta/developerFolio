import React from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import "./App.scss";
import Main from "./containers/Main";
import ProjectPages from "./projectPages/ProjectPages";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route index element={<Main />} />
          {ProjectPages()}
        </Routes>
      </div>
    </Router>
  );
}

function About() {
  return <h2>About</h2>;
}

export default App;
