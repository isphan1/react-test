import React, {useReducer} from 'react'


const intialState = {
    firstCounter: 0,
    secondCounter:10
}
const reduce = (state,action) =>{
    switch (action.type) {
        case 'increment':
            return {...state,firstCounter: state.firstCounter + 1}

        case 'decrement':
            return {...state,secondCounter: state.secondCounter - 1}

        case 'reset':
            return intialState       
        default:
            return state.CounterReducer
    }
}


function CounterReducer() {

    const [count,dispatch] = useReducer(reduce,intialState)
    return (
        <div>
            Count :{count.firstCounter}<br/>
            Count :{count.secondCounter}<br/>
            <button onClick={() => dispatch({type:"increment"})}>Increment</button>
            <button onClick={() => dispatch({type:"decrement"})}>Decrement</button>
            <button onClick={() => dispatch({type:"reset"})}>Reset</button>

        </div>
    )
}

export default CounterReducer
