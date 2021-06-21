## controlled


1. 通过 yup 创建校验 schema
2. 在 useForm 中添加配置项 resolver

```js
{
  resolver: yupResolver(schema);
}
```
