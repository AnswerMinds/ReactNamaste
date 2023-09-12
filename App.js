/* <div id="parent">
  <div id="child">
    <h1>I am H1 tag</h1>
  </div>
</div> */

const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement(
    "div",
    { id: "child" },
    React.createElement("h1", {}, "I am H1 tag")
  )
);

console.log(parent); // heading returns a react object
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent); // the object gets converted into Element by render
