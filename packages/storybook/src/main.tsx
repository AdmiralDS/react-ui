import React from "react";
import { render } from "react-dom";
import App from "./App";
import "./index.css";

const appRenderRoot = document.getElementById("root") as HTMLElement;
render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  appRenderRoot
);
