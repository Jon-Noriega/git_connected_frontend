import React from 'react'
import Card from './Card'

export default function Programs({ programs, addToSchedule }) {

    const displayCharacters = () => {
        return programs.map(program => {
            return <Card key={program.program_id} program={program} addToSchedule={addToSchedule} />
        })


    }


    return (
        <div className='programs'>
            {displayCharacters()}

        </div>
    )
}


