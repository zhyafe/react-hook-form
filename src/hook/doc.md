## hook

可以在函数组件中使用状态，生命周期。 有状态的函数组件

## 为什么使用 hook

class 的替代方案

- class 组件复用不方便
  hook 可以不改变组件结构的方式复用逻辑
- 组件拆分
  calss 组件会比较复杂，难以拆分。hook 可以把相关联的部分拆分成更小的函数
- 不易理解，性能
  this 指向不明确

hook 可以在函数组件中使用 class 特性, hook+函数组件替代 class

## 使用规则

在**函数组件或自定义组件**，**最外部**调用

自定义组件命名推荐以 use 开头

## 内置 hook 通过 hook 钩如 class 的特性

### state hook 钩入 state 特性

- 使用格式 const [count, setCount] = useState(0);
- 多个 useState()会有自己的数据存储位置
  每个组件内部都有一个列表数据格式，每当调用一次 useState()就会获取对应位置数据，并将指针向后移动一位
- 如果调用 setSate() useState 会返回新的 state, 如果没有调用 setState useState 会返回原先的值
