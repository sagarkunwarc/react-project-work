import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>{count}</h1>
      <div className="card">
        <button
          onClick={() => setCount((count) => count - 1)}
          style={{ background: "red" }}
        >
          Decrement
        </button>
        <button onClick={() => setCount(() => 0)}>Count</button>
        <button
          onClick={() => setCount((count) => count + 1)}
          style={{ background: "green" }}
        >
          Increment
        </button>
      </div>
    </>
  );
}

export default App;
