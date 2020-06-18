import React, { useContext } from "react";
import "../styles/form.css";
import TextField from "./Textfield";
import RadioButton from "./RadioButton";
import Button from "./Button";
import SelectField from "./SelectField";
import DateField from "./DateField";
import UserContext from "../contexts/users";

export default function Form(props) {
  const context = useContext(UserContext);
  console.log(props)
  return (
    <>
      <div className="form-content">
        <h1 className="form-title">Dados pessoais</h1>
        <div className="form-horizontal-group">
          <TextField label="Número do RG" setter={props.setRg} value={props.rg} />
          <DateField
            label="Data de emissão"
            setter={props.setEmissao}
            value={props.emissao}
          />
          <SelectField
            label="Orgão expedidor"
            expedidores={props.expedidores}
            setter={props.setExpedidor}
            value={props.expedidor}
          />
        </div>
        <div className="form-horizontal-group radio-buttons">
          <span className="label">Sexo</span>
          <RadioButton
            label="Masculino"
            setter={props.setSexo}
            value={props.sexo}
          />
          <RadioButton
            label="Feminino"
            setter={props.setSexo}
            value={props.sexo}
          />
        </div>
        <div className="form-horizontal-group">
          <Button label="Continuar" submitForm={props.submitForm} />
        </div>
      </div>
    </>
  );
}
