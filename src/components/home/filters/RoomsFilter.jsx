import React from "react";
import { AccompanientType } from "../header/AccompanientType"
import "./lefthandfilters.css";
import { HideShowButton } from "./HideShowButton";

export const RoomsFilter = ({ visible, setVisible }) => {
  return (
    <div className="container-filter">
      <div className="filter-category">
        <h3>Habitaciones</h3>
        <HideShowButton
          isVisible={visible}
          setVisible={setVisible}
          label={"roomsFilter"}
        />
      </div>

      {visible.roomsFilter && (
        <div>
          <AccompanientType type={"Habitaciones"} />
          <AccompanientType type={"Camas"} />
          <AccompanientType type={"Baños"} />
        </div>
      )}
    </div>
  );
};
