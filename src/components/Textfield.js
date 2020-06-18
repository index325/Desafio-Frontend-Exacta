import React from "react";
import "../styles/textfield.css";

export default function TextField(props) {

  console.log(props)
  const handleChange = (e) => {
    props.setter(e.target.value);
  };

  return (
    <div className="textfield-container">
      <span className="label">{props.label}</span>
      <input type="text" className="textfield" onChange={handleChange} value={props.value} />
    </div>
  );
}
