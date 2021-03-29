import React, { ReactElement, useCallback, useEffect, useState } from "react";

interface Props {}

let localFn: any = null;

export default function UseCallbackView({}: Props): ReactElement {
  const [count, setCount] = useState(0);
  let fn = useCallback(() => {
    console.log("useCallback");
  }, []);
  console.log("函数相等", fn === localFn);
  localFn = fn;
  return (
    <div>
      useCallback {count}{" "}
      <button onClick={() => setCount(count + 1)}>click</button>
    </div>
  );
}
