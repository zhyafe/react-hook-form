import React, { Component } from "react";

interface Props {
  data: {
    name: string;
  };
}
interface State {}

class Comp2 extends Component<Props, State> {
  state = {};
  demo = 2323;

  click = () => {
    this.props.data.name = Math.random() + "";
    this.forceUpdate();
  };

  render() {
    console.log("----");

    return (
      <div>
        <p onClick={this.click}>test page{this.props.data.name}</p>
      </div>
    );
  }
}

export default Comp2;
