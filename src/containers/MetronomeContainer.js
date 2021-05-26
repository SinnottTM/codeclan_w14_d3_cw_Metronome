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
        
            <br></br>   
            <h3> This is the MetronomeContainer </h3>
            <h4>{somethingHereMetronomeContainer()}</h4>
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
