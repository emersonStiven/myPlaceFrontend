import React, { useState } from "react";
import { Calendar } from "../calendario/Calendar";
import "./header.css";
import { AccompanientType } from "./AccompanientType";
import { DropDownLocations } from "./DropdownLocations";

export const FilterCategory = ({ geoInfo, visible, setVisible }) => {
  const [criteria, setCriteria] = useState("");
  return (
    <div className="searchLocation">
      <div>
        <span className="icon-filter"></span>
        <input
          type="text"
          id="input-location"
          autoComplete="off"
          value={criteria}
          placeholder="¿A dónde vas?"
          onChange={(e) => setCriteria(e.target.value)}
          onFocus={() => setVisible(1)}
          onBlur={() => setVisible(0)}
        />
        {visible === 1 && (
          <DropDownLocations geoInfo={geoInfo} criteria={criteria} />
        )}
      </div>

      <div className="calendar-dates">
        <CategoryTitle num={2} setVisible={setVisible} />
        {visible === 2 && <Calendar />}
      </div>

      <div className="guests-picker">
        <CategoryTitle num={3} setVisible={setVisible} />
        {visible === 3 && (
          <div className="container-accompanients">
            <AccompanientType type={"Adultos"} />
            <AccompanientType type={"Niños"} />
            <AccompanientType type={"Mascotas"} />
          </div>
        )}
      </div>

      {visible != 0 && (
        <div>
          <button>Buscar</button>
        </div>
      )}
    </div>
  );
};

const CategoryTitle = ({ num, setVisible }) => {
  return (
    <div>
      <span className={num === 2 ? "calendar-icon" : "guests-icon"}></span>

      <button
        className="when-travel"
        onClick={() => {
          setVisible((prev) => {
            if (prev === num) {
              return 0;
            } else {
              return num;
            }
          });
        }}
      >
        ¿Cuándo viajas?
      </button>
    </div>
  );
};
