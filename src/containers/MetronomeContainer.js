import React from "react";
import { useState, useEffect } from "react";
import SoundCollection from "../components/SoundCollection";
import Slider from "../components/Slider";
import Player from "../components/Player";
import snd from "./sound";

const MetronomeContainer = () => {
  let [BPM, setBPM] = useState(500);
  const [beepId, setBeepId] = useState(null);
  const [playing, setPlaying] = useState(false);

  useEffect(()=> {
      stopBeep()
      if (playing) startBeep()
  }, [BPM, playing])

  let increaseBPM = () => {
    setBPM((BPM += 50));
  };

  let decreaseBPM = () => {
    setBPM((BPM -= 50));
  };

  function electronicBeep() {
    snd.play();
  }

  function startBeep() {
    setBeepId(setInterval(electronicBeep, BPM));
  }

  function stopBeep() {
    clearInterval(beepId);
  }

  return (
    <>
      <h3> This is the Metro-Nope </h3>
      <button onClick={()=>setPlaying(true)}>{"Start"}</button>
      <button onClick={()=>setPlaying(false)}>{"Stop"}</button>
      <br></br>
      <br></br>
      <button onClick={increaseBPM}>{"Increase BPM"}</button>
      <button onClick={decreaseBPM}>{"Decrease BPM"}</button>
      <br></br>
      <br></br>
      <h3>Current BPM: {BPM}</h3>
      <h4>Sounds</h4>
      <button type="button" onClick={electronicBeep}>
        Electronic Beep!
      </button>
    </>
  );
};

export default MetronomeContainer;
