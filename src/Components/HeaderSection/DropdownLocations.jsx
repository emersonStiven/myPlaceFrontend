import react from "react";
import { LocationItem } from "./LocationItem";
import "./header.css"

export const DropDownLocations = ({ geoInfo, criteria }) => {
  return (
    <div className="filter-location">
      {criteria != "" &&
        geoInfo.destinations.map((elem) => {
          let mainString = (elem.stateName + " " + elem.cityName)
            .toLowerCase()
            .trim();
          if (mainString.includes(criteria) && criteria !== "") {
            return <LocationItem msg={elem.stateName + " " + elem.cityName} />;
          }
        })}

      {criteria === "" && (
        <div>
          <div className="popular-destinies">
            <span>Destinos populares</span>
          </div>
          {geoInfo.popularDestinations.map((elem) => (
            <LocationItem msg={elem.stateName + " " + elem.cityName} />
          ))}
        </div>
      )}
    </div>
  );
};
