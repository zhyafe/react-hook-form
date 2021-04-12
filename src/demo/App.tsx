import React from "react";
import BaseUse from "./BaseUse";
import Control from "./Control";
import ControlYup from "./ControlYup";
import SetError from "./SetError";

function App() {
  return (
    <div>
      <p>base use -----------------------</p>
      <BaseUse />
      <p> control -----------------------</p>
      <Control />
      <p> controlYup -----------------------</p>
      <ControlYup />
      <p> setError ------------------------</p>
      <SetError />
    </div>
  );
}

export default App;
