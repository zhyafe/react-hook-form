import React, { Component } from "react";

interface Props {
  data: {
    name: string;
  };
  click: () => void;
}
interface State {}

class Comp extends Component<Props, State> {
  state = {};
  demo = 2323;

  click = () => {
    this.props.data.name = Math.random() + "";
    this.props.click();
  };

  render() {
    console.log("-comp---");

    return (
      <div>
        <p onClick={this.click}>test page{this.props.data.name}</p>
      </div>
    );
  }
}

export default Comp;
