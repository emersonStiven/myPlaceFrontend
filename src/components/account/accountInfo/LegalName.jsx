import React, { useState, useContext } from "react";
import "./accountinfo.css";
import {LevelContext} from "../../../hooks/LevelContext";


export const LegalName = ({ data }) => {

  const user = useContext(LevelContext);

  const [form, setForm] = useState({
    firstName:user.firstName,
    lastName:user.lastName
  });
  const [show, setShow] = useState(false);

  const handleForm = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      <div className="edit-container">
        <div className="description-container">
          <h3>Nombre legal</h3>
          <span>{ user.firstName + " " + user.lastName}</span>
        </div>
        <div className="edit-button">
          <button onClick={()=> setShow(e => !e)}> {data == "" ? "Agregar" : "Editar"} </button>
        </div>
      </div>

      {show && (
        <div>
          <div>
            <form>
              <input
                type="text"
                name="firstName"
                value={form.firstName}
                onChange={(e) => handleForm(e)}
              />
              <input
                type="text"
                name="lastName"
                value={form.lastName}
                onChange={(e) => handleForm(e)}
              />
            </form>
          </div>
          <div>
            <button type="submit">Guardar</button>
          </div>
        </div>
      )}
    </div>
  );
};
