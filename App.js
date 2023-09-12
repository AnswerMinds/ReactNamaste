const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Hello world from React !"
);
console.log(heading); // heading returns a react object
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading); // the object gets converted into Element by render
