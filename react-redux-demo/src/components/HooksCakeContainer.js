import React from 'react'
import {useSelector,useDispatch} from 'react-redux'
import {useState} from 'react'
import {buyIceCream} from '../redux'

function HooksCakeContainer() {

    const [number,setNumber] = useState(1)
    const numOfIceCream = useSelector(state => state.icecream.numOfIceCream)
    const dispatch = useDispatch()

    return (
        <div>
            <h1>Anglo Cake Shop - {numOfIceCream}</h1>
            <input type="number" name={number} onChange={e => setNumber(e.target.value)}/>
            <button onClick={()=>dispatch(buyIceCream(number))}>Buy {number} IceCream</button>
        </div>
    )
}

export default HooksCakeContainer
