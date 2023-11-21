import React, { useState, useContext } from "react";
import "./accountinfo.css";
import { LevelContext } from "../../../hooks/LevelContext";

export const Email = ({ data }) => {
  const user = useContext(LevelContext);

  const [email, setEmail] = useState("");
  const [show, setShow] = useState(false);
  return (
    <div>
      <div className="edit-container">
        <div className="description-container">
          <h3>Dirección de correo electronico</h3>
          <span>{user.email !== "" ? user.email : "No proporcionado"}</span>
        </div>
        <div className="edit-button">
          <button onClick={() => setShow((e) => !e)}>
            {" "}
            {user.email == "" ? "Agregar" : "Editar"}{" "}
          </button>
        </div>
      </div>
      {show && (
        <div>
          <div>
            <form>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </form>
          </div>
          <div>
            <button>Guardar</button>
          </div>
        </div>
      )}
    </div>
  );
};
