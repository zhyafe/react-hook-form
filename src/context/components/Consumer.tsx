import React, { Component } from 'react'
import {Context} from '../App'
interface Props {
    
}
interface State {
    
}

class Consumer extends Component<Props, State> {
    click = ()=>{
        console.log('demo');  
    }
    render() {
        return (
            <div onClick={this.click}>
                header
                <Context.Consumer>{data=>{
                    console.log('data',data)
                    return <p>{data.age}</p>
                }}</Context.Consumer>
            </div>
        )
    }
}

export default Consumer

