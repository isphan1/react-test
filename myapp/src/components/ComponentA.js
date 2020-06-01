import React, { Component } from 'react'
import ComponentB from './ComponentB'

class ComponentA extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             message:'Context api'
        }
    }
    

    render() {
        return (
            <div>
                Component A
                <ComponentB/>
            </div>
        )
    }
}

export default ComponentA
