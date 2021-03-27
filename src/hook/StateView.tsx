import React, { ReactElement, useState } from "react";

interface Props {}

function StateView({}: Props): ReactElement {
  const [count, setCount] = useState(0);
  return (
    <div>
      state：
      {count}
      <button onClick={() => setCount(count + 1)}>add count</button>
    </div>
  );
}

export default StateView;
