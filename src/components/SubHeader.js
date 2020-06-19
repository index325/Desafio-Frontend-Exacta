import React from "react";

export default function Header() {
  return (
    <>
      <header className="sub-header">
        <div className="sub-header-items">
          <div className="sub-header-item">
            <span className="blue-text">Me chamo:</span>
            <h1 className="principal">Paul Irish</h1>
            <div className="cpf">
              <span className="blue-text">CPF:</span>
              <span className="white-text">762.888.176-92</span>
            </div>
          </div>
          <div className="sub-header-item">
            <span className="blue-text">Preciso de:</span>
            <h1 className="principal">R$ 2.000</h1>
          </div>
          <div className="sub-header-item">
            <span className="blue-text">Quero pagar em:</span>
            <h1 className="principal">12 vezes</h1>
          </div>
          <div className="sub-header-item">
            <span className="blue-text">Para:</span>
            <h1 className="principal">Comprar uma bike</h1>
          </div>
        </div>
      </header>
    </>
  );
}
