import React, { useContext } from "react";
import "../styles/textfield.css";
import InputMask from "react-input-mask";
import { rg } from "cpf-rg-validator";
import { rgRegex } from "../utils/regex";
import UserContext from "../contexts/users";

export default function TextField(props) {
  const context = useContext(UserContext);
  const validation = (value) => {
    if(!value.match(rgRegex)){
      context.setRgError(true);
    }
    if (rg(value) && value.match(rgRegex)) {
      document.getElementById("rg-field-container").classList.remove("invalid");
      context.setRgError(false);
    } else if (!rg(value) && value.match(rgRegex)) {
      document.getElementById("rg-field-container").classList.add("invalid");
      context.setRgError(true);
    }
  };

  const handleChange = (e) => {
    props.setter(e.target.value);
    validation(e.target.value);
  };

  return (
    <div className="textfield-container" id="rg-field-container">
      <span className="label">{props.label}</span>
      <InputMask
        mask="99.999.999-9"
        onChange={handleChange}
        value={props.value}
        className="textfield"
      />
    </div>
  );
}
