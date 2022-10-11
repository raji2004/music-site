import React from "react";
import homeicon from "../../assets/home.svg";
import playlisticon from "../../assets/play.svg";
import radio from "../../assets/radio.svg";
import video from "../../assets/videos.svg";
import logo from "../../assets/logo.svg";
import "./Nav.css";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <div>
      <div className="nav-container">
        <img src={logo} className="logo" alt="" />
        <ul>
          <li>
            {" "}
            <Link
              to="/"
              onClick={() => {
                Router.push("/");
              }}
            >
              <img src={homeicon} alt="" className="i" />
            </Link>
          </li>
          <li>
            <img src={playlisticon} alt="" />
          </li>
          <li>
            {" "}
            <img src={radio} alt="" />
          </li>
          <li>
            {" "}
            <img src={video} alt="" />
          </li>
        </ul>
        <ul className="ul">
          <li>
            {" "}
            <i className="fa-solid fa-user"></i>
          </li>
          <li>
            {" "}
            <i className="fa-solid fa-right-from-bracket"></i>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Nav;
