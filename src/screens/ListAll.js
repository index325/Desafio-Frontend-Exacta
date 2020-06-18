import React, { useEffect, useState, useContext } from "react";
import "../styles/App.css";
import Header from "../components/Header";
import UserContext from "../contexts/users";
import DataTable from "react-data-table-component";
import ArrowDownward from "@material-ui/icons/ArrowDownward";

function ListAll() {
  const [users, setUsers] = useState([]);
  const context = useContext(UserContext);

  const sortIcon = <ArrowDownward />;

  const columns = [
    { name: "RG", selector: "rg"},
    { name: "Expedidor", selector: "expedidor" },
    { name: "Sexo", selector: "sexo", sortable: true},
    { name: "Emissor", selector: "emissor"},
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
      </div>
    </>
  );
}

export default ListAll;
