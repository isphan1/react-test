import React, { Component } from 'react'
import {UserConsumer} from './userContext'

class ComponentC extends Component {
    render() {
        return (
        <UserConsumer>
            {
                username =>{
                    return (
                        <div>
                            Component C
                            <p>message: {username}</p>
                        </div>
                    )
                }
            }
        </UserConsumer>
        )
    }
}

export default ComponentC
