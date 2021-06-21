## 基本使用 表单绑定 获取表单值

useForm 创建对象；返回的对象中注意两个字段，handleSubmit, register

- 数据绑定 register('name') 返回值注入到 表单组件
- 获取表单数据提交时调用 handleSubmit(callback) 传入 callback,callback 可以获取到表单值
