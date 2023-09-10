import react from "react";
import { LocationItem } from "./LocationItem";

const temporaryPopularPlaces = [
  {
    id:1,
    stateName:"Bolivar",
    cityName:"Cartagena"
  },
  {
    id:1,
    stateName:"Cundinamarca",
    cityName:"Bogota"
  },
  {
    id:1,
    stateName:"Antioquia",
    cityName:"Medellin"
  },
  {
    id:1,
    stateName:"Caqueta",
    cityName:"Florencia"
  },
  {
    id:1,
    stateName:"Huila",
    cityName:"Neiva"
  }
]

export const DropDownLocations = ({
  geoInfo,
  popularPlaces,
  locationResults,
  criteria,
}) => {
  return (
    <div className="filter-location">
        
      {locationResults &&
        geoInfo.map((elem) => {
          let mainString = (elem.stateName + " " + elem.cityName)
            .toLowerCase()
            .trim();
          if (mainString.includes(criteria) && criteria !== "") {
            return <LocationItem msg={elem.stateName + " " + elem.cityName} />;
          }
        })}

      {popularPlaces &&
       <>

        <div className="popular-destinies"><span>Destinos populares</span></div>
        {temporaryPopularPlaces.map(elem => <LocationItem msg={elem.stateName + " " + elem.cityName}/>)}
        
      </>}
    </div>
  );
};










