import React from 'react'

function SingleList(props) {

    const {title,body} = props.post
    return (
        <div>
            <h6>{title}</h6>
            <p>{body}</p>
        </div>
    )
}

export default SingleList
