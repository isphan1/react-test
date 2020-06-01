import React,{useContext} from 'react'
import {userContext,channelContext} from '../App'
import {countContext} from '../App'

function ComponentC() {
// const contextType = useContext(countContext)

    return (
        // <div>
        //     <userContext.Consumer>
        //     {
        //                         user =>{
        //                             return (
        //                                 <channelContext.Consumer>
        //                                     {
        //                                         channel =>{
        //                                             return (
        //                                             <p>ComponentC and {user} and the channel {channel}</p> 
        //                                             )
        //                                         }
        //                                     }
        //                                 </channelContext.Consumer>
        //                             )
        //                         }
        //     }
        //         </userContext.Consumer>
        // </div>
<div>
            <countContext.Consumer>
                {
                    contextType => { 
                        return (
                            <div>
                        Count :{contextType.count.firstCounter}<br/>
                        Count :{contextType.count.secondCounter}<br/>
                        <button onClick={() => contextType.dispatch({type:"increment"})}>Increment</button>
                        <button onClick={() => contextType.dispatch({type:"decrement"})}>Decrement</button>
                        <button onClick={() => contextType.dispatch({type:"reset"})}>Reset</button>
                        </div>
                    )
                    }
                }
            </countContext.Consumer>
    </div>
    )
}

export default ComponentC