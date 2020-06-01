import React, { Component } from 'react'
import axios from 'axios'
import SingleList from './SingleList'

class PostList extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             posts : [],
             errMsg: ''
        }
    }

    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response =>{
            this.setState({
                posts : response.data
            })
        })
        .catch(error=>{
            this.setState({
                errMsg : "Error in loading..........."
            })
        })
    }
    
    render() {

        const {posts,errMsg} = this.state
        return (
            <div>
                List of posts 
        
                {
                    posts.length ? 
                    posts.map(post => <SingleList key={post.id} post={post} />) : null     
                }

                {
                    errMsg ? <p>{errMsg}</p> : null
                }
            </div>
        )
    }
}

export default PostList
