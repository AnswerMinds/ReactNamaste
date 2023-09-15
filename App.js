import React from "react";
import ReactDOM from "react-dom/client";

//jsx
const jsxHeading = (
  <h1 className="head" tabIndex="1">
    Namaste React Using JSX 🚀
  </h1>
);

console.log(jsxHeading);
const TitleComponent = () => {
  return (
    <div>
      <h1>Namaste React Title🚀</h1>
    </div>
  );
};
const number = 100;
//React Functional Component
const HeadingComponent = () => {
  return (
    <div>
      <TitleComponent />
      <TitleComponent></TitleComponent>
      {TitleComponent()}
      {/* component inside another component is called component composition */}
      <h1>Namaste React Functional Component🚀</h1>
      <h2>{number}</h2>
    </div>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />); // the object gets converted into Element by render
