import { useState } from "react";

export const App = () => {
  const [count, setCount] = useState(0); // [stateVariable, setterFunction]

  const handleButtonClick = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h1>First Try</h1>
      <div>Wacky, wild stuff</div>
      <button className="btn-secondary" onClick={handleButtonClick}>
        Click Me!
      </button>
      <div>Count: {count}</div>
    </div>
  );
};
