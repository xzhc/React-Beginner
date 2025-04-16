import { MyNameFunc } from "./MyNameFunc";
import { TodoList } from "./TodoList";
import { User } from "./User";
function App() {
  return (
    <div>
      {/* <MyNameFunc name="xzh" age={25} />
      <MyNameFunc name="xzh2" age={26} />
      <MyNameFunc name="xzh3" isProgrammer={true} /> */}
      {/* <MyNameFunc name="xzh4" isProgrammer /> */}
      {/* <MyNameFunc>itsxzh</MyNameFunc> */}

      {/* <TodoList /> */}
      <User name="xzh" age={25} />
    </div>
  );
}

export default App;
