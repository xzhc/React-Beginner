## What is `useReducer` in React?

`useReducer` is a React hook used for managing state in functional components. It is similar to `useState`, but is designed for situations where state logic is more complex or involves multi sub-values. The hook follows a reducer pattern: you provide a reducer function and an initial state, and React returns the currrent state along with a `dispatch` function to trigger state changes through actions.

The basic usage is:

```javascript
const [state, dispatch] = useReducer(reducer, initialState);
```

- `reducer`is a function that takes the current state and an action, and returns a new state.
- `dispatch` is a function you call with an action object to update the state.

## Why and When Do We Need `useReducer`?

**Typical application scenaarios for `useReducer`**:

- Complex state logic: When state transitions are complex, involve multiple sub-values, or depend on the previous state, useReducer provides a more structured approach than multiple useState calls.
- State objects or arrays: If your state is an object or array with interdependent fields, managing them together via a reducer is more maintainable.
- Multiple actions/types: When state changes are triggered by different types of actions or events, useReducer helps centralize logic and avoid scattered state updates.
- Predictable state transitions: Reducers make it easier to reason about how state changes in response to actions, leading to more predictable and debuggable code.
- Avoiding prop drilling: The dispatch function can be passed down to deeply nested components, avoiding the need to pass multiple state updater functions.

**Examples of use cases:**

- Forms with multiple fields and validation
- Todo lists (adding, removing, toggling items)
- Complex UI controls (like tabs, accordions, or modals with multiple states)
- State that needs to be reset or initialized based on certain actions

## Why Not Just Use `useState`?

While `usetate` is prefect for simple, independent state variables, it becomes unwieldy when:

- You have multiple related pieces of state that must be updated together
- State transitions are complex or depend on previous state
- You want to centralize and structure your state logic for clarity and maintainability

| Feature/Scenario                | useState                         | useReducer                      |
| :------------------------------ | :------------------------------- | :------------------------------ |
| Simple, independent state       | Preferred                        | Possible, but overkill          |
| Complex state logic             | Harder to manage                 | Preferred                       |
| Multiple related state fields   | Tedious with many useState calls | Manageable in a single reducer  |
| State depends on previous state | Can be error-prone               | Built-in to reducer pattern     |
| Centralized update logic        | Scattered across handlers        | Centralized in reducer function |

## Summary

- `useReducer` is a React Hook for managing complex or interrelated state logic in functional components.
- It is best used when state logic is complex, involves multiple actions, or when state updates depend on previous state.
- It helps centralize and structure state management, making code more predictable and maintainable compared to using multiple `useState` hooks.
