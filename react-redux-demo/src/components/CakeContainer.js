import React,{useState} from 'react'
import {buyCake} from '../redux'
import {connect} from 'react-redux'

function CakeContainer(props) {

    const [number,setNumber] = useState(1)
    return (
        <div>
            <h1>Anglo cake shop - {props.numOfCake}</h1>
            <input type="number" name={number} onChange={e => setNumber(e.target.value)}/>
    <button onClick={() => props.buyCake(number)}>Buy {number} Cake</button>
        </div>
    )
}

const mapStateToProps = state =>{
    return {
        numOfCake: state.cake.numOfCake
    }
}

const mapDispatchToProps = dispatch =>{
    return {
        buyCake: number => dispatch(buyCake(number))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(CakeContainer)
