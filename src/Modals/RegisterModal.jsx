import React, { useState } from "react";
import "./login.css";
import { validateForm } from "../Utils/helperFunctions";
import { useForm } from "../Utils/useForm";

let initialForm = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
}

export const RegisterModal = ({ isOpen, closeModal }) => {
  const [
    handleChange,
    handleOnBlur,
    handleSubmit,
    loading,
    error,
    response,
    form,
  ] = useForm(
    initialForm,
    validateForm
  );

  return (
    <article onClick={closeModal} className={`modal ${isOpen && "is-open"}`}>
      <div className="modal-container-r" onClick={(e) => e.stopPropagation()}>
        <div>
          <h1>Register</h1>
          <form className="register-form" onSubmit={(e) => handleSubmit(e)}>
            <input
              placeholder="First name"
              name="firstName"
              type="text"
              className="register"
              onBlur={handleOnBlur}
              value={form.firstName}
              onChange={(e) => handleChange(e)}
            />
            <input
              placeholder="Last name"
              name="lastName"
              type="text"
              className="register"
              onBlur={handleOnBlur}
              value={form.lastName}
              onChange={(e) => handleChange(e)}
            />
            <input
              placeholder="Email"
              type="email"
              name="email"
              className="register"
              value={form.email}
              onBlur={handleOnBlur}
              onChange={(e) => handleChange(e)}
            />
            <input
              placeholder="Password"
              type="password"
              name="password"
              className="register"
              value={form.password}
              onChange={(e) => handleChange(e)}
            />
            <input className="register-b" type="submit" value={"Register"} />
          </form>

          <p className="signup-warning">
            Your personal data will be used to support your experience and
            manage access to the account view our <a href="#">privacy policy</a>{" "}
            here
          </p>
        </div>
        <div className="signup-options">
          <button>
            <img src="src\assets\google.svg" alt="google-icon" />
          </button>
          <button>
            <img src="src\assets\github.svg" alt="github-icon" />
          </button>
          <button>
            <img src="src\assets\facebook.svg" alt="facebook-icon" />
          </button>
        </div>
      </div>
    </article>
  );
};
