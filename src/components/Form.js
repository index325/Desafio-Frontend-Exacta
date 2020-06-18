import React from "react";
import "../styles/form.css";
import TextField from "./Textfield";
import RadioButton from "./RadioButton";
import Button from "./Button";
import SelectField from './SelectField'
import DateField from './DateField'

export default function Form(props) {
  return (
    <>
      <div className="form-content">
        <h1 className="form-title">Dados pessoais</h1>
        <div className="form-horizontal-group">
          <TextField label="Número do RG" setter={props.setRg} />
          <DateField label="Data de emissão" setter={props.setEmissao} />
          <SelectField label="Orgão expedidor" expedidores={props.expedidores} setter={props.setExpedidor}/>
        </div>
        <span className="label">Sexo</span>
        <div className="form-horizontal-group radio-buttons">
          <RadioButton label="Masculino" setter={props.setSexo} />
          <RadioButton label="Feminino" setter={props.setSexo}/>
        </div>
        <div className="form-horizontal-group">
          <Button />
        </div>
      </div>
    </>
  );
}
