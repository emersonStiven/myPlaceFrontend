import react from "react";
import { useModal } from "../../Modals/useModal";
import { LoginModal } from "../../Modals/LoginModal";

export const NotLoggedInOptions = ({ setShowLogin }) => {
  const [isOpen, openModal, closeModal] = useModal(false);

  // el error esta en que al cerrar el drowndown, ya no se retorna lo que hay en LoginModal
  return (
    <div className="login-dropdown">
      <div>
        <span onClick={()=>{
          // setShowLogin(prev => !prev);
          openModal();
        }}>Inicia Sesión</span>
      </div>
      <LoginModal isOpen={isOpen} closeModal={closeModal} />
      <div>
        <span>Registrate</span>
      </div>
      <hr />
      <div>
        <span>Pon tu espacio en myPlace</span>
      </div>
      <div>
        <span>Centro de ayudas</span>
      </div>
    </div>
  );
};
