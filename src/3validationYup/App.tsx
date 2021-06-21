import { yupResolver } from "@hookform/resolvers/yup";
import React, { ReactElement } from "react";
import { useForm } from "react-hook-form";
import { number, object, string } from "yup";

interface Props {}

function App({}: Props): ReactElement {
  const {
    handleSubmit,
    register,
    formState: { errors },
    getValues,
  } = useForm({
    resolver: yupResolver(
      object({
        phone: string().required(),
        age: string().required(),
        name: string().required(),
      })
    ),
    defaultValues: {
      name: "",
      age: "",
      phone: "",
    },
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
        <label htmlFor="age">age</label>
        <input type="text" {...register("age")} autoComplete="off" />
        <p>{errors.age && (errors.age.message || errors.age.type)}</p>
        <label htmlFor="name">name</label>
        <input type="text" {...register("name")} autoComplete="off" />
        <p>{errors.name && (errors.name.message || errors.name.type)}</p>
        <button type="submit">提交</button>
      </form>
    </div>
  );
}

export default App;
