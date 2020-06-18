import React, { useEffect, useState, useContext } from "react";
import "../styles/App.css";
import Header from "../components/Header";
import Button from "../components/Button";
import Form from "../components/Form";
import axios from "axios";
import UserContext from "../contexts/users";
import { useHistory, useParams } from "react-router-dom";

function Edit() {
  const [expedidores, setExpedidores] = useState([]);
  const [rg, setRg] = useState("");
  const [emissao, setEmissao] = useState("");
  const [expedidor, setExpedidor] = useState("");
  const [sexo, setSexo] = useState("-1");

  const context = useContext(UserContext);
  const history = useHistory();
  const { id } = useParams();
  const submitForm = () => {
    context.updateUser({
      rg,
      emissao,
      expedidor,
      sexo,
    });
    history.push("/list-all");
  };

  const handleRedirectToList = () => {
    history.push("/list-all");
  };

  useEffect(() => {
    axios
      .get(
        "https://5eea85fdb13d0a00164e49ed.mockapi.io/challenge/api/v1/expedidores"
      )
      .then((response) => {
        setExpedidores(response.data);
      });
  }, []);

  useEffect(() => {
    let user = context.users.filter((user) => user.rg === id)[0];
    setRg(user.rg);
    setEmissao(user.emissao);
    setExpedidor(user.expedidor);
    setSexo(user.sexo);
  }, [context.users, id]);

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
        <div className="go-to-list" onClick={handleRedirectToList}>
          <Button label="Ir para a listagem" />
        </div>
      </div>
    </>
  );
}

export default Edit;
