import { useReducer, useState } from "react";
import "./styles.css";

const initialState = { count: 0 };

function reducer(state, action) {
  if (action.type === "increment") {
    return { count: state.count + action.payload };
  }
  if (action.type === "decrement") {
    return { count: state.count - action.payload };
  }
  if (action.type === "reset") {
    return { count: 0 };
  }
  return state;
}

const increment = { type: "increment", payload: 10 };
const decrement = { type: "decrement", payload: 5 };
const reset = { type: "reset" };

export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [number, setNumber] = useState(1);
  return (
    <div className="App">
      <h1>{state.count}</h1>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(Number(e.target.value))}
      />
      <button onClick={() => dispatch({ type: "increment", payload: number })}>
        Increment
      </button>
      <button onClick={() => dispatch({ type: "decrement", payload: 5 })}>
        Decrement
      </button>
      <button onClick={() => dispatch(reset)}>Reset</button>
    </div>
  );
}
