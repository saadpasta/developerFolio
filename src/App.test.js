import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

// window.matchMedia is stubbed globally in src/setupTests.js.

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});
