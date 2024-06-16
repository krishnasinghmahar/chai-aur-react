import "./App.css";
import { useState } from "react";

function App() {
  let [counter, setCounter] = useState(5);

  const addValue = () => {
    if (counter >= 20) {
      return;
    }
    setCounter(++counter);
  };

  function removeValue() {
    if (counter <= 0) {
      return;
    }
    setCounter(--counter);
  }
  return (
    <>
      <h1>chai and react</h1>
      <h2>Counter Value: {counter}</h2>
      <button onClick={addValue}>Add Value</button>
      <button onClick={removeValue}>Remove Value</button>
    </>
  );
}

export default App;
