import React, { Component } from 'react'
import Consumer from './Consumer'
import ContextType from './ContextType'
import Hook from './Hook'

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
                <ContextType/>
                <Hook/>
            </div>
        )
    }
}

export default NoUse
