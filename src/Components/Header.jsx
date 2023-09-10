import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../index.css";
import { fetchGeographicLocations } from "../helper/helperFunctions";
import "../index.css";
import { DropDownLocations } from "./DropdownLocations";
import { Calendar } from "./CalendarFolder/Calendar";

export const Header = () => {
  const [geographicInfo, setGeographicInfo] = useState([]);
  const [filterCriteria, setFilterCriteria] = useState("");
  const [showLocationResults, setShowLocationResults] = useState(false);
  const [showPopularPlaces, setShowPopularPlaces] = useState(false);
  const [showCalendar, setShowCalendar] = useState(false);

  useEffect(() => {
    const receiver = async () => {
      const res = await fetchGeographicLocations(
        "http://localhost:8082/geographyInfo"
      );
      setGeographicInfo(res);
    };
    receiver();
  }, []);

  const handleInputFilterChange = (eve) => {
    console.log("evento input");
    setFilterCriteria(eve.target.value.toLowerCase());
    setShowLocationResults(true);
    if (filterCriteria === "") setShowPopularPlaces(true);
  };

  const handleFocusEvent = () => {
    if (filterCriteria === "") {
      setShowPopularPlaces(true);
    } else {
      setShowLocationResults(true);
    }
  };
  const handleOnBlur = () => {
    setShowLocationResults(false);
    setShowPopularPlaces(false);
  };

  return (
    <section className="top-container">
      <header className="showcase">
        <img className="logo" src="/src/assets/myPlaceLogo.png" alt="logo" />
      </header>

      <div className="searchLocation">
        <div>
          <span className="icon-filter"></span>
          <input
            type="text"
            id="input-location"
            autoComplete="off"
            value={filterCriteria}
            placeholder="¿A dónde vas?"
            onChange={(eve) => handleInputFilterChange(eve)}
            onFocus={() => handleFocusEvent()}
            onBlur={() => handleOnBlur()}
          />
          <DropDownLocations
            popularPlaces={showPopularPlaces}
            locationResults={showLocationResults}
            geoInfo={geographicInfo}
            criteria={filterCriteria}
          />
        </div>

        <div className="calendar-dates">
          <span className="calendar-icon"></span>
          <div>
            <button
              className="when-travel"
              onClick={() => setShowCalendar((prev) => !prev)}
            >
              Cuando quieres viajar?
            </button>
          </div>

          {showCalendar && <Calendar />}
        </div>
      </div>

      <div className="account">
        <nav className="nav-options">
          <Link to={"/hosting"}>Modo Antitrion</Link>
          <div>boton/fotoP/nombre</div>
        </nav>
      </div>
    </section>
  );
};
