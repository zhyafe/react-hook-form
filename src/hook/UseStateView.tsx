import React, { ReactElement, useState } from "react";

interface Props {}

let localUserInfo = {};

function UseStateView({}: Props): ReactElement {
  const [userInfo, setUserInfo] = useState({ name: 1 });
  console.log("是否相等", localUserInfo === userInfo);
  localUserInfo = userInfo;
  const [count, setCount] = useState(0);
  return (
    <div>
      state：
      {userInfo.name}
      {count}
      <button
        onClick={() => {
          setCount(count + 1);
          setUserInfo({ name: 4 });
        }}
      >
        add count
      </button>
    </div>
  );
}

export default UseStateView;
