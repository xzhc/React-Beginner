# Advanced Todo List - Features and React Concepts

## 1. Feature: Todo Management System
### React Concepts Used:
- **useReducer**: For managing complex state logic related to todo operations (add, toggle, delete, update)
- **localStorage**: For persisting todos between sessions
- **Context API**: For sharing todo state and functions across components without prop drilling

### Why Used?
- `useReducer` provides a more organized way to handle multiple sub-values and complex state transitions
- `localStorage` ensures data persistence across page reloads
- Context API simplifies state sharing across component tree

### How Used?
- Created a reducer function to handle different todo actions
- Used `useReducer` with an initial value from localStorage
- Created a TodoContext to provide/todo values to child components

## 2. Feature: Todo Creation
### React Concepts Used:
- **useRef**: To access input DOM element directly
- **Context API**: To consume todo dispatch function

### Why Used?
- `useRef` allows direct access to DOM elements for form inputs
- Context API enables accessing todo functions without prop drilling

### How Used?
- Created a NewTodoForm component that uses useRef for input reference
- Accessed addNewTodo function from TodoContext
- Dispatches ADD action when form is submitted

## 3. Feature: Todo Filtering
### React Concepts Used:
- **useState**: To manage filter state (text and completed visibility)
- Props Passing: To pass filter state and setters to child components

### Why Used?
- `useState` provides a simple way to track filter state changes
- Props passing enables parent-child communication for filter updates

### How Used?
- Created filterName and hideCompletedFilter state in App component
- Passed these states and their setters as props to TodoFilterForm
- Applied filtering logic based on these states

## 4. Feature: Todo Item Operations
### React Concepts Used:
- **useState**: To manage editing state for individual todos
- **useRef**: To access input DOM element during editing
- Context API: To access todo functions in deeply nested components

### Why Used?
- `useState` tracks whether a todo is in editing mode
- `useRef` provides access to input value during edit submission
- Context API enables direct access to todo functions without prop drilling

### How Used?
- Created TodoItem component that uses useState for editing state
- Used useRef to access edited todo name during form submission
- Accessed toggleTodo, deleteTodo, and updateTodo functions from TodoContext

## 5. Feature: Data Persistence
### React Concepts Used:
- **useEffect**: To sync state with localStorage
- **JSON.stringify/parse**: To convert between JavaScript objects and JSON strings

### Why Used?
- `useEffect` enables side effects like localStorage updates
- JSON conversion ensures proper serialization/deserialization

### How Used?
- Added useEffect to save todos to localStorage whenever they change
- Used JSON.stringify to convert todos to string before storage
- Parsed stored value during initial state setup

## 6. Feature: Component Composition
### React Concepts Used:
- Component Splitting: Breaking UI into reusable components
- Props Passing: Communicating between parent and child components

### Why Used?
- Component splitting promotes reusability and maintainability
- Props passing enables flexible parent-child communication

### How Used?
- Split UI into App, TodoItemList, TodoItem, NewTodoForm, and TodoFilterForm components
- Passed necessary props between components for functionality