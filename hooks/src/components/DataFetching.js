import React, {useState,useEffect} from 'react'
import axios from 'axios'

function DataFetching() {

    const [post,setPost] = useState({})
    const [err,setErr] = useState('')
    const [id,setId] = useState(1)
    const [idFromButtion,setIdFromButton] = useState(1)

    const clickHandler = () =>{
        console.log(id)
        setIdFromButton(id)
    }

    useEffect(()=>{

        axios
        .get(`https://jsonplaceholder.typicode.com/posts/${idFromButtion}`)
        .then(res=>{
            console.log(res.data)
            setPost(res.data)
        })
        .catch(err=>{
            console.log(err)
            setErr('Try again later')
        })
    },[idFromButtion])

    return (
        <div>
            <input type="text" value={id} onChange={e => setId(e.target.value)}/>
            <button onClick={clickHandler}>Add click</button>
            {/* {posts.length > 0 ?
            posts.map(post => <li key={post.id}>{post.title}</li>)
            :err} */}
            { post.title !== "" ?
            <li key={post.id}>{post.title}</li>
            :err
            }   
        </div>
    )
}

export default DataFetching
