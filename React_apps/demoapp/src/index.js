import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <>
    <div className="bg-danger text-white text-center p-4">
      <h2>📌 index.js</h2>
      <p>This runs first and loads App.js below 👇</p>
    </div>

    <App />
  </>
);
