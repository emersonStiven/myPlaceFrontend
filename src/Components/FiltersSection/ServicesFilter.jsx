import React, { useState } from "react";
import "./lefthandfilters.css";
import { HideShowButton } from "./HideShowButton";

const services = [
  {
    section: "Comodidades",
    items: [
      "Wifi",
      "Lavadora",
      "Aire Acondicionado",
      "Zona de trabajo",
      "Secadora de pelo",
      "Plancha",
      "Televisor",
      "Cocina",
    ],
  },
  {
    section: "Instalaciones",
    items: [
      "Piscina",
      "Jacuzzi",
      "Cuna",
      "Parqueadero",
      "Gymnasio",
      "Parrilla",
    ],
  },
];

export const ServicesFilter = ({ visible, setVisible }) => {
  //fetch data

  let numberSections = services.length;

  const sections = services.map((elem) => <ServiceSection data={elem} />);

  return (
    <div className="container-filter">
      <div className="filter-category">
        <h3>Servicios</h3>
        <HideShowButton
          isVisible={visible}
          setVisible={setVisible}
          label={"servicesFilter"}
        />
      </div>
      {visible.servicesFilter && sections}
    </div>
  );
};




const ServiceSection = ({ data }) => {
  const [sectionVisible, setSectionVisible] = useState({
    Comodidades: true,
    Instalaciones: false,
  });

  const handleSectionVisible = (e) => {
    let source = e.target.name;
    let temp = sectionVisible[source];
    setSectionVisible((prev) => {
      return { ...prev, [source]: !temp };
    });
  };

  const checkboxes = data.items.map((elem, index) => {
    return <CheckBox key={index} label={elem} />;
  });

  return (
    <div className="container-service-section">
      <div >
        <button name={data.section} onClick={(e) => handleSectionVisible(e)}>
          {data.section}
        </button>
      </div>
      {sectionVisible[data.section] && (
        <div className="services-section-filter">{checkboxes}</div>
      )}
    </div>
  );
};





const CheckBox = ({ label, styleType, checked = false }) => {
  const [isCheck, setIsCheck] = useState(checked);
  let style = "";

  if (styleType != null) {
    if (isCheck) {
      style = styleType.checked;
    } else {
      style = styleType.nonChecked;
    }
  } else {
    if (isCheck) {
      style = "default-checked";
    } else {
      style = "default-nonChecked";
    }
  }

  const handleCheckClick = (e) => {
    setIsCheck((prev) => !prev);
  };

  return (
    <div className={isCheck ? "container-checkbox" : "container-checkbox blurry"}>
      <input
        name={label}
        type="checkbox"
        onChange={(e) => handleCheckClick(e)}
        className={style}
        checked={checked}
      />
      <div>{label}</div>
      <div>{100}</div>
      
    </div>
  );
};
