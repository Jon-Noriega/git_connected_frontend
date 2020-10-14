import React from 'react'

export default function Card({ character, addToAlive }) {

    const { name } = character

    const handleAliveClick = () => {
        addToAlive(character)
    }

    return (
        <div className='card'>
            <h3>{name}</h3>
            <h4>{character.description}</h4>
            <h6>{character.time}</h6>
            <button onClick={handleAliveClick}>Add to Schedule</button>
        </div>
    )
}