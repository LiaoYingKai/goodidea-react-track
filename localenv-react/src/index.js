import React from "react";
import ReactDOM from "react-dom";

let HelloWorld = function() {
  return <h1> Hello, I am here </h1>
}

ReactDOM.render(
  <HelloWorld/>,
  document.getElementById("root")
);
