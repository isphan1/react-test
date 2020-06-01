import React, { Component } from 'react'

class Conditional extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            isLoggedIn : false
        }
    }
    
    render() {

        return this.state.isLoggedIn && <div>Welcome to Alex</div>
            // this.state.isLoggedIn? <div>Welcome to Alex</div> : <div>ready for join</div>
        

        // let message
        // if(this.state.isLoggedIn){
        //     message = <div>Welcome to Alex</div>
        // }
        // else{
        //     message = <div>ready for join</div>
        // }
        // return message

    //     if (this.state.isLoggedIn){
    //         return (
    //             <div>
    //                 Welcome to Alex
    //             </div>
    //         )            
    //     }
    //     else{
    //     return (
    //         <div>
    //             ready for join
    //         </div>
    //     )
    // }
 }
}

export default Conditional
