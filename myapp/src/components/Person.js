import React from 'react'

function Person({person}) {

    return (
        <div>
        <p>I am Mr. {person.name}</p>
    <h1>This my {person.age} from {person.area}</h1>        </div>
    )
}

export default Person
