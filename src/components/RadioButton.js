import React, { useContext } from "react";
import UserContext from "../contexts/users";

export default function RadioButton(props) {
  const context = useContext(UserContext);
  const handleClick = (e) => {
    //se quem eu tiver clicado, for um ID existente, então:
    if (document.getElementById(String(e.target.id))) {
      //se quem eu estiver clicando, já foi clicado anteriormente, tire a classe de "escolhido"
      if (document.getElementById(e.target.id).classList.contains("choosed")) {
        document
          .getElementsByClassName("choosed")[0]
          .classList.remove("choosed");
        props.setter("0");
        context.setSexoError(true)
      }
      //se não existir ninguém que já foi clicado, então:
      else if (!document.getElementsByClassName("choosed")[0]) {
        document.getElementById(e.target.id).classList.add("choosed");
        props.setter(e.target.id);
        context.setSexoError(false)
      }
      //se existir alguém que já foi clicado, porém, não é quem eu estou clicando, retire o status escolhido desse, e coloque em quem eu estou clicando
      else {
        document
          .getElementsByClassName("choosed")[0]
          .classList.remove("choosed");

        document.getElementById(e.target.id).classList.add("choosed");
        props.setter(e.target.id);
        context.setSexoError(false)
      }
    }
  };

  return (
    <div
      className={`radio-button-container radio-button-label ${props.value === props.label ? "choosed" : ""}`}
      id={props.label}
      onClick={handleClick}
    >
      {props.label}
    </div>
  );
}
