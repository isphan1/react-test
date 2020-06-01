import React, { Component } from 'react'
// import Refs from './Refs'
import FuncRef from './FuncRef'

class Focus extends Component {

constructor(props) {
    super(props)

    this.componentRefs = React.createRef()
}

clickHandeler = () => {

    this.componentRefs.current.focus()
}

    render() {
        return (
            <div>
                <FuncRef ref = {this.componentRefs}/>
                {/* <Refs ref={this.componentRefs}/> */}
                <button onClick={this.clickHandeler}>Refs check</button>
            </div>
        )
    }
}

export default Focus
