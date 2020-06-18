import React from "react";
import InputMask from "react-input-mask";
import "../styles/textfield.css";

export default function TextField(props) {
  const handleChange = (e) => {
    props.setter(e.target.value);
  };

  return (
    <div className="textfield-container">
      <span className="label">{props.label}</span>
      <InputMask mask="99/99/9999" onChange={handleChange} className="textfield" />
    </div>
  );
}
