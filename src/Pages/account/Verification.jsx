import React, { useContext, useState } from "react";

export const Verification = () => {
  const [selected, setSelected] = useState("");

  const handleRadioButtons = (e) => {
    setSelected(e.target.value);
  };

  return (
    <div>
      <h2>Añade tu documento de identificación oficial</h2>
      <p>
        Tendrás que añadir un documento de identificación oficial Este paso nos
        sirve para comprobar que eres quien dices ser.
      </p>
      <form>
        <div>
          <div>
            <h3>Sube una foto que ya tengas</h3>
            <span>Recomendado</span>
          </div>
          <div>
            <input
              type="radio"
              name="uploadMethod1"
              value={"upload"}
              checked={selected == "upload"}
              onChange={(e) => handleRadioButtons(e)}
            />
          </div>
        </div>
        <div>
          <h3>Haz una foto con tu webcam</h3>
          <input
            type="radio"
            name="uploadMethod"
            checked={selected == "take"}
            value={"take"}
            onChange={(e) => handleRadioButtons(e)}
          />
        </div>
      </form>

      <div>
        <button>Continuar</button>
      </div>
    </div>
  );
};
