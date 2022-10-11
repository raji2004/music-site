import React from "react";
import heart from "../../assets/heart.svg";
import { Link, Router } from "react-router-dom";

export default function Music({ img, title, subtitle, time }) {
  return (
    <div>
      <Link
        to="/playlist"
        onClick={() => {
          Router.push("/playlist");
        }}
        style={{ textDecoration: "none" }}
      >
        <div className="music">
          <div className="album">
            <img src={img} alt="" />
          </div>
          <div className="words">
            <h3>{title}</h3>
            <p style={{ color: "grey" }}>{subtitle}</p>
            <p>{time}</p>
          </div>
          <div className="like">
            <img src={heart} alt="" />
          </div>
        </div>
      </Link>
    </div>
  );
}
