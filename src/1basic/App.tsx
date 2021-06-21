import React, { ReactElement } from "react";
import { useForm } from "react-hook-form";

interface Props {}

function App({}: Props): ReactElement {
  const { handleSubmit, register } = useForm();
  const submit = (values) => {
    console.log("submit", values);
  };
  return (
    <div>
      <p>react-hook-form 基本使用 表单绑定 获取表单值</p>
      <form onSubmit={handleSubmit(submit)}>
        <input type="text" {...register("phone")} autoComplete="off" />
        <br />
        <button type="submit">提交</button>
      </form>
    </div>
  );
}

export default App;
