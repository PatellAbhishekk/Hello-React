// import react
import React from "react";
// React render
import { createRoot } from "react-dom/client";
// import App component
import App from "./App";
// target element
const rootEl = document.querySelector("#app");

const root = createRoot(rootEl);
// React.strictMode is a feature that enables you to catch problems in your code
// before they become runtime errors.
root.render(<React.StrictMode>{<App />}</React.StrictMode>);
