import { OauthLoginMethods } from "./OauthLoginMethods";
import "./login.css";

export const RegisterModal = ({ isOpen, closeModal }) => {
  return (
    <article onClick={closeModal} className={`modal ${isOpen && "is-open"}`}>
      <div className="modal-container-r" onClick={(e) => e.stopPropagation()}>
        <div>
          <h1>Register</h1>
          <form className="register-form">
            <input placeholder="First name" type="text" className="register" />
            <input placeholder="Last name" type="text" className="register" />
            <input placeholder="Email" type="email" className="register" />
            <input
              placeholder="Password"
              type="password"
              className="register"
            />
          </form>
          <button className="register-b">Register</button>
            <p className="signup-warning">
              Your personal data will be used to support your experience and manage access to the account view our <a href="#">privacy policy</a> here
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
