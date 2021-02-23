# context
跨组件传递数据，可用于全局数据，如主题(theme)

- 创建上下文
```js
import React from 'react'
let Context = React.createContext()
```
## 内容提供者 Context.Provide 组件
```js
<Context.Provide value={{name:'zs',age:23}}><App/></Context.Provide>
```

## 内容消费 
- Context.Consumer
  使用Context.Consumer获取数据
  ```js
  //App.js
  <Context.Consumer>{data=>{console.log("data",data)}}</Context.Consumer>
  ```
- contextType
  
- hook useContext()