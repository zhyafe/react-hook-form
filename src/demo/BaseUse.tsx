import React from "react";
import { useForm } from "react-hook-form";

function BaseUse() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();
  const onSubmit = (data) => console.log(data);
  console.log(register("demo"));

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register("firstName", { required: true })} />
        {errors.firstName && <span>firstName 不能为空</span>}
        {/* register an input */}
        <input {...register("lastName", { required: true })} />
        {errors.lastName && <p>Last name is required.</p>}
        <input {...register("age", { pattern: /\d+/ })} />
        {errors.age && <p>Please enter number for age.</p>}
        <input type="submit" />
      </form>
      <button
        onClick={() => {
          console.log("---");
          setValue("age", 222);
        }}
      >
        setValue
      </button>
      <form
        action=""
        onSubmit={() => {
          console.log("---");
        }}
      >
        <input type="submit" />
      </form>
    </div>
  );
}

export default BaseUse;
