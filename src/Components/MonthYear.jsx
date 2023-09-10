import React from "react";
import "../index.css";

export const MonthYear = ({ children, year, month, num}) => {
  const monthTags = {
    0: "Enero",
    1: "Febrero",
    2: "Marzo",
    3: "Abril",
    4: "Mayo",
    5: "Junio",
    6: "Julio",
    7: "Agosto",
    8: "Septiembre",
    9: "Octubre",
    10: "Noviembre",
    11: "Diciembre",
  };
  return (
    <div className="month-year-container">

      <div className="month-year-tags">
        {num === 1 && <span className="prev-month"></span> }
        <span className="month-tag">{monthTags[month]}     </span>
        <span className="year-tag">{year}</span>
        {num === 2 && <span className="next-month"></span>}
      </div>

      {children}
    </div>
  );
};
