import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";
import Hover from "./components/Hover/Hover";
import Nav from "./components/Nav/Nav";
import img1 from "./assets/playlist.svg";
import Home from "./pages/Home/Home";
import Playlist from "./pages/playlist/Playlist";

function App() {
  return (
    <div className="App" style={{}}>
      <div className="flex">
        <div className="stick">
          <Nav />
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="playlist" element={<Playlist />} />
        </Routes>
      </div>
      {/* <Hover /> */}
    </div>
  );
}

export default App;
