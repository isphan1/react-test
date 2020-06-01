import React, { Component } from 'react'

class Counter extends Component {

    constructor(props){
        super(props)
        this.state = {
            money:0, 
        }
    }

    increaseMoney(){
        this.setState(perviousState => ({
            money : perviousState.money + 1
        }))
        console.log(this.props.value)
    }

    increaseFive(){
        this.increaseMoney()
        // this.increaseMoney()
        // this.increaseMoney()
        // this.increaseMoney()
        // this.increaseMoney()

    }

    render() {
        return (
            <div>

        <p>Count - {this.state.money}</p>
        <button onClick={() => this.increaseFive()}>Increase Value</button>
                
            </div>
        )
    }
}

export default Counter
