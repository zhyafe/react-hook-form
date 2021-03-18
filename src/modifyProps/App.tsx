import React, { Component } from "react";
import Comp from "./Comp";

interface Props {}
interface State {}

class App extends Component<Props, State> {
  state = {
    name: "cs",
  };

  click = () => {
    this.forceUpdate();
  };

  render() {
    console.log("---app-");

    return (
      <div>
        <p>name {this.state.name}</p>
        <Comp data={this.state} click={this.click} />
      </div>
    );
  }
}

export default App;
