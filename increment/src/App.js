import React, { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div
      className="lala"
      style={{
        border: "2px solid red",
        backgroundColor: "antiquewhite",
        marginTop: "16%",
        marginLeft: "35%",
        width: "400px",
        height: "150px",
        textAlign: "center",
      }}
    >
      <h1 style={{ backgroundColor: "orange", textAlign: "center" }}>
        {count}
      </h1>
      <button
        onClick={decrement}
        style={{
          backgroundColor: "red",
          color: "white",
          margin: "10px",
        }}
      >
        Decrement
      </button>
      <button
        onClick={increment}
        style={{
          backgroundColor: "green",
          color: "white",
          margin: "10px",
        }}
      >
        Increment
      </button>
    </div>
  );
}

export default App;
