import React, { Component } from 'react'

class Form extends Component {

constructor(props) {
    super(props)

    this.state = {
         username :'',
         comment : '',
         popular:''
    }
}

handleUsername = event =>{
    this.setState({
        [event.target.name]: event.target.value 
    })
}

handleComment = event =>{
    this.setState({
        comment: event.target.value 
    })
}

handlePopular = event =>{
    this.setState({
        popular: event.target.value 
    })
}

handleSubmit = event =>{
    if (this.state.username !== ''){
        alert(`${this.state.username} and ${this.state.comment} and ${this.state.popular}`)
    }        
    event.preventDefault(); 
}

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input type="text" name="username" value={this.state.username} onChange={this.handleUsername}/>
                <textarea type="text" value={this.state.comment} onChange={this.handleComment}/>
                <select value={this.state.popular} onChange={this.handlePopular}>
                    <option select="selected">Angular</option>
                    <option>React</option>
                    <option>Vue</option>
                </select>
                <button type="submit">SUBMIT</button>
            </form>
        )
    }
}

export default Form
