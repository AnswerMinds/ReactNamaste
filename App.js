import React from "react";
import ReactDOM from "react-dom/client";

//jsx
const jsxHeading = <h1> Namaste React Using JSX 🚀</h1>;

console.log(jsxHeading);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(jsxHeading); // the object gets converted into Element by render
