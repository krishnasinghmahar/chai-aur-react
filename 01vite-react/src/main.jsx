import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

function MyApp() {
  return (
    <div>
      <h1>chia and react | Krishna</h1>
    </div>
  );
}

const reactElement = {
  type: "a",
  props: {
    href: "https://google.com",
    target: "_blank",
  },
  children: "Click me to visit Google",
};

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
