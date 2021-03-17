import React, { Component } from "react";

interface Props {}
interface State {}

class App extends Component<Props, State> {
  state = {};
  demo = 2323;
  render() {
    return (
      <div>
        <p>test page{this.demo}</p>
      </div>
    );
  }
}

export default App;
