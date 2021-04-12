import React from "react";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

interface Props {}

function Input(field) {
  return (
    <div>
      <input autoComplete="off" {...field}></input>
    </div>
  );
}

const schema = yup.object().shape({
  name: yup.string().required(),
});

const SetError = (props: Props) => {
  const { control, handleSubmit, setError } = useForm({
    resolver: yupResolver(schema),
  });
  return (
    <div>
      <Controller
        control={control}
        name="name"
        render={({ field: { ref, ...resFiled }, fieldState, formState }) => {
          console.log(
            "filed data setError",
            fieldState.error,
            formState.errors
          );

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
          console.log("submit data setError", data);
        })}
      >
        提交
      </button>

      <button
        onClick={() => {
          setError("name", { message: "error" });
        }}
      >
        setError
      </button>
    </div>
  );
};

export default SetError;
