import React from "react";
import { Link } from "react-router-dom";
import "../../pages/account/account.css";

export const AccountCard = ({ title, goTo, desc, icon }) => {
  return (
    <div className="card">
      <Link to={goTo}>
        <div className="card-container" >
          <div className="icon-card">
            <img src={icon} alt={title} />
          </div>

          <div className="details-card">
            <h3>{title}</h3>
            <span>{desc}</span>
          </div>
        </div>
      </Link>
    </div>
  );
};
