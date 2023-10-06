import React from "react";
import "./login.css"

export const CodeVerification = ({setNext, form, handleForm}) => {
  return (
    <div>
      <h2>Security</h2>
      <label htmlFor="verification">Verificacion de email</label>
      <input type="text" name="verification" value={form.code} onChange={(ev)=> handleForm(ev)} />
      <span>Ingresa el codigo de 6 digitos enviado a ------</span>
      <button>Enviar</button>
      <span>Cambiar a otro metodo de verificacion</span>
    </div>
  );
};
