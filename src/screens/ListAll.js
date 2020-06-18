import React, { useEffect, useState, useContext } from "react";
import "../styles/App.css";
import Header from "../components/Header";
import UserContext from "../contexts/users";
import DataTable from "react-data-table-component";
import ArrowDownward from "@material-ui/icons/ArrowDownward";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";

function ListAll() {
  const [users, setUsers] = useState([]);
  const context = useContext(UserContext);
  const history = useHistory();

  const sortIcon = <ArrowDownward />;

  const handleExclusion = (rg) => {
    context.deleteUser(rg);
  };

  const handleRedirectToEdition = (rg) => {
    history.push(`/edit/${rg}`);
  };

  const columns = [
    { name: "RG", selector: "rg" },
    { name: "Expedidor", selector: "expedidor" },
    { name: "Sexo", selector: "sexo", sortable: true },
    { name: "Emissão", selector: "emissao" },
    {
      name: "Ações",
      cell: (row) => (
        <>
          <Button
            variant="contained"
            color="primary"
            onClick={() => handleRedirectToEdition(row.rg)}
            className="action-button"
          >
            Editar
          </Button>

          <Button
            variant="contained"
            color="secondary"
            onClick={() => handleExclusion(row.rg)}
            className="action-button"
          >
            Excluir
          </Button>
        </>
      ),
    },
  ];

  useEffect(() => {
    setUsers(context.users);
  }, [context.users]);

  return (
    <>
      <Header />

      <div className="container">
        <DataTable
          title="Usuários cadastrados"
          columns={columns}
          data={users}
          sortIcon={sortIcon}
        />
        <Button
          style={{ marginTop: 30 }}
          variant="contained"
          color="primary"
          onClick={() => history.push("/")}
        >
          Adicionar um novo usuário
        </Button>
      </div>
    </>
  );
}

export default ListAll;
