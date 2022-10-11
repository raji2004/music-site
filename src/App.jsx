import { useState } from "react";
import "./App.css";
import Hover from "./components/Hover/Hover";
import Home from "./pages/Home/Home";

function App() {
  return (
    <div className="App">
      <Home />
      <Hover />
    </div>
  );
}

export default App;
