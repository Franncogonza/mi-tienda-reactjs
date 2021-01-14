import React from "react";
import ReactDom from "react-dom";
import App from "./App";
import 'bootstrap/dist/css/bootstrap.css';

const divRoot = document.querySelector("#root");

ReactDom.render(<App />, divRoot);
