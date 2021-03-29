import React, { Component } from "react";
import EffectView from "./EffectView";
import StateView from "./StateView";

interface Props {}
interface State {}

class App extends Component<Props, State> {
  state = { isShow: true };

  render() {
    return (
      <>
        <p>
          hook{" "}
          <button
            onClick={() => {
              this.setState({
                isShow: !this.state.isShow,
              });
            }}
          >
            chang show
          </button>
        </p>
        <StateView />
        {this.state.isShow && <EffectView />}
      </>
    );
  }
}

export default App;
