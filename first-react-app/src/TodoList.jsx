//import { TodoListItem } from "./TodoListItem";
import { TodoListItemClass } from "./TodoListItemClass";
export function TodoList() {
  return (
    <ul>
      {/* <TodoListItem isComplete={true}>reading</TodoListItem>
      <TodoListItem isComplete={false}>sleeping</TodoListItem>
      <TodoListItem isComplete={true}>coding</TodoListItem> */}
      <TodoListItemClass isComplete={false}>reading</TodoListItemClass>
      <TodoListItemClass isComplete>sleeping</TodoListItemClass>
      <TodoListItemClass isComplete={true}>coding</TodoListItemClass>
    </ul>
  );
}
