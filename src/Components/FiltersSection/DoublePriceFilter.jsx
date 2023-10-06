import React, { useState } from "react";
import "./lefthandfilters.css";
import { HideShowButton } from "./HideShowButton";

export const DoublePriceFilter = ({ visible, setVisible }) => {
  const [ranges, setRanges] = useState({ range1: 30, range2: 70 });

  const handleRange = (e) => {
    if (e.target.name === "range1") {
      if (e.target.value < ranges.range2 && e.target.value != e.target.max) {
        setRanges({
          ...ranges,
          [e.target.name]: e.target.value,
        });
      }
    } else if (e.target.name === "range2") {
      if (e.target.value > ranges.range1) {
        setRanges({
          ...ranges,
          [e.target.name]: e.target.value,
        });
      }
    }
  };

  return (
    <div className="container-filter">
      <div className="filter-category">
        <h3>Precio</h3>
        <HideShowButton
          isVisible={visible}
          setVisible={setVisible}
          label={"doublePrice"}
        />
      </div>

      {visible.doublePrice && (
        <div className="container-price">
          <div className="container-displayer">
            <input
              name="range1"
              className="price-displayer one"
              type="number"
              value={ranges.range1}
              onChange={(e) => handleRange(e)}
            />
            <input
              name="range2"
              className="price-displayer two"
              type="number"
              value={ranges.range2}
              onChange={(e) => handleRange(e)}
            />
          </div>

          <div className="ranges-slider-container">
            <div className="slider-track"></div>
            <input
              type="range"
              name="range1"
              id="slider-1"
              min={0}
              max={1000}
              value={ranges.range1}
              onChange={(e) => handleRange(e)}
              step={1}
            />

            <input
              type="range"
              name="range2"
              min={0}
              max={1000}
              value={ranges.range2}
              onChange={(e) => handleRange(e)}
              id="slider-2"
              step={1}
            />
          </div>

        </div>
      )}
    </div>
  );
};
