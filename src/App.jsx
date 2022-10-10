import { useState } from "react";
import "./App.css";
import Home from "./pages/Home/Home";
import Hover from "./components/Hover/Hover";

function App() {
  return (
    <div className="App">
      <Home />
      <Hover />
    </div>
  );
}

export default App;
