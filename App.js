const value = React.createElement(
  "div",
  { id: "value" },
 [ React.createElement("h1", { id: "name" }, "Hello Shabri!"), React.createElement("h1", { id: "name1" }, "Hello Shab!") ]
);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(value);
