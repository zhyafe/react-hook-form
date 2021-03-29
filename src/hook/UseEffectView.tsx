import React, { ReactElement, useEffect, useState } from "react";

interface Props {}

export default function UseEffectView({}: Props): ReactElement {
  const [count, setCount] = useState({ num: 0 });
  useEffect(() => {
    console.log("effect");
    // 代码一
    return () => {
      console.log("effect return");
      //   代码二
    };
  }, [8]);
  return (
    <div>
      effect hook {count.num}
      <button
        onClick={() => {
          setCount({ num: count.num + 1 });
        }}
      >
        click
      </button>
    </div>
  );
}
