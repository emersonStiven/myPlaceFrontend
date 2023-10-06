import React from "react";
import "./login.css"

export const EmailVerification = ({form, handleForm}) => {
  return (
    <div className="container-email-vef">
      <h1>Log In</h1>
      <h4>Email</h4>
      <input
        type="text"
        name="email"
        placeholder="Ingresa tu correo"
        value={form.email}
        onChange={(ev)=> handleForm(ev)}
        autoComplete="false"
      />

    </div>
  );
};
