import React from "react";
import "../styles/button.css";

export default function Button() {
  return (
    <div className="button">
      <span className="button-label">
        Continuar
        <span className="button-icon">&gt;</span>
      </span>
    </div>
  );
}
