import React from "react";
import "./accountinfo.css"

export const Hints = ({title, desc}) => {
  return (
    <div className="hints-card">
      <h3>{title}</h3>
      <p>
        {desc}
      </p>
    </div>
  );
};
