import { getTodos } from "../api/todo";
import { useLoaderData } from "react-router-dom";
import { TodoItem } from "../components/TodoItem";
function loader({ request: { signal } }) {
  return getTodos({ signal });
}

function TodoList() {
  const todos = useLoaderData();
  return (
    <>
      <h1 className="page-title">Todos</h1>
      <ul>
        {todos.map((todo) => {
          return <TodoItem key={todo.id} {...todo} />;
        })}
      </ul>
    </>
  );
}

export const todoListRoute = {
  loader,
  element: <TodoList />,
};
