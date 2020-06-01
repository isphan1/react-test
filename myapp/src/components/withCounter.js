import React from 'react'

const withCounter = (WrappedComponent,incrementNumber) =>{

class NewComponent extends React.Component {

    constructor(props) {
        super(props)
    
        this.state = {
             count :0
        }
    }

    clickCounter = () =>{
        this.setState(pervState => {
            return {count : pervState.count + incrementNumber}
        })
    }

    render(){
        return (
            <WrappedComponent
            count = {this.state.count}
            clickCounter = {this.clickCounter}
            {...this.props}
            />
        )
    }
}
return NewComponent
}

export default withCounter
