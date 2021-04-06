react-hook-form

```js
import { useForm } from "react-hook-form";
const {
  register,
  handleSubmit,
  watch,
  formState: { errors },
} = useForm();
```

## handleSubmit `<form onSubmit={handleSubmit(onSubmit)}>`

当调用 handleSubmit(onSubmit)的时候会

- 校验表单
- 调用 onSubmit

## register `<input {...register("example",{required:true})} />`

register:注册， 有两个参数一个是名字，后面是校验规则

## error {errors.example && <span>This field is required</span>

errors 上对应的表单 name 有该输入项的报错信息
