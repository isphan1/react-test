import React from 'react'

function Functionclick() {

    function clickHandler(){
        console.log("function handaler")
    }
    return (
        <div>
            <button onClick={clickHandler}>Function handler</button>
        </div>
    )
}

export default Functionclick
