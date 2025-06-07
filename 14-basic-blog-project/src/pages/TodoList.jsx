import { getTodos } from "@/api/todos";
import { TodoItem } from "@/components/TodoItem";
import { useLoaderData } from "react-router-dom";

function TodoList() {
  const todos = useLoaderData();
  return (
    <>
      <h1 class="page-title">Todos</h1>
      <ul>
        {todos.map((todo) => {
          return <TodoItem key={todo.id} {...todo} />;
        })}
      </ul>
    </>
  );
}

function loader({ request: { signal } }) {
  return getTodos({ signal });
}

export const todoListRoute = {
  loader,
  element: <TodoList />,
};
