import React, { Component } from "react";
import StateView from "./StateView";

interface Props {}
interface State {}

class App extends Component<Props, State> {
  state = {};

  render() {
    return (
      <>
        <p>hook</p>
        <StateView />
      </>
    );
  }
}

export default App;
