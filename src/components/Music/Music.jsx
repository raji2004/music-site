import React from "react";
import cover from "../../assets/Data/cover.svg";
import album from "../../assets/Data/Rectangle 14 (1).png";
import heart from "../../assets/heart.svg";

export default function Music() {
  return (
    <div>
      <div className="main">
        <div className="pic">
          <img src={cover} alt="" />
        </div>
        <div className="topchart">
          <h1>Top chart</h1>
          <div className="music">
            <div className="album">
              <img src={album} alt="" />
            </div>
            <div className="words">
              <h3>No life</h3>
              <p style={{ color: "grey" }}> Sean walker</p>
              <p>1:20:39</p>
            </div>
            <div className="like">
              <img src={heart} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
