import React from 'react'


const Player = () => {

    function somethingHerePlayer() {
        return "The function in Player works"
    }


    return (
        <>

            <h4> This is the Player </h4>
            <h5>{somethingHerePlayer()}</h5>

        </>
    )
}

export default Player;
