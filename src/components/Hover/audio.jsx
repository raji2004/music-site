import { useEffect, useState } from "react";
import albumdata from "../../assets/Data/albumdata";

export default function (albumdata) {
  const [count, setcount] = useState(0);
  //   const [albumobject, setalbumobject] = useState(albumdata[count]);
  useEffect(() => {
    function playprev() {
      setcount((prev) => prev - 1);
      audio.pause();
      audio.currentTime = 0;
    }
    function playnext() {
      audio.pause();
      setcount((prev) => prev + 1);

      audio.currentTime = 0;
    }
    useEffect(() => {
      audio.pause();
      setalbumobject(albumdata[count]);
      audio.src = albumobject.sound;

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
  }, []);
}
