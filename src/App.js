import React, { useState } from "react";
import "./App.css";

function App() {
  const [char, setChar] = useState("A");

  const incrementChar = () => {
    setChar((prev) =>
      prev === "Z" ? "A" : String.fromCharCode(prev.charCodeAt(0) + 1)
    );
  };

  const decrementChar = () => {
    setChar((prev) =>
      prev === "A" ? "Z" : String.fromCharCode(prev.charCodeAt(0) - 1)
    );
  };

  const handleSet = (e) => {
    const input = e.target.value.toUpperCase();
    if (input >= "A" && input <= "Z") {
      setChar(input);
    }
  };

  const handleReset = () => {
    setChar("A");
  };

  return (
    <div className="container">
      <h1>Alphabet Changer</h1>
      <div className="display">{char}</div>
      <div className="buttons">
        <button onClick={decrementChar}>Decrement</button>
        <button onClick={incrementChar}>Increment</button>
        <button onClick={handleReset} className="reset-btn">Reset</button>
      </div>
      <input
        type="text"
        maxLength="1"
        onChange={handleSet}
        placeholder="Set (A-Z)"
      />
    </div>
  );
}

export default App;

