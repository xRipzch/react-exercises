import { useState } from "react";
import "../assets/css/state.css";

export default function StatePage() {
  return (
    <div className="container">
      <h1>State</h1>
      <p>
        State is used to manage data that changes over time. When the state
        changes, the component re-renders.
      </p>
      {/* TODO: RENDER THE STATE COMPONENT HERE */}
    </div>
  );
}

function StateComponent() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h3>{count}</h3>
      {/* TODO: ADD AN ONCLICK HANDLER TO THE BUTTON, THAT INCREMENTS THE COUNT */}
      <button>Increment</button>
      {/* TODO: ADD AN ONCLICK HANDLER TO THE BUTTON, THAT DECREMENTS THE COUNT */}
      <button>Decrement</button>
    </div>
  );
}
