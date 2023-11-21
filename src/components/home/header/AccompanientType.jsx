import React, { useState } from "react";

export const AccompanientType = ({ type }) => {
  const [counter, setCounter] = useState(type === "Adultos" ? 1 : 0);
  const handleIncrement = () => {
    setCounter((prev) => {
      if (prev === 30) {
        return prev;
      } else {
        return prev + 1;
      }
    });
  };
  const handleDecrement = () => {
    setCounter((prev) => {
      if (prev !== 0) {
        return prev - 1;
      } else {
        return prev;
      }
    });
  };

  return (
    <div className="guest-type-container">
      <div>
        <span className="type-guest">{type}</span>
      </div>

      <div>
        <button onClick={handleDecrement} className="minus-picker">
          -
        </button>

        <span>{counter}</span>

        <button onClick={handleIncrement} className="plus-picker">
          +
        </button>
      </div>
    </div>
  );
};
