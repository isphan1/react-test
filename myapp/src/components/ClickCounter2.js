import React, { Component } from 'react'

class ClickCounter2 extends Component {
    render() {
        const {count, clickCounter} = this.props
        return (
            <div>
                <button onClick={clickCounter}>total hover count {count}</button>
            </div>
        )
    }
}

export default ClickCounter2
