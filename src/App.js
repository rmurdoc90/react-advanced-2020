import React, { useState } from "react";

function App() {
  const [counter, setCounter] = useState(0);

  function reset() {
    setCounter(0);
  }
  return (
    <div className="container">
      <h1>{counter}</h1>
      <button
        onClick={() => {
          setCounter(counter + 1);
        }}
      >
        {" "}
        increment
      </button>
      <button
        onClick={() => {
          setCounter(counter - 1);
        }}
      >
        {" "}
        decrement
      </button>
      <button onClick={reset}> reset</button>
    </div>
  );
}

export default App;
