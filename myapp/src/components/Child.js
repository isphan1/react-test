import React from 'react'

function Child(props) {
    return (
        <div>
            <button onClick={() => props.greet('child')} >greet parent</button>
        </div>
    )
}

export default Child
