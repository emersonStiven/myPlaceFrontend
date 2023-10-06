import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./header.css";
import { fetchGeographicLocations } from "../../helper/helperFunctions";
import { NotLoggedInOptions } from "./NotLoggedInOptions";
import { LoggedInOptions } from "./LoggedInOptions";
import { FilterCategory } from "./FilterCategory";
import { RegisterModal } from "../../Modals/RegisterModal";
import { useModal } from "../../Modals/useModal";

export const Header = () => {
  const [geographicInfo, setGeographicInfo] = useState([]);
  const [visible, setVisible] = useState(0);
  const [authorized, setAuthorized] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [isOpen2, openModal2, closeModal2] = useModal(false);

  useEffect(() => {
    const receiver = async () => {
      const res = await fetchGeographicLocations(
        "http://localhost:8082/geographyInfo"
      );
      setGeographicInfo(res);
    };
    receiver();
  }, []);

  const renderAccountDropDown = () => {
    if (showLogin) {
      if (authorized) {
        return <LoggedInOptions />;
      } else {
        return <NotLoggedInOptions setShowLogin={setShowLogin} />;
      }
    }
  };

  return (
    <section className="top-container">
      <header>
        <img className="logo" src="/src/assets/myPlaceLogo.png" alt="logo" />
      </header>

      <FilterCategory
        geoInfo={geographicInfo}
        visible={visible}
        setVisible={setVisible}
      />

      <div className="account">
        <div className="container-account">
          <Link to={"/hosting"}>Become a host</Link>
          <div>
            <button
              className="login-register"
              onClick={() => setShowLogin((prev) => !prev)}
            >
              Log in
            </button>
          </div>
          <div>
            <button
              className="login-register"
              onClick={openModal2}
            >
              Register
            </button>
          </div>
          {renderAccountDropDown()}
        </div>
        <RegisterModal isOpen={isOpen2} closeModal={closeModal2}/>
      </div>
    </section>
  );
};
