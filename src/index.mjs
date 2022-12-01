import React from "./react.mjs";

function Title() {
  return React.createElement("h1", null, "React");
}

function App(props) {
  return React.createElement(
    "section",
    {
      className: "App",
    },
    React.createElement(Title, null),
    React.createElement(
      "div",
      null,
      React.createElement(
        "div",
        null,
        React.createElement("h2", null, "Hello word")
      )
    )
  );
}

React.render(React.createElement(App, null), document.querySelector("#root"));
