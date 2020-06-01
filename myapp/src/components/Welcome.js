import React ,{Component} from 'react'

class Welcome extends Component {

    render (){
        const {a,b} = this.props //destructring
        return(
            <div>
        <h1>Welcomee from the kids -> {a} and the -> {b}</h1>
        </div>
        )
    }
}

export default Welcome