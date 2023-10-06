import React, { useState } from "react";
import { EmailVerification } from "./EmailVerification";
import { PasswordVerification } from "./PasswordVerification";
import { CodeVerification } from "./CodeVerification";
import { OauthLoginMethods } from "./OauthLoginMethods";
import "./login.css";

export const LoginModal = ({ isOpen, closeModal }) => {
  const [next, setNext] = useState(0);
  const [form, setForm] = useState({ email: "", password: "", code: "" });
  const handleModalContainerClick = (e) => e.stopPropagation();

  const handleForm = (eve) => {
    setForm((prev) => {
      return {
        ...prev,
        [eve.target.name]: eve.target.value,
      };
    });
  };

  return (
    <article onClick={closeModal} className={`modal ${isOpen && "is-open"}`}>

      <div className="modal-container" onClick={handleModalContainerClick}>

        {(next === 1 || next === 2) && 
            <button onClick={() => setNext((prev) => prev - 1)}>Volver</button>
          }

        <form>
          {next === 0 && (
            <EmailVerification form={form} handleForm={handleForm} />
          )}

          {next === 1 && (
            <PasswordVerification
              setNext={setNext}
              form={form}
              handleForm={handleForm}
            />
          )}

          {next === 2 && (
            <CodeVerification
              setNext={setNext}
              form={form}
              handleForm={handleForm}
            />
          )}
        </form>
        {next !== 2 && (
          <button onClick={() => setNext((prev) => prev + 1)}>Next</button>
        )}

        {next === 0 && <OauthLoginMethods />}
      </div>
    </article>
  );
};
