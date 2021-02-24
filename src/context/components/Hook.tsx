import React, { ReactElement, useContext } from "react";
import { Context } from "../context";

interface Props {}

function Hook({}: Props): ReactElement {
  const context = useContext(Context);
  console.log("hook context", context);
  return <div>hook:{context.age}</div>;
}

export default Hook;
