import React, { ReactElement } from "react";
import { useForm } from "react-hook-form";

interface Props {}

function App({}: Props): ReactElement {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();
  const submit = (values) => {
    console.log("submit", values);
  };
  console.log("errors", errors);

  return (
    <div>
      <p>react-hook-form 基本使用</p>
      <form onSubmit={handleSubmit(submit)}>
        <input
          type="text"
          {...register("phone", { required: true })}
          autoComplete="off"
        />
        <p>{errors.phone && (errors.phone.message || errors.phone.type)}</p>
        <br />
        <button type="submit">提交</button>
      </form>
    </div>
  );
}

export default App;
