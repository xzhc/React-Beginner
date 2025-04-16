//TodoListItem component
//Props: children = name, isComplete: boolean
//Check box (checked if isComplete)
//Label(children value)
export function TodoListItem({ children, isComplete }) {
  return (
    <label>
      <input type="checkbox" checked={isComplete} />
      {children}
    </label>
  );
}
