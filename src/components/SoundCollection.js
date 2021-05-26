import React from 'react'

const SoundCollection = () => {

    function somethingHereSoundCollection() {
        return "The function in SoundCollection works"
    }

    return (
        <>

            <h4> This is the SoundCollection </h4>
            <h5>{somethingHereSoundCollection()}</h5>

        </>
    )
}

export default SoundCollection;
