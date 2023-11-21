import React from "react";
import { accountSettingData } from "../../data/AccountSettingData";
import { AccountCard } from "../../components/account/AccountCard";
import "./account.css";
import { useState } from "react";

export const AccountSettings = () => {
  const [name, setName] = useState("Emerson");

  const cards = accountSettingData.map((elem) => {
    return (
      <AccountCard
        goTo={elem.goTo}
        desc={elem.description}
        title={elem.title}
        icon={elem.icon}
      />
    );
  });

  return (
    <div className="account-container">
      <div className="user-preview">
        <h2>Hola {name}</h2>
      </div>
      {cards}
    </div>
  );
};
