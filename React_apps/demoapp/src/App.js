import React from "react";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";

function App() {
  return (
    <>
      <div className="bg-primary text-white text-center p-4">
        <h2>🚀 App.js</h2>
        <p>This is the root component. It imports and renders other pages 👇</p>
      </div>

      <Home />
      <About />
      <Contact />
    </>
  );
}

export default App;
