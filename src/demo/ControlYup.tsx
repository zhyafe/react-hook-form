import React from "react";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

interface Props {}

function Input(field) {
  // console.log("props");

  return (
    <div>
      {/* <p onClick={() => onChange(Math.floor(Math.random() * 10))}>onChagne</p>
      <p>
        {name}:{value}
      </p> */}
      <input autoComplete="off" {...field}></input>
    </div>
  );
}

const schema = yup.object().shape({
  name: yup.string().required().min(9),
  age: yup.number().positive().integer().required(),
});

const ControlYup = (props: Props) => {
  const { control, handleSubmit } = useForm({
    resolver: yupResolver(schema),
  });
  return (
    <div>
      <Controller
        control={control}
        name="name"
        render={({ field: { ref, ...resFiled }, fieldState, formState }) => {
          console.log("control data", fieldState.error, formState.errors);

          return (
            <div>
              <Input {...resFiled} />
              {fieldState.error && <p>{fieldState.error.message}</p>}
            </div>
          );
        }}
      ></Controller>
      <button
        onClick={handleSubmit((data) => {
          // console.log("submit data", data);
        })}
      >
        提交
      </button>
    </div>
  );
};

export default ControlYup;
