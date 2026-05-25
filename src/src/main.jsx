import React from "react";
import { createRoot } from "react-dom/client";
import LexiaPrototype from "./App.jsx";
import "./style.css";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <LexiaPrototype />
  </React.StrictMode>
);
