import React from "react";
import Nav from "../../components/Nav/Nav";
import search from "../../assets/search.svg";

import "./home.css";
import Music from "../../components/Music/Music";

function Home() {
  return (
    <div>
      <div className="home">
        <Nav />
        <div>
          <div className="search">
            <img src={search} alt="" />
            <input type="text" className="input" placeholder="Searchs" />
          </div>
          <Music />
        </div>
      </div>
    </div>
  );
}

export default Home;
