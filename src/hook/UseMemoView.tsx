import React, { ReactElement, useMemo, useState } from "react";

interface Props {}

let localMemo: any = null;

export default function UseMemoView({}: Props): ReactElement {
  const [count, setCount] = useState(0);
  let memo = {
    name: 1,
  };
  console.log("值相等", memo === localMemo);
  localMemo = memo;
  return (
    <div>
      memo {count} <button onClick={() => setCount(count + 1)}>click</button>
    </div>
  );
}
