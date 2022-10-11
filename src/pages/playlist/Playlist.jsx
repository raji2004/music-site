import React from "react";
import img1 from "../../assets/playlist.svg";
import albumdata from "../../assets/Data/albumdata";
import "./Playlist.css";
import Pl from "../../components/Pl/Pl";

export default function Playlist() {
  const p = albumdata.map((item) => (
    <Pl
      key={item.id}
      img={item.img}
      title={item.title}
      subtitle={item.subtitle}
      time={item.time}
      type={item.type}
    />
  ));
  return (
    <div>
      <div className="playlist-container">
        <div className="playlist-info">
          <img src={img1} alt="" />
          <div className="info-word">
            {" "}
            <h1>Tommorrow's tune</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perspiciatis deleniti ?
            </p>
            <span>40 songs- 10hrs</span>
          </div>
        </div>
        <div className="playlist">{p}</div>
      </div>
    </div>
  );
}
