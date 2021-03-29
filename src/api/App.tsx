import React, { ReactElement, useState } from "react";
import CloneElement from "./CloneElement";
import Memo from "./Memo";

interface Props {}

function App({}: Props): ReactElement {
  const [count, setCount] = useState(0);
  return (
    <div>
      <p>
        api page {count}
        <button onClick={() => setCount(count + 1)}>click</button>
      </p>
      {/* <Memo data={count} /> */}
      <CloneElement>
        <div>
          <p>first</p>
        </div>
        <Memo data={2} />
      </CloneElement>
    </div>
  );
}

export default App;
