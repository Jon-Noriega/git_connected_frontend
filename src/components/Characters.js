import React from 'react'
import Card from './Card'

export default function Characters({ characters, addToAlive }) {

    const displayCharacters = () => {
        return characters.map((character, idx) => {
            return <Card key={idx} character={character} addToAlive={addToAlive} description={character.description} />
        })


    }


    return (
        <div className='characters'>
            {displayCharacters()}

        </div>
    )
}

