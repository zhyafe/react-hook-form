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
        <label htmlFor="phone">phone</label>
        <input
          type="text"
          {...register("phone", {
            required: true,
            minLength: 5,
            maxLength: 10,
          })}
          autoComplete="off"
        />
        <p>{errors.phone && (errors.phone.message || errors.phone.type)}</p>
        <label htmlFor="age">age</label>
        <input
          type="number"
          {...register("age", { required: true, min: 6, max: 33 })}
          autoComplete="off"
        />
        <p>{errors.age && (errors.age.message || errors.age.type)}</p>
        <label htmlFor="name">name</label>
        <input
          type="text"
          {...register("name", { required: true, pattern: /^\w{2,5}$/ })}
          autoComplete="off"
        />
        <p>{errors.name && (errors.name.message || errors.name.type)}</p>
        <button type="submit">提交</button>
      </form>
    </div>
  );
}

export default App;
