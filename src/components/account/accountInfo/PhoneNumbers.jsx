import React, { useContext, useState } from "react";
import "./accountinfo.css";
import { LevelContext } from "../../../hooks/LevelContext";

export const PhoneNumbers = () => {
  const user = useContext(LevelContext);
  const len = user.numbers.length - 1;

  const [show, setShow] = useState(false);
  const [counterUpdateFields, setCounterUpdateFields] = useState(len);
  const [phoneNumbers, setPhoneNumbers] = useState(() => {
    const arrayToObjMapper = {};
    for (let x = 0; x < len + 1; x++) {
      arrayToObjMapper["phone_number" + x] = user.numbers[x];
    }
    return arrayToObjMapper;
  });

  const handlePhoneNumbers = (e) => {
    setPhoneNumbers({
      ...phoneNumbers,
      [e.target.name]: e.target.value,
    });
  };
  const validatePhoneNumber = (value = "") => {
    let reg = new RegExp(/^\d{10}$/);
    let numbersList = Object.values(phoneNumbers);
    if (value !== "") {
      let value = numbersList.at(numbersList.length - 1);
      return reg.test(value);
    } else {
      let flag = true;
      for (let x of numbersList) {
        if (!reg.test(x)) {
          flag = false;
        }
      }
      return flag;
    }
  };

  const handleNumbersCounter = () => {
    if (validatePhoneNumber("last")) {
      setPhoneNumbers({
        ...phoneNumbers,
        [`phone_number${counterUpdateFields + 1}`]: "",
      });
      setCounterUpdateFields((e) => e + 1);
    } else {
      console.log("Error, invalid phone number format");
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <div className="edit-container">
        <div className="description-container">
          <h3>Numeros de teléfono</h3>
          <ul>
            {len + 1 > 0 ? (
              user.numbers.map((num) => <li>{num}</li>)
            ) : (
              <li>No Proporcionado</li>
            )}
          </ul>
        </div>
        <div className="edit-button">
          <button onClick={() => setShow((e) => !e)}>
            {len + 1 == 0 ? "Agregar" : "Editar"}
          </button>
        </div>
      </div>

      {show && (
        <div>
          <form onSubmit={(e) => handleSubmit(e)}>
            {Object.keys(phoneNumbers).map((e) => {
              return (
                <div>
                  <input
                    type="tel"
                    name={e}
                    value={phoneNumbers[e]}
                    onChange={(e) => handlePhoneNumbers(e)}
                  />
                </div>
              );
            })}
            {
              // Object.values(phoneNumbers).at(user.numbers.length-1)
              validatePhoneNumber() ? (
                <button onClick={() => handleNumbersCounter()}>Agregar</button>
              ) : (
                <button onClick={() => null}>Guardar</button>
              )
            }
          </form>
        </div>
      )}
    </div>
  );
};
