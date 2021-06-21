## 表单校验 错误处理

- 添加校验
  register 函数在调用时可传入第二个参数，进行校验规则的设定;值和 html 的校验相似
  可设置的值有
  - required
  - min
  - max
  - minLength
  - maxLength
  - pattern
  - validate

```js
register("phone", { required: true });
```

- 错误处理

判断 formState.errors 对象上的字段进行错误展示;
