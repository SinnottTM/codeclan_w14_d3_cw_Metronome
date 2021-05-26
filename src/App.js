import React from 'react'
import './App.css';
import MetronomeContainer from './containers/MetronomeContainer';

    let bpm = 100;
    let playing = false;

function App() {
  return (
    <div className="App">
      <h1>Metronome Goes Here</h1>
      <MetronomeContainer/>
    </div>
        
  )
}

export default App;
