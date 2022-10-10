import React from "react";
import Nav from "../../components/Nav/Nav";
import search from "../../assets/search.svg";
import cover from "../../assets/Data/cover.svg";
import data from "../../assets/Data/data";
import albumdata from "../../assets/Data/albumdata";
import "./home.css";
import Topchart from "../../components/Music/Music";

import Albums from "../../components/Albums/Albums";
import Hover from "../../components/Hover/Hover";

function Home() {
  const p = data.map((item) => (
    <Topchart
      key={item.id}
      img={item.img}
      title={item.title}
      subtitle={item.subtitle}
      time={item.time}
    />
  ));
  const a = albumdata.map((item) => (
    <Albums key={item.id} img={item.img} title={item.title} />
  ));
  return (
    <div>
      <div className="home">
        <Nav />
        <div className="con">
          <div className="search">
            <img src={search} alt="" />
            <input type="text" className="input" placeholder="Searchs" />
          </div>
          <div className="main">
            <div className="pic">
              <img src={cover} alt="" />
            </div>
            <div className="topchart">
              <h1>Top chart</h1>
              {p}
            </div>
          </div>
          <div className="c">
            <h4>New releases.</h4>
            <div className="new">{a}</div>
          </div>
        </div>
        {/* 
hovering div! */}
        <Hover />
      </div>
    </div>
  );
}

export default Home;
