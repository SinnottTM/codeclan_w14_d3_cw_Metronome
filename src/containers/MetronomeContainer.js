import React from "react";
import { useState, useEffect } from "react";
import snd from "./electronicBeep";
import metroSnd from "./metronomeSound";
import dogBork from "./dogBork";
import grandPiano from "./fartNoise";
import gun from "./gunShot";
import heartBeat from "./heartMonitor";
import nelson from "./NelsonSimpsons";
import turkey from "./thanksgiving";

const MetronomeContainer = () => {
  let [BPM, setBPM] = useState(800);
  const [beepId, setBeepId] = useState(null);
  const [playing, setPlaying] = useState(false);
  const [playSound, setPlaySound] = useState(metroSnd);

  useEffect(() => {
    stopBeep();
    if (playing) startBeep();
  }, [BPM, playing]);

  let increaseBPM = () => {
    setBPM((BPM += 10));
  };

  let decreaseBPM = () => {
    setBPM((BPM -= 10));
  };

  let increaseBPMLarge = () => {
      setBPM((BPM += 200));
  };

  let decreaseBPMLarge = () => {
      setBPM((BPM -= 200));
  };

  function currentSound(){
      playSound.play();
  }

  function electronicBeep() {
    snd.play();
    setPlaySound(snd);
  }

  function metronomeSound() {
    metroSnd.play();
    setPlaySound(metroSnd);
  }

  function dogBark() {
    dogBork.play();
    setPlaySound(dogBork);
  }

  function nastySurprise() {
      grandPiano.play();
      setPlaySound(grandPiano);
  }

  function pewPew() {
      gun.play();
      setPlaySound(gun);
  }

  function heart() {
      heartBeat.play();
      setPlaySound(heartBeat);
  }

  function whaaaa() {
      nelson.play();
      setPlaySound(nelson);
  }

    function gooble() {
      turkey.play();
      setPlaySound(turkey);
    }

  function startBeep() {
    setBeepId(setInterval(currentSound, BPM));
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
      <button onClick={decreaseBPM}>{"Increase BPM"}</button>
      <button onClick={increaseBPM}>{"Decrease BPM"}</button>
      <br></br>
      <br></br>
      <button onClick={decreaseBPMLarge}>{"Rapidly increase BPM"}</button>
      <button onClick={increaseBPMLarge}>{"Rapidly decrease BPM"}</button>
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
        Such a cute doggo!
      </button>
      <button type="button" onClick={nastySurprise}>
        Delightful grand piano
      </button>
      <button type="button" onClick={pewPew}>
        A deadly weapon
      </button>
      <button type="button" onClick={heart}>
        We're losing him!
      </button>
      <button type="button" onClick={whaaaa}>
        He's a scatman... we think
      </button>
      <button type="button" onClick={gooble}>
        Turkey Time
      </button>
    </>
  );
};

export default MetronomeContainer;
