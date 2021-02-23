import React, { Component } from 'react'
import { Context } from '../App'

interface Props {
    
}
interface State {
    
}

class ContextType extends Component<Props, State> {
    state = {}
    componentDidMount() {
        let value = this.context;
        /* 在组件挂载完成后，使用 MyContext 组件的值来执行一些有副作用的操作 */
        console.log(value,Context);
        
      }
    render() {
        return (
            <div>
                contextType:
            </div>
        )
    }
}
ContextType.contextType = Context;
export default ContextType
