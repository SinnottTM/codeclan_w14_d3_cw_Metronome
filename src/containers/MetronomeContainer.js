import React from 'react'
import SoundCollection from '../components/SoundCollection'
import Slider from '../components/Slider'
import Player from '../components/Player'


const MetronomeContainer = () => {

    function somethingHereMetronomeContainer() {
        return "The function in MetronomeContainer works"
    }

    return (
        <>

            <h1> This is the MetronomeContainer </h1>
            <h2>{somethingHereMetronomeContainer()}</h2>
            <br></br>
            <SoundCollection/>
            <br></br>
            <Slider/>
            <br></br>
            <Player/>

        </>
    )
}

export default MetronomeContainer;
