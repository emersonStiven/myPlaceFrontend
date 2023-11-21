import React from 'react'
import "./accountinfo.css";

export const EmergencyContact = ({desc,data}) => {
    return (
        <div className="edit-container">
          <div className="description-container">
            <h3>Contacto en caso de emergencia</h3>
            <span>{data !== "" ? data : "No proporcionado" }</span>
          </div>
          <div className="edit-button">
            <button> {data == "" ? "Agregar" : "Editar"} </button>
          </div>
        </div>
      );
}
