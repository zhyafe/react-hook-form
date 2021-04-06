import React from "react";
import { Controller, useForm } from "react-hook-form";

interface Props {}

function Input(field) {
  // console.log("props");

  return (
    <div>
      {/* <p onClick={() => onChange(Math.floor(Math.random() * 10))}>onChagne</p>
      <p>
        {name}:{value}
      </p> */}
      <input {...field}></input>
    </div>
  );
}

const Control = (props: Props) => {
  const { control, handleSubmit } = useForm();
  return (
    <div>
      <Controller
        control={control}
        name="name"
        rules={{ required: true, minLength: 9 }}
        render={({ field: { ref, ...resFiled }, fieldState, formState }) => {
          console.log("control data", fieldState.error, formState.errors);

          return (
            <div>
              <Input {...resFiled} />
              {fieldState.error && [
                fieldState.error.type == "required" && <p>{"required"}</p>,
                fieldState.error.type == "minLength" && <p>{"minLength"}</p>,
              ]}
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

export default Control;
