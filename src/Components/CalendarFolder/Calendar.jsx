import React, { useState, useEffect } from "react";
import {MonthYear} from '../MonthYear';
import { PrevCalendar } from "./PrevCalendar";
import { NextCalendar } from "./NextCalendar";

export const Calendar = () => {

  const [year, setYear] = useState(new Date().getUTCFullYear());
  const [currentMonth, setCurrentMonth] = useState(new Date().getUTCMonth());
  const [firstDay, setFirstDay] = useState(-1);
  const [secondDay, setSecondDay] = useState(-1);

  const[datePrevMonth, setDatePrevMonth] = useState(new Date());
  const[dateNextMonth, setDateNextMonth] = useState(new Date());//I have to replace the Date object every time

  const handleSetDayForNextMonth = (dayNum) => {
    setDateNextMonth(prev =>{
      prev.setDate(dayNum);
    });
    console.log(dateNextMonth)
  };

  const handleSetDayPrevMonth = (dayNum) =>{
    setDatePrevMonth(prev => {
      prev.setDate(dayNum);
    });
    console.log(datePrevMonth)
  }

  return (
    <div className="calendar">

      <MonthYear year={year} month={currentMonth} num={1} >
        <PrevCalendar
          year={year}
          monthh={currentMonth}
          handleSetDay={handleSetDayPrevMonth}
          firstDay={firstDay}
          secondDay={secondDay}
        />
      </MonthYear>

      <MonthYear year={year} month={currentMonth+1} num={2}>
        <NextCalendar
          year={year}
          monthh={currentMonth+1}
          handleSetDay={handleSetDayForNextMonth}
          firstDay={firstDay}
          secondDay={secondDay}
        />
      </MonthYear>

    </div>
  );
};
