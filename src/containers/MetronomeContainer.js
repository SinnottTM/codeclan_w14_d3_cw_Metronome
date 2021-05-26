import React from "react";
import { useState, useEffect } from "react";
import snd from "./electronicBeep";
import metroSnd from "./metronomeSound";
import dogBork from "./dogBork";

const MetronomeContainer = () => {
  let [BPM, setBPM] = useState(500);
  const [beepId, setBeepId] = useState(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    stopBeep();
    if (playing) startBeep();
  }, [BPM, playing]);

  let increaseBPM = () => {
    setBPM((BPM += 50));
  };

  let decreaseBPM = () => {
    setBPM((BPM -= 50));
  };

  function electronicBeep() {
    snd.play();
  }

  function metronomeSound() {
    metroSnd.play();
  }

  function dogBark() {
    dogBork.play();
  }

  function startBeep() {
    setBeepId(setInterval(electronicBeep, BPM));
  }

  function stopBeep() {
    clearInterval(beepId);
  }

  return (
    <>
      <h1> Welcome to the Metro-Nope </h1>
      <button onClick={() => setPlaying(true)}>{"Start"}</button>
      <button onClick={() => setPlaying(false)}>{"Stop"}</button>
      <br></br>
      <br></br>
      <button onClick={increaseBPM}>{"Increase BPM"}</button>
      <button onClick={decreaseBPM}>{"Decrease BPM"}</button>
      <br></br>
      <br></br>
      <h3>Current milliseconds Interval: {BPM}</h3>
      <h3>Current BMP: {Math.trunc((60 / BPM) * 1000)}</h3>
      <h4>Sounds</h4>
      <button type="button" onClick={electronicBeep}>
        Electronic Beep
      </button>
      <button type="button" onClick={metronomeSound}>
        Metronome clicker
      </button>
      <button type="button" onClick={dogBark}>
        Doggo!
      </button>
    </>
  );
};

export default MetronomeContainer;
