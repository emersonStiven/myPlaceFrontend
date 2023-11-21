import React from 'react'
import "./accountinfo.css";

export const Address = ({desc,data}) => {
    return (
        <div className="edit-container">
          <div className="description-container">
            <h3>Dirección</h3>
            <span>{data !== "" ? data : "No proporcionado" }</span>
          </div>
          <div className="edit-button">
            <button> {data == "" ? "Agregar" : "Editar"} </button>
          </div>
        </div>
      );
}
