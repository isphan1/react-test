import React, { Component } from 'react'
import ComponentC from './ComponentC'
import UserContext from './userContext'

class ComponentB extends Component {

    static contextType = UserContext
    render() {
        return (
            <div>
                Component B and {this.context}
                <ComponentC />
            </div>
        )
    }
}

export default ComponentB
