import React from 'react'

    const Greet = ({name,hero}) =>{   //destructring
        return(        
        <div>
            <p>Full datta -> {name}</p>
        <h1>The test case -> {hero}</h1>
        </div>
        )
}

export default Greet