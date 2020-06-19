import React, { useEffect, useState, useContext } from "react";
import "../styles/App.css";
import Header from "../components/Header";
import Button from "../components/Button";
import Form from "../components/Form";
import axios from "axios";
import UserContext from "../contexts/users";
import { useHistory } from "react-router-dom";
import { uuid } from "uuidv4";

function Home() {
  const [expedidores, setExpedidores] = useState([
    {
      label: "Selecione",
      value: "",
    },
  ]);
  const [rg, setRg] = useState("");
  const [emissao, setEmissao] = useState("");
  const [expedidor, setExpedidor] = useState("");
  const [sexo, setSexo] = useState("-1");

  const context = useContext(UserContext);
  const history = useHistory();
  const submitForm = () => {
    context.addUser({
      rg: rg,
      emissao: emissao,
      expedidor: expedidor,
      sexo: sexo,
      id: uuid(),
    });
    if (history) history.push("/list-all");
  };

  const handleRedirectToList = () => {
    if (history) history.push("/list-all");
  };

  useEffect(() => {
    axios
      .get(
        "https://5eea85fdb13d0a00164e49ed.mockapi.io/challenge/api/v1/expedidores"
      )
      .then((response) => {
        setExpedidores(response.data);
      });
    context.setExpedidorError(true);
    context.setRgError(true);
    context.setEmissaoError(true);
    context.setSexoError(true);
  }, []);

  return (
    <>
      <Header />

      <div className="container">
        <Form
          expedidores={expedidores}
          setRg={setRg}
          setExpedidor={setExpedidor}
          setEmissao={setEmissao}
          setSexo={setSexo}
          rg={rg}
          expedidor={expedidor}
          emissao={emissao}
          sexo={sexo}
          submitForm={submitForm}
        />
        <div className="go-to-list">
          <Button
            label="Ir para a listagem"
            handleRedirectToList={handleRedirectToList}
            testRoute="home"
          />
        </div>
      </div>
    </>
  );
}

export default Home;
