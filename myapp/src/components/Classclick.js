import React, { Component } from 'react'

export class Classclick extends Component {

    clickhandler(){
        console.log("class click.")
    }

    render() {
        return (
            <div>
                <button onClick={this.clickhandler}>Class Button</button>
            </div>
        )
    }
}

export default Classclick
