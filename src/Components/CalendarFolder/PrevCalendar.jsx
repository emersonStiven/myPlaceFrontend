import React, {useState, useEffect} from 'react'

import { Day } from "./Day";

export const PrevCalendar = ({
  year,
  monthh,
  handleSetDay,
  firstDay,
  secondDay,
}) => {
  const [days, setDays] = useState(monthh);
  const [arrayDays, setArrayDays] = useState([]);

  useEffect(() => {
    const numberOfDays = {
      0: 31,
      1: 0,
      2: 31,
      3: 30,
      4: 31,
      5: 30,
      6: 31,
      7: 31,
      8: 30,
      9: 31,
      10: 30,
      11: 31,
    };
    if (isLeap(year)) {
      numberOfDays[1] = 29;
    } else {
      numberOfDays[1] = 28;
    }
    for (let val = 0; val < 12; val++) {
      if (val === monthh) {
        setDays(numberOfDays[val]);
      }
    }
    const arr = [];
    for (let i = 0; i < days; i++) {
      arr.push(i + 1);
    }
    setArrayDays(arr);
  }, [days]);

  return (
    <div className="calendar-month">
      <h5>Dom.</h5>
      <h5>Lun.</h5>
      <h5>Mar.</h5>
      <h5>Mie.</h5>
      <h5>Jue.</h5>
      <h5>Vie.</h5>
      <h5>Sab.</h5>
      {arrayDays.map((elem) => {
        return (
          <Day
            dayNum={elem}
            setDay={handleSetDay}
            firstDay={firstDay}
            secondDay={secondDay}
          />
        );
      })}
    </div>
  );
};

function isLeap(year) {
  //a leap year has 366 days
  //a non leap year has 355 days
  if (year % 4 === 0) {
    if (year % 100 === 0 && year % 400 !== 0) {
      return false;
    }
    return true;
  }
  return false;
}