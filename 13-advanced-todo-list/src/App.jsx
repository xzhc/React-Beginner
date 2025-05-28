import { useState, useEffect, useReducer } from "react";
import { TodoContext } from "./TodoContext";
import "./styles.css";
import { NewTodoForm } from "./NewTodoForm";
import { TodoItemList } from "./TodoItemList";
import { TodoFilterForm } from "./TodoFilterForm";

const LOCAL_STORAGE_KEY = "TODOS";

const ACTION = {
  ADD: "add",
  TOGGLE: "toggle",
  DELETE: "delete",
  UPDATE: "update",
};

function reducer(todos, { type, payload }) {
  switch (type) {
    case ACTION.ADD:
      return [
        ...todos,
        {
          name: payload.name,
          id: crypto.randomUUID(),
          completed: false,
        },
      ];

    case ACTION.TOGGLE:
      return todos.map((todo) => {
        if (todo.id === payload.id) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      });

    case ACTION.DELETE:
      return todos.filter((todo) => todo.id !== payload.id);

    case ACTION.UPDATE:
      return todos.map((todo) => {
        if (todo.id === payload.id) {
          return {
            ...todo,
            name: payload.name,
          };
        }
        return todo;
      });
  }
}

function App() {
  //const [todos, setTodos] = useState([]);
  const [todos, dispatch] = useReducer(reducer, [], (initialValue) => {
    const value = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (value == null) {
      return initialValue;
    }
    return JSON.parse(value);
  });
  const [filterName, setFilterName] = useState("");
  const [hideCompletedFilter, setHideCompletedFilter] = useState(false);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
  }, [todos]);

  const filterTodos = todos.filter((todo) => {
    if (hideCompletedFilter && todo.completed) {
      return false;
    }
    return todo.name.includes(filterName);
  });

  function addNewTodo(name) {
    dispatch({ type: ACTION.ADD, payload: { name } });
  }
  function toggleTodo(id) {
    dispatch({ type: ACTION.TOGGLE, payload: { id } });
  }
  function deleteTodo(id) {
    dispatch({ type: ACTION.DELETE, payload: { id } });
  }
  function updateTodo(id, name) {
    dispatch({ type: ACTION.UPDATE, payload: { id, name } });
  }

  return (
    <TodoContext.Provider
      value={{
        todos: filterTodos,
        addNewTodo,
        toggleTodo,
        deleteTodo,
        updateTodo,
      }}
    >
      <TodoFilterForm
        filterName={filterName}
        setFilterName={setFilterName}
        hideCompletedFilter={hideCompletedFilter}
        setHideCompletedFilter={setHideCompletedFilter}
      />
      <TodoItemList />
      <NewTodoForm />
    </TodoContext.Provider>
  );
}

export default App;
