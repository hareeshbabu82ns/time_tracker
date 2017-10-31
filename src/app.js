import React from "react";
import ReactDOM from "react-dom";

import "./styles/styles.scss";

console.log("app running");

const jsx = (
  <div className="container">
    <button className="btn btn-warning">warning</button>
  </div>
);

ReactDOM.render(jsx, document.getElementById("app"));
