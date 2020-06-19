import React, { useContext } from "react";
import "../styles/selectField.css";
import UserContext from "../contexts/users";

export default function SelectField(props) {
  const context = useContext(UserContext);
  const handleChange = (e) => {
    if (e.target.value !== ""){
      props.setter(e.target.value);
      context.setExpedidorError(false)
    } else {
      context.setExpedidorError(true)
    }
      
  };
  return (
    <div className="selectfield-container">
      <span className="label">{props.label}</span>
      <select
        name=""
        id=""
        className="select"
        onChange={handleChange}
        value={props.value}
      >
        {props.expedidores.map((expedidor) => (
          <option value={expedidor.value} key={expedidor.value} disabled={expedidor.value === ""}>
            {expedidor.label}
          </option>
        ))}
      </select>
    </div>
  );
}
