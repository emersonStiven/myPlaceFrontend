import React from "react";
import { Day } from "./Day";
import "../header/header.css"

export const YearMonth = ({ date }) => {
  let currentDate = new Date();
  let currentDay = 0;
  if (
    currentDate.getFullYear() === date.getFullYear() &&
    currentDate.getMonth() === date.getMonth()
  ) {
    currentDay = currentDate.getDate();
  }

  const monthsDays = {
    0: { month: "Enero", days: 31 },
    1: { month: "Febrero", days: 0 },
    2: { month: "Marzo", days: 31 },
    3: { month: "Abril", days: 30 },
    4: { month: "Mayo", days: 31 },
    5: { month: "Junio", days: 30 },
    6: { month: "Julio", days: 31 },
    7: { month: "Agosto", days: 31 },
    8: { month: "Septiembre", days: 30 },
    9: { month: "Octubre", days: 31 },
    10: { month: "Noviembre", days: 30 },
    11: { month: "Diciembre", days: 31 },
  };

  monthsDays[1].days = isLeap(date.getFullYear());

  let year = date.getFullYear();
  let month = monthsDays[date.getMonth()].month;
  let daysInMonth = monthsDays[date.getMonth()].days;
  let storeDays = [];

  let temp = date;
  temp.setDate(1);
  for (let x = 0; x < temp.getDay(); x++) {
    storeDays.push(<Day style={"null-day"} day={null} date={date} />);
  }
  for (let i = 1; i <= daysInMonth; i++) {
    if (i < currentDay) {
      storeDays.push(<Day style={"past-days"} day={i} date={date} />);
    } else {
      storeDays.push(<Day style={"days"} day={i} date={date} />);
    }
  }

  return (
    <>
      <div className="top-header-year-month">
        <span>{month}</span>
        <span>{year}</span>
      </div>

      <div className="container-days">
        <h5>Do</h5>
        <h5>Lu</h5>
        <h5>Ma</h5>
        <h5>Mi</h5>
        <h5>Ju</h5>
        <h5>Vi</h5>
        <h5>Sa</h5>
        {storeDays}
      </div>
    </>
  );
};

function isLeap(year) {
  //a leap year has 366 days
  if (year % 4 === 0) {
    //a non leap year has 355 days
    if (year % 100 === 0 && year % 400 !== 0) {
      return 28;
    }
    return 29;
  }
  return 28;
}
