import "./Counter.scss";
import { useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);

  const plus = () => {
    if (counter >= 0) setCounter(counter + 1);
  };

  const minus = () => {
    if (counter > 0) setCounter(counter - 1);
  };
  return (
    <div className="counter">
      <p className="counter__heading">Counter:</p>
      <p>{counter}</p>
      <button onClick={minus}>-</button>
      <button onClick={plus}>+</button>
    </div>
  );
};

export default Counter;
