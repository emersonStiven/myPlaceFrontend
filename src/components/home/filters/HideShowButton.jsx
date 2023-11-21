import React from "react";

export const HideShowButton = ({ isVisible, setVisible, label }) => {
  return (
    <div
      className="container-h-s"
      onClick={(e) => {
        e.stopPropagation();
        setVisible((prev) => {
          let temp = prev[label];
          return {
            ...prev,
            [label]: !temp,
          };
        });
      }}
    >
      <span>{isVisible[label] ? "Recoger" : "Expandir"}</span>
      <div>
        <img
          src={
            isVisible[label]
              ? "src/assets/home/up-arrow.svg"
              : "src/assets/home/down-arrow.svg"
          }
          className={
            isVisible ? "icon-filter-section-show" : "icon-filter-section-hide"
          }
        ></img>
      </div>
    </div>
  );
};
// className={
//   isVisible
//     ? "icon-filter-section-show"
//     : "icon-filter-section-hide"
// }
