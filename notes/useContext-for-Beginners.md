# `useContext` for React Beginners

## What is `useContext`?

`useContext` 是 React 中的一个 Hook，它允许我们在组件之间**共享数据**，而不需要手动一层层传递 `props`。

你可以把它想象成一个“全局变量”，但它专门用于 React 组件之间的状态共享。

### 简单理解：
- 你创建一个“上下文”（Context），就像创建一个“广播站”。
- 在父组件中使用 `<Context.Provider>` 提供数据，就像这个广播站在“播放信息”。
- 子组件中使用 `useContext(Context)` 来接收这些信息，不管它嵌套得多深都可以直接拿到。

---

## Why do we need `useContext`?

在 React 中，父子组件通信通常是通过 `props` 实现的。但当你的组件层级很多时，层层传递 `props` 会变得很麻烦，这种现象叫做 **prop drilling**。

### 示例：
```jsx
// App.jsx
<ParentComponent user={user} />

// ParentComponent.jsx
<ChildComponent user={user} />

// ChildComponent.jsx
<MyComponent user={user} />

// MyComponent.jsx
<p>{user.name}</p>
```

> 每一层都要把 `user` 传下去，即使中间的组件根本不需要这个数据。

### 使用 `useContext` 后：
```jsx
// 创建 Context
const UserContext = createContext();

// 在最外层提供数据
<UserContext.Provider value={user}>
  <ParentComponent />
</UserContext.Provider>

// 在任意子组件中直接获取
const user = useContext(UserContext);
```

这样就不再需要手动一层层传递 props。

---

## When should I use `useContext`?

### ✅ 适用场景：

| 场景 | 描述 |
|------|------|
| 主题切换 | 如暗黑模式、亮白模式 |
| 用户登录状态 | 用户信息在整个应用中都需要访问 |
| 多语言支持（i18n） | 需要根据用户选择的语言动态切换文本 |
| UI 状态管理 | 如侧边栏展开/收起、加载状态等全局状态 |

### ❌ 不适合的场景：

- 数据只在一个组件内部使用 → 直接用 `useState`
- 数据变化非常频繁且仅影响局部 → 用 props 更直观

---

## 总结：一句话记住 `useContext`

> **`useContext` 让我们可以跨层级读取和更新共享的状态，避免了繁琐的 props 传递。**

---

