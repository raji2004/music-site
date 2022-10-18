import { useState } from "react";
import homeicon from "../../assets/home.svg";
import playlisticon from "../../assets/play.svg";
import radio from "../../assets/radio.svg";
import video from "../../assets/videos.svg";
import logo from "../../assets/logo.svg";
import menu from "../../assets/menu.svg";
import "./Nav.css";
import { Link } from "react-router-dom";

function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(true);
  function toogleclick() {
    setIsMenuOpen((prev) => !prev);
  }
  return (
    <div>
      <div className="nav-container">
        <div className="logo-container">
          <img src={menu} className="logo menu" alt="" onClick={toogleclick} />
          <img src={logo} className="logo" alt="" />
        </div>
        <div
          className="main-menu"
          style={{
            width: isMenuOpen === true ? "300px" : "0px",

            display: isMenuOpen === true ? "block" : "none",
          }}
        >
          <ul>
            <li>
              <img src={homeicon} alt="" className="i" />
              <p className="menu"> Home </p>
            </li>
            <li>
              <img src={playlisticon} alt="" />
              <p className="menu"> Home </p>
            </li>
            <li>
              {" "}
              <img src={radio} alt="" />
              <p className="menu"> Home </p>
            </li>
            <li>
              {" "}
              <img src={video} alt="" />
              <p className="menu"> Home </p>
            </li>
          </ul>
          <ul className="ul">
            <li>
              {" "}
              <i className="fa-solid fa-user"></i>
              <p className="menu"> Home </p>
            </li>
            <li>
              {" "}
              <i className="fa-solid fa-right-from-bracket"></i>
              <p className="menu"> Home </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Nav;
