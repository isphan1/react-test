import React, { Component } from 'react'

class CounterRender extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             count :0
        }
    }

    clickCounter = () =>{
        this.setState(pervState => {
            return {count : pervState.count + 1}
        })
    }

    render() {
        return (
            <div>
                {this.props.children(this.state.count,this.clickCounter)}
            </div>
        )
    }
}

export default CounterRender
