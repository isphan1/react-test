import React, {useState} from 'react'

function HookCounter() {

    const initialState = 0

    const [count, setCount] = useState(initialState)


    const clickHandler = () => {
        setCount(count => count + 1) // using previous state
    }

    const increase5 = () => {
        for(let i = 0;i<5;i++){
            clickHandler()
        }
    }

    return (
        <div>
            Count: {count}
            <br/>
            <button onClick={() => {setCount(initialState)}}>Reset</button>
            <br/>
            <button onClick={() => {setCount(count - 1)}}>Decrease by 1</button> 
            <br/>
            <button onClick={() => {setCount(count + 1)}}>Increase by 1</button>
            <br/>
            <button onClick={increase5}>increase by 5</button>
        </div>
    )
}

export default HookCounter
