import { useContext, useRef } from "react";
import { TodoContext } from "./TodoContext";

export function NewTodoForm() {
  //const [newTodoName, setNewTodoName] = useState("");
  const inputRef = useRef();
  const { addNewTodo } = useContext(TodoContext);

  function handleSubmit(e) {
    e.preventDefault();
    if (inputRef.current?.value === "") {
      return;
    }
    addNewTodo(inputRef.current.value);
    inputRef.current.value = "";
  }
  return (
    <form id="new-todo-form" onSubmit={handleSubmit}>
      <label htmlFor="todo-input">New Todo</label>
      <input type="text" id="todo-input" ref={inputRef} />
      <button>Add Todo</button>
    </form>
  );
}
