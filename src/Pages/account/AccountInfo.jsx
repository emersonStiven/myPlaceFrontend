import React, { useContext, createContext } from "react";
import { Link } from "react-router-dom";
import { accountInfoData } from "../../data/AccountInfoData";
import { accountHints } from "../../data/AccountInfoData";
import { Hints } from "../../components/account/accountInfo/Hints";
import { LevelContext } from "../../hooks/LevelContext";
import { LegalName } from "../../components/account/accountInfo/LegalName";
import { Email } from "../../components/account/accountInfo/Email";
import { Address } from "../../components/account/accountInfo/Address";
import { EmergencyContact } from "../../components/account/accountInfo/EmergencyContact";
import { Identity } from "../../components/account/accountInfo/Identity";
import { PhoneNumbers } from "../../components/account/accountInfo/PhoneNumbers";

export const AccountInfo = () => {
  const user = {
    //we assume it was fetched
    firstName: "Emerson",
    lastName: "Tavera",
    email: "emersonstiven1@gmail.com",
    address: "",
    emergencyContact: "",
    identity: false,
    numbers: ["3163399196","3204190611"],
  };



  const hints = accountHints.map((elem) => (
    <Hints title={elem.title} desc={elem.desc} />
  ));

  return (
    <main className="account-info-container">
      <div>
        <div>
          <div className="header-info-section">
            <nav>
              <Link to=".." className="nav-title">
                Cuenta
              </Link>
              <span> &gt; </span>
              <span>Información personal</span>
            </nav>
            <div>
              <h2>Información personal</h2>
            </div>
          </div>
          <LevelContext.Provider value={user}>
            <LegalName/>
            <Email/>
            <PhoneNumbers/>
            <Identity/>
            <Address/>
            <EmergencyContact />
          </LevelContext.Provider>
        </div>
      </div>

      <div className="update-info-section">
        <div className="hints-container">{hints}</div>
      </div>
    </main>
  );
};
