## React.memo() 进行渲染优化

入参：组件
返回值：组件
目的：优化组件渲染

当一个组件用 memo 包裹后，如果该组件父组件发生渲染，该组件的 props 没发生改变，则该组件不渲染

## React.cloneElement() 可修改 props.children

入参：(element,[props],[...children])
返回：元素

- props.children 如果是一个那么为一个对象
- props.children 如果是多个那么为一个数组
