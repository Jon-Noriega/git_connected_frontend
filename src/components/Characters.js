import React from 'react'
import Card from './Card'

export default function Characters({ characters, addToSchedule }) {

    const displayCharacters = () => {
        return characters.map((character, idx) => {
            return <Card key={idx} character={character} addToSchedule={addToSchedule} description={character.description} />
        })


    }


    return (
        <div className='characters'>
            {displayCharacters()}

        </div>
    )
}

