import React, { Component } from 'react'
import withCounter from './withCounter'

class HoverCounter extends Component {
    
    render() {
        const {count, clickCounter} = this.props
        return (
            <div>
                <p onMouseOver={clickCounter}>{this.props.hov} total hover count {count}</p>
            </div>
        )
    }
}

export default withCounter(HoverCounter,5)
