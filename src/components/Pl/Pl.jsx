import React from "react";
import img1 from "../../assets/playlist.svg";
import heart from "../../assets/heart.svg";

export default function Pl({ img, title, subtitle, time, type }) {
  return (
    <div>
      {" "}
      <div className="song">
        <img className="pp" src={img} alt="" />
        <img src={heart} alt="" />
        <h6>{/* {title} - {subtitle} */}</h6>
        <p>{type}</p>
        <p className="time">{time}</p>

        <i className="fa-solid fa-ellipsis-vertical gig"></i>
      </div>
    </div>
  );
}
