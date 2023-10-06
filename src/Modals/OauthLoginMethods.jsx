import React from "react";
import "./login.css";
import { Link } from "react-router-dom";

export const OauthLoginMethods = () => {
  return (
    <div className="container-oauth-logins">
      <span>Log in with</span>

      <div className="button-container">
          <div class="icon-thirdparty icon-google"></div>
          <p>Continuar con Google</p>
      </div>

      <div className="button-container">
        <div className="icon-thirdparty icon-github"></div>
        <p>Continuar con Github</p>
      </div>
      <div className="button-container">
        <div className="icon-thirdparty icon-facebook"></div>
        <p>Continuar con Facebook</p>
      </div>

      <Link to={"#"}>Crea una cuenta myPlace</Link>
    </div>
  );
};
