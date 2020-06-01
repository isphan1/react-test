import React, { Component } from 'react'
import withCounter from './withCounter'

class ClickCounter extends Component {

    render() {
        const {count, clickCounter} = this.props
        return (
            <div>
                <button onClick={clickCounter}>total hover count {count}</button>
            </div>
        )
    }
}

export default withCounter(ClickCounter,2)
