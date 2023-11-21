import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./accountinfo.css";
import { LevelContext } from "../../../hooks/LevelContext";

export const Identity = () => {
  let user = useContext(LevelContext);
  const handleAddButton = () => {
    setShow((e) => !e);
  };

  return (
    <div className="edit-container">
      <div className="description-container">
        <h3>Documento oficial de identidad</h3>
        <span>
          {user.identity ? (
            <span>Usuario verificado &#10003;</span>
          ) : (
            "No proporcionado"
          )}
        </span>
      </div>
      <div className="edit-button">
        <Link to="verification">
          <button>{user.identity ? "Editar" : "Agregar"} </button>
        </Link>
      </div>
    </div>
  );
};
