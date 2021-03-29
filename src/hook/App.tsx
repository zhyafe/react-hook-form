import React, { Component } from "react";
import UseCallbackView from "./UseCallbackView";
import UseEffectView from "./UseEffectView";
import UseMemoView from "./UseMemoView";
import UseStateView from "./UseStateView";
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
        {/* <UseStateView />
        {this.state.isShow && <UseEffectView />} */}
        {/* <UseCallbackView /> */}
        <UseMemoView />
      </>
    );
  }
}

export default App;
