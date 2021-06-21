import { yupResolver } from "@hookform/resolvers/yup";
import React, { ReactElement } from "react";
import { Controller, useForm } from "react-hook-form";
import { number, object, string } from "yup";

interface Props {}

function App({}: Props): ReactElement {
  const {
    handleSubmit,
    register,
    formState: { errors },
    getValues,
    control,
  } = useForm({
    resolver: yupResolver(
      object({
        phone: string().required(),
        age: string().required(),
      })
    ),
  });
  const submit = (values) => {
    console.log("submit", values);
  };
  console.log("errors", errors, getValues());

  return (
    <div>
      <p>react-hook-form 校验 yup</p>
      <form onSubmit={handleSubmit(submit)}>
        <label htmlFor="phone">phone</label>
        <input type="text" {...register("phone")} autoComplete="off" />
        <p>{errors.phone && (errors.phone.message || errors.phone.type)}</p>
        <Controller
          name="age"
          control={control}
          render={({ field }) => {
            return <input {...field}></input>;
          }}
        />
        <p>{errors.age && (errors.age.message || errors.age.type)}</p>
        <button type="submit">提交</button>
      </form>
    </div>
  );
}

export default App;
