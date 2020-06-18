import React, { useContext } from "react";
import "../styles/button.css";

export default function Button({submitForm, label}) {
  return (
    <div className="button" onClick={submitForm}>
      <span className="button-label">
        {label}
        <span className="button-icon">&gt;</span>
      </span>
    </div>
  );
}
