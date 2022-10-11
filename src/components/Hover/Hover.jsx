import { useState } from "react";
import pic from "../../assets/Data/1.png";
import m1 from "../../assets/music/Bruno Mars - That’s What I Like (Official Music Video) - Copy.mp3";
// import m2 from "../../assets/music/Bruno Mars - That’s What I Like (Official Music Video).ogg";
import shuffle from "../../assets/shuffle.svg";
import back from "../../assets/back.svg";
import play from "../../assets/p.svg";
import next from "../../assets/next.svg";
import repeat from "../../assets/repeat.svg";
import "./Hover.css";
export default function Hover() {
  const [s, sets] = useState("");
  const [v, setv] = useState("");
  function Change(e) {
    console.log(e.target);
    console.log(e.target.value);
    let t = e.target.value / 10;
    sets(t);
  }
  function hChange(e) {
    console.log(e.target);
    console.log(e.target.value);
    let t = e.target.value / 10;
    setv(t);
  }

  return (
    <div className="rr">
      {" "}
      <div className="action">
        <div className="song-info">
          <img src={pic} alt="" />
          <div className="title">
            <h4>Life Goes on</h4>
            <p>Sean walker</p>
          </div>
        </div>
        <div className="audio">
          <div className="btn">
            <ol>
              <li>
                <i className="fa-solid fa-shuffle fat"></i>
              </li>
              <li>
                <i className="fa-solid fa-backward-step fat"></i>
              </li>
              <li className="fa">
                <i className="fa-solid fa-play fat "></i>
              </li>
              <li>
                <i className="fa-solid fa-forward-step fat "></i>
              </li>
              <li>
                <i className="fa-solid fa-repeat fat"></i>
              </li>
            </ol>
          </div>
          <div className="slider">
            <input
              style={{ backgroundSize: `${s}% 100%` }}
              type="range"
              name="time"
              min={0}
              max={1000}
              onChange={Change}
            />
          </div>
          <audio src={m1}></audio>
        </div>
        <div className="slider s">
          <i class="fa-solid fa-volume-high fat "></i>
          <input
            className="vv"
            style={{ backgroundSize: `${v}% 100%` }}
            type="range"
            name="tme"
            min={0}
            max={1000}
            onChange={hChange}
          />
        </div>
      </div>
    </div>
  );
}
