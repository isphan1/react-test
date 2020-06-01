import React, { Component } from 'react'

class HoverCounter2 extends Component {
    render() {
        const {count, clickCounter} = this.props
        return (
            <div>
                <p onMouseOver={clickCounter}>total hover count {count}</p>
            </div>
        )
    }
}

export default HoverCounter2
