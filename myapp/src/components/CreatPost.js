import React, { Component } from 'react'
import axios from 'axios'


class CreatPost extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             username:'',
             title:'',
             body:''
        }
    }

    changeHandler = e =>{
        this.setState({
            [e.target.name] : e.target.value
        })
    }
    
    submitHandler = e =>{
        e.preventDefault();
        console.log(this.state)
        
        axios.post("https://jsonplaceholder.typicode.com/posts",this.state)
        .then(response=>{
            console.log(response)
        })
        .catch(e =>{
            console.log(e)
        })
    }
    
    render() {
        return (
            <div>
                <form method="POST" onSubmit={this.submitHandler}>
                    <div>
                    <input type="text" name="username" value={this.state.username} onChange={this.changeHandler}/>
                    </div>
                    <div>
                    <input type="text" name="title" value={this.state.title} onChange={this.changeHandler}/>
                    </div>
                    <div>
                    <input type="text" name="body" value={this.state.body} onChange={this.changeHandler}/>
                    </div>
                <input type="submit" value="Create Post" />
                </form>
            </div>
        )
    }
}

export default CreatPost
