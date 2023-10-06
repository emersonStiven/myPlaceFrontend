import React from "react";
import "./login.css"

export const PasswordVerification = ({setNext, form, handleForm}) => {
  return (
    <div>
      <h2>Bienvenido de vuelta -----</h2>
      <label htmlFor="password">Password</label>
      <input
        name="password"
        type="password"
        placeholder="Ingresa tu contraseña"
        value={form.password}
        onChange={(ev)=> handleForm(ev)}
      />
    </div>
  );
};
