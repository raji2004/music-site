import { useState, useEffect, useMemo } from "react";
import albumdata from "../../assets/Data/albumdata";
import "./Hover.css";
export default function Hover() {
  const [v, setv] = useState("");
  const [count, setcount] = useState(0);
  const [pause, setpause] = useState(true);

  const [albumobject, setalbumobject] = useState(albumdata[count]);
  const [icon, seticon] = useState(
    <i className="fa-solid fa-play fat " onClick={play}></i>
  );

  function playprev() {
    setcount((prev) => prev - 1);
    audio.pause();
    audio.currentTime = 0;
  }
  function playnext() {
    setcount((prev) => prev + 1);
    audio.pause();
    audio.currentTime = 0;
  }
  useEffect(() => {
    setalbumobject(albumdata[count]);
    audio.src = albumobject.sound;
    audio.pause();
    audio.currentTime = 0;
  }, [count]);
  function toogleloop() {
    // audio.loop = !audio.loop;
  }
  const audio = useMemo(
    () => new Audio(albumobject.sound),
    [albumobject.sound]
  );

  pause ? audio.pause() : audio.play();

  function hChange(e) {
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
          <img src={albumobject.img} alt="" />
          <div className="title">
            <h4>{albumobject.title}</h4>
            <p>{albumobject.type}</p>
          </div>
        </div>
        <div className="audio">
          <div className="btn">
            <ol>
              <li>
                <i className="fa-solid fa-shuffle fat"></i>
              </li>
              <li>
                <i
                  className="fa-solid fa-backward-step fat"
                  onClick={playprev}
                ></i>
              </li>
              <li className="fa">
                {icon}
                {/* <i class="fa-solid fa-pause fat"></i> */}
              </li>
              <li>
                <i
                  className="fa-solid fa-forward-step fat "
                  onClick={playnext}
                ></i>
              </li>
              <li>
                <i className="fa-solid fa-repeat fat" onClick={toogleloop}></i>
              </li>
            </ol>
          </div>
          {/* <div className="slider">
            <input
              style={{ backgroundSize: `${s}% 100%` }}
              type="range"
              name="time"
              min={0}
              max={time}
              onChange={Change}
            />
          </div> */}
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
