import React, { Component } from 'react'

export class ClassCounter extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             count :0,
             name:''
        }
    }
    
    componentDidMount(){
        document.title = `You clicked ${this.state.count} times`
    }

    componentDidUpdate(prevProps,prevState){
        if(prevState.count !== this.state.count){
        document.title = `You clicked ${this.state.count} times`
        console.log('update title',prevState,prevProps)
        }
    }

    clickHandler = () =>{
        this.setState(prev=>({
            count : prev.count + 1
        }))
    }

    render() {
        return (
            <div>
                <input type="text" value={this.state.name} onChange={
                    e => {this.setState({name:e.target.value})
                }}/>
                <button onClick={this.clickHandler}>Click me</button>
            </div>
        )
    }
}

export default ClassCounter
