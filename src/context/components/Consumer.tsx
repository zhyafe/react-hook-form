import React, { Component } from "react";
import { Context } from "../context";
interface Props {}
interface State {}

class Consumer extends Component<Props, State> {
  click = () => {
    console.log("demo");
  };
  render() {
    return (
      <div onClick={this.click}>
        Consumer:
        <Context.Consumer>
          {(data) => {
            console.log("consumer context", data);
            return <span>{data.age}</span>;
          }}
        </Context.Consumer>
      </div>
    );
  }
}

export default Consumer;
