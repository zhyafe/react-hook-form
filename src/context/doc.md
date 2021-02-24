# context

跨组件传递数据，可用于全局数据，如主题(theme)

**要在单独的文件**

- 创建上下文

```js
// context.ts
import React from "react";
export let Context = React.createContext();
```

## 内容提供者 Context.Provide 组件

```js
<Context.Provide value={{ name: "zs", age: 23 }}>
  <App />
</Context.Provide>
```

## 内容消费

- Context.Consumer
  使用 Context.Consumer 获取数据
  ```js
  //App.js
  <Context.Consumer>{(data) => <p>{data.age}</p>}</Context.Consumer>
  ```
- contextType
  `ContextType.contextType = Context;`
  ```js
  //可在任意生命周期访问this.context
  componentDidMount() {
    console.log("contextType context", this.context);
  }
  ``
  ```
- hook useContext()
  ```js
  const context = useContext(Context);
  console.log("hook context", context);
  ```
