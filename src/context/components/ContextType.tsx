import React, { Component } from "react";
import { Context } from "../context";

interface Props {}
interface State {}

class ContextType extends Component<Props, State> {
  state = {};
  componentDidMount() {
    /* 在组件挂载完成后，使用 MyContext 组件的值来执行一些有副作用的操作 */
    console.log("contextType context", this.context);
  }
  render() {
    return <div>contextType:{this.context.age}</div>;
  }
}
ContextType.contextType = Context;
export default ContextType;
