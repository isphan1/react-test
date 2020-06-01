import React, { Component } from 'react'

class Refs extends Component {

    constructor(props) {
        super(props)
    
             this.input = React.createRef()
    }

    // componentDidMount(){
    //     this.input.current.focus()
    // }

    focusInput = () =>{
        this.input.current.focus()
        console.log(this.input.current.value)
    }
    
    render() {
        return (
            <div>
            <input type="text" ref={this.input}/>
            </div>
        )
    }
}

export default Refs
