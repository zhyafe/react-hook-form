import React, { Component } from 'react'

interface Props {
    
}
interface State {
    
}

class Header extends Component<Props, State> {
    click = ()=>{
        console.log('demo');  
    }
    render() {
        return (
            <div onClick={this.click}>
                header
            </div>
        )
    }
}

export default Header

