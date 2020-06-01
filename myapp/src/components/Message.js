import React ,{Component} from 'react'

class Message extends Component {

    constructor(){
        super()
        this.state = {
            message : "Welcome to the page"

        }
    }

    changeState(){
        this.setState ({
            message : "Thank you sor subscribe"
        })
    }

    render (){
        return(
            <div>
                <h1>{this.state.message}</h1>
                <button onClick={() => this.changeState()}>Subscribe</button>
            </div>
        )
    }
}

export default Message