import React, { Component } from 'react'
import Consumer from './Consumer'
import ContextType from './ContextType'

interface Props {
    
}
interface State {
    
}

class NoUse extends Component<Props, State> {
    state = {}

    render() {
        return (
            <div>
                <Consumer/>
                {/* <ContextType/> */}
            </div>
        )
    }
}

export default NoUse
