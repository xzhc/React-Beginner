import { useContext } from "react";
import { TodoItem } from "./TodoItem";
import { TodoContext } from "./TodoContext";
export function TodoItemList() {
  const { todos } = useContext(TodoContext);
  return (
    <ul id="list">
      {todos.map((todo) => (
        <TodoItem key={todo.id} {...todo} />
      ))}
    </ul>
  );
}
