import { useState, useEffect, useMemo } from "react";
import pic from "../../assets/Data/1.png";
import m1 from "../../assets/music/Bruno Mars - That’s What I Like (Official Music Video) - Copy.mp3";

import "./Hover.css";
export default function Hover() {
  const [s, sets] = useState("");
  const [v, setv] = useState("");
  const [pause, setpause] = useState(true);
  const [time, setTime] = useState(0);
  const [icon, seticon] = useState(
    <i className="fa-solid fa-play fat " onClick={play}></i>
  );
  let t = 0;
  const audio = useMemo(() => new Audio(m1), [m1]);

  pause ? audio.pause() : audio.play();
  function Change(e) {
    console.log(e.target);
    console.log(e.target.value);

    setInterval(() => {
      t++;
    }, 1000);
    sets(t);
    setTime(audio.duration);
    console.log(s);
  }
  function hChange(e) {
    console.log(e.target);
    console.log(e.target.value);
    let t = e.target.value;
    setv(t);

    audio.volume = e.target.value / 100;
  }
  useEffect(() => {
    seticon(
      pause ? (
        <i className="fa-solid fa-play fat " onClick={play}></i>
      ) : (
        <i className="fa-solid fa-pause fat" onClick={play}></i>
      )
    );
  }, [pause]);

  async function play() {
    setpause((prev) => !prev);
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
                {icon}
                {/* <i class="fa-solid fa-pause fat"></i> */}
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
              max={time}
              onChange={Change}
            />
          </div>
        </div>
        <div className="slider s">
          <i className="fa-solid fa-volume-high fat "></i>
          <input
            className="vv"
            style={{ backgroundSize: `${v}% 100%` }}
            type="range"
            name="tme"
            min={0}
            max={100}
            onChange={hChange}
          />
        </div>
      </div>
    </div>
  );
}
