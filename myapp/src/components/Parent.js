import React, { Component } from 'react'

import Child from './Child'

 class Parent extends Component {

    constructor(props){
        super(props)
        this.state ={
            parentName: "parent"
        }

        this.greetParent = this.greetParent.bind(this)
    }

    greetParent(child){
        alert(`greet ${this.state.parentName} from ${child} and ${this.props.child}`)
    }

    

    render() {
        return (
            <div>
                <Child greet = {this.greetParent}/>
            </div>
        )
    }
}

export default Parent
