import React from "react";
import "../styles/selectField.css";

export default function SelectField(props) {
  const handleChange = (e) => {
    props.setter(e.target.value);
  };
  return (
    <div className="selectfield-container">
      <span className="label">{props.label}</span>
      <select
        name="expedidores"
        id=""
        className="select"
        onChange={handleChange}
      >
        {props.expedidores.map((expedidor) => (
          <option value={expedidor.value} key={expedidor.value}>
            {expedidor.label}
          </option>
        ))}
      </select>
    </div>
  );
}
