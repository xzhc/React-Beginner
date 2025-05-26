import { useReducer } from "react";

const ACTIONS = {
  INCREMENT: "increment",
  DECREMENT: "decrement",
  RESET: "reset",
  CHANGE_COUTNT: "change_count",
};
function counterReducer(state, action) {
  switch (action.type) {
    case ACTIONS.INCREMENT:
      return state + 1;
    case ACTIONS.DECREMENT:
      return state - 1;
    case ACTIONS.RESET:
      return 0;

    case ACTIONS.CHANGE_COUNT:
      return state + action.payload.value;
    default:
      return state;
  }
}
export function Counter() {
  //const [count, setCount] = useState(0);
  const [count, dispatch] = useReducer(counterReducer, 0);
  return (
    <>
      <h1>Counter: {count}</h1>
      <button onClick={() => dispatch({ type: ACTIONS.INCREMENT })}>
        Increment
      </button>
      <button onClick={() => dispatch({ type: ACTIONS.DECREMENT })}>
        Decrement
      </button>
      <button onClick={() => dispatch({ type: ACTIONS.RESET })}>Reset</button>

      <button
        onClick={() =>
          dispatch({ type: ACTIONS.CHANGE_COUNT, payload: { value: 5 } })
        }
      >
        Change Count
      </button>
    </>
  );
}
