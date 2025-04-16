// import { TodoList } from "./TodoList";
import { TodoListClass } from "./TodoListClass";
import { MyName } from "./MyName";
import { MyNameClass } from "./MyNameClass";

function App() {
  return (
    <div>
      <h1>Todo List</h1>
      {/* <TodoList /> */}
      <TodoListClass />
      {/* <MyName /> */}
      <MyNameClass />
    </div>
  );
}

export default App;

// Create a component that renders and H1 with your name in it.
// Create a component that renders a TodoListClass.
