import React from "react";
import "./lefthandfilters.css";
import { HideShowButton } from "./HideShowButton";

export const PropertyType = ({ visible, setVisible }) => {
  return (
    <div className="container-filter">
      <div className="filter-category">
        <h3>Categoria</h3>
        <HideShowButton
          isVisible={visible}
          setVisible={setVisible}
          label={"propertyType"}
        />
      </div>

      {visible.propertyType && (
        <div className="type-of-facility">
          <div className="icon-container">
            <img src="src\assets\home\house.svg"></img>
            <span>Casa</span>
          </div>

          <div className="icon-container">
            <img src="src\assets\home\apartment.svg"></img>
            <span>Apartamento</span>
          </div>

          <div className="icon-container">
            <img src="src\assets\home\cabin.svg"></img>
            <span>Cabaña</span>
          </div>

          <div className="icon-container">
            <img src="src\assets\home\room.svg"></img>
            <span>Habitacion</span>
          </div>
        </div>
      )}
    </div>
  );
};
