## 表单校验

- 添加校验
  register 函数在调用时可传入第二个参数，进行校验规则的设定

```js
register("phone", { required: true });
```

- 错误处理

判断 formState.errors 对象上的字段进行错误展示;
