import React, { useState, useReducer } from "react";
import { YearMonth } from "./YearMonth";
import "../HeaderSection/header.css"

export const Calendar = () => {
  let firstDate = new Date();
  let secondDate = new Date(firstDate.getFullYear(), firstDate.getMonth() + 1);

  const [dates, setDates] = useState([
    <YearMonth date={firstDate} />,
    <YearMonth date={secondDate} />,
  ]);
  const [counter, setCounter] = useState(0);

  const handleOnClick = (num) => {
    setCounter((prev) => {
      if (prev === 0 && num === -1) {
        return prev;
      } else {
        return prev + num;
      }
    });

    setDates((prev) => {
      if (counter === prev.length-2 ) {
        let lastDate = prev.at(prev.length - 1).props.date;
        if (lastDate.getMonth() == 12) {
          return [
            ...prev,
            <YearMonth date={new Date(lastDate.getFullYear() + 1, 0)} />,
          ];
        }
        return [
          ...prev,
          <YearMonth
            date={new Date(lastDate.getFullYear(), lastDate.getMonth() + 1)}
          />,
        ];
      }
      return prev;
    });
  };

  return (
    <div className="calendar">
      <div className="calendar-container">
        <div className="first-panel">
          {counter > 0 && (
            <div>
              <button
                className="left-arrow"
                onClick={() => handleOnClick(-1)}
              ></button>
            </div>
          )}
          <div className="first-calendar">{dates[counter]}</div>
        </div>

        <div className="second-panel">
          <div className="second-calendar">{dates[counter + 1]}</div>
          <div>
            <button
              className="right-arrow"
              onClick={() => handleOnClick(1)}
            ></button>
          </div>
        </div>
      </div>
    </div>
  );
};
