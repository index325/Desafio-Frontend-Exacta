import React from "react";
import "../styles/step.css";

export default function Steps() {
  return (
    <>
      <div className="step-container">
        <div className="steps">
          <div className="step done">
            <div className="step-number">
              <span className="number">1</span>
            </div>
            <span className="step-text">Simule</span>
          </div>

          <div className="step active">
            <div className="step-number">
              <span className="number">2</span>
            </div>
            <span className="step-text">Preencha o cadastro</span>
          </div>

          <div className="step pending">
            <div className="step-number">
              <span className="number">3</span>
            </div>
            <span className="step-text">Revise seu pedido</span>
          </div>

          <div className="step pending">
            <div className="step-number">
              <span className="number">4</span>
            </div>
            <span className="step-text">Finalize o pedido</span>
          </div>
        </div>
      </div>
    </>
  );
}
