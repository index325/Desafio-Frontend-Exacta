import React, { useEffect, useState } from "react";
import "../styles/App.css";
import Header from "../components/Header";
import SubHeader from "../components/SubHeader";
import Steps from "../components/Steps";
import Form from "../components/Form";
import axios from "axios";

function Home() {
  const [expedidores, setExpedidores] = useState([]);
  const [rg, setRg] = useState("");
  const [emissao, setEmissao] = useState("");
  const [expedidor, setExpedidor] = useState("");
  const [sexo, setSexo] = useState("-1");

  useEffect(() => {
    axios
      .get(
        "https://5eea85fdb13d0a00164e49ed.mockapi.io/challenge/api/v1/expedidores"
      )
      .then((response) => {
        setExpedidores(response.data);
      });
  }, []);

  return (
    <>
      <Header />
      <div className="sub-header-container">
        <div className="container">
          <SubHeader />
        </div>
      </div>
      <div className="steps-container">
        <div className="container">
          <Steps />
        </div>
      </div>

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
        />
      </div>
    </>
  );
}

export default Home;
