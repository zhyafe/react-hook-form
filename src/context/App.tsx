import React from "react";
import NoUse from "./components/NoUse";
import { Context } from "./context";

class App extends React.Component {
  render() {
    return (
      <div>
        <Context.Provider value={{ age: 22 }}>
          <NoUse/>
        </Context.Provider>
      </div>
    );
  }
}

export default App;
