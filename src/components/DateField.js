import React, { useContext } from "react";
import InputMask from "react-input-mask";
import moment from "moment";
import { dateRegex } from "../utils/regex";
import UserContext from "../contexts/users";

export default function DateField(props) {
  const context = useContext(UserContext);
  const handleChange = (e) => {
    props.setter(e.target.value);
    if(!e.target.value.match(dateRegex)){
      context.setEmissaoError(true);
    }
    if (
      moment(e.target.value, "DD/MM/YYYY", true).isValid() &&
      e.target.value.match(dateRegex)
    ) {
      document
        .getElementById("date-field-container")
        .classList.remove("invalid");
      context.setEmissaoError(false);
    } else if (
      !moment(e.target.value, "DD/MM/YYYY", true).isValid() &&
      e.target.value.match(dateRegex)
    ) {
      document.getElementById("date-field-container").classList.add("invalid");
      context.setEmissaoError(true);
    }
  };

  return (
    <div className="textfield-container" id="date-field-container">
      <span className="label">{props.label}</span>
      <InputMask
        mask="99/99/9999"
        onChange={handleChange}
        value={props.value}
        className="textfield"
        data-testid="emissao-field"
      />
    </div>
  );
}
